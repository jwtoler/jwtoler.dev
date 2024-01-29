// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";
import { ProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
  debug: false,
  dsn: "https://3e4770403a97ac7500d04bb2871ed1f0@o4505994064625664.ingest.sentry.io/4506654463688704",
  tracesSampleRate: 1,
  profilesSampleRate: 1.0,
  integrations: [
    new ProfilingIntegration(),
  ],
});
