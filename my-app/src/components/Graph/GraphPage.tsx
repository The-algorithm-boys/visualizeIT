import { useState } from 'react';
import { Dropdown, DropdownItem } from 'flowbite-react';
import CircleGraph from './CircleGraph';
import BreadthfirstGraph from './BreadthFirstGraph';
import RandomGraph from './RandomGraph';

export default function GraphPage() {
    const [selectedGraph, setSelectedGraph] = useState('Graph 1');

    function renderGraph() {
        switch (selectedGraph) {
            case 'Graph 1':
                return <CircleGraph />;
            case 'Graph 2':
                return <BreadthfirstGraph />;
            case 'Graph 3':
                return <RandomGraph />;
            default:
                return null;
        }
    }

    return (
        <div className="flex-1 flex flex-col m-4">
            <div className="p-4">
                <Dropdown label={selectedGraph}>
                    <DropdownItem onClick={() => setSelectedGraph('Graph 1')}>
                        Graph 1
                    </DropdownItem>
                    <DropdownItem onClick={() => setSelectedGraph('Graph 2')}>
                        Graph 2
                    </DropdownItem>
                    <DropdownItem onClick={() => setSelectedGraph('Graph 3')}>
                        Graph 3
                    </DropdownItem>
                </Dropdown>
            </div>
            <div className="flex-1 mb-4">
                <div className="h-full rounded-lg bg-white shadow dark:bg-gray-800">
                    {renderGraph()}
                </div>
            </div>
        </div>
    );
}