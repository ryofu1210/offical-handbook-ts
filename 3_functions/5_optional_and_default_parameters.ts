function buildName(firstName: string, lastName?: string) {
  return firstName + " " + lastName;
}

let result1 = buildName("Bob"); // error, too few parameters

let result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters

let result3 = buildName("Bob", "Adams"); // ah, just right


function buildName2(firstName: string, lastName = "Smith") {
  return firstName + " " + lastName;
}

let result2_1 = buildName2("Bob"); // works correctly now, returns "Bob Smith"
let result2_2 = buildName2("Bob", undefined); // still works, also returns "Bob Smith"
let result2_3 = buildName2("Bob", "Adams", "Sr."); // error, too many parameters
let result2_4 = buildName2("Bob", "Adams"); // ah, just right
