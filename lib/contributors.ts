export interface Contributor {
  name: string;
  handle: string;
  url: string;
  avatar: string;
}

export function contributorInitials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

export const CONTRIBUTORS: Contributor[] = [
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
    name: "Mochammad Dafa Al Za'biy Nazarudin",
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
