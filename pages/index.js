import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Localized landing page</h1>

        <ul>
          <li>
            <Link href="/en/some-path/yolo">English YOLO page</Link>
          </li>
          <li>
            <Link href="/es/some-path/">English sub page</Link>
          </li>
          <li>
            <Link href="/es/some-path/">Spanish sub page</Link>
          </li>
        </ul>
      </main>
    </>
  );
}
