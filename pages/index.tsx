import Head from 'next/head'
import Layout from 'components/Layout';
import { siteTitle } from 'assets/siteTitle';
import utilStyles from 'styles/modules/util.module.css';
import { getSortedPostsData, Post } from 'lib/posts';
import { GetStaticPropsResult } from 'next';

interface HomeProps {
  allPostsData: Post[];
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  } as GetStaticPropsResult<HomeProps>;
}

export default function Home({allPostsData}: HomeProps): JSX.Element {
  return (
    <Layout 
      home
    >
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}


