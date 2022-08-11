import connectMongo from "../../../lib/connectMongo";
import UserModel from "../../../models/userModel";

export default async function readUser(req, res) {
	try {
		const email = req.body.email;

		await connectMongo();

		const user = await UserModel.find().where("email").in(email);

		res.json({ user });
	} catch (error) {
		res.json({ error });
	}
}
