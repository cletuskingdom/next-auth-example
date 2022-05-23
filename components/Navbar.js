import Link from "next/link";
import Image from "next/image";
import { signIn, useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Navbar = () => {
	const { data, status } = useSession();

	return (
		<nav>
			<div className="logo">
				<Image src="/logo.png" alt="logo" width={77} height={77} />
			</div>
			<Link href="/">
				<a>Home</a>
			</Link>

			{status === "authenticated" ? (
				<>
					<Link href="/dashboard">
						<a>Dashboard</a>
					</Link>
					<button
						onClick={() => {
							signOut({
								callbackUrl: "http://localhost:3000/",
							});
						}}
					>
						Log out
					</button>
				</>
			) : (
				<>
					<button
						onClick={() => {
							signIn("github", {
								callbackUrl: "http://localhost:3000/dashboard/",
							});
						}}
					>
						SignIn
					</button>
				</>
			)}
		</nav>
	);
};

export default Navbar;
