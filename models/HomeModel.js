import mongoose from "mongoose";
const Schema = mongoose.Schema;

const homeSchema = new Schema(
  {
    id: { type: Number },
    type: { type: String },
    name: { type: String },
    description: { type: String },
    image: { type: String },
    country: { type: String },
    address: { type: String },
    bedrooms: { type: String },
    bathrooms: { type: String },
    surface: { type: String },
    year: { type: String },
    price: { type: String },
    agent: {
      id: { type: Number },
      type: { type: String },
      name: { type: String },
      image: { type: String },
      phone: { type: String },
    },
  },
  { collection: "Home" }
);

export default mongoose.model("HomeModel", homeSchema);
