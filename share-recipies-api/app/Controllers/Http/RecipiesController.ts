// @ts-nocheck

import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { v4 as uuidv4 } from "uuid";
import Recipie from "App/Models/Recipie";

import Application from "@ioc:Adonis/Core/Application";

export default class RecipiesController {
  private validationOption = {
    types: ["image"],
    size: "5mb",
  };
  public async store({ request }: HttpContextContract) {
    const body = request.body();

    try {
      const recipie = await Recipie.create(body);

      const image = request.file("image", this.validationOption);

      if (image) {
        const imageName = `${uuidv4()}.${image.extname}`;
        await image.move(Application.tmpPath("uploads"), { name: imageName });
      }
      return {
        message: "Recipie saved",
        data: recipie,
      };
    } catch (error) {
      console.log(error);
    }
  }

  public async index() {
    const recipies = await Recipie.all();
    return {
      data: recipies,
    };
  }

  public async show({ params }: HttpContextContract) {
    const recipie = await Recipie.findOrFail(params.id);

    return {
      data: recipie,
    };
  }
  public async destroy({ params }: HttpContextContract) {
    const recipie = await Recipie.findOrFail(params.id);

    await recipie.delete();

    return {
      message: "Recepie deleted",
      data: recipie,
    };
  }

  public async update({ params, request }: HttpContextContract) {
    const body = request.body();
    const recipie = await Recipie.findOrFail(params.id);

    recipie.title = body.title;
    recipie.description = body.description;

    if (recipie.image != body.image || !recipie.image) {
      const image = request.file("image", this.validationOption);
      const imageName = `${uuidv4()}.${image.extname}}`;

      await image.move(Application.tmpPath("uploads"), { name: image });

      recipie.image = imageName;
    }
    await recipie.save()

    return{
      message:'Recipie atualizado',
      data:recipie
    }

  }
}
