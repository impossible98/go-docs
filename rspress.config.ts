// import built-in modules
import * as path from 'path';
// import third-party modules
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Go',
  description: 'About Go',
  icon: '/favicon.png',
  logo: {
    light: '/go-light-logo.png',
    dark: '/go-dark-logo.png',
  },
  logoText: 'Go',
  head: [
    `<script type="text/javascript">(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "nu8muyojsb");</script>`,
  ],
  markdown: {
    checkDeadLinks: true,
    showLineNumbers: true,
  },
  themeConfig: {
    lastUpdated: true,
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/golang/go',
      },
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
          text: 'compress',
          collapsed: true,
          items: [
            {
              text: 'bzip2',
              link: '/compress/bzip2',
            },
            {
              text: 'flate',
              link: '/compress/flate',
            },
            {
              text: 'gzip',
              link: '/compress/gzip',
            },
            {
              text: 'lzw',
              link: '/compress/lzw',
            },
            {
              text: 'zlib',
              link: '/compress/zlib',
            },
          ],
        },
        {
          text: 'container',
          collapsed: true,
          items: [
            {
              text: 'heap',
              link: '/container/heap',
            },
            {
              text: 'list',
              link: '/container/list',
            },
            {
              text: 'ring',
              link: '/container/ring',
            },
          ],
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
        {
          text: 'fmt',
          link: '/fmt',
        },
        {
          text: 'plugin',
          link: '/plugin',
        },
        {
          text: 'sort',
          link: '/sort',
        },
        {
          text: 'strconv',
          link: '/strconv',
        },
        {
          text: 'strings',
          link: '/strings',
        },
        {
          text: 'unsafe',
          link: '/unsafe',
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
          text: 'compress',
          collapsible: false,
          items: [
            {
              text: 'bzip2',
              collapsible: false,
              items: [
                {
                  text: 'bit_reader.go',
                  link: '/code/compress/bzip2/bit_reader',
                },
                {
                  text: 'bzip2.go',
                  link: '/code/compress/bzip2/bzip2',
                },
                {
                  text: 'huffman.go',
                  link: '/code/compress/bzip2/huffman',
                },
                {
                  text: 'move_to_front.go',
                  link: '/code/compress/bzip2/move_to_front',
                },
              ],
            },
            {
              text: 'flate',
              collapsible: false,
              items: [
                {
                  text: 'deflate.go',
                  link: '/code/compress/flate/deflate',
                },
                {
                  text: 'deflatefast.go',
                  link: '/code/compress/flate/deflatefast',
                },
                {
                  text: 'dict_decoder.go',
                  link: '/code/compress/flate/dict_decoder',
                },
                {
                  text: 'huffman_bit_writer.go',
                  link: '/code/compress/flate/huffman_bit_writer',
                },
                {
                  text: 'huffman_code.go',
                  link: '/code/compress/flate/huffman_code',
                },
                {
                  text: 'inflate.go',
                  link: '/code/compress/flate/inflate',
                },
                {
                  text: 'token.go',
                  link: '/code/compress/flate/token',
                },
              ],
            },
            {
              text: 'gzip',
              collapsible: false,
              items: [
                {
                  text: 'gunzip.go',
                  link: '/code/compress/gzip/gunzip',
                },
                {
                  text: 'gzip.go',
                  link: '/code/compress/gzip/gzip',
                },
              ],
            },
            {
              text: 'lzw',
              collapsible: false,
              items: [
                {
                  text: 'reader.go',
                  link: '/code/compress/lzw/reader',
                },
                {
                  text: 'writer.go',
                  link: '/code/compress/lzw/writer',
                },
              ],
            },
            {
              text: 'zlib',
              collapsible: false,
              items: [
                {
                  text: 'reader.go',
                  link: '/code/compress/zlib/reader',
                },
                {
                  text: 'writer.go',
                  link: '/code/compress/zlib/writer',
                },
              ],
            },
          ],
        },
        {
          text: 'container',
          collapsible: false,
          items: [
            {
              text: 'heap',
              collapsible: false,
              items: [
                {
                  text: 'heap.go',
                  link: '/code/container/heap/heap',
                },
              ],
            },
            {
              text: 'list',
              collapsible: false,
              items: [
                {
                  text: 'list.go',
                  link: '/code/container/list/list',
                },
              ],
            },
            {
              text: 'ring',
              collapsible: false,
              items: [
                {
                  text: 'ring.go',
                  link: '/code/container/ring/ring',
                },
              ],
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
        {
          text: 'fmt',
          collapsible: false,
          items: [
            {
              text: 'fmt.go',
              link: '/code/fmt/doc',
            },
            {
              text: 'errors.go',
              link: '/code/fmt/errors',
            },
            {
              text: 'format.go',
              link: '/code/fmt/format',
            },
            {
              text: 'print.go',
              link: '/code/fmt/print',
            },
            {
              text: 'scan.go',
              link: '/code/fmt/scan',
            },
          ],
        },
        {
          text: 'plugin',
          collapsible: false,
          items: [
            {
              text: 'plugin.go',
              link: '/code/plugin/plugin',
            },
            {
              text: 'plugin_dlopen.go',
              link: '/code/plugin/plugin_dlopen',
            },
          ],
        },
        {
          text: 'sort',
          collapsible: false,
          items: [
            {
              text: 'search.go',
              link: '/code/sort/search',
            },
            {
              text: 'slice.go',
              link: '/code/sort/slice',
            },
            {
              text: 'slice_go113.go',
              link: '/code/sort/slice_go113',
            },
            {
              text: 'sort.go',
              link: '/code/sort/sort',
            },
            {
              text: 'zsortfunc.go',
              link: '/code/sort/zsortfunc',
            },
            {
              text: 'zsortinterface.go',
              link: '/code/sort/zsortinterface',
            },
          ],
        },
        {
          text: 'strconv',
          collapsible: false,
          items: [
            {
              text: 'atob.go',
              link: '/code/strconv/atob',
            },
            {
              text: 'atoc.go',
              link: '/code/strconv/atoc',
            },
            {
              text: 'atof.go',
              link: '/code/strconv/atof',
            },
            {
              text: 'atoi.go',
              link: '/code/strconv/atoi',
            },
            {
              text: 'bytealg.go',
              link: '/code/strconv/bytealg',
            },
            {
              text: 'ctoa.go',
              link: '/code/strconv/ctoa',
            },
            {
              text: 'decimal.go',
              link: '/code/strconv/decimal',
            },
            {
              text: 'doc.go',
              link: '/code/strconv/doc',
            },
            {
              text: 'eisel_lemire.go',
              link: '/code/strconv/eisel_lemire',
            },
            {
              text: 'ftoa.go',
              link: '/code/strconv/ftoa',
            },
            {
              text: 'ftoaryu.go',
              link: '/code/strconv/ftoaryu',
            },
            {
              text: 'isprint.go',
              link: '/code/strconv/isprint',
            },
            {
              text: 'itoa.go',
              link: '/code/strconv/itoa',
            },
            {
              text: 'quote.go',
              link: '/code/strconv/quote',
            },
          ],
        },
        {
          text: 'strings',
          collapsible: false,
          items: [
            {
              text: 'builder.go',
              link: '/code/strings/builder',
            },
            {
              text: 'clone.go',
              link: '/code/strings/clone',
            },
            {
              text: 'compare.go',
              link: '/code/strings/compare',
            },
            {
              text: 'reader.go',
              link: '/code/strings/reader',
            },
            {
              text: 'replace.go',
              link: '/code/strings/replace',
            },
            {
              text: 'search.go',
              link: '/code/strings/search',
            },
            {
              text: 'strings.go',
              link: '/code/strings/strings',
            },
          ],
        },
        {
          text: 'unsafe',
          collapsible: false,
          items: [
            {
              text: 'unsafe.go',
              link: '/code/unsafe/unsafe',
            },
          ],
        },
      ],
    },
  },
});
