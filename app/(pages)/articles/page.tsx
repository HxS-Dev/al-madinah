import { allArticleQuery } from '@/app/lib/queries'
import { sanityClient } from '@/app/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { urlFor } from '@/app/lib/imageBuilder'
import type { Metadata } from "next";
import SubscribeSection from '@/app/components/SubscribeSection'
import AosClient from '@/app/components/AosClient'


export const metadata: Metadata = {
  title: " Articles | Al-Madinah Institute",
  description: "Al-Madinah Institute is a UK registered charity based in Crawley, West Sussex. Discover our services, events, and resources for the community.",
};


const Articles =  async () => {

  const allArticles = await sanityClient.fetch(allArticleQuery)


  return (
    <main className='overflow-hidden'>
      <AosClient/>
      <section className='w-full lg:py-32 py-20 bg-[url(/images/drone-pic-alihsaan.jpg)] bg-fixed bg-cover bg-center bg-no-repeat relative after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-black/50'>
        <div className="w-full max-w-[1440px] px-5 mx-auto relative z-10">
          <div className="w-full">
            <h1 className='lg:text-[50px] text-4xl text-center font-bold font-poppins text-white'>All Articles</h1>
          </div> 
        </div>
      </section>
      <section className='w-full lg:py-24 py-14'>
        <div className="w-full max-w-[1440px] px-5 mx-auto">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {allArticles.map((article: any, idx: number) => (
              <Link
                data-aos="fade-up"
                data-aos-delay={100 + idx * 100}
                data-aos-offset="100"
                data-aos-duration="1000"
                key={article._id}
                href={`/articles/${article.slug?.current || article.slug}`}
                className="relative overflow-hidden group transition-all duration-500"
              >
                <div className="w-full h-[180px] overflow-hidden relative transition-all duration-500 after:bg-transparent group-hover:after:bg-black/10 after:absolute after:left-0 after:top-0 after:w-full after:h-full">
                  {article.mainImage ? (
                    <Image
                      src={urlFor(article.mainImage).width(300).height(180).url()}
                      className="w-full object-cover group-hover:scale-105 transition-all duration-500 h-[180px]"
                      alt={article.mainImage.alt || "no-img"}
                      width={300}
                      height={180}
                    />
                  ) : (
                    <Image
                      src={"/images/legacy.png"}
                      className="w-full object-cover group-hover:scale-105 transition-all duration-500 h-[180px]"
                      alt="no-img"
                      width={300}
                      height={180}
                    />
                  )}
                </div>
                <div className="py-4">
                  <div className="w-full flex items-center justify-between">
                    <span className="text-gray-1000 text-sm underline">
                      {Array.isArray(article?.categories)
                        ? article.categories.map((cat: any, idx: number) => (
                            <span key={cat.title || idx}>
                              {cat.title}
                              {idx < article.categories.length - 1 ? ", " : ""}
                            </span>
                          ))
                        : ""}
                    </span>
                    <p className="text-sm text-gray-1000">
                      {article.publishedAt
                        ? new Date(article.publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })
                        : ''}
                    </p>
                  </div>
                  <h3 className="text-xl font-semibold font-poppins text-primary py-3">
                    {article?.title}
                  </h3>
                  <p
                    className="text-sm text-gray-1000 line-clamp-6"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 6,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {article?.description}
                  </p>
                </div>
              </Link>
            ))}

          </div>

        </div>
      </section>

      <SubscribeSection/>
    </main>
  )
}

export default Articles