import type {StructureResolver} from 'sanity/structure'

const singletons = ['hifz', 'adultStudies', 'madrasahYearlyPlanner', 'hifzYearlyPlanner']
const hiddenTypes = ['category', 'author', 'blockContent', ...singletons]

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // --- Services ---
      S.listItem()
        .title('Services')
        .child(
          S.list()
            .title('Services')
            .items([
              S.listItem()
                .title('Hifz')
                .id('hifz')
                .child(
                  S.document()
                    .schemaType('hifz')
                    .documentId('hifz')
                    .title('Hifz'),
                ),
              S.listItem()
                .title('Adult Islamic Studies')
                .id('adultStudies')
                .child(
                  S.document()
                    .schemaType('adultStudies')
                    .documentId('adultStudies')
                    .title('Adult Islamic Studies'),
                ),
            ]),
        ),

      // --- Yearly Planners ---
      S.listItem()
        .title('Yearly Planners')
        .child(
          S.list()
            .title('Yearly Planners')
            .items([
              S.listItem()
                .title('Madrasah Yearly Planner')
                .id('madrasahYearlyPlanner')
                .child(
                  S.document()
                    .schemaType('yearlyPlanner')
                    .documentId('madrasahYearlyPlanner')
                    .title('Madrasah Yearly Planner'),
                ),
              S.listItem()
                .title('Hifz Yearly Planner')
                .id('hifzYearlyPlanner')
                .child(
                  S.document()
                    .schemaType('yearlyPlanner')
                    .documentId('hifzYearlyPlanner')
                    .title('Hifz Yearly Planner'),
                ),
            ]),
        ),

      S.divider(),

      // --- Programmes & Events ---
      S.listItem()
        .title('Programmes & Events')
        .child(
          S.list()
            .title('Programmes & Events')
            .items([
              S.documentTypeListItem('programme').title('Programmes'),
              S.documentTypeListItem('events').title('Events'),
              S.documentTypeListItem('post').title('Programme Schedule (Legacy)'),
            ]),
        ),

      // --- Articles ---
      S.listItem()
        .title('Articles')
        .child(
          S.list()
            .title('Articles')
            .items([
              S.documentTypeListItem('article').title('Articles'),
              S.documentTypeListItem('articleAuthor').title('Authors'),
              S.documentTypeListItem('articleCategory').title('Categories'),
            ]),
        ),

      S.divider(),

      // --- Hajj & Umrah ---
      S.listItem()
        .title('Hajj & Umrah')
        .child(
          S.list()
            .title('Hajj & Umrah')
            .items([
              S.documentTypeListItem('hajjPublication').title('Publications'),
              S.documentTypeListItem('hajjAudio').title('Audio Resources'),
            ]),
        ),

      S.divider(),

      // --- Masjid ---
      S.documentTypeListItem('salatTimetable').title('Salat Timetable'),
      S.documentTypeListItem('donation').title('Donations'),

      S.divider(),

      // --- Settings ---
      S.listItem()
        .title('Settings')
        .child(
          S.list()
            .title('Settings')
            .items([
              S.documentTypeListItem('author').title('Authors'),
              S.documentTypeListItem('category').title('Categories'),
            ]),
        ),
    ])
