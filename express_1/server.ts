import express, { type Request, type Response } from "express";

const app = express();
const port = 6969;

interface Course {
	id: number;
	name: string;
}

let courses: Course[] = [
	{ id: 1, name: "course1" },
	{ id: 2, name: "course2" },
	{ id: 3, name: "course3" },
	{ id: 4, name: "course4" },
];
app.get("/courses", (req: Request, res: Response) => {
	res.json(courses);
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
