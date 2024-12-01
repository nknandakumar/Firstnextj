import Link from "next/link";
import React from "react";

const NavBar = () => {
	return (
		<nav className="flex justify-between items-center px-6 py-8 border-b border-gray-100">
			<h1 className="text-4xl font-extrabold">NextJs</h1>
			<ul className="flex gap-6 uppercase font-bold ">
				<li>
					{" "}
					<Link href={"/"}>Home</Link>
				</li>
				<li>
					{" "}
					<Link href={"/about"}>About</Link>
				</li>
				<li>
					{" "}
					<Link href={"/projects"}>Projects</Link>
				</li>
				<li>
					{" "}
					<Link href={"/contact"}>Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
