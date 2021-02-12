import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPlantsData } from '../lib/plants'
import Link from 'next/link'

export default function Plants({ allPlantsData }) {
    return (
      <Layout>
        <section className={utilStyles.headingMd}>
          <p>Click on a plant to learn more!</p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <ul className={utilStyles.list}>
            {allPlantsData.map(({ id, alias }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/plants/${id}`}>
                  <a>{id.replace(/-/g, ' ')}</a>
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