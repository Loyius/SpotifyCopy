import {MongoClient} from "mongodb";

const URI = "mongodb+srv://spotifyCopy:spotifyCopy@cluster0.g7u9y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//mongodb+srv://fullstackjornada:qojI71xVU2aV8UKC@cluster0.v1qra.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const client = new MongoClient(URI);

export const db = client.db("spotifyCopy");
//const songCollection = await db.collection('songs').find({}).toArray();
