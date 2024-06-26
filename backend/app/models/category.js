const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const CategorySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true, trim: true, lowercase: true },
    type: {
      type: String,
      enum: ["project", "comment", "post","ticket"],
      default: "project",
      required: true,
    },
    parentId: {
      type: ObjectId,
      ref: "Category",
      default: null,
    },
    icon: {
      sm: { type: String, default: null },
      lg: { type: String, default: null },
    },
  },
  {
    timestamps: true,
  }
);

CategorySchema.index({ title: "text" });

module.exports = {
  CategoryModel: mongoose.model("Category", CategorySchema),
};
