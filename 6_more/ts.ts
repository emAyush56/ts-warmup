// readonly keyword and `?` symbol used with variables/properties that are optional

type User = {
  readonly _id: string; // readonly keyword, check line no 20
  name: string;
  email: string;
  age: number;
  hasPaid?: boolean; // optional ? symbol meaning hasPaid can or cannot have a value, check line 16
};

const user: User = {
  _id: "IEYEAS216",
  name: "Ayush Shah",
  email: "ayush@ayush.co",
  age: 21,
  //   hasPaid: false,
};

user.name = "Ayush Saha";
// user._id = "XXXXXXXX"; // cannot edit object property since it is readonly

function createUser(user: User) {
  console.log("ok", user.hasPaid, typeof user.hasPaid);
}

createUser(user);

// nesting types

type cardNumber = {
  cardnumber: number;
};

type cardExpiry = {
  cardexpiry: string;
};

type cardDetails = cardNumber & cardExpiry & { cvv: number };

export {};
