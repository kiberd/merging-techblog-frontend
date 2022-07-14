import connectMongo from "../../../lib/connectMongo";
import Post from "../../../models/postModel";

export default async function updatePosts(req, res) {
	try {
	
		await connectMongo();
		const posts = await Post.find();
		
        console.log(posts);

		res.json({ posts });
	} catch (error) {
		
		res.json({ error });
	}
};
