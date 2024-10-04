const req = {
  user: {
    name: "somethidng",
    role: "admin",
  },
  company: "Something",
};

console.log(req.user.role);

function factorial(num){
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
    }
}
console.log(factorial(5)); // 120