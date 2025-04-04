import { Prism as SyntaxHighlighter} from "react-syntax-highlighter";

export default function PsuedoCode() {
    

    const code = `function Dijkstra(start, end, graph):
    initialize distances for all nodes to Infinity (0 for start)
    initialize previous node for each node as null
    while unvisited nodes exist:
        // Select the node with the smallest distance
        select the node with the smallest distance (current)
        if current is the end, break out of the loop
            for each neighbor of current:
               calculate alternative path distance
               if alternative is shorter:
                   update distance and previous node for the neighbor
    construct the shortest path from end to start using previous nodes
    return the path
    `;

    return (
        <div className="">
            <SyntaxHighlighter language="javascript" >
                {code}
            </SyntaxHighlighter>
        </div>
    )
}