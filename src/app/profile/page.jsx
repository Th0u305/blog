"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Profile = () => {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const { isAuthenticated, isLoading, getUser } = useKindeBrowserClient();

    useEffect(() => {
        const fetchUser = async () => {
            if (isAuthenticated) {
                try {
                    const userInfo = await getUser();
                    setUser(userInfo);
                } catch (error) {
                    console.error("Error fetching user information:", error);
                } finally {
                    setLoading(false);
                }
            } else if (!isLoading) {
                router.push("/api/auth/login");
            }
        };

        if (!isLoading) {
            fetchUser();
        }
    }, [isAuthenticated, isLoading, getUser, router]);

    if (loading || isLoading) {
        return <div className="text-center flex justify-center items-center h-screen">Profile is Loading...</div>;
    }

    if (!user) {
        return null;
    }

    return (
        <section>
            <h2 className="text-4xl font-semibold">
                Welcome to <span className="font-bold uppercase">{user.given_name}</span>'s profile!
            </h2>

            <div className="space-y-1 mt-8">
                <h3 className="text-2xl font-semibold">User Information</h3>
                <p className="text-lg">Email: {user.email}</p>
                <p className="text-lg">Given Name: {user.given_name}</p>
                <Image
                    referrerPolicy="no-referrer"
                    src={user.picture}
                    alt="Profile Picture"
                    width={150}
                    height={150}
                />
            </div>
        </section>
    );
};

export default Profile;
