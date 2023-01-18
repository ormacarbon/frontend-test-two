import md5 from "md5";

export default class AuthService {
  constructor(model) {
    this.model = model;
  }

  async authenticate(login, password) {
    const user = await this.model.findOne({ name: login }).exec();
    if (!user) {
      throw new Error(401, "Not Authorized");
    }

    const checkedPassword = this.checkPassword(user, password);
    console.log(checkedPassword);

    return {
      name: user.name,
    };
  }

  checkPassword(user, rawPassword) {
    const encryptedPassword = this.encryptPassword(rawPassword, user.name);

    if (encryptedPassword !== user.password) {
      throw new Error(401, "Not Authorized");
    }
  }

  encryptPassword = (rawPassword, salt) => md5(`${rawPassword}${salt}`);
}
