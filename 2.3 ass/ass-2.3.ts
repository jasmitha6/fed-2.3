// creating a class User with _username and _validuser as private property

class User {
  private _userName: string;
  private _validUser: string;

// defining a get function for the user validation 
  get userDetail(): string {
    if (!this._validUser) {
      return "User is not valid";
    }
    if (this._validUser === "manu") {
      return `The user name is ${this._userName} and is a valid user`
    }
  }
  set userDetail(name: string) {
    this._userName = name;
  }

// defining  checkTheuserValid function for comparing valid code
  public checkTheuserValid(validCode: number) {
    if (validCode === 64) {
      this._validUser = this._userName;
    }

  }
}
// checking whether the user is valid or not.
let user = new User();
user.userDetail = "manu"
user.checkTheuserValid(64);
console.log(user.userDetail)