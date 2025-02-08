import { Bell, CogIcon, Icon, LayoutDashboardIcon, LogOut, TargetIcon, Zap, ZapIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Sidenav = () => {
    return (
        <aside
            id="default-sidebar"
            className=" top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar"
        >
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    <li>
                        <Link
                            href="/dashboard"
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <LayoutDashboardIcon />
                            <span className="ms-3">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/objectifs"
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <TargetIcon />
                            <span className="flex-1 ms-3 whitespace-nowrap">Objectifs</span>
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/simuler"
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <CogIcon />
                            <span className="flex-1 ms-3 whitespace-nowrap">Simulation</span>
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/reagir"
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <Zap />
                            <span className="flex-1 ms-3 whitespace-nowrap">Réagir</span>
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/inbox"
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <Bell />
                            <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                            <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                                3
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/logout"
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                            <LogOut className="rotate-180" />
                            <span className="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidenav;
