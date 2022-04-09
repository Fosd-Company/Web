import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Fosd</title>
          <link rel="icon" type="image/svg+xml" href="/src/favicon.svg" />
          <link
            rel="shortcut icon"
            href="/assets/favicon-light.png"
            type="image/x-icon"
          />
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}

export default MyDocument;
