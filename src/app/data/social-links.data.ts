interface SocialLink {
  name: string;
  url: string;
  icon: string;
  type: 'all' | 'home' | 'contact';
}

const socialLinks: SocialLink[] = [
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
    url: 'https://www.instagram.com/vamsi.kodimela/',
    icon: 'instagram',
    type: 'all',
  },
  {
    name: 'Medium',
    url: 'https://vamsikrishnakodimela.medium.com/',
    icon: 'book-open',
    type: 'all',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/vamsi_kodimela',
    icon: 'twitter',
    type: 'all',
  },
];

export { socialLinks, SocialLink };
