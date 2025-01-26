/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript:{
    ignoreBuildErrors: true,
  },
  output: 'export',
  images: { 
    unoptimized: true,
    domains: ['images.unsplash.com', 'vtktgosujzgienmlobmi.supabase.co']
  }
};

module.exports = nextConfig;