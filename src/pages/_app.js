import Head from 'next/head';
import { wrapper } from '../redux/store';
import '../../assets/global.css';
import 'antd/dist/antd.css';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <title>Payment Page</title>
        <link rel='shortcut icon' href='/favicon.ico' type='image/ico'/>
      </Head>
      <>
        <Component {...pageProps} />
      </>
    </>
  );
}


export default wrapper.withRedux(App);
