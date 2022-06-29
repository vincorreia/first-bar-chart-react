import React, { useEffect, useRef, useState } from "react";
import D3Chart from "../classes/D3Chart.js"

export default function ChartWrapper(props){
    const coin = props.coin
    const chartArea = useRef(null)
    const [chart, setChart] = useState(null)
    let count = 0

    useEffect(() => {
        if(!chart && count == 0){
            setChart(new D3Chart([chartArea.current, coin]))
            count++
        }
    }, [chart, count])

    return (
    <div ref={chartArea}></div>
    )
}