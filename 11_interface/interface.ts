const enum CouponType {
  FLAT = "FLAT",
  PRCT = "PERCENTAGE",
}

interface User {
  readonly id: string;
  name: string;
  age: number;
  googleId?: string;
  hasPaid: boolean;
  //   startTrial(): string; // another way
  startTrial: () => string;
  getCoupon?(couponName: string, couponType: string): number;
}

const ayush: User = {
  id: "AS56003",
  name: "Ayush Saha",
  age: 21,
  hasPaid: true,
  startTrial: () => "Trial Started",
  getCoupon: (couponName: string, couponType: string) => {
    console.log(couponName, couponType);
    return 100;
  },
};

console.log(ayush.startTrial());
// console.log(ayush.getCoupon("DEAL25", CouponType.FLAT)); // why the squigly line, though no compilation error?

/** 
answer from gpt 
The error "Cannot invoke an object which is possibly 'undefined'" means that the TypeScript compiler is warning you that the getCoupon method on the ayush object may be undefined.

This can happen if you have defined the getCoupon method as optional in the User interface using a question mark (?) after the method name.

To fix this error, you can add a check to see if the getCoupon method is defined before calling it. You can do this using an if statement like so:

```
if (ayush.getCoupon) {
  console.log(ayush.getCoupon("DEAL25"));
}
```

This will only call the getCoupon method if it exists on the ayush object.
*/

if (ayush.getCoupon) {
  console.log(ayush.getCoupon("DEAL75", CouponType.PRCT));
}

// interface vs type
// interface can be reopened
// interface can be inherited

export {};
