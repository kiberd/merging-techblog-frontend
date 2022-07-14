import axios from "axios";

export const addUser = async (user) => {
	const { data } = await axios.post(`/api/user/create`, {
		user: user,
	});

	return data;
};


export const getUser = async (email) => {
	const { data } = await axios.post(`/api/user/read`, {
		email: email,
	});

	return data;
};
