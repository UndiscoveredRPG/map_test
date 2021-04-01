import React, {useState, useEffect} from "react";

import Tile from './Tile'

function Row({mapData}){
    const [tiles, setTiles] = useState([])

    useEffect(() => {


        const oldTiles = []

        for(let i = 0; i<parseInt(mapData.x_dimension);i++){
            oldTiles.push(i)
        }

        setTiles(oldTiles)
    },[mapData.x_dimension])

    return(
        <div>
            {
                tiles.map(tile => {
                    return <Tile key={tile} mapData={mapData} />
                })
            }
        </div>
    )
}

export default Row