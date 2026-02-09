import {definePlugin, useDocumentOperation} from 'sanity'

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

        const wrappedAction: typeof action = (props) => {
          const {patch} = useDocumentOperation(props.id, props.type)
          const originalResult = action(props)
          if (!originalResult) return originalResult

          const originalOnHandle = originalResult.onHandle

          return {
            ...originalResult,
            onHandle: () => {
              const doc = props.draft || props.published
              const slug = doc?.slug as {current?: string} | undefined
              if (doc?.title && (!slug || !slug?.current)) {
                patch.execute([
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
        wrappedAction.action = action.action
        return wrappedAction
      })
    },
  },
})
