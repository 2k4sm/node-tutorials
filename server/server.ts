const server = Bun.serve({
	port: 6969,
	fetch(request) {
		const url = new URL(request.url);
		switch (url.pathname) {
			case "/login":
				return login(request);
			default:
				return new Response(JSON.stringify({ message: "Hello normal" }), {
					headers: { "Content-Type": "application/json" },
					status: 200,
				});
		}
	},
});

function login(req: Request): Response {
	if (req.method === "GET") {
		return new Response(JSON.stringify({ message: "Hello login" }), {
			headers: { "Content-Type": "application/json" },
			status: 200,
		});
	} else {
		return new Response(JSON.stringify({ message: `Method not allowed` }), {
			headers: { "Content-Type": "application/json" },
			status: 400,
		});
	}
}

console.log(`Listening on http://localhost:${server.port}`);
