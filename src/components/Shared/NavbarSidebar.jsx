"use client";

import { useState } from "react";
import Link from "next/link";
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

const NavbarSidebar = ({ email }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-200 focus:outline-none md:hidden"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle navigation"
                onClick={toggleMobileMenu}
            >
                <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <aside className="md:hidden bg-gray-100 shadow-md p-4 absolute top-16 left-0 w-full">
                    <ul className="flex flex-col items-center justify-center space-y-2 font-medium">
                        <li className="hover:underline">
                            <Link href="/" onClick={toggleMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="hover:underline">
                            <Link href="/profile" onClick={toggleMobileMenu}>
                                Profile
                            </Link>
                        </li>
                    </ul>
                    {email ? (
                        <LogoutLink className="btn btn-neutral mt-4 w-full" onClick={toggleMobileMenu}>
                            Log out
                        </LogoutLink>
                    ) : (
                        <>
                            <LoginLink className="btn btn-neutral mt-4 w-full" onClick={toggleMobileMenu}>
                                Sign in
                            </LoginLink>
                            <RegisterLink className="btn btn-neutral mt-2 w-full" onClick={toggleMobileMenu}>
                                Sign up
                            </RegisterLink>
                        </>
                    )}
                </aside>
            )}
        </>
    );
};

export default NavbarSidebar;
