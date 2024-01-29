// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  debug: false,
  dsn: "https://3e4770403a97ac7500d04bb2871ed1f0@o4505994064625664.ingest.sentry.io/4506654463688704",
  integrations: [
    new Sentry.BrowserProfilingIntegration(),
    new Sentry.replayIntegration({
      blockAllMedia: true,
      maskAllText: true,
    })
  ],
  profilesSampleRate: 1.0,
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  tracesSampleRate: 1.0
});
