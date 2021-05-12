import { Request, Response } from "express";
import { PublishingRepository } from "../repositories/implementations/PublishingRepository";

class PublishingController {
  async create(request: Request, response: Response) {
    const { name, city } = request.body;

    const publishingRepository = new PublishingRepository();

    await publishingRepository.create({ name, city });

    return response.send().status(201);
  }

  async show(request: Request, response: Response) {
    const publishingRepository = new PublishingRepository();

    const publishings = await publishingRepository.list();

    return response.status(200).json(publishings);
  }
}

export { PublishingController };