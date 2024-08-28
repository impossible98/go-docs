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
    showLineNumbers: true,
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
    nav: [
      { text: 'STD', link: '/index' },
      { text: 'SRC', link: '/code/bufio/bufio' },
    ],
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
      '/code/': [
        {
          text: 'bufio',
          collapsed: true,
          items: [
            {
              text: 'bufio.go',
              link: '/code/bufio/bufio',
            },
            {
              text: 'scan.go',
              link: '/code/bufio/scan',
            },
          ],
        },
      ],
    },
  },
});
