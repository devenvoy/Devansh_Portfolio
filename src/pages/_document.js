import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Favicon and theme color */}
          <meta name="theme-color" content="#2563eb" />
          <link rel="icon" href="/favicon.ico" />
          
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