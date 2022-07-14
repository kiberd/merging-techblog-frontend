import connectMongo from "../../../lib/connectMongo";
import PostModel from "../../../models/postModel";

export default async function readPosts(req, res) {
	try {
		const postList = req.body.postList;

		await connectMongo();
		const posts = await PostModel.find().where("id").in(postList);

		res.json({ posts });
	} catch (error) {
		res.json({ error });
	}
}
