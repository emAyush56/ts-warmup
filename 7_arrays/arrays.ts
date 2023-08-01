const avengers: string[] = [];
const avengersRealName: Array<string> = [];

avengers.push("Ironman");
avengersRealName.push("Robert Downey Jr.");

console.log(avengers, avengersRealName);

const image1: Array<Array<number>> = [
  [255, 255, 255],
  [101, 195, 144],
];

const image2: number[][] = [
  [255, 255, 255],
  [101, 195, 144],
];

console.log(image1, image2);

const random: Array<string | number> = ["ayush", 21];

random.push(736160);
random.push("saha");
console.log(random);

// array of custom type

type User = {
  name: string;
  age: number;
};

const users: Array<User> = [];
users.push({ name: "Ayush", age: 21 });
users.push({ name: "Prithish", age: 22 });

console.log(`${users}`);
console.log(users);

// learn about ReadOnlyArray<>

export {};
