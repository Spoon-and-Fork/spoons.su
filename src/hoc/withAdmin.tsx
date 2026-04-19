import { useAuth } from "@/provider/authProvider";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const withAdmin = <P extends object>(Component: React.ComponentType<P>) => {
  return function ProtectedAdminComponent(props: P) {
    const { token, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isLoading && (!token)) {
        router.replace("/");
      }
    }, [token, isLoading, router]);

    if (isLoading) {
      return <></>;
    }

    if (!token) {
      return null;
    }

    return <Component {...props} />;
  };
};

export default withAdmin;
