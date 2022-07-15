import mongoose from "mongoose";

const RentalSchema = new mongoose.Schema(
  {
    userObject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    groundObject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "grounds",
      required: true,
    },
    reservationDate: {
      type: String,
      required: true,
    },
    reservationTime: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  {
    collection: "rentals",
    timestamps: true,
  }
);

export { RentalSchema };