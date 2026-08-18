import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { urlFor } from '@/app/lib/imageBuilder';

type CoverImage = SanityImageSource | undefined;

/**
 * Cover thumbnail for a publication card.
 *
 * Prefers the cover uploaded in Sanity. Otherwise falls back to thum.io:
 * PDFs need thum.io's `pdfSource` mode, which rasterises the first page —
 * plain screenshot mode loads the PDF in a headless browser that has no
 * viewer, so it returns a sliver of empty chrome instead of the cover.
 */
export function publicationCoverUrl(coverImage: CoverImage, link: string): string {
  if (coverImage) {
    return urlFor(coverImage).width(400).height(560).url();
  }

  const isPdf = /\.pdf(\?|#|$)/i.test(link);
  const mode = isPdf ? 'pdfSource/width/400' : 'width/400/crop/560';
  return `https://image.thum.io/get/${mode}/${link}`;
}
