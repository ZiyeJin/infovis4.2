import React from 'react';
import Points from './points';
import XAxis from './xAxis';
import YAxis from './yAxis';

function ScatterPlot(props){
    const { offsetX, offsetY, data, xScale, yScale, height, width, hoveredStation, setHoveredStation, setTooltipContent, setTooltipX, setTooltipY, setSelectedData} = props;

    //task1: transform the <g> with the offsets so that the barchart can show properly 
    //task2: import the components needed and uncomment the components in the return 
    return (
        <g transform={`translate(${offsetX},${offsetY})`}>
            <Points 
                data={data} 
                xScale={xScale} 
                yScale={yScale} 
                height={height} 
                width={width} 
                color="steelblue" 
                radius={5} 
                hoveredStation={hoveredStation}
                setHoveredStation={setHoveredStation}
                setTooltipContent={setTooltipContent}
                setTooltipX={setTooltipX}
                setTooltipY={setTooltipY}
                setSelectedData={setSelectedData}
            />
            <YAxis yScale={yScale} height={height} axisLabel={"Trip duration end in"} />
            <XAxis xScale={xScale} height={height} width={width} axisLabel={"Trip duration start from"} />
        </g>
    );
}

export default ScatterPlot