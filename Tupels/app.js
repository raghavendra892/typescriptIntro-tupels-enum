var cl = console.log;
var Person = {
    fname: "jhon",
    lname: "doe",
    age: 54,
    userRole: [2, "Admin", true] //sequence change false >>[true, 2, "Admin"]
};
cl(Person);
// Person.userRole[0] = "admin"
// Person.userRole[2] = "123";
// Person.userRole[3] = 55;
//we change the length by using methods
Person.userRole.push("hello");
Person.userRole.pop();
Person.userRole.pop();
cl(Person);
