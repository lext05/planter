import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPlantsData } from '../lib/posts'
import Link from 'next/link'

export default function Home({ allPlantsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Click on a plant to learn more!</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {allPlantsData.map(({ id, alias }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/plants/${id}`}>
                <a>{id}</a>
              </Link>
              <br />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPlantsData = getSortedPlantsData()
  return {
    props: {
      allPlantsData
    }
  }
}
