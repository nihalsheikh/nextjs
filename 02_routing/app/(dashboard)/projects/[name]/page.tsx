export default function Page({ params }) {
	return (
		<main>
			<h1>Project Name: {params.name}</h1>
			<h2>This is a Dynamic Route</h2>
		</main>
	);
}
