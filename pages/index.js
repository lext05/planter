import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPlantsData } from '../lib/plants'
import Link from 'next/link'
import NavigationBar from '../components/navigation'

export default function Home({ allPlantsData }) {
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <p>Planters site!</p>
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
