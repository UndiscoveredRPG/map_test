import React, {useState, useEffect} from "react";
import styled  from "styled-components";

import {rules} from '../data'


function Tile({mapData}){
    const [material, setMaterial] = useState()

    useEffect(() => {
        const materials = rules.terrain.filter(terrain => terrain.name === mapData.terrain)
        console.log("materials", materials)

        const roll = Math.ceil(Math.random() * 100)

        console.log("roll",roll)
        if(roll < 60){
            setMaterial(materials[0].materials[0])
        }else if(roll > 85){
            setMaterial(materials[0].materials[2])
        }else{
            setMaterial(materials[0].materials[1])
        }
    },[mapData.terrain])

    const StyledTile = styled.button`
        background-color:${rules.materialsColor[material]};
        width:10%;
        height:10vh;
    `
    return(
        <StyledTile className={material}>
            {material}
        </StyledTile>
    )
}

export default Tile