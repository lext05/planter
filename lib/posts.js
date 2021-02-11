import fs from 'fs'
import path from 'path'

const catalogueFile = path.join(process.cwd(), 'plants/catalogue.json')

export function getSortedPlantsData() {
  // Get file names under /posts
  const plants = JSON.parse(fs.readFileSync(catalogueFile));

  const allPlantData = plants.map(plant => {
    return {
      ...plant
    }
  })
  return allPlantData.sort((a, b) => {
    if (a.id > b.id) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPlantIds() {
  const plants = JSON.parse(fs.readFileSync(catalogueFile));
  return plants.map(plant => {
    return {
      params: {
        id: plant["id"]
      }
    }
  })
}

export async function getPlantData(id) {
  const plants = JSON.parse(fs.readFileSync(catalogueFile));
  const plant = plants.find(element => element.id == id )
  return{
    ...plant
  }
}
