'use client'

import NavigationBar from '@/app/nav/navbar';
import "@/app/css/authPage.css";
import { useAuth } from "@/provider/authProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LoginPage from "@/app/components/Login";

export default function Auth_Page() {
    const { token, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && token) {
            router.replace("/user");
        }
    }, [token, isLoading, router]);

    if (isLoading) {
        return <></>;
    }

    return (
        <>
            <nav className="navbar">{NavigationBar()}</nav>
            <div className='loginwindow'>
                <LoginPage />
            </div>
        </>
    );
}