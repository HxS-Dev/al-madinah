export const salatTimetableQuery =`*[_type == "salatTimetable"] | order(publishedAt desc){
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  body
}`;

export const donationQuery = `*[_type == "donation"]{
  _id,
  title,
  slug,
  description,
  amountCollected,
  targetAmount,
  numberOfDonors,
  startDate,
  endDate,
  mainImage{
    asset->{
      _id,
      url
    },
    alt
  },
  isActive
}`;

export const allArticleQuery = `*[_type == "article"] | order(publishedAt desc){
  _id,
  title,
  slug,
  description,
  isFeatured,
  author->{
    name
  },
  mainImage{
    asset->{
      _id,
      url
    },
    alt
  },
  categories[]->{
    title
  },
  publishedAt,
  body
}`;

export const allArticleSlugsQuery = `*[_type == "article" && defined(slug.current)]{
  "slug": slug.current
}`;


export const allScheduleQuery = `*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  slug,
  isNewSchedule,
  programmeDate,
  programmeStartTime,
  programmeEndTime,
  author->{
    name
  },
  mainImage{
    asset->{
      _id,
      url
    },
    alt
  },
  categories[]->{
    title
  },
  publishedAt,
  body
}`;

export const allEventsQuery = `*[_type == "events"] | order(publishedAt desc){
  _id,
  title,
  slug,
  isNew,
  isFeatured,
  author->{
    name
  },
  mainImage{
    asset->{
      _id,
      url
    },
    alt
  },
  categories[]->{
    title
  },
  publishedAt,
  body
}`;

export const allProgrammeQuery = `*[_type == "programme"] | order(publishedAt desc){
  _id,
  title,
  isNew,
  programmeDate,
  programmeStartTime,
  programmeEndTime,
  mainImage{
    asset->{
      _id,
      url
    },
    alt
  },
  publishedAt,
  body
}`;

export const hajjPublicationsQuery = `*[_type == "hajjPublication"] | order(order asc){
  _id,
  title,
  coverImage{
    asset->{
      _id,
      url
    },
    alt
  },
  link,
  note,
  order
}`;

export const hajjAudioQuery = `*[_type == "hajjAudio"] | order(order asc){
  _id,
  title,
  link,
  order
}`;

export const adultStudiesQuery = `*[_type == "adultStudies" && _id == "adultStudies"][0]{
  poster{
    asset->{
      _id,
      url
    },
    alt
  }
}`;

export const hifzQuery = `*[_type == "hifz" && _id == "hifz"][0]{
  plannerTitle,
  plannerDescription,
  "plannerFileUrl": plannerFile.asset->url,
  applicationFormTitle,
  applicationFormDescription,
  "applicationFormFileUrl": applicationFormFile.asset->url
}`;

export const madrasahYearlyPlannerQuery = `*[_type == "yearlyPlanner" && _id == "madrasahYearlyPlanner"][0]{
  title,
  url
}`;

export const hifzYearlyPlannerQuery = `*[_type == "yearlyPlanner" && _id == "hifzYearlyPlanner"][0]{
  title,
  url
}`;

export const singleArticleQuery = `*[_type == "article" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  description,
  isFeatured,
  author->{
    name
  },
  mainImage{
    asset->{
      _id,
      url
    },
    alt
  },
  categories[]->{
    title
  },
  publishedAt,
  body
}`;

