// Define the schema for the due
const dueSchema = new mongoose.Schema({
  feeHead: { type: mongoose.Schema.Types.ObjectId, ref: "FeeHead" },
  dueDate: Date,
});
