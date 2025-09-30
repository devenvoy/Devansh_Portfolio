import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#2563eb" /> {/* fallback */}
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
