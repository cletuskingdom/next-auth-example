import Link from "next/link";
import Image from "next/image";
import { signIn, useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Navbar = () => {
	const { data, status } = useSession();

	return (
		<div>
			<svg
				className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
				fill="currentColor"
				viewBox="0 0 100 100"
				preserveAspectRatio="none"
				aria-hidden="true"
			>
				<polygon points="50,0 100,0 50,100 0,100" />
			</svg>

			<div>
				<div className="relative pt-6 px-4 sm:px-6 lg:px-8">
					<nav
						className="relative flex items-center justify-between sm:h-10 lg:justify-start"
						aria-label="Global"
					>
						<div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
							<div className="flex items-center justify-between w-full md:w-auto">
								<a>
									<span className="sr-only">Workflow</span>
									<img
										alt="Workflow"
										className="h-8 w-auto sm:h-10"
										src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
									/>
								</a>
								<div className="-mr-2 flex items-center md:hidden">
									<button
										type="button"
										className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
										aria-expanded="false"
									>
										<span className="sr-only">
											Open main menu
										</span>
										<svg
											className="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="2"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M4 6h16M4 12h16M4 18h16"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
						<div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
							<Link href="/">
								<a>Home</a>
							</Link>
							<a className="font-medium text-gray-500 hover:text-gray-900">
								Product
							</a>

							<a className="font-medium text-gray-500 hover:text-gray-900">
								Company
							</a>

							{status === "authenticated" ? (
								<>
									<Link href="/dashboard">
										<a className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">
											Dashboard
										</a>
									</Link>
									<button
										onClick={() => {
											signOut({
												callbackUrl:
													"http://localhost:3000/",
											});
										}}
									>
										Log out
									</button>
								</>
							) : (
								<>
									<button
										className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
										onClick={() => {
											signIn("github", {
												callbackUrl:
													"http://localhost:3000/dashboard/",
											});
										}}
									>
										Log in with GitHub
									</button>
								</>
							)}
						</div>
					</nav>
				</div>

				<div className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
					<div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
						<div className="px-5 pt-4 flex items-center justify-between">
							<div>
								<img
									className="h-8 w-auto"
									src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
									alt=""
								/>
							</div>
							<div className="-mr-2">
								<button
									type="button"
									className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
								>
									<span className="sr-only">
										Close main menu
									</span>
									<svg
										className="h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="2"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>
						</div>

						<div className="px-2 pt-2 pb-3 space-y-1">
							<Link href="/">
								<a>Home</a>
							</Link>
							<a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
								Product
							</a>

							<a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
								Features
							</a>

							<a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
								Marketplace
							</a>

							<a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
								Company
							</a>

							{status === "authenticated" ? (
								<>
									<Link href="/dashboard">
										<a className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">
											Dashboard
										</a>
									</Link>
									<button
										onClick={() => {
											signOut({
												callbackUrl:
													"http://localhost:3000/",
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
												callbackUrl:
													"http://localhost:3000/dashboard/",
											});
										}}
									>
										Log in with GitHub
									</button>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
