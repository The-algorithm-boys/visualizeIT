import { useState } from 'react';
import { Dropdown } from 'flowbite-react';
import CircleGraph from './circleGraph';
import BreadthfirstGraph from './breadthfirstGraph';
import RandomGraph from './randomGraph';
import EditorPage from '~/src/editor/editorPage';
import LogTracer from '~/src/tracer/tracer';

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
        <div className="flex h-screen -mt-20 pt-20 dark:text-white">
            <div className="flex-1 flex flex-col m-4">
                <div className="p-4">
                    <Dropdown label={selectedGraph}>
                        <Dropdown.Item onClick={() => setSelectedGraph('Graph 1')}>
                            Graph 1
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => setSelectedGraph('Graph 2')}>
                            Graph 2
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => setSelectedGraph('Graph 3')}>
                            Graph 3
                        </Dropdown.Item>
                    </Dropdown>
                </div>
                <div className="flex-1 mb-4">
                    <div className="h-full rounded-lg bg-white shadow dark:bg-gray-800">
                        {renderGraph()}
                    </div>
                </div>
                <div className="mb-4">
                    <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
                        <LogTracer />
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <EditorPage />
            </div>
        </div>
    );
}
