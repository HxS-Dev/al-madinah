import type {StructureResolver} from 'sanity/structure'

const singletons = ['hifz', 'adultStudies', 'madrasahYearlyPlanner', 'hifzYearlyPlanner']
const hiddenTypes = ['category', 'author', 'blockContent', 'yearlyPlanner', 'islamicLiteratureCategory', ...singletons]

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // --- About ---
      S.listItem()
        .title('About')
        .id('about')
        .child(
          S.list()
            .title('About')
            .items([]),
        ),

      // --- Appeal ---
      S.listItem()
        .title('Appeal')
        .id('appeal')
        .child(
          S.list()
            .title('Appeal')
            .items([
              S.documentTypeListItem('donation').title('Donations'),
            ]),
        ),

      // --- Events ---
      S.listItem()
        .title('Events')
        .id('events-folder')
        .child(
          S.list()
            .title('Events')
            .items([
              S.documentTypeListItem('events').title('Events'),
            ]),
        ),

      // --- Services (matches website Services dropdown) ---
      S.listItem()
        .title('Services')
        .child(
          S.list()
            .title('Services')
            .items([
              // Madrasah Al-Madinah
              S.listItem()
                .title('Madrasah')
                .child(
                  S.list()
                    .title('Madrasah')
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
              // Hajj & Umrah
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
              // Adult Islamic Studies
              S.listItem()
                .title('Adult Islamic Studies')
                .id('adultStudies')
                .child(
                  S.document()
                    .schemaType('adultStudies')
                    .documentId('adultStudies')
                    .title('Adult Islamic Studies'),
                ),
              // Hifz
              S.listItem()
                .title('Hifz')
                .id('hifz')
                .child(
                  S.document()
                    .schemaType('hifz')
                    .documentId('hifz')
                    .title('Hifz'),
                ),
              // Islamic Literature
              S.listItem()
                .title('Islamic Literature')
                .child(
                  S.list()
                    .title('Islamic Literature')
                    .items([
                      S.documentTypeListItem('islamicLiterature').title('Publications'),
                      S.documentTypeListItem('islamicLiteratureCategory').title('Categories'),
                    ]),
                ),
              // Articles
              S.documentTypeListItem('article').title('Articles'),
            ]),
        ),

      // --- Schedule ---
      S.listItem()
        .title('Schedule')
        .id('schedule-folder')
        .child(
          S.list()
            .title('Schedule')
            .items([
              S.documentTypeListItem('programme').title('Programmes'),
              S.documentTypeListItem('salatTimetable').title('Salat Timetable'),
              S.documentTypeListItem('post').title('Programme Schedule (Legacy)'),
            ]),
        ),

      // --- Contact ---
      S.listItem()
        .title('Contact')
        .id('contact')
        .child(
          S.list()
            .title('Contact')
            .items([]),
        ),
    ])
