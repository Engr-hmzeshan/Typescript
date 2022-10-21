// 1. Importing and exporting
// 2. default exports
// import MyCircle, { MySquare } from "./sahpes";
// 3. Wildcard import
// For a wildcard all the imports should be of named type
// import * as Shapes from "./shapes";
import { MyCircle, MySquare } from "../shapes";
const circle = new MyCircle(2);
console.log(circle.radious);
const square = new MySquare(2);
console.log(square.width);

// 4. Module formats "module": "ES2015"

// 5. Re-exporting "moduleResolution": "node"
// This is very handy for large files
