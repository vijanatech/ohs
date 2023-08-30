/*
 * WHAT IS THIS FILE?
 *
 * It's the entry point for the Express HTTP server when building for production.
 *
 * Learn more about Node.js server integrations here:
 * - https://qwik.builder.io/docs/deployments/node/
 *
 */
import {
  createQwikCity,
  type PlatformNode,
} from "@builder.io/qwik-city/middleware/node";
import qwikCityPlan from "@qwik-city-plan";
import { manifest } from "@qwik-client-manifest";
import render from "./entry.ssr";
import express from "express";
import cors from "cors";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

declare global {
  interface QwikCityPlatform extends PlatformNode {}
}

// Directories where the static assets are located
const distDir = join(fileURLToPath(import.meta.url), "..", "..", "dist");
const buildDir = join(distDir, "build");

// Allow for dynamic port
const PORT = process.env.PORT ?? 3000;

// Create the Qwik City Node middleware
const { router, notFound } = createQwikCity({
  render,
  qwikCityPlan,
  manifest,
  // getOrigin(req) {
  //   // If deploying under a proxy, you may need to build the origin from the request headers
  //   // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-Proto
  //   const protocol = req.headers["x-forwarded-proto"] ?? "http";
  //   // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-Host
  //   const host = req.headers["x-forwarded-host"] ?? req.headers.host;
  //   return `${protocol}://${host}`;
  // }
});

// Create the express server
// https://expressjs.com/
const app = express();

// Enable gzip compression
// app.use(compression());

// Static asset handlers
// https://expressjs.com/en/starter/static-files.html
app.use(`/build`, express.static(buildDir, { immutable: true, maxAge: "1y" }));
app.use(express.static(distDir, { redirect: false }));

// Use Qwik City's page and endpoint request handler
app.use(router);

// Use Qwik City's 404 handler
app.use(notFound);

app.use(cors)
app.use(express.json());

app.get('/api', (req, res) => {
  res.json({"welcome":"you"})
})

app.post('/send-sms', async (req, res) => {
    const { number, message } = req.body;

    try {
        const token = await login();
        const response = await sendSms(token, number, message);
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: 'Failed to send SMS' });
    }
});

async function login() {
    const response = await fetch('https://apis.onfonmedia.co.ke/v1/authorization', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            apiUsername: process.env.PUBLIC_SMS_API_USERNAME,
            apiPassword: process.env.PUBLIC_SMS_API_PASSWORD
        }),
    });

    if (response.ok) {
        const data = await response.json();
        return data.token;
    } else {
        throw new Error('Login failed');
    }
}

async function sendSms(token:string , number:string, message:string) {
    const response = await fetch('https://apis.onfonmedia.co.ke/v2_send', {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "to": number,
            "from": "ONE HEALTH",
            "content": message,
            "dlr": "no",
            "dlr-url": "",
            "dlr-level": 1
        }),
    });

    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error('Failed to push SMS');
    }
}

// Start the express server
app.listen(PORT, () => {
  /* eslint-disable */
  console.log(`Server started: http://localhost:${PORT}/`);
});