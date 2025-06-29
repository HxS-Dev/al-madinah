'use client'
import { useState, useRef } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import { urlFor } from '../lib/imageBuilder';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface LightboxTimeTableProps {
  images?: string[];
  imageClassName?: string;
}

const LightboxTimeTable = ({ images = [], imageClassName = 'w-full h-full object-cover' }: LightboxTimeTableProps) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);

  const safeImages = Array.isArray(images) ? images : [];

  const handleDownloadPDF = async (i: number) => {
    const img = imgRefs.current[i];
    if (!img) return;
    const canvas = await html2canvas(img, { useCORS: true });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({ orientation: 'landscape', unit: 'px', format: [canvas.width, canvas.height] });
    pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
    pdf.save('timetable.pdf');
  };

  return (
    <div>
      <div className={`w-full`}>
        {safeImages.map((src, i) => (
          <div
            key={i}
            className="w-full text-center transition-all duration-500 hover:scale-105 h-auto relative cursor-pointer group"
            onClick={() => { setIndex(i); setOpen(true); }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              ref={el => { imgRefs.current[i] = el; }}
              src={urlFor(src).width(450).url()}
              className={imageClassName}
              alt={`gallery-img-${i}`}
            />
            {hovered === i && (
              <button
                className="absolute top-2 right-2 z-10 bg-primary text-white px-3 py-1 rounded shadow-lg opacity-90 hover:opacity-100 transition-all text-xs"
                onClick={e => { e.stopPropagation(); handleDownloadPDF(i); }}
              >
                Download PDF
              </button>
            )}
          </div>
        ))}
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={safeImages.map(src => ({ src: urlFor(src).url() }))}
        animation={{ fade: 250, swipe: 250 }}
        plugins={[Zoom]}
      />
    </div>
  );
};

export default LightboxTimeTable; 