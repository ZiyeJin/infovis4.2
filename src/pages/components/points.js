import React from 'react';

function Points(props) {
    const {data, xScale, yScale, width, height, hoveredStation, setHoveredStation, setTooltipContent, setTooltipX, setTooltipY, setSelectedData} = props;

    const getColor = (station) => station === hoveredStation ? 'red' : 'steelblue';
    const getRadius = (station) => station === hoveredStation ? 10 : 5;

    const nonHoveredData = data.filter(d => d.station !== hoveredStation);
    const hoveredData = data.filter(d => d.station === hoveredStation);

    return (
        <g>
            {hoveredStation && <rect width={width} height={height} fill="yellow" opacity="0.5" />}
            {nonHoveredData.map((d, i) => (
                <circle
                    key={i}
                    cx={xScale(d.tripdurationS)}
                    cy={yScale(d.tripdurationE)}
                    r={5}
                    fill={'steelblue'}
                    onMouseEnter={() => setHoveredStation(d.station)}
                    onMouseOut={() => setHoveredStation(null)}
                />
            ))}
            {hoveredData.map((d, i) => (
                <circle
                    key={'hovered-' + i}
                    cx={xScale(d.tripdurationS)}
                    cy={yScale(d.tripdurationE)}
                    r={getRadius(d.station)}
                    fill={getColor(d.station)}
                    onMouseEnter={(event) => {
                        // console.log(event);
                        setHoveredStation(d.station);
                        setTooltipContent(`Station: ${d.station}`); 
                        setTooltipX(event.pageX); 
                        setTooltipY(event.pageY); 
                        setSelectedData(d);
                    }}
                    onMouseOut={() => {
                        setHoveredStation(null);
                        setTooltipContent('');
                        setTooltipX(0);
                        setTooltipY(0);
                    }}

                />
            ))}
        </g>
    );
}

export default Points
