import { IPost } from "../interfaces/entities/IPost";

export class Post implements IPost {
  public id: string;
  public title: string;
  public body: string;

  constructor({ id, title, body }: IPost) {
    this.id = id;
    this.title = title;
    this.body = body;
  }
}
