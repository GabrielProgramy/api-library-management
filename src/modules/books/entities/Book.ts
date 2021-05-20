import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Publishing } from "./Publishing";

import { v4 as uuid } from 'uuid';
import { Author } from "./Author";

@Entity('books')
class Book {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  release_year: number;

  @JoinColumn({ name: 'publishing_company_id' })
  @ManyToOne(() => Publishing)
  publishing: Publishing;

  @Column()
  publishing_company_id: string;

  @JoinColumn({ name: 'author_id' })
  @ManyToOne(() => Author)
  author: Author;

  @Column()
  author_id: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Book };