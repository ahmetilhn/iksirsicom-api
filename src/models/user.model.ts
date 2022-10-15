import { Schema, model } from "mongoose";
import IUser from "../types/IUser";
import { Request } from "express";
class UserModel {
  public userSchema = new Schema<IUser>(
    {
      email: {
        type: String,
        required: true,
      },
      full_name: {
        type: String,
        required: true,
      },
      user_name: {
        type: String,
        required: true,
      },
      avatar: {
        type: String,
        required: false,
        default: "",
      },
      medium_url: {
        type: String,
        required: false,
        default: "",
      },
      github_url: {
        type: String,
        required: false,
        default: "",
      },
      linkedin_url: {
        type: String,
        required: false,
        default: "",
      },
    },
    {
      timestamps: true,
    }
  );
  public Model = model<IUser>("User", this.userSchema);
  public async create(req: Request) {
    const payload: IUser = req.body;
    if (payload) {
      return new this.Model(payload).save();
    }
  }
  // Remove req add only id
  public async read<T>(
    req: Request | undefined,
    userName?: string
  ): Promise<T> {
    userName = req?.params?.userName || userName;
    if (userName) {
      return this.Model.findOne({
        user_name: req?.params?.userName || userName,
      }).lean(true);
    } else if (req?.query?.limit) {
      return this.Model.find().limit(Number(req.query.limit)).lean(true);
    }
    return this.Model.find().lean(true);
  }
}

export default new UserModel();
