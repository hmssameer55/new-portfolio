/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:'assets.aceternity.com'
      }
    ]
  },
  typescript:{
    ignoreBuildErrors:true
  }

};

export default nextConfig;
