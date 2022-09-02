import { MongoClient } from "mongodb";

// api/new-meetup
// post /api/new-meetup
async function handler(req, res) {
  console.log({ req, res });
  if (req.method === "POST") {
    const data = req.body;
    // const { title, image, address, description, id } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://tosmannn:%40Crismalex22@cluster0.gqltwzl.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    (await client).close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
