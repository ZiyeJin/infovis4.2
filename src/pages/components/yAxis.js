import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';


function YAxis(props){
    const { yScale, height, axisLabel } = props;
    const yAxisRef = useRef();

    useEffect(() => {
        if(yScale){
            const yAxisGenerator = d3.axisLeft(yScale);
            const yAxis = d3.select(yAxisRef.current);
            yAxis.call(yAxisGenerator);
        }
    }, [yScale]);

    return (
        <g ref={yAxisRef}>
            <text 
            style={{ textAnchor: 'end', fontSize: '15px' }} 
            transform={`translate(-40, ${height / 2})rotate(-90)`}>
                {axisLabel}
            </text>
        </g>
    );

}

export default YAxis