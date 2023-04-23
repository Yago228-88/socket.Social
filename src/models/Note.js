import { Schema,  model } from "mongoose";

const schema =new Schema(
  {
    title:{
        type:String,
        require: true
    },
    description:{
      type: String
    }

  }, {
    timestamps: true
  }
);

export default model('Note', schema);