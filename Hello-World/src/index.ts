import * as _ from "lodash";

// Typescript Integration with JavaScript
import { calcTax } from "./tax";
// 1. Including Js '"allowJs": true'
// we can add js in ts projects or check the types of js files using ts configuration
const tax = calcTax(121);
console.log(tax);
// 2. Including type checking "checkJs": true

// 3. type checing using Js Docs
// i.e
/**
//  * Calculate tax for expenses
// * @param {number} income - net income after expenses
// * @returns {number}
// */

// 4. type checking using declairation files
// - create a file with same name but postfix with .d.ts and add the type checking
// - Include all functionality in .d.ts file for type checking

// 5. Default types repo
// When we use javascript libraries in typscript we need default repository to add .d.ts files
