let cl = console.log;



//tupels >> a fixed length array;
type Person = {
    fname: string,
    lname: string,
    age: number,
    userRole: [number, string, boolean] //tupels of userRole
};
let Person: Person = {      //dataType assign
    fname: "jhon",
    lname: "doe",
    age: 54,
    userRole: [2, "Admin", true]//sequence change false >>[true, 2, "Admin"]
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



