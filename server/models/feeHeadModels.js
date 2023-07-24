// Define the schema for the fee head
const feeHeadSchema = new mongoose.Schema({
  studentFilteringOptions: String,
  frequencyMonths: Number,
  name: String,
  amount: Number,
});
