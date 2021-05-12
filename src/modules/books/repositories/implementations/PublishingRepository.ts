import { getRepository, Repository } from "typeorm";
import { Publishing } from "../../entities/Publishing";
import { IPublishingRepository, ICreatePublishingDTO } from "../IPublishingRepository";

class PublishingRepository implements IPublishingRepository {
  private repository: Repository<Publishing>;

  constructor() {
    this.repository = getRepository(Publishing);
  }

  async create({ name, city }: ICreatePublishingDTO): Promise<void> {
    const publishingAlreadyExists = await this.repository.findOne({
      name
    });

    if (publishingAlreadyExists) {
      return;
    }

    const publishing = this.repository.create({
      name,
      city
    });

    await this.repository.save(publishing);
  }

  async list(): Promise<Publishing[]> {
    const publishings = await this.repository.find();

    return publishings;
  }

}

export { PublishingRepository };