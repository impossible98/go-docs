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
                {
                  text: 'Type conversions',
                  link: '/basics/type-conversions',
                },

                {
                  text: 'Type inference',
                  link: '/basics/type-inference',
                },
                {
                  text: 'Constants',
                  link: '/basics/constants',
                },
                {
                  text: 'Numeric Constants',
                  link: '/basics/numeric-constants',
                },
              ],
            },
            {
              text: 'Flow control statements: for, if, else, switch and defer',
              items: [
                {
                  text: 'For',
                  link: '/basics/for',
                },

                {
                  text: 'For continued',
                  link: '/basics/for-continued',
                },
                {
                  text: 'For is Go\'s "while"',
                  link: '/basics/for-is-gos-while',
                },
                {
                  text: 'Forever',
                  link: '/basics/forever',
                },

                {
                  text: 'If',
                  link: '/basics/if',
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
