var cl = console.log;
var Role;
(function (Role) {
    Role["Admin"] = "A";
    Role["Candidate"] = "C";
    Role["Super_Admin"] = "SA"; //2
})(Role || (Role = {}));
;
cl(Role.Admin);
var Person = {
    fname: "jhon",
    lname: "doe",
    age: 54,
    userRole: "SA"
};
cl(Person);
if (Person.userRole === Role.Super_Admin) {
    cl("UserRole is superAdmin ");
}
;
if (Person.userRole === Role.Candidate) {
    cl("UserRole is Candidate");
}
;
