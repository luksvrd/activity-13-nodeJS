//  ESM (EcmaScript modules)
// only import a part of the module (promises)
// For convenience, we can use the same name as the module (fs)
//  "as" is used to rename the module
import { promises as fs } from "fs";

//  TODO: Read the file. Then write the file to a new file
// 1. Read the users.json file & log the data
const data = await fs.readFile("users.json", "utf-8");

await fs.writeFile("users-copy.json", data);

// If its a named export we need to use the name of the export
// If its an anonymous export we can use any name we want
import meth from "./maths.js";
console.log(meth.sum(1, 2));
// node index.js // 3
