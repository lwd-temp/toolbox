/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build',
};

const withPWA = require('next-pwa')({
  dest: 'public',
  sw: 'service-worker.js',
  register: false,
});

module.exports = withPWA(nextConfig);
