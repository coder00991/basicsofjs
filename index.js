var name1 = "maniswaroop";//name1stores string
var age = 20;//stores the number
var user = ["hello", "mani", "thos","hchhc","maniya"];//array
var users = {//objects
  name: "maniswaroop",
  age: 20,
  email: "22000030449@kl.coxm",
  ph: 99999,
};
var users2=[
  {name:"pinnaka",age:33},
  {name:"hello",age:55},
]
console.log("hello"+" "+name1);//printing name
console.log("age is:"+age);//printing age
console.log(user);//printing array of user 
console.log(user[0]);//prinitng array first element
console.log(users);//printing objects
console.log(users.age);//printing objects age
console.log(users.name);//printing object names
console.log(users2);
//for loops in js
for(var i=0;i<5;i++){
  console.log(user[i]);
}
for(var i=0;i<users2.length;i++){
  console.log(users2[i].name+"   "+users2[i].age)
}
let n = 5;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (j == 1 || j == n || i == 1 || i == n) {
      process.stdout.write("*");
    } else {
      process.stdout.write(" ");
    }
  }
  console.log(); // Move to the next line after each row
}
