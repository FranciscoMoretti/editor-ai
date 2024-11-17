import "./src/env.mjs";
// import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@v1/supabase"],
  experimental: {
    instrumentationHook: process.env.NODE_ENV === "production",
    turbo: {
      rules: {
        // Add specific rules if needed for Sentry
      },
    },
  },
};

export default nextConfig;
// TODO: Sentry support for turbopack is WIP https://github.com/getsentry/sentry-javascript/issues/8105
// export default withSentryConfig(nextConfig, {
//   silent: !process.env.CI,
//   telemetry: false,
//   widenClientFileUpload: true,
//   hideSourceMaps: true,
//   disableLogger: true,
//   tunnelRoute: "/monitoring",
// });
