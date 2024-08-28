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
          text: 'archive',
          collapsed: true,
          items: [
            {
              text: 'tar',
              link: '/archive/tar',
            },
            {
              text: 'zip',
              link: '/archive/zip',
            },
          ],
        },
        {
          text: 'bufio',
          link: '/bufio',
        },
        {
          text: 'builtin',
          link: '/builtin',
        },
        {
          text: 'bytes',
          link: '/bytes',
        },
        {
          text: 'context',
          link: '/context',
        },
        {
          text: 'embed',
          link: '/embed',
        },
        {
          text: 'errors',
          link: '/errors',
        },
        {
          text: 'expvar',
          link: '/expvar',
        },
        {
          text: 'flag',
          link: '/flag',
        },
      ],
      '/code/': [
        {
          text: 'archive',
          collapsible: false,
          items: [
            {
              text: 'tar',
              collapsible: false,
              items: [
                {
                  text: 'common.go',
                  link: '/code/archive/tar/common',
                },
                {
                  text: 'format.go',
                  link: '/code/archive/tar/format',
                },
                {
                  text: 'reader.go',
                  link: '/code/archive/tar/reader',
                },
                {
                  text: 'stat_actime1.go',
                  link: '/code/archive/tar/stat_actime1',
                },
                {
                  text: 'stat_unix.go',
                  link: '/code/archive/tar/stat_unix',
                },
                {
                  text: 'strconv.go',
                  link: '/code/archive/tar/strconv',
                },
                {
                  text: 'writer.go',
                  link: '/code/archive/tar/writer',
                },
              ],
            },
            {
              text: 'zip',
              collapsible: false,
              items: [
                {
                  text: 'reader.go',
                  link: '/code/archive/zip/reader',
                },
                {
                  text: 'register.go',
                  link: '/code/archive/zip/register',
                },
                {
                  text: 'struct.go',
                  link: '/code/archive/zip/struct',
                },
                {
                  text: 'writer.go',
                  link: '/code/archive/zip/writer',
                },
              ],
            },
          ],
        },
        {
          text: 'bufio',
          collapsible: false,
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
        {
          text: 'builtin',
          collapsible: false,
          items: [
            {
              text: 'builtin.go',
              link: '/code/builtin/builtin',
            },
          ],
        },
        {
          text: 'bytes',
          collapsible: false,
          items: [
            {
              text: 'buffer.go',
              link: '/code/bytes/buffer',
            },
            {
              text: 'bytes.go',
              link: '/code/bytes/bytes',
            },
            {
              text: 'reader.go',
              link: '/code/bytes/reader',
            },
          ],
        },
        {
          text: 'context',
          collapsible: false,
          items: [
            {
              text: 'context.go',
              link: '/code/context/context',
            },
          ],
        },
        {
          text: 'embed',
          collapsible: false,
          items: [
            {
              text: 'embed.go',
              link: '/code/embed/embed',
            },
          ],
        },
        {
          text: 'errors',
          collapsible: false,
          items: [
            {
              text: 'errors.go',
              link: '/code/errors/errors',
            },
            {
              text: 'wrap.go',
              link: '/code/errors/wrap',
            },
          ],
        },
        {
          text: 'expvar',
          collapsible: false,
          items: [
            {
              text: 'expvar.go',
              link: '/code/expvar/expvar',
            },
          ],
        },
        {
          text: 'flag',
          collapsible: false,
          items: [
            {
              text: 'flag.go',
              link: '/code/flag/flag',
            },
          ],
        },
      ],
    },
  },
});
