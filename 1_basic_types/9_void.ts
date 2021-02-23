function warnUser(): void {
  console.log("This is my warning message");
}

// Declaring variables of type void is not useful because you can only assign null (only if --strictNullChecks is not specified, see next section) or undefined to them:
let unusable: void = undefined;
// OK if `--strictNullChecks` is not given
unusable = null;