export default function Description() {



    return(
        <div className="p-4 space-y-4">
            <h2 className="text-xl font-semibold">Dijkstra's Algorithm Overview</h2>
                <p>
                    Dijkstra's algorithm is used to find the shortest paths between nodes in a graph,
                    which can represent road networks or other systems.
                </p>
                <ul className="list-disc list-inside">
                    <li>It starts with a source node and calculates the shortest path to every other node.</li>
                    <li>The algorithm selects the unvisited node with the smallest tentative distance.</li>
                    <li>
                        It then calculates alternative path distances through that node, updating if a shorter path is found.
                    </li>
                    <li>The process continues until the shortest path to the destination node is determined.</li>
                </ul>
                <p>
                    This implementation demonstrates how Dijkstra's algorithm computes the shortest path between nodes <code>a</code> and <code>d</code>.
                </p>
        </div>
    )

}