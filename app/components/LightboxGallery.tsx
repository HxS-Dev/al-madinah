'use client'
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface LightboxGalleryProps {
  images: string[];
  gridCols?: string;
  imageClassName?: string;
}

const LightboxGallery = ({ images, gridCols = 'grid-cols-4', imageClassName = 'w-full h-full object-cover' }: LightboxGalleryProps) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className={`w-full grid ${gridCols} gap-2`}>
        {images.map((src, i) => (
          <div key={i} className="w-full text-center h-[192px] relative cursor-pointer group" onClick={() => { setIndex(i); setOpen(true); }}>
            <div className="transition-all duration-500 bg-transpanret group-hover:bg-black/50 absolute top-0 left-0 w-full h-full pointer-events-none"></div>
           <img src={src} className={imageClassName} alt={`gallery-img-${i}`} />
          </div>
        ))}
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map(src => ({ src }))}
        animation={{ fade: 250, swipe: 250 }}
      />
    </div>
  );
};

export default LightboxGallery; 