/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/some-base-path',
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'x-header-for-root-of-site',
            value: 'this is the header for the root of the site',
          },
          {
            key: 'x-header-for-root-of-site2',
            value: 'this is another the header for the root of the site',
          },
        ],
      },
      {
        source: '/some-path/:path*',
        headers: [
          {
            key: 'x-all-locales-header-some-path',
            value: 'all locales header some path value',
          },
        ],
      },
      {
        source: '/en/some-path/yolo',
        locale: false,
        headers: [
          {
            key: 'x-en-locale-specific-yolo-header',
            value: 'en locale specific yolo header value',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'x-all-pages-header',
            value: 'all pages header value',
          },
          {
            key: 'x-all-pages-header2',
            value: 'all pages header value2',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
