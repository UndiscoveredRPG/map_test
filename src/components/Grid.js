import React, {useState, useEffect} from "react";

import Row from "./Row";



const Grid = ({mapData}) => {
    const [rows,setRows] = useState([])


    useEffect(() => {
        console.log('mapData',mapData)
        console.log('mapData.y_dimension',mapData.y_dimension)
        console.log('parseInt(mapData.y_dimension)',parseInt(mapData.y_dimension))

        const oldRows = []

        for(let i = 0; i<parseInt(mapData.y_dimension);i++){
            oldRows.push(i)
        }

        setRows(oldRows)
    },[mapData.y_dimension])

    return (
        <div>
            <h2>Grid</h2>
            {
                rows.map(row => {
                    return <Row key={row} mapData={mapData}/>
                })
            }
        </div>
    );
};




export default Grid;
