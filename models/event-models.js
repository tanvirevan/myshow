import mongoose, {Schema} from "mongoose"

const schema = new Schema(
  {
    name:
      {
        require: true,
        type: String,
      },
    details: 
      {
        require: true,
        type: String,
      },
    location:
      {
        require: true,
        type: String,
      },
    imageUrl:
      {
        require: true,
        type: String,
      },
    interested_ids:
      {
        require: false,
        type: Array,
      },
    going_id:
      {
        require: false,
        type: Array,
      },
    swgs:
      {
        require: false,
        type: Array,
      }

    
  });

export const eventModel = mongoose.models.events ?? mongoose.model("events", schema);