import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";

export default class UsersController {
  public async index({}: HttpContextContract) {
    const users = await User.all();

    return users;
  }
  public async store({ request, response }: HttpContextContract) {
    const { username, password } = request.only(["username", "password"]);

    try {
      const user = await User.create({ username, password });
      return user;
    } catch (error) {
      return response
        .status(400)
        .json({ message: "Error creating user", error });
    }
  }
  public async show({ params, response }: HttpContextContract) {
    const user = await User.find(params.id);

    if (!user) {
      return response.status(404).json({ message: "User not found" });
    }

    return user;
  }
  public async destroy({ params, response }: HttpContextContract) {
    const user = await User.find(params.id);

    if (!user) {
      return response.status(404).json({ message: "User not found" });
    }

    try {
      await user.delete();
      return { message: "User deleted successfully" };
    } catch (error) {
      return response
        .status(500)
        .json({ message: "Error deleting user", error });
    }
  }
}
