import { promises as fs } from "fs";
import path from "path";

async function createAndWriteFile() {
	try {
		await fs.writeFile("example.txt", "Hello, world!");
		console.log("File has been created and data written to it.");
	} catch (err) {
		console.error(`An error occurred: ${err}`);
	}
}

async function readFile() {
	try {
		const data = await fs.readFile("example.txt", "utf8");
		console.log("File content:", data);
	} catch (err) {
		console.error(`An error occurred: ${err}`);
	}
}

async function appendFile() {
	try {
		await fs.appendFile("example.txt", "class is going on");
		console.log(`Data appended to example.txt.`);
	} catch (err) {
		console.error(`An error occurred: ${err}`);
	}
}

async function makeDirectory() {
	try {
		await fs.mkdir("dir1");
		console.log("Directory created.");
	} catch (err) {
		console.error(`An error occurred: ${err}`);
	}
}

async function removeDirectory() {
	try {
		await fs.rmdir("dir1");
		console.log("Directory removed.");
	} catch (err) {
		console.error(`Error Occured: ${err}`);
	}
}

async function renameDirectory(oldPath: string, newPath: string) {
	try {
		await fs.rename(oldPath, newPath);
		console.log(`Directory renamed from ${oldPath} to ${newPath}`);
	} catch (err) {
		console.error(`Error Occured: ${err}`);
	}
}

function printDirParams() {
	const p = "/home/sm2k4/gitProjects/node-tutorials/dir1/old_example.txt";
	const dirname = path.dirname(p);
	const extname = path.extname(p);
	const normpath = path.normalize(p);

	console.log(dirname, extname, normpath);
}

async function movefileToDirectory(file: string, folderPath: string) {
	try {
		await fs.copyFile(file, folderPath);
		console.log("file Copied.");
	} catch (err) {
		console.error(`Error Occured: ${err}`);
	}
}

// createAndWriteFile();
// appendFile();
// readFile();
// removeDirectory();
// renameDirectory("example.txt", "old_example.txt");
// makeDirectory();
// movefileToDirectory("example.txt", "dir1/new_example.txt");
// printDirParams();
