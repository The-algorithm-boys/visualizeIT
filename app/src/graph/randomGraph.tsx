import { useEffect, useRef } from 'react';
import cytoscape from 'cytoscape';

export default function Graph() {
  const cyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cyRef.current) return;
    const container = cyRef.current;
    const cy = cytoscape({
      container,
      elements: [
        { data: { id: 'a' } },
        { data: { id: 'b' } },
        { data: { id: 'c' } },
        { data: { id: 'd' } },
        { data: { id: 'e' } },
        { data: { id: 'ab', source: 'a', target: 'b', weight: 1 } },
        { data: { id: 'bc', source: 'b', target: 'c', weight: 1 } },
        { data: { id: 'cd', source: 'c', target: 'd', weight: 1 } },
        { data: { id: 'de', source: 'd', target: 'e', weight: 1 } },
        { data: { id: 'ea', source: 'e', target: 'a', weight: 1 } },
        { data: { id: 'ac', source: 'a', target: 'c', weight: 2 } },
      ],
      style: [
        {
          selector: 'node',
          style: {
            'background-color': '#666',
            label: 'data(id)',
            'text-valign': 'center',
            color: '#fff',
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
            label: 'data(weight)',
            'font-size': 10,
            'text-rotation': 'autorotate',
          },
        },
        {
          selector: '.highlighted',
          style: {
            'background-color': '#61bffc',
            'line-color': '#61bffc',
            'target-arrow-color': '#61bffc',
            'transition-property': 'background-color, line-color, target-arrow-color',
            'transition-duration': 0.5,
          },
        },
      ],
      layout: {
        name: 'random',
        padding: 20,
      },
    });

    (window as any).highlightPath = (path: string[]) => {
      cy.elements().removeClass('highlighted');

      if (!path || path.length === 0) return;

      path.forEach(nodeId => {
        cy.getElementById(nodeId).addClass('highlighted');
      });

      for (let i = 0; i < path.length - 1; i++) {
        const edge = cy.edges().filter(edge =>
            (edge.data('source') === path[i] && edge.data('target') === path[i + 1]) ||
            (edge.data('source') === path[i + 1] && edge.data('target') === path[i])
        );
        edge.addClass('highlighted');
      }
    };

    return () => {
      cy.destroy();
    };
  }, []);

  return (
      <div
          ref={cyRef}
          className="w-full h-full bg-white"
      />
  );
};
