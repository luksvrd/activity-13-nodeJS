//  ESM (EcmaScript modules)
// only import a part of the module (promises)
// For convenience, we can use the same name as the module (fs)
//  "as" is used to rename the module
import { promises as fs } from "fs";

//  TODO: Read the file. Then write the file to a new file
// 1. Read the users.json file & log the data
const data = await fs.readFile("users.json", "utf-8");

await fs.writeFile("users-copy.json", data);

console.log(data);
