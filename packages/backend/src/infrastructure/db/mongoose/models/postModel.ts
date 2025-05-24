import mongoose, { Schema, Document } from "mongoose";

interface PostDoc extends Document {
  title: string;
  body: string;
}

const PostSchema = new Schema<PostDoc>({
  title: { type: String, required: true },
  body: { type: String, required: true },
});

export const PostModel = mongoose.model<PostDoc>("Post", PostSchema);
