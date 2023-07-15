import Head from "next/head";

type HeadMetaProps = {
  title: string;
  description: string;
};

export default function HeadMeta(props: HeadMetaProps) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
