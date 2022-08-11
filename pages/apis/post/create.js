import connectMongo from "../../../lib/connectMongo";
import Post from "../../../models/postModel";

export default async function createPost(req, res) {
	try {
		
		await connectMongo();
	
		const test = await Post.create(req.body);
		

		res.json({ test });
	} catch (error) {
		
		res.json({ error });
	}
};
