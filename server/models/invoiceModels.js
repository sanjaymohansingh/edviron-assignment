// Define the schema for the invoice
const invoiceSchema = new mongoose.Schema({
  dues: [{ type: mongoose.Schema.Types.ObjectId, ref: "Due" }],
  status: String,
});
