import styles from "../styles/Home.module.css";
import { signIn, signOut } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
	return (
		<div className={styles.container}>
			<h1>Welcome to the Home page</h1>
		</div>
	);
}
