// private access modifiers

class UserX {
  readonly city = "Kolkata";
  constructor(
    public name: string,
    public email: string // private userId: string
  ) {
    this.name = name;
    this.email = email;
  }
}

const ayush = new UserX("ayush", "ayush@ayush.co");
console.log(ayush);

// getters and setters

class User {
  private courseCount: number = 1;
  readonly username: string = "EMAYUSH56";

  constructor(public fullName: string, public email: string) {}

  // private method
  private deleteToken(): void {
    console.log("Cannot be accessed");
  }

  get getUserEmail(): string {
    return `email: ${this.email}`;
  }

  // reading the private member `courseCount`
  get getCourseCount(): number {
    return this.courseCount;
  }

  // modifying the private member `courseCount`
  set setCourseCount(_courseCount) {
    // no return type of the function is needed to be assigned
    if (_courseCount <= 1)
      throw new Error("No new course has been assigned after the default");
    this.courseCount = _courseCount;
  }
}

// protected

class Car {
  protected engineId: string = "BMV1250GS";
  constructor(public modelName: string, public modelPrice: number) {
    this.modelName = modelName;
    this.modelPrice = modelPrice;
  }
}

class CarBrand extends Car {
  public changeEngineId(): void {
    this.engineId = "BMW1250GS";
  }
}

export {};
