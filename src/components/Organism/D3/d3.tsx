import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

export const D3 = () => {
  const [data] = useState([25, 50, 35, 15, 94, 10]);
  const svgRef = useRef() as any;

  useEffect(() => {
    const svg = d3
      .select(svgRef.current as any)
      .attr('width', 400)
      .attr('height', 400)
      .style('background', '#d3d3d3');
    svg.append('circle').attr('cx', 200).attr('cy', 200).attr('r', 100).attr('fill', 'blue');
  }, [data]);

  return (
    <>
      <div className="container">
        <div className="row">
          <svg ref={svgRef}> </svg>
        </div>
      </div>
    </>
  );
};
