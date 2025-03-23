/* eslint-disable jsx-a11y/anchor-is-valid */
import type { FC } from 'react'
import { DarkThemeToggle, Navbar } from 'flowbite-react'
import { HiMenu, HiX } from 'react-icons/hi'
import { useSidebarContext } from '~/contexts/SidebarContext'
import isSmallScreen from '~/helpers/is-small-screen'

const NavbarComponent: FC = () => {
    const { isOpenOnSmallScreens, isPageWithSidebar, setOpenOnSmallScreens } =
        useSidebarContext()

    return (
        <Navbar fluid>
            <div className="w-full p-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        {isPageWithSidebar && (
                            <button
                                onClick={() =>
                                    setOpenOnSmallScreens(!isOpenOnSmallScreens)
                                }
                                className="mr-3 cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:inline"
                            >
                                <span className="sr-only">Toggle sidebar</span>
                                {isOpenOnSmallScreens && isSmallScreen() ? (
                                    <HiX className="h-6 w-6" />
                                ) : (
                                    <HiMenu className="h-6 w-6" />
                                )}
                            </button>
                        )}
                        <Navbar.Brand href="/">
                            {/* Light Mode SVG */}
                            <svg
                                className="mr-3 block h-8 object-contain dark:hidden"
                                width="100"
                                height="100"
                                viewBox="0 0 100 100"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g transform="translate(50,50)">
                                    <circle cx="0" cy="0" r="40" stroke="#333" strokeWidth="3" fill="none" />
                                    <line x1="-30" y1="0" x2="30" y2="0" stroke="#333" strokeWidth="3"/>
                                    <line x1="0" y1="-30" x2="0" y2="30" stroke="#333" strokeWidth="3"/>
                                    <line x1="-21" y1="-21" x2="21" y2="21" stroke="#333" strokeWidth="3"/>
                                    <line x1="-21" y1="21" x2="21" y2="-21" stroke="#333" strokeWidth="3"/>
                                </g>
                            </svg>

                            {/* Dark Mode SVG */}
                            <svg
                                className="mr-3 hidden h-8 object-contain dark:block"
                                width="100"
                                height="100"
                                viewBox="0 0 100 100"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g transform="translate(50,50)">
                                    <circle cx="0" cy="0" r="40" stroke="#FFF" strokeWidth="3" fill="none" />
                                    <line x1="-30" y1="0" x2="30" y2="0" stroke="#FFF" strokeWidth="3"/>
                                    <line x1="0" y1="-30" x2="0" y2="30" stroke="#FFF" strokeWidth="3"/>
                                    <line x1="-21" y1="-21" x2="21" y2="21" stroke="#FFF" strokeWidth="3"/>
                                    <line x1="-21" y1="21" x2="21" y2="-21" stroke="#FFF" strokeWidth="3"/>
                                </g>
                            </svg>

                            <span className="text-xl font-bold">AlogBoys</span>
                        </Navbar.Brand>
                    </div>
                    <div className="flex items-center lg:gap-3">
                        <div className="flex items-center">
                            <DarkThemeToggle />
                        </div>
                    </div>
                </div>
            </div>
        </Navbar>
    )
}

export default NavbarComponent
