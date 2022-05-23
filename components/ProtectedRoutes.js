import { signIn, useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ProtectRoute = () => {
	const { data, status } = useSession();
	const router = useRouter();

	useEffect(() => {
		if (status === "unauthenticated") {
			router.push("/");
		}
	});
};

export default ProtectRoute;
