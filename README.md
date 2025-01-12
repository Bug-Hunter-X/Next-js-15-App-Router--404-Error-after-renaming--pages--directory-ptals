# Next.js 15 App Router Bug: Renaming the 'pages' Directory

This repository demonstrates a potential issue in Next.js 15's App Router when the default `pages` directory is renamed.  Renaming this directory leads to a 404 error because the App Router's default file-system-based routing logic can't locate the application's entry point.

## Bug Description

The bug occurs when you rename the `pages` directory (e.g., to `myPages`) within a Next.js 15 application using the App Router.  Even if the `index.js` file is moved accordingly, the application will not render correctly and return a 404 error.

## Steps to Reproduce

1. Create a Next.js 15 application.
2. Rename the `pages` directory to a new name (e.g., `myPages`).
3. Attempt to run the application using `npm run dev`.

## Expected Behavior

The application should render the content in the `index.js` file.

## Actual Behavior

The application returns a 404 error, indicating that it cannot find the page.

## Solution

The issue is due to the file-system based routing. The solution is to either avoid renaming the 'pages' directory or configure the Next.js App Router to point to the new directory location (Which is not yet directly possible).