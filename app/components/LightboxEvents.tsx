'use client'
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

interface LightboxEventsProps {
  images: string[];
  imageClassName?: string;
}

const isSanityAssetRef = (src: string) => {
  return /^image-[\w-]+-\w+x\w+-\w+$/.test(src);
};

const isHttpUrl = (src: string) => {
  return /^https?:\/\//.test(src);
};

const LightboxEvents = ({ images, imageClassName = 'w-full h-full object-cover' }: LightboxEventsProps) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const safeImages = Array.isArray(images) ? images : [];

  const displayImages = safeImages.filter(src => isHttpUrl(src) || src.startsWith('/'));

  return (
    <div>
      <div className={`w-full`}>
        {displayImages.map((src, i) => (
          <div
            key={i}
            className="w-full text-center transition-all duration-500 hover:scale-105 h-auto relative cursor-pointer"
            onClick={() => { setIndex(i); setOpen(true); }}
          >
            <img src={src} className={imageClassName} alt={`gallery-img-${i}`} />
          </div>
        ))}
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={displayImages.map(src => ({ src }))}
        animation={{ fade: 250, swipe: 250 }}
        plugins={[Zoom]}
      />
    </div>
  );
};

export default LightboxEvents; 