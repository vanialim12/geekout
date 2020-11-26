import "../styles.css";

/**
 *  @description
 *  This file is how Next.JS shares resources across ALL pages.
 *  Specifically, we are using this page to share:
 *  `styles.css`
 * 
 *  Learn more about _app.js here: https://nextjs.org/docs/advanced-features/custom-app
 */

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
