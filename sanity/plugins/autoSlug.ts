import {definePlugin} from 'sanity'

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export const autoSlugPlugin = definePlugin({
  name: 'auto-slug',
  document: {
    newDocumentOptions: (prev) => prev,
    actions: (prev, context) => {
      if (context.schemaType !== 'article') return prev

      return prev.map((action) => {
        if (action.action !== 'publish') return action

        return (props) => {
          const originalResult = action(props)
          if (!originalResult) return originalResult

          const originalOnHandle = originalResult.onHandle

          return {
            ...originalResult,
            onHandle: () => {
              const doc = props.draft || props.published
              if (doc?.title && (!doc?.slug || !doc?.slug?.current)) {
                props.patch.execute([
                  {
                    set: {
                      slug: {
                        _type: 'slug',
                        current: slugify(doc.title as string),
                      },
                    },
                  },
                ])
              }
              if (originalOnHandle) {
                originalOnHandle()
              }
            },
          }
        }
      })
    },
  },
})
