import Document, { Html, Head, Main, NextScript } from "next/document";
import { MasterLayout } from "../layout";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const { page } = this.props.__NEXT_DATA__;
  
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
          <MasterLayout page={page}>
            <Main />
          </MasterLayout>
        </body>
        <NextScript />
      </Html>
    );
  }
}

export default MyDocument;
