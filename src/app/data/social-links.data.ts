interface SocialLink {
  name: string;
  url: string;
  icon: string;
  type: 'all' | 'home' | 'contact';
}

const socialLinks: SocialLink[] = [
  {
    name: 'Email',
    url: 'mailto:vamsikrishnakdml@gmail.com',
    icon: 'mail',
    type: 'all',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/vamsi-krishna-kodimela/',
    icon: 'linkedin',
    type: 'all',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/vamsi-krishna-kodimela',
    icon: 'github',
    type: 'all',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/vamsi_krishna_k/',
    icon: 'instagram',
    type: 'all',
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@vamsikrishnakdml',
    icon: 'book-open',
    type: 'all',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/vamsi_krishna_k',
    icon: 'twitter',
    type: 'all',
  },
];

export { socialLinks, SocialLink };
