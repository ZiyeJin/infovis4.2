import React, { useState } from 'react';

function Bars(props) {
    const {data, xScale, yScale, height, hoveredStation, setHoveredStation} = props;
    // const [hoveredStation, setHoveredStation] = useState(null);

    const getColor = (station) => station === hoveredStation ? 'red' : 'steelblue';
    //Note: 
    //the if(data){...} means when data is not null, the component will return the bars; otherwise, it returns <g></g>
    //we use the if ... else ... in this place so that the code can work with the SSR in Next.js;
    if(data){
        // return <g>
        //     {/* {task:
        //             1. remove this comments and put your code here
        //             2. pay attention to the height of the bars, it should be height-yScale(d.start)} */}
        //     </g>
        return (
            <g>
                {data.map((d, index) => (
                    <rect
                        key={index}
                        x={xScale(d.station)}
                        y={yScale(d.start)}
                        width={xScale.bandwidth()}
                        height={height - yScale(d.start)}
                        fill={getColor(d.station)}
                        onMouseEnter={() => setHoveredStation(d.station)}
                        onMouseOut={() => setHoveredStation(null)}
                    />
                ))}
            </g>
        );
    } else {
        return <g></g>
    }
}

export default Bars