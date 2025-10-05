"use client";

import ExampleClient from "@/components/ExampleClient";
// import ExampleServer from "@/components/ExampleServer";

export default function Home() {
	console.log("WHERE do i Render?");

	return (
		<main>
			<h2>Client - Server </h2>

			<ExampleClient />
			{/* <ExampleServer /> */}
		</main>
	);
}
