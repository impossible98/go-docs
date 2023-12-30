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
  themeConfig: {
    sidebar: {
      '/': [
        {
          text: 'What is Go?',
          link: '/index',
        },
        {
          text: 'Intro',
          link: '/intro',
        },
        {
          text: 'Basics',
          items: [
            {
              text: 'Packages, variables, and functions.',
              items: [
                {
                  text: 'Packages',
                  link: '/basics/packages',
                },
                {
                  text: 'Imports',
                  link: '/basics/imports',
                },
                {
                  text: 'Exported names',
                  link: '/basics/exported-names',
                },
                {
                  text: 'Functions',
                  link: '/basics/functions',
                },
                {
                  text: 'Functions continued',
                  link: '/basics/functions-continued',
                },
                {
                  text: 'Multiple results',
                  link: '/basics/multiple-results',
                },

                {
                  text: 'Named return values',
                  link: '/basics/named-return-values',
                },
                {
                  text: 'Variables',
                  link: '/basics/variables',
                },
                {
                  text: 'Variables with initializers',
                  link: '/basics/variables-with-initializers',
                },
                {
                  text: 'Short variable declarations',
                  link: '/basics/short-variable-declarations',
                },
                {
                  text: 'Basic types',
                  link: '/basics/basic-types',
                },
                {
                  text: 'Zero values',
                  link: '/basics/zero-values',
                },
              ],
            },
          ],
        },
      ],
    },
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/golang/go',
      },
    ],
  },
  markdown: {
    checkDeadLinks: true,
    highlightLanguages: ['go'],
  },
});
