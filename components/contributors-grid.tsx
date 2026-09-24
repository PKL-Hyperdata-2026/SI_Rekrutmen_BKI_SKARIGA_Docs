'use client';

import React from 'react';

interface Contributor {
  name: string;
  handle: string;
  url: string;
  avatar: string;
}

const CONTRIBUTORS: Contributor[] = [
  {
    name: 'Aulyvia Amalina',
    handle: '@_lovelyin',
    url: 'https://www.instagram.com/_lovelyin/',
    avatar:
      'https://file.marvfiles.web.id/uploads/0fa1d2b5-4702-41f7-9f8c-5b45843b068c.jpg',
  },
  {
    name: 'Kadek Giovani Putra Andika',
    handle: '@kjiovani',
    url: 'https://github.com/kjiovani',
    avatar: 'https://avatars.githubusercontent.com/u/222225219',
  },
  {
    name: 'Marvello Faisal',
    handle: '@Marvellbrazil',
    url: 'https://github.com/Marvellbrazil',
    avatar: 'https://avatars.githubusercontent.com/u/184349613',
  },
  {
    name: 'Mirza Adliansyah Pratama',
    handle: '@MirzaAdli',
    url: 'https://github.com/MirzaAdli',
    avatar: 'https://avatars.githubusercontent.com/u/217428213',
  },
  {
    name: 'Mochammad Dafa Al Za\'biy Nazarudin',
    handle: '@dafaalz',
    url: 'https://github.com/dafaalz',
    avatar: 'https://avatars.githubusercontent.com/u/197495779',
  },
  {
    name: 'Muhammad Rafif Rabbani',
    handle: '@Rafif110808',
    url: 'https://github.com/Rafif110808',
    avatar: 'https://avatars.githubusercontent.com/u/222324117',
  },
  {
    name: 'Muhammad Tiansyah Wahyudi Putra',
    handle: '@Kuzushiiii',
    url: 'https://github.com/Kuzushiiii',
    avatar: 'https://avatars.githubusercontent.com/u/176690342',
  },
  {
    name: 'Nouval Adibayu Kencono',
    handle: '@nopalbayview',
    url: 'https://github.com/nopalbayview',
    avatar: 'https://avatars.githubusercontent.com/u/232281014',
  },
  {
    name: 'Noval Abiansyah Tegar',
    handle: '@novalabiansyh13',
    url: 'https://github.com/novalabiansyh13',
    avatar: 'https://avatars.githubusercontent.com/u/248312129',
  },
  {
    name: 'Shaila Tri Febrianti',
    handle: '@deltoro.thien',
    url: 'https://www.instagram.com/deltoro.thien/',
    avatar:
      'https://scontent-cgk2-1.cdninstagram.com/v/t51.82787-19/775376587_17941100085316167_5052869128752615139_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=103&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=GnSnqN5P7qYQ7kNvwFxvVAA&_nc_oc=Ado9Pedw10icLU_VuTtQRBKsGzxbT3aOaMzb9LiwDt1cP9HfMsBlgkcDqtBaBlSqhyJYIrBdMh4ubVKmHVP5wNAK&_nc_zt=24&_nc_ht=scontent-cgk2-1.cdninstagram.com&_nc_gid=e0GhOBBqUsOnPWxWAolP8A&_nc_ss=7b6a8&oh=00_AQIr6YDk3XyYrmhhrPCExb6C5fiNGJrrHZ_XEjWrtbYp_g&oe=6ABAB3AF',
  },
  {
    name: 'Surya Jayanata Wibawa',
    handle: '@SuryaJayanata',
    url: 'https://github.com/SuryaJayanata',
    avatar: 'https://avatars.githubusercontent.com/u/170993776',
  },
];

export function ContributorsGrid() {
  return (
    <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {CONTRIBUTORS.map((c) => (
        <a
          key={c.name}
          href={c.url}
          target="_blank"
          rel="noreferrer noopener"
          style={{ textDecoration: 'none' }}
          className="group relative flex items-center gap-3.5 p-3.5 rounded-2xl border border-border bg-card/60 hover:bg-card hover:border-primary/40 hover:shadow-md transition-all duration-200 no-underline!"
        >
          <div className="relative size-12 shrink-0 rounded-full overflow-hidden border border-border group-hover:border-primary/50 transition-colors bg-muted flex items-center justify-center">
            <img
              src={c.avatar}
              alt={c.name}
              style={{
                margin: 0,
                padding: 0,
                display: 'block',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '9999px',
              }}
              className="m-0! p-0! size-full object-cover rounded-full group-hover:scale-105 transition-transform duration-200"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://ui-avatars.com/api/?name=' + encodeURIComponent(c.name) + '&background=random';
              }}
            />
          </div>

          <div className="min-w-0 flex-1">
            <div
              style={{ textDecoration: 'none' }}
              className="text-sm font-bold text-foreground truncate group-hover:text-primary transition-colors no-underline!"
            >
              {c.name}
            </div>
            <div
              style={{ textDecoration: 'none' }}
              className="text-xs text-muted-foreground truncate mt-0.5 no-underline!"
            >
              {c.handle}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
