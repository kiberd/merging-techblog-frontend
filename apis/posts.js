import axios from "axios";

export const getPost = async (offset) => {
	const { data } = await axios(process.env.NEXT_PUBLIC_BASE_URL + `/view/${offset}/12`);

	return data;
};

export const getBookmarkPost = async (postList) => {
	const { data } = await axios.post(`/api/post/read`, {
		postList: postList,
	});

	return data;
};
