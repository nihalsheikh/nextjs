"use client";

import ExampleServer from "./ExampleServer";

const ExampleClient = () => {
	console.log("This is a Client Component");

	return (
		<>
			<div>
				<h2>Client Component</h2>
				<p>Paragraph written in Client Component</p>
			</div>
			<ExampleServer />
		</>
	);
};

export default ExampleClient;
