import type { NextPage } from 'next'
import Head from 'next/head';

interface Props {
  title: string;
  description: string;
}

const MetaHead: NextPage<Props> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
};

export default MetaHead;


