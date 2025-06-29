import { sanityClient } from '@/app/lib/sanity';
import { singleArticleQuery } from '@/app/lib/queries';
import { urlFor } from '@/app/lib/imageBuilder';
import Image from 'next/image';
import { PortableText } from 'next-sanity';
import React from 'react';

interface Props {
  params: { slug: string };
}

const ArticleDetailPage = async ({ params }: Props) => {
  const article = await sanityClient.fetch(singleArticleQuery, { slug: params.slug });

  if (!article) {
    return (
      <main>
        <section className="w-full lg:py-32 py-10 sm:py-14">
          <div className="w-full max-w-[1440px] px-3 sm:px-5 mx-auto">
            <div className="w-full text-center text-2xl text-gray-500">Article not found.</div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="w-full lg:py-24 py-10 sm:py-14">
        <div className="w-full max-w-[800px] px-3 sm:px-5 mx-auto">
          {article.mainImage && (
            <div className="w-full mb-8">
              <Image
                src={urlFor(article.mainImage).width(800).url()}
                alt={article.mainImage.alt || article.title}
                width={800}
                height={400}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          )}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 font-poppins">{article.title}</h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6 text-gray-700 text-sm">
            {article.author?.name && <span>By {article.author.name}</span>}
            {article.publishedAt && (
              <span>
                {new Date(article.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            )}
            {Array.isArray(article.categories) && article.categories.length > 0 && (
              <span>
                Categories: {article.categories.map((cat: any, idx: number) => (
                  <span key={cat.title || idx}>
                    {cat.title}
                    {idx < article.categories.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </span>
            )}
          </div>
          {article.description && (
            <p className="text-[15px] leading-loose text-gray-1000 mb-10 sm:mb-14">{article.description}</p>
          )}
          <div className="prose-1 max-w-none text-gray-1000">
            {article.body && (
              <PortableText
                value={article.body}
                components={{
                  types: {
                    image: ({value}: any) => (
                      value?.asset?._ref ? (
                        <div className="my-6 flex justify-center">
                          <Image
                            src={urlFor(value).width(700).url()}
                            alt={value.alt || 'Article image'}
                            width={700}
                            height={400}
                            className="rounded-lg max-h-[400px] w-full h-auto object-contain"
                          />
                        </div>
                      ) : null
                    ),
                  },
                }}
              />
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ArticleDetailPage;