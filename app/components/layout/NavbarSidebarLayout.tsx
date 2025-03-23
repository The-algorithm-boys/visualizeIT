import type { FC, PropsWithChildren } from 'react'
import classNames from 'classnames'
import { useSidebarContext, SidebarProvider } from '~/contexts/SidebarContext'
import Navbar from './navbar'
import Sidebar from './sidebar'
import { Outlet } from 'react-router'

interface NavbarSidebarLayoutProps {
    isFooter?: boolean
}

const NavbarSidebarLayout: FC<PropsWithChildren<NavbarSidebarLayoutProps>> = ({
    isFooter = true,
}) => {
    return (
        <SidebarProvider>
            <Navbar />
            <div className="flex items-start pt-16">
                <Sidebar />
                <MainContent isFooter={isFooter} />
            </div>
        </SidebarProvider>
    )
}

const MainContent: FC<PropsWithChildren<NavbarSidebarLayoutProps>> = function ({
    isFooter,
}) {
    const { isOpenOnSmallScreens: isSidebarOpen } = useSidebarContext()

    return (
        <main
            className={classNames(
                'relative h-full w-full overflow-y-auto bg-gray-50 dark:bg-gray-900',
                isSidebarOpen ? 'lg:ml-16' : 'lg:ml-64',
            )}
        >
            <Outlet />
            {isFooter && (
                <div className="mx-4 mt-4">
                    <MainContentFooter />
                </div>
            )}
        </main>
    )
}

const MainContentFooter: FC = () => {
    return (
        <p className="my-8 text-center text-sm text-gray-500 dark:text-gray-300">
            2025 AlgoBoys. All rights reserved.
        </p>
    )
}

export default NavbarSidebarLayout
