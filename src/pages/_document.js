import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Favicon and theme color */}
          <meta name="theme-color" content="#2563eb" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@300..900&display=swap"
            rel="stylesheet"
          />

          {/* Author */}
          <meta name="author" content="Devansh Amdavadwala" />

          {/* Theme color script */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  const mode = localStorage.getItem('mui-theme-mode');
                  if (mode === 'dark') {
                    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#000000');
                  } else {
                    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#2563eb');
                  }
                })();
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
