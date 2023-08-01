class User {
  name: string;
  email: string;
  dob: string;
  city: string = "";
  constructor(name: string, email: string, dob: string) {
    this.name = name;
    this.email = email;
    this.dob = dob;
  }
}

const ayush = new User("ayush", "ayush@ayushsaha.me", "05-10-2001");
console.log(ayush);

ayush.city = "Kolkata";
console.log(ayush);

export {};
