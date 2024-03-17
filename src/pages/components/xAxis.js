//`<XAxis />` has the following properties,
// - xScale: the scale of the x-axis
// - height: the height of the scatter plot
// - width: the width of the scatter plot
// - axisLabel: the name of the axis
// - `<YAxis />` has the following properties,
// - yScale: the scale of y-axis
// - height: the height of the scatter plot
// - axisLabel: the name of the axis
// - **`<Points />`**: it is defined in the module points.js. The radius of each `<circle />` is 5 and the color is `steelblue`, and the `<Points />` has the following properties,
// - data: the data items
// - xScale: the scale for the x coordinate
// - yScale: the scale for the y coordinate


import React from 'react';
import * as d3 from 'd3';

function XAxis(props){
    const { xScale, height, width, axisLabel } = props;
    //Note:
    //1. XAxis works for two cases: the xScale is linear (i.e., scatter plot) and the xScalse is discrete (i.e., bar chart)
    //2. you can use typeof(xScale.domain()[0]) to decide the return value
    //3. if typeof(xScale.domain()[0]) is a number, xScale is a linear scale; if it is a string, it is a scaleBand.
        
    if (xScale) {
        if (typeof xScale.domain()[0] === 'number') {
            const xAxis = d3.axisBottom(xScale);
            return (
                <g transform={`translate(0, ${height})`}>
                    <g ref={node => d3.select(node).call(xAxis)} />
                    <text
                        x={width / 2}
                        y='3em'
                        dy='.32em'
                        style={{ textAnchor: 'end' }}
                        transform={`translate(545, -10)`}
                    >
                        {axisLabel}
                    </text>
                </g>
            );
        } else {
            const xAxis = d3.axisBottom(xScale)
                .tickFormat((d, i, nodes) => {
                    d3.select(nodes[i])
                        .style('text-anchor', 'start')
                        .attr('transform', 'rotate(45 5 5)');
                    return d;
                });
            return (
                <g transform={`translate(0, ${height})`}>
                    <g ref={node => d3.select(node).call(xAxis)} />
                </g>
                );
        }
    } else {
        return null;
    }
}

export default XAxis