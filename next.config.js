/** @type {import('next').NextConfig} */
const withMarkdoc = require('@markdoc/next.js');

const nextConfig = withMarkdoc()({
  pageExtensions: ['md', 'mdoc', 'js', 'jsx', 'ts', 'tsx'],
  reactStrictMode: true,
});

module.exports = nextConfig
