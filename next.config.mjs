/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.discordapp.com'],
    },
    async headers() {
        return [
          {
            source: '/favicon.ico',
            headers: [
              {
                key: 'Cache-Control',
                value: 'public, max-age=604800, must-revalidate'
              }
            ]
          }
        ];
    }
};

export default nextConfig;
