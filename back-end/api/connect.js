import {MongoClient} from "mongodb";

const URI = "mongodb+srv://spotifyCopy:spotifyCopy@cluster0.g7u9y.mongodb.net/";

const client = new MongoClient(URI);

export const db = client.db("spotifyCopy");
//const songCollection = await db.collection('songs').find({}).toArray();
