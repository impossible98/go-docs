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
                {
                  text: 'If with a short statement',
                  link: '/basics/if-with-a-short-statement',
                },

                {
                  text: 'If and else',
                  link: '/basics/if-and-else',
                },
                {
                  text: 'Switch',
                  link: '/basics/switch',
                },
                {
                  text: 'Switch evaluation order',
                  link: '/basics/switch-evaluation-order',
                },
                {
                  text: 'Switch with no condition',
                  link: '/basics/switch-with-no-condition',
                },
                {
                  text: 'Defer',
                  link: '/basics/defer',
                },
                {
                  text: 'Stacking defers',
                  link: '/basics/stacking-defers',
                },
              ],
            },
            {
              text: 'More types: structs, slices, and maps',
              items: [
                {
                  text: 'Pointers',
                  link: '/basics/pointers',
                },
                {
                  text: 'Structs',
                  link: '/basics/structs',
                },
                {
                  text: 'Struct Fields',
                  link: '/basics/struct-fields',
                },
                {
                  text: 'Pointers to structs',
                  link: '/basics/pointers-to-structs',
                },
                {
                  text: 'Struct Literals',
                  link: '/basics/struct-literals',
                },
                {
                  text: 'Arrays',
                  link: '/basics/arrays',
                },
                {
                  text: 'Slices',
                  link: '/basics/slices',
                },
                {
                  text: 'Slices are like references to arrays',
                  link: '/basics/slices-are-like-references-to-arrays',
                },
                {
                  text: 'Slice literals',
                  link: '/basics/slice-literals',
                },
                {
                  text: 'Slice defaults',
                  link: '/basics/slice-defaults',
                },
                {
                  text: 'Slice length and capacity',
                  link: '/basics/slice-length-and-capacity',
                },
                {
                  text: 'Nil slices',
                  link: '/basics/nil-slices',
                },
                {
                  text: 'Creating a slice with make',
                  link: '/basics/creating-a-slice-with-make',
                },
                {
                  text: 'Slices of slices',
                  link: '/basics/slices-of-slices',
                },
                {
                  text: 'Appending to a slice',
                  link: '/basics/appending-to-a-slice',
                },
                {
                  text: 'Range',
                  link: '/basics/range',
                },
                {
                  text: 'Range continued',
                  link: '/basics/range-continued',
                },
                {
                  text: 'Maps',
                  link: '/basics/maps',
                },
                {
                  text: 'Map literals',
                  link: '/basics/map-literals',
                },
                {
                  text: 'Map literals continued',
                  link: '/basics/map-literals-continued',
                },
                {
                  text: 'Mutating Maps',
                  link: '/basics/mutating-maps',
                },
                {
                  text: 'Function values',
                  link: '/basics/function-values',
                },
                {
                  text: 'Function closures',
                  link: '/basics/function-closures',
                },
              ],
            },
          ],
        },
        {
          text: 'Methods and interfaces',
          items: [
            {
              text: 'Methods and interfaces',
              items: [
                {
                  text: 'Methods',
                  link: '/methods-and-interfaces/methods',
                },
                {
                  text: 'Methods are functions',
                  link: '/methods-and-interfaces/methods-are-functions',
                },
                {
                  text: 'Methods continued',
                  link: '/methods-and-interfaces/methods-continued',
                },
                {
                  text: 'Pointer receivers',
                  link: '/methods-and-interfaces/pointer-receivers',
                },
                {
                  text: 'Pointers and functions',
                  link: '/methods-and-interfaces/pointers-and-functions',
                },
                {
                  text: 'Methods and pointer indirection',
                  link: '/methods-and-interfaces/methods-and-pointer-indirection',
                },
                {
                  text: 'Methods and pointer indirection (2)',
                  link: '/methods-and-interfaces/methods-and-pointer-indirection-2',
                },
                {
                  text: 'Choosing a value or pointer receiver',
                  link: '/methods-and-interfaces/choosing-a-value-or-pointer-receiver',
                },
                {
                  text: 'Interfaces',
                  link: '/methods-and-interfaces/interfaces',
                },
                {
                  text: 'Interfaces are implemented implicitly',
                  link: '/methods-and-interfaces/interfaces-are-implemented-implicitly',
                },
                {
                  text: 'Interface values',
                  link: '/methods-and-interfaces/interface-values',
                },
                {
                  text: 'Interface values with nil underlying values',
                  link: '/methods-and-interfaces/interface-values-with-nil-underlying-values',
                },
                {
                  text: 'Nil interface values',
                  link: '/methods-and-interfaces/nil-interface-values',
                },
                {
                  text: 'The empty interface',
                  link: '/methods-and-interfaces/the-empty-interface',
                },
                {
                  text: 'Type assertions',
                  link: '/methods-and-interfaces/type-assertions',
                },
                {
                  text: 'Type switches',
                  link: '/methods-and-interfaces/type-switches',
                },
                {
                  text: 'Stringers',
                  link: '/methods-and-interfaces/stringers',
                },
                {
                  text: 'Errors',
                  link: '/methods-and-interfaces/errors',
                },
                {
                  text: 'Readers',
                  link: '/methods-and-interfaces/readers',
                },
                {
                  text: 'Images',
                  link: '/methods-and-interfaces/images',
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
