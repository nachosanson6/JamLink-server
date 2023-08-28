const mongoose = require("mongoose");


const MONGO_URI =
  process.env.MONGODB_URI || "mongodb+srv://Sanson6:Leg27KISbcTipNPt@jamlink.rlxlt3n.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    const dbName = x.connections[0].name;
    console.log(`Connected to Mongo! Database name: "${dbName}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
