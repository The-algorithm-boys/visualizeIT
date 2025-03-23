import type { FC } from 'react'
import { Flowbite } from 'flowbite-react'
import theme from '~/styles/flowbite-theme.ts'
import NavbarSidebarLayout from './layout/NavbarSidebarLayout.tsx'

const FlowbiteWrapper: FC = () => {
    return (
        <Flowbite theme={{ theme }}>
            <NavbarSidebarLayout />
        </Flowbite>
    )
}

export default FlowbiteWrapper
