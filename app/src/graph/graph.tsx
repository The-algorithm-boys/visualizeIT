import React, { useEffect, useRef } from 'react';
import cytoscape from 'cytoscape';

const Graph: React.FC = () => {
  const cyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cyRef.current) {
      const cy = cytoscape({
        container: cyRef.current, // Container to render in
        elements: [
          { data: { id: 'a' } },
          { data: { id: 'b' } },
          { data: { id: 'c' } },
          { data: { id: 'd' } },
          { data: { id: 'e' } },
          { data: { id: 'f' } },
          { data: { id: 'ab', source: 'a', target: 'b' } },
          { data: { id: 'bc', source: 'b', target: 'c' } },
          { data: { id: 'cd', source: 'c', target: 'd' } },
          { data: { id: 'de', source: 'd', target: 'e' } },
          { data: { id: 'ef', source: 'e', target: 'f' } },
        ],
        style: [
          {
            selector: 'node',
            style: {
              'background-color': '#666',
              label: 'data(id)',
            },
          },
          {
            selector: 'edge',
            style: {
              width: 3,
              'line-color': '#ccc',
              'target-arrow-color': '#ccc',
              'target-arrow-shape': 'triangle',
              'curve-style': 'bezier',
            },
          },
        ],
        layout: {
          name: 'random',
        },
      });

      return () => cy.destroy(); // Cleanup to avoid memory leaks
    }
  }, []);

  return (
    <div
      ref={cyRef}
      style={{
        width: '600px',
        height: '400px',
        backgroundColor: '#fff', // Setting graph background to white
      }}
    />
  );
};

export default Graph;
