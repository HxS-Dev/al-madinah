import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {scheduleType} from './scheduleType'
import {articlesType} from './articlesType'
import {articleAuthorType} from './articleAuthorType'
import {articleCategoryType} from './articleCategoryType'
import {eventsType} from './eventsType'
import {donationType} from './donationType'
import {salatTimetable} from './salatTimetable'
import {authorType} from './authorType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, scheduleType, eventsType,articlesType,articleAuthorType,articleCategoryType, donationType ,authorType, salatTimetable],
}
