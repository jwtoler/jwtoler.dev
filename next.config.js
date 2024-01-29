import { withSentryConfig } from "@sentry/nextjs"
import { withContentlayer } from "next-contentlayer"

/** @type {import('next').NextConfig} */
const nextConfig = {
  /**compiler: {
    removeConsole:
      env.NODE_ENV === "production" ? { exclude: ["error"] } : undefined,
  },**/
  compress: true,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  experimental: {
    ppr: true,
  }
}

const sentryConfig = {
  options: {
      automaticVercelMonitors: true,
      disableLogger: true,
      hideSourceMaps: true,
      transpileClientSDK: false,
      tunnelRoute: "/monitoring",
      widenClientFileUpload: true,
  },
  webpack: {
      org: "justin-toler",
      project: "jwtoler-dev",
      silent: true,
  },
}

export default withSentryConfig(
  withContentlayer(nextConfig),
  sentryConfig.webpack,
  sentryConfig.options,
)
