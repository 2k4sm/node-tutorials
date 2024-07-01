const server = Bun.serve({
	port: 6969,
	fetch(request) {
		if (request.method === "GET") {
			return new Response(JSON.stringify({ message: "Hello!" }), {
				headers: { "Content-Type": "application/json" },
			});
		}
		return new Response(JSON.stringify({ message: `Method not allowed` }), {
			headers: { "Content-Type": "application/json" },
		});
	},
});

console.log(`Listening on http://localhost:${server.port}`);
