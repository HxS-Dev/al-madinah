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

