import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getPost = async (offset) => {
	const { data } = await axios(BASE_URL + `/view/${offset}/12`);

	return data;
};

export const getBookmarkPost = async (postList) => {
	const { data } = await axios.post(`/api/post/read`, {
		postList: postList,
	});

	return data;
};

export const getFakePost = async (limit) => {
	const { data } = await axios(
		`https://jsonplaceholder.typicode.com/photos?&_limit=${12}`
	);

	return data;
};

export const getMorePost = async (start) => {
	const { data } = await axios(
		`https://jsonplaceholder.typicode.com/todos?_start=${start}&_limit=10`
	);

	return data;
};
