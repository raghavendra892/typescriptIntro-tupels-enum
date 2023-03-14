let cl = console.log;

enum Role {
    Admin = "A",                //0
    Candidate = "C",        //1
    Super_Admin = "SA"     //2
};

cl(Role.Admin)

let Person = {
    fname: "jhon",
    lname: "doe",
    age: 54,
    userRole: "SA"
};

cl(Person);

if (Person.userRole === Role.Super_Admin) {
    cl("UserRole is superAdmin ")
};

if (Person.userRole === Role.Candidate){
    cl("UserRole is Candidate")
};