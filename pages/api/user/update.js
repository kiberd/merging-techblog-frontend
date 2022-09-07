import connectMongo from "../../../lib/connectMongo";
import UserModel from "../../../models/userModel";

export default async function updateUser(req, res) {
	try {
		const email = req.body.user.email;
        const bookmarks = req.body.user.bookmarkList;

		await connectMongo();

        const user =  await UserModel.updateOne({ email: email }, { bookmarks: bookmarks });

        res.json(user);

	} catch (error) {
		res.json({ error });
	}
}
