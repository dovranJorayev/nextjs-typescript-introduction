import Head from "next/head";
import { getAllPostIds, getPostData, Post } from "lib/posts";
import Layout from "components/Layout";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }: {params: Post}) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData
    }
  }
}

export default function PostItem({postData}: {postData: Post}): JSX.Element {
  const {id, title, date} = postData;
  return (
    <Layout>
      <Head>
        <title>{ id }</title>
      </Head>

      {title}
      <br />
      {id}
      <br />
      {date}
    </Layout>
  );
}