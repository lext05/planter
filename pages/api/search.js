import { getSortedPlantsData } from '../../lib/plants'

export default function handler(req, res) {
    if(req.method == 'POST'){
        var allPlantsData = getSortedPlantsData()
        var found = allPlantsData.find(element => element.water == req.body.water && element.light == req.body.light)
        if(found){
            var plantUrl = '/plants/' + found.id
            res.status(200).json({ url: plantUrl})
        }
        else{
            res.status(404)
        }
    }
    else{
        res.status(200).json({ text: 'Hello' })
    }
    
  }