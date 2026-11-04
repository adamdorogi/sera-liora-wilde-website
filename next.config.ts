import type { NextConfig } from 'next';
const config: NextConfig = {
  poweredByHeader: false,
  images: { formats: ['image/avif', 'image/webp'] },
  async redirects() { return [
    { source: '/home', destination: '/', permanent: true },
    { source: '/gift-cards', destination: '/s/gift-cards', permanent: true },
    { source: '/s/appointments', destination: '/book', permanent: true },
  ]; },
  async headers() { return [{ source: '/(.*)', headers: [
    { key: 'X-Content-Type-Options', value: 'nosniff' },
    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  ] }]; },
};
export default config;
