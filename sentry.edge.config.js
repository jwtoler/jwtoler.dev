// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  debug: false,
  dsn: "https://3e4770403a97ac7500d04bb2871ed1f0@o4505994064625664.ingest.sentry.io/4506654463688704",
  tracesSampleRate: 1
});
