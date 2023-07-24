// Define the schema for the installment
const installmentSchema = new mongoose.Schema({
  dues: [{ type: mongoose.Schema.Types.ObjectId, ref: "Due" }],
  dueDate: Date,
});
