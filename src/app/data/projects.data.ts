interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
  github?: string;
  details?: string;
}

const projects: Project[] = [
  {
    title: 'Folio Genie',
    description:
      'A no-code portfolio website builder that offers beautiful designs carefully crafted for specific professions. And helps users build their professional presence in minutes.',
    image: '/assets/projects/project-1.png',
    link: 'https://foliogenie.live',
    github: '',
    details: '',
  },
  {
    title: 'Flutter Shopify',
    description:
      'Turn your Shopify store into a native mobile app in minutes. Flutter Shopify uses the Shopify Storefront API to integrate your Shopify web store into a native mobile app.',
    image: '/assets/projects/project-2.png',
    link: 'https://play.google.com/store/apps/details?id=com.avaniiambrosia.androidapp',
    github: '',
    details: '',
  },
  {
    title: 'Good Hands',
    description:
      'Developed as part of Hello Sign Hackathon. This application is built using Node.js, flutter, firebase. We are using HelloSign Node SDK to trigger signature requests for Medical Approval and Final approval from organization. HelloWorks API is used to simplify the application part.',
    image: '/assets/projects/project-3.png',
    link: 'https://devpost.com/software/good-hands',
    github: '',
    details: '',
  },
  {
    title: 'Suraksha',
    description:
      'This project is built using Python and OpenCV. It is a real-time system that detects the drowsiness of the driver and alerts the driver by a buzzer sound and a pop-up message on the screen.',
    image: '/assets/projects/project-4.png',
    link: '',
    github: 'https://github.com/vamsi-krishna-kodimela/suraksha',
    details: '',
  },
  {
    title: 'deMeter',
    description:
      'This project is built using Python and OpenCV. It is a real-time system that detects the drowsiness of the driver and alerts the driver by a buzzer sound and a pop-up message on the screen.',
    image: '/assets/projects/project-5.png',
    link: 'https://play.google.com/store/apps/details?id=com.demeter.app',
    github: 'https://github.com/vamsi-krishna-kodimela/demeter',
    details: '',
  },
  {
    title: 'Flutter Bullet List',
    description:
      'A Flutter package for web-like ordered and unordered lists with multi-level items and customizable bullet styles.',
    image: '/assets/projects/project-6.png',
    link: 'https://pub.dev/packages/flutter_bullet_list',
    github: 'https://github.com/vamsi-krishna-kodimela/flutter_bullet_list',
    details: '',
  },
];

export { projects, Project };
