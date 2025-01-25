import mongoose from "mongoose";

export default function configMongoDB() {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("mongoDB connected!");
    })
    .catch((error) => console.log(error.message));

  mongoose.connection.on("connected", () => {
    console.log("Mongoose connected to db");
  });

  mongoose.connection.on("error", (err) => {
    console.log(err.message);
  });

  mongoose.connection.on("disconnect", () => {
    console.log("Mongoose connection is disconnected.");
  });
}