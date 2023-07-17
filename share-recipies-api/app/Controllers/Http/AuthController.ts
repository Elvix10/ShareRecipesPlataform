import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";


export default class AuthController {
  async login({ request, auth, response }: HttpContextContract) {
    const username = request.input("username");
    const password = request.input("password");

    console.log(username);
    

    try {
      const token = await auth.use("api").attempt(username, password);
      return token;
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
