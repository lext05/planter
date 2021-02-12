import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPlantsData } from '../lib/plants'

export default function Home({ allPlantsData }) {
  return (
    <Layout home>
      <h1>Planter site!</h1>
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
