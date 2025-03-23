import { createRequestHandler } from '@react-router/express';
import express from 'express'

const viteDevServer =
    process.env.NODE_ENV === 'production'
        ? null
        : await import('vite').then(vite =>
            vite.createServer({
                server: { middlewareMode: true },
            }),
        )

const app = express()
app.use(
    viteDevServer ? viteDevServer.middlewares : express.static('build/client'),
)

const build = viteDevServer
    ? () => viteDevServer.ssrLoadModule('virtual:react-router/server-build')
    : await import('./build/server/index.js')

app.all('*', createRequestHandler({ build }))

// http://expressjs.com/en/advanced/best-practice-security.html#at-a-minimum-disable-x-powered-by-header
app.disable('x-powered-by')

app.listen(3000, () => {
    console.log('App listening on http://localhost:3000')
})
