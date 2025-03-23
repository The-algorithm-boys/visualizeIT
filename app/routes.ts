import {type RouteConfig, route, index} from '@react-router/dev/routes';

export default [
    index('src/index.tsx'),
    route('graph', 'src/graph/graph.tsx')
] satisfies RouteConfig;
