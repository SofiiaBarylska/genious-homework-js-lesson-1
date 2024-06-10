
//let a = 31;
//console.log(a);

//const number = Number("51");
//console.log(Number.isNaN(number));

//const string = Number("qweqwe");
//console.log(Number.isNaN(string));

//let str = "hi";
//let str2 = "одинарні лапки також дозвояються";
//let phase = `так можна вставляти ${str}`;
//let name = "Оля";
//let hello = `Привіт ${name}`;
//console.log(hello);

//let user = {};
//user.name = "Niko";
//console.log(user);
//user.age = 45;
//console.log(user);
let user = {
    name: "ivan",
    age: 30,
    isAdmin: true,
};


for (let key in user) {
    console.log(key);
    console.log(user[key]);
}