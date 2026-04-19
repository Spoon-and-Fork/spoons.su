'use client'

import "@/app/css/authPage.css";
import "@/app/css/Login.css";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Auth_Page() {
    const [, setIsLoading] = useState<boolean>(true);
    const router = useRouter();

    React.useEffect(() => {
        const OAuthRedirect = async () => {
            try {
                const meResp = await fetch('/api/auth/userinfo', { method: 'GET' });
                if (meResp.ok) {
                    const meData = await meResp.json();
                    if (meData?.success) {
                        router.replace('/panel');
                        return;
                    }
                }

                const response = await fetch('/api/get-token', { method: 'POST' });
                const data = await response.json();
                if (data.success) {
                    const externalUrl = `https://auth.spoons.su/api/oidc/authorization?client_id=spoons&redirect_uri=https://spoons.su/api/auth/callback&response_type=code&scope=openid%20email%20profile&state=${data.token}`;
                    window.location.href = externalUrl;
                }
            } catch (error) {
                console.error('Error fetching token:', error);
                setIsLoading(false);
            }
        };
        
        OAuthRedirect();
    }, [router]);

    return (
        <div><p>Redirecting...</p></div>
    )
}