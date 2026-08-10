// Only GitHub Pages serves this app from a /credify-eswatini subpath;
// Netlify and local dev serve from the domain root.
const basePath = process.env.GITHUB_PAGES === "true" ? "/credify-eswatini" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
