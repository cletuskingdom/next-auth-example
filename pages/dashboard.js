import { signIn, useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ProtectRoute from "../components/ProtectedRoutes";

const Dashboard = () => {
	return (
		<>
			<ProtectRoute />
			<div>
				<h1>Welcome to the dashboard</h1>
			</div>
		</>
	);
};

export default Dashboard;
