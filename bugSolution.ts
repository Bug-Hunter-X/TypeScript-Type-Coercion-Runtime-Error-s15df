function printNumber(num: number): void {
  console.log(num);
}

function printNumberSafe(num: number): void {
  if (typeof num !== 'number') {
    throw new Error('Input must be a number');
  }
  console.log(num);
}

//Corrected usage
printNumberSafe(10);

//Safe handling of potential type errors
try {
  printNumberSafe("hello");
} catch (error) {
  console.error(error);
}

//Alternative using type guards
function isNumber(num: any): num is number {
  return typeof num === 'number';
}

function printNumberTypeGuard(num: any): void {
  if (isNumber(num)) {
    console.log(num);
  } else {
    console.error('Input is not a number');
  }
}
printNumberTypeGuard(10);
printNumberTypeGuard("hello");