/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames'
import { Sidebar } from 'flowbite-react'
import type { FC } from 'react'
import {useLocation} from 'react-router'
import { HiHome } from 'react-icons/hi'
import { BiLogoGraphql } from "react-icons/bi";
import { useSidebarContext } from '~/contexts/SidebarContext'
import isSmallScreen from '~/helpers/is-small-screen'

const SidebarComponent: FC = function () {
    const { isOpenOnSmallScreens: isSidebarOpenOnSmallScreens } =
        useSidebarContext()

    const location = useLocation(); 
    const currentPage = location.pathname;

    return (
        <div
            className={classNames('lg:!block', {
                hidden: !isSidebarOpenOnSmallScreens,
            })}
        >
            <Sidebar
                aria-label="Sidebar with multi-level dropdown"
                collapsed={isSidebarOpenOnSmallScreens && !isSmallScreen()}
            >
                <div className="flex h-full flex-col justify-between py-2">
                    <Sidebar.Items>
                        <Sidebar.ItemGroup className={'first:border-t-0'}>
                            <Sidebar.Item
                                href="/"
                                icon={HiHome}
                                className={
                                    '/' === currentPage
                                        ? 'bg-gray-100 dark:bg-gray-700'
                                        : ''
                                }
                            >
                                Home
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="/graph"
                                icon={BiLogoGraphql}
                                className={
                                    '/graph' === currentPage
                                        ? 'bg-gray-100 dark:bg-gray-700'
                                        : ''
                                }
                            >
                                Graph
                            </Sidebar.Item>
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </div>
            </Sidebar>
        </div>
    )
}

export default SidebarComponent
