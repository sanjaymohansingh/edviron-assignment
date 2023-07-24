// Define the schema for the payment
const paymentSchema = new mongoose.Schema({
  due: { type: mongoose.Schema.Types.ObjectId, ref: "Due" },
  amount: Number,
  paymentDate: Date,
});
