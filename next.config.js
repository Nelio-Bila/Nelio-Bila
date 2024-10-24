// module.exports = {
//   reactStrictMode: true
// }


/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        port: '',
        pathname: '/my-bucket/**',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'denuncias-vozes-de-mulheres-ghjk6.ondigitalocean.app',
        port: '',
        pathname: '/**',
      },
    ],
    localPatterns: [
      {
        pathname: '/images/**',
        search: '',
      },
      {
        pathname: '/icons/**',
        search: '',
      },
    ],
  },
  // ... any other existing config
}

module.exports = nextConfig