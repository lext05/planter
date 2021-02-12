import Layout from '../../components/layout'
import { getAllPlantIds, getPlantData } from '../../lib/plants'
import Image from 'next/image'

export default function Plant({ plantData }) {
  return (
    <Layout>
      <h1>{plantData.id.replace(/-/g, ' ')}</h1>
      <h3>{plantData.alias}</h3>
      <Image
        priority
        src={plantData.imagePath}
        height={771}
        width={679}
      />
      <ul>
        <li>Water: { plantData.water }</li>
        <li>Light: { plantData.light }</li>
      </ul>
      <p>{ plantData.notes }</p>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPlantIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const plantData = await getPlantData(params.id)
  return {
    props: {
      plantData
    }
  }
}
