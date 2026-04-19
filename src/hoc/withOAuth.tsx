import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/provider/OAuthProvider";

export default function withAuth<P extends object>(Component: React.ComponentType<P>) {
  return function ProtectedComponent(props: P) {
    const { isAuthenticated, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isLoading && !isAuthenticated) {
        router.replace("/auth");
      }
    }, [isAuthenticated, isLoading, router]);

    if (isLoading) {
      return <></>;
    }

    if (!isAuthenticated) {
      return null;
    }

    return <Component {...props} />;
  };
}
