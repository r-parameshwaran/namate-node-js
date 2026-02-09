const { MongoClient } = require("mongodb");
const encodedPassword = encodeURIComponent("Paramesh@419");
const url = `mongodb+srv://parameshwaran_r:${encodedPassword}@parameshlearnings.hemfvib.mongodb.net/`;
const client = new MongoClient(url);
const dbName = "HelloWorld";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");
  const users = await collection.find({}).toArray();
  console.log("users", users, users._id);
  return "done";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
