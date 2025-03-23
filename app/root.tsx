import "./styles/tailwind.css"
import {Links, Meta, Scripts} from "react-router";
import FlowbiteWrapper from "~/components/flowbiteWrapper.tsx";
import { ThemeModeScript } from 'flowbite-react'

export default function Index() {
    return (
        <html lang="en">
        <head>
            <Meta />
            <Links />
            <ThemeModeScript />
        </head>
        <body className="bg-gray-50 antialiased dark:bg-gray-900">
        <FlowbiteWrapper/>
        <Scripts />
        </body>
        </html>
    )
}
