#!/usr/bin/env ts-node

import { chromium } from "playwright";

const MARGIN = ".6in";

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });

  await page.pdf({
    path: "dist/cv.pdf",
    margin: {
      top: MARGIN,
      left: MARGIN,
      right: MARGIN,
      bottom: MARGIN,
    },
    format: "A4",
    printBackground: true,
  });

  await browser.close();
})().catch((error: unknown) => {
  console.error("An unexpected error occurred:", error);
});
