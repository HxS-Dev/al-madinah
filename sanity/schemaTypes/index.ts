import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {scheduleType} from './scheduleType'
import {articlesType} from './articlesType'
import {eventsType} from './eventsType'
import {donationType} from './donationType'
import {salatTimetable} from './salatTimetable'
import {authorType} from './authorType'
import {programmeType} from './programmeType'
import {hifzType} from './hifzType'
import {adultStudiesType} from './adultStudiesType'
import {hajjPublicationType} from './hajjPublicationType'
import {hajjAudioType} from './hajjAudioType'
import {yearlyPlannerType} from './yearlyPlannerType'
import {islamicLiteratureType} from './islamicLiteratureType'
import {islamicLiteratureCategoryType} from './islamicLiteratureCategoryType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, scheduleType, eventsType, articlesType, donationType, authorType, salatTimetable, programmeType, hifzType, adultStudiesType, hajjPublicationType, hajjAudioType, yearlyPlannerType, islamicLiteratureType, islamicLiteratureCategoryType],
}
