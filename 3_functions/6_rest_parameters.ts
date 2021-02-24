function buildName(firstName: string, ...restOfName: string[]) {
  console.log(restOfName)
  return firstName + " " + restOfName.join(" ");
}

// employeeName will be "Joseph Samuel Lucas MacKinzie"
let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

console.log(employeeName)



function buildName2(firstName: string, ...restOfName: string[]) {
  console.log(restOfName)
  return firstName + " " + restOfName.join(" ");
}

let buildNameFun: (fname: string, ...rest: string[]) => string = buildName2;

console.log(buildNameFun(employeeName))

