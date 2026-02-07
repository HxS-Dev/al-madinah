import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('author').title('Authors'),
      S.divider(),
      // Hifz singleton - only one document
      S.listItem()
        .title('Hifz')
        .id('hifz')
        .child(
          S.document()
            .schemaType('hifz')
            .documentId('hifz')
            .title('Hifz'),
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['post', 'category', 'author', 'hifz'].includes(item.getId()!),
      ),
    ])
