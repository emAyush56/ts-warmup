// declaring objects
const user = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
  isFemale: false,
};

// passing objects to functions directly
function showMsg1(userInfo: typeof user) {
  console.log(userInfo.name, userInfo.address, typeof userInfo.address);
}
showMsg1(user);

// passing objects to functions inside params
function showMsg2(person: { name: string; age: number }) {
  console.log(person.name, person.age);
}
showMsg2({ name: "ayush", age: 21 });

// returning objects from a function
function handleErr(): { msg: string; code: number } {
  return { msg: "ok", code: 200 };
}

const errObj = handleErr();
console.log(errObj, typeof errObj);

// another way
function userPayment({ name, hasPaid }: { name: string; hasPaid: boolean }) {
  console.log(`Name: ${name}`);
  console.log(`Has Paid: ${hasPaid}`);
  console.log("ok");
}
userPayment({ name: "Ayush", hasPaid: true });

// miss behaviour
function userProfile(user: { name: string; age: number }) {
  // console.log(`email: ${user.email}`); // will not work
  console.log(user.age, user.name);
}
// userProfile({ name: "Ayush", age: 21, email: "a@a.co" }); // this throws an error as obviously email is not defined at the function definition

let missBehaviour = { name: "Ayush", age: 21, email: "a@a.co" };
userProfile(missBehaviour); // but this does not throws and error
// `Interface` solves this miss-behaviour

// type aliases
type User = {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
    pin: number;
  };
};

function userAc(user: User) {
  console.log(user.address, "ok");
}

const myUser: User = {
  name: "Ayush",
  age: 21,
  address: {
    street: "Sector IV",
    city: "Kolkata",
    // state: "WB",
    pin: 736160,
  },
};

userAc(myUser);

export {};
