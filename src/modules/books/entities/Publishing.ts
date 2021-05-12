import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('publishing_company')
class Publishing {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  city: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }

}

export { Publishing };