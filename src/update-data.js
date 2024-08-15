import { MongoClient } from "mongodb";

async function run() {
  // Step 1: Connect to MongoDB
  const uri = "mongodb+srv://admin:AJAfeu7avyTMwIQM@cluster0.hqlch6b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";  // Replace with your MongoDB connection string
  const client = new MongoClient(uri);

  try {
    // Step 2: Connect to the MongoDB client
    await client.connect();

    // Step 3: Select the database
    const database = client.db("gabc-database");

    // Step 4: Select the collection
    const collection = database.collection("user-data");

    // Step 5: Create a document to insert
    const document = {
      name: "John Doe",
      email: "johndoe@example.com",
    };

    // Step 6: Insert the document
    const result = await collection.insertOne(document);

    // Step 7: Print the inserted document ID
    console.log("Inserted document ID:", result.insertedId);
  } finally {
    // Step 8: Close the connection
    await client.close();
  }
}

run().catch(console.dir);


import { MongoClient } from "mongodb";

async function run() {
  // Step 1: Connect to MongoDB
  const uri = "mongodb+srv://admin:AJAfeu7avyTMwIQM@cluster0.hqlch6b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";  // Replace with your MongoDB connection string
  const client = new MongoClient(uri);

  try {
    // Step 2: Connect to the MongoDB client
    await client.connect();

    // Step 3: Select the database
    const database = client.db("gabc-database");

    // Step 4: Select the collection
    const collection = database.collection("user-data");

    // Step 5: Create a document to insert
    // const document = {
    //   name: "John Doe",
    //   email: "johndoe@example.com",
    // };

    // // Step 6: Insert the document
    // const result = await collection.insertOne(document);

    // // Step 7: Print the inserted document ID
    // console.log("Inserted document ID:", result.insertedId);

    // Step 8: Retrieve and print all documents
    const allDocuments = await collection.find({}).toArray();
    console.log("All documents in the collection:", allDocuments);
  } finally {
    // Step 9: Close the connection
    await client.close();
  }
}

run().catch(console.dir);
