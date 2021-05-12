import { Publishing } from "../entities/Publishing";

interface ICreatePublishingDTO {
  name: string;
  city: string;
}

interface IPublishingRepository {
  create({ name, city }: ICreatePublishingDTO): Promise<void>;
  list(): Promise<Publishing[]>;
}

export { IPublishingRepository, ICreatePublishingDTO };