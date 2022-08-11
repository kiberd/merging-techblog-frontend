import connectMongo from "../../../lib/connectMongo";
import UserModel from "../../../models/userModel";

export default async function createUser(req, res) {
	try {
		await connectMongo();

		const user = await UserModel.create(req.body.user);

		res.json({ user });
	} catch (error) {
		res.json({ error });
	}
}
