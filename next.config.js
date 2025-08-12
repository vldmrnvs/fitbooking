/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // No extra packages need to be transpiled for fonts since we now load Geist
  // from Google Fonts directly in CSS. If you add other non-ESM packages in
  // the future, you can include them here.
  // Note: In Next.js v13+/v14 the app directory is enabled by default. Removing
  // the experimental.appDir option prevents invalid configuration warnings.
};

module.exports = nextConfig;