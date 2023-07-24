// Define the schema for the transaction
const transactionSchema = new mongoose.Schema({
  paymentAttemptDetails: Object,
  invoice: { type: mongoose.Schema.Types.ObjectId, ref: "Invoice" },
});
