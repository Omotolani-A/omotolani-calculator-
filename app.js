import path from 'path';
import { fileURLToPath } from 'url';
import colors from 'colors';
import readline from 'readline';
import { add, subtract, multiply, divide } from './my_module/calculator.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(colors.cyan(`Current file base name: ${path.basename(__filename)}`));

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter first number: ", (num1) => {
  rl.question("Enter second number: ", (num2) => {
    rl.question("Choose operation (add, subtract, multiply, divide): ", (operation) => {
      const a = parseFloat(num1);
      const b = parseFloat(num2);
      let result;

      try {
        switch(operation) {
       case "add":
            result = colors.green(`Result: ${add(a, b)}`);
            break;
          case "subtract":
            result = colors.blue(`Result: ${subtract(a, b)}`);
        break;
          case "multiply":
            result = colors.yellow(`Result: ${multiply(a, b)}`);
            break;
       case "divide":
            result = colors.red(`Result: ${divide(a, b)}`);
            break;
          default:
            result = colors.gray("Invalid operation selected.");
        }
      } catch (error) {
        result = colors.red(error.message);
      }   console.log(result);
      rl.close();
    });
 });
});
