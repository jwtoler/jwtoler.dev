import { withSentryConfig } from "@sentry/nextjs"

/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false
};

const sentryPluginOptions = {
  automaticVercelMonitors: true,
  disableLogger: true,
  hideSourceMaps: true,
  transpileClientSDK: false,
  tunnelRoute: "/monitoring",
  widenClientFileUpload: true,
};

const sentryWebpackPluginOptions = {
  org: "justin-toler",
  project: "jwtoler-dev",
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: true
};

export default withSentryConfig(nextConfig, sentryWebpackPluginOptions, sentryPluginOptions);
