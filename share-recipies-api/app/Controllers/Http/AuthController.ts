import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";

export default class AuthController {
  async login({ request, auth, response }: HttpContextContract) {
    const username = request.input("username");
    const password = request.input("password");

    let user = await User.query().where("username", username).firstOrFail();

    console.log("user", user);

    try {
      const token = await auth.use("api").attempt(username, password);
      return { token: token, user: { username: user.username, id: user.id } };
    } catch (err) {
      console.log(err);

      return response.unauthorized("Invalid credentials");
    }
  }

  async logout({ auth }: HttpContextContract) {
    await auth.logout();
    return { message: "Logged out successfully" };
  }
}
