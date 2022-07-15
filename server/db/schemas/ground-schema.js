import mongoose from 'mongoose';

const GroundSchema = new mongoose.Schema(
  {
    groundName: {
      type: String,
      required: true,
    },
    paymentPoint: {
      type: Number,
      required: true,
    },
    groundImg: {
      type: [String],
      required: false,
      default: null,
    },
    groundAddress: {
      type: new mongoose.Schema(
        {
          postalCode: String,
          address1: String,
          address2: String,
        },
        {
          _id: false,
        },
      ),
      required: true,
    },
    groundSize: {
      type: String,
      required: false,
      default: null,
    },
    showerPlace: {
      type: Boolean,
      required: false,
      default: false,
    },

    parking: {
      type: Boolean,
      required: false,
      default: false,
    },

    shoesRental: {
      type: Boolean,
      required: false,
      default: false,
    },

    sportswearRental: {
      type: Boolean,
      required: false,
      default: false,
    },

    wayTo: {
      type: String,
      required: false,
      default: null,
    },

    parkingInfo: {
      type: String,
      required: false,
      default: null,
    },
    smoking: {
      type: String,
      required: false,
      default: null,
    },
    toilet: {
      type: String,
      required: false,
      default: null,
    },
    isBookedDate: {
      type: [String],
      required: false,
      default: null,
    },
    isBooked: {
      type: Boolean,
      required: false,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  {
    collection: 'grounds',
    timestamps: true,
  },
);

export { GroundSchema };
