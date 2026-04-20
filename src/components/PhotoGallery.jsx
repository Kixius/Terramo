import { useState, useEffect, useCallback } from 'react';

export default function PhotoGallery({ images }) {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (index) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);

  const prev = useCallback(() => {
    setLightbox(i => (i > 0 ? i - 1 : images.length - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setLightbox(i => (i < images.length - 1 ? i + 1 : 0));
  }, [images.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightbox, prev, next]);

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className="photo-gallery-strip">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.url.replace('w=800', 'w=300')}
            alt={img.caption || ''}
            className="photo-gallery-thumb"
            onClick={() => openLightbox(i)}
            loading="lazy"
          />
        ))}
      </div>

      {lightbox !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
          <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); prev(); }}>&#8249;</button>
          <img
            src={images[lightbox].url.replace('w=800', 'w=1200')}
            alt={images[lightbox].caption || ''}
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); next(); }}>&#8250;</button>
          {images[lightbox].caption && (
            <p className="lightbox-caption">{images[lightbox].caption}</p>
          )}
        </div>
      )}
    </>
  );
}
