import Image from 'next/image';

export function HeroPreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <Image
        src="/hero.png"
        alt="BKI SKARIGA Recruitment Information System interface"
        width={1440}
        height={896}
        priority
        sizes="(max-width: 768px) 100vw, 833px"
        className="block w-full"
      />
    </div>
  );
}
