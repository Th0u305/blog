import Link from "next/link";
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import getUser from "@/lib/getUser";
import NavbarSidebar from "./NavbarSidebar";

const Navbar = async () => {
    const { email } = await getUser() || {};

    return (
        <nav className="flex justify-between items-center py-4 bg-gray-100 sticky top-0 z-50">
            <div className="w-10/12 mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="inline-flex items-center">
                    <span className="flex h-11 w-11 items-center justify-center rounded-md text-heading-6 font-semibold text-2xl bg-black text-white">
                        T
                    </span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-4">
                    <ul className="flex font-medium justify-center space-x-4 pr-4 border-r-2 border-gray-300">
                        <li className="hover:underline">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="hover:underline">
                            <Link href="/profile">Profile</Link>
                        </li>
                    </ul>

                    {email ? (
                        <LogoutLink className="btn btn-neutral">Log out</LogoutLink>
                    ) : (
                        <>
                            <LoginLink className="btn btn-neutral">Sign in</LoginLink>
                            <RegisterLink className="btn btn-neutral">Sign up</RegisterLink>
                        </>
                    )}
                </div>

                {/* Mobile Sidebar */}
                <NavbarSidebar email={email} />
            </div>
        </nav>
    );
};

export default Navbar;
