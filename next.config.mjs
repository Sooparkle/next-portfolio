/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "photos.google.com" },
    ]
  }

};

export default nextConfig;
