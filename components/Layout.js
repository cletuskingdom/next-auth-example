import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";
import Script from "next/script";

const Layout = ({ children }) => {
	return (
		<div>
			<Navbar />
			<Script
				src="https://code.jquery.com/jquery-3.6.0.min.js"
				integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
				crossorigin="anonymous"
			/>
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
