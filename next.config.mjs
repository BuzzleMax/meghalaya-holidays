/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  
  // Set basePath for GitHub Pages repository name
  basePath: '/meghalaya-holidays',
  
  // Set assetPrefix to match basePath for proper asset loading
  assetPrefix: '/meghalaya-holidays',
  
  // Disable image optimization for GitHub Pages (doesn't support Next.js Image API)
  images: {
    unoptimized: true,
  },
  
  // Ensure trailing slash handling works correctly
  trailingSlash: true,
};

export default nextConfig;
