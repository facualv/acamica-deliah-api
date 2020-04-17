const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
    autopopulate: true
  },
  cart: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "product",
        required: [true, "Orders must have at least one product !"],
        autopopulate: true
      },
      quantity: { type: Number, default: 1 }
    }
  ],
  date: {
    type: Date,
    default: Date.now,
    max: Date.now
  },
  orderStatus: {
    type: String,
    enum: ["recieved", "confirmed", "preparing", "sended", "delivered"],
    default: "recieved"
  },
  paymentMethod: {
    type: String,
    enum: ["cash", "card"],
    required: [true, "You must specify the payment method"]

  }
});

OrderSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("order", OrderSchema);
