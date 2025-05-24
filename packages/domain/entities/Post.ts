import { IPost } from "../interfaces/entities/IPost";

export class Post implements IPost {
  public title: string;
  public body: string;

  constructor({ title, body }: IPost) {
    this.title = title;
    this.body = body;
  }
}
