'use client';

import { useEffect, useRef, useState } from 'react';

export function HeroPreview() {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    if (img.complete && img.naturalWidth > 0) {
      setLoaded(true);
    }
  }, []);

  return (
    <div className="overflow-hidden rounded-md border border-border bg-card shadow-sm">
      <img
        ref={imgRef}
        src="/hero.png"
        alt="Tampilan aplikasi Sistem Informasi Rekrutmen BKI SKARIGA"
        className={loaded ? 'block w-full' : 'hidden'}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
      />
    </div>
  );
}
