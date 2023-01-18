import jwt from "jsonwebtoken";
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

    this.checkPassword(user, password);

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return {
      token,
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
