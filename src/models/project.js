const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

let projects;
try {
  projects = mongoose.model("Projects");
} catch (error) {
  projects = mongoose.model("Projects", projectSchema);
}
export default projects;
