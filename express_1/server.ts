import express, { type Request, type Response } from "express";

const app = express();
const port = 6969;

app.use(express.json());
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

app.post("/courses", (req: Request, res: Response) => {
	let course: Course = req.body;
	courses.push(course);
	res.json(courses);
});

app.put("/courses/:id", (req: Request, res: Response) => {
	const courseId = parseInt(req.params.id);
	const newCourseName = req.body.name;
	const course = courses.find((course) => course.id === courseId);

	if (course) {
		course.name = newCourseName;
		res.json(course);
	} else {
		res.status(404).send("Course not found");
	}
});

app.delete("/courses/:id", (req: Request, res: Response) => {
	const courseId = parseInt(req.params.id);
	courses.splice(courseId - 1, 1);
	res.json(courses);
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}/`);
});
