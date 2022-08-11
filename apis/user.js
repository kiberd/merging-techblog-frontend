import axios from "axios";

export const addUser = async (user) => {
	const { data } = await axios.post(`/apis/user/create`, {
		user: user,
	});

	return data;
};


export const getUser = async (email) => {
	const { data } = await axios.post(`/apis/user/read`, {
		email: email,
	});

	return data;
};

