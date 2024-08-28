// import built-in modules
import * as path from 'path';
// import third-party modules
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Go',
  description: 'About Go',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  logoText: 'Go',
  markdown: {
    checkDeadLinks: true,
  },
  themeConfig: {
    lastUpdated: true,
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/golang/go' },
    ],
    footer: {
      message:
        '<p>Copyright © 2020-${new Date().getFullYear()} My Project, Inc. Built with Rspress</p>',
    },
    hideNavbar: 'auto',
    enableScrollToTop: true,
    sidebar: {
      '/': [
        {
          text: 'INTRODUCTION',
          link: '/index',
        },
        {
          text: 'bufio',
          link: '/bufio',
        },
      ],
    },
  },
});
