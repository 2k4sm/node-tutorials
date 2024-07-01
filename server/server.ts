const version = "v1";
const server = Bun.serve({
	port: 6969,
	fetch(request) {
		const url = new URL(request.url);
		switch (url.pathname) {
			case "/login":
				return login(request);
			case `/${version}`:
				return new Response(JSON.stringify({ message: "Hello normal" }), {
					headers: { "Content-Type": "application/json" },
					status: 200,
				});
			default:
				const BASE_PATH = "./public";
				return serveFile(BASE_PATH, request);
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

function serveFile(BASE_PATH: string, req: Request): Response {
	const filePath = BASE_PATH + new URL(req.url).pathname;
	const file = Bun.file(filePath);
	return new Response(file);
}

console.log(`Listening on http://localhost:${server.port}`);
