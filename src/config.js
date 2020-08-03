module.exports = {
  siteTitle: 'Florian Hansmann | Software Developer',
  siteDescription:
    'Florian Hansmann is a Front-end software engineer based in Munich, Germany.',
  siteKeywords:
    'Florian Hansmann, front-end engineer, web developer, javascript, react',
  siteUrl: 'https://www.florians.dev',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Florian Hansmann',
  location: 'Munich, DE',
  email: 'hansmann.f@gmail.com',
  github: 'https://github.com/fhansmann',
  twitterHandle: '@f_hansmann',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/fhansmann',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/f_hansmann',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/florianrian_/',
    },
    {
      name: 'Dev',
      url: 'https://dev.to/f_hansmann',
    },
  ],

  navLinks: [
    {
      name: 'Home',
      url: '/#home',
    },
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
