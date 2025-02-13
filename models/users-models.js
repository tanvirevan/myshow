import mongoose, {Schema} from "mongoose"

const schema = new Schema(
  {
    name:
      {
        require: true,
        type: String,
      },
    email: 
      {
        require: true,
        type: String,
      },
    password:
      {
        require: true,
        type: String,
      },
    phone:
      {
        require: true,
        type: String,
      },
    bio:
      {
        type: String,
      }

    
  });

export const userModel = mongoose.models.users ?? mongoose.model("users", schema);