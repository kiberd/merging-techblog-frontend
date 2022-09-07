import React, { useState, useEffect } from "react";
import SquarePost from "./SquarePost";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { getPost } from "../../apis/posts";

import { useQuery } from "react-query";

import { useRecoilState, useRecoilValue } from "recoil";
import { searchFilterState } from "../../atoms/search";
import { userState } from "../../atoms/auth";

import { updateUser } from "../../apis/user";

const SquarePostList = () => {
	const [posts, setPosts] = useState([]);
	const [filterData, setFilterData] = useState();

	const [user, setUser] = useRecoilState(userState);

	const filter = useRecoilValue(searchFilterState);

	const {
		isLoading,
		isError,
		data: postData,
		isFetching,
		refetch: fetchPost,
	} = useQuery("getPost", () => getPost(posts.length), {
		enabled: true,
	});

	useEffect(() => {
		if (posts && postData) {
			setPosts((posts) => [...posts, ...postData]);
		} else {
			setPosts(postData);
		}
	}, [postData]);

	useEffect(() => {
		// Data fetching 중이 아니고 filter에 값이 있을때
		if (
			!isLoading &&
			!isFetching &&
			(filter.keyword || filter.company.length > 0)
		) {
			let newFilterData = posts;

			newFilterData = posts
				.filter((data) => {
					if (filter.keyword !== "") {
						return data.title.includes(filter.keyword);
					} else {
						return true;
					}
				})
				.filter((data) => {
					if (filter.company.length > 0) {
						return filter.company.includes(data.companyId);
					} else {
						return true;
					}
				});

			setFilterData(newFilterData);
		} else {
			setFilterData();
		}
	}, [filter]);

	return (
		<div class="bg-white dark:bg-black">
			<div class="max-w-2xl mx-auto py-2 px-4 sm:py-5 sm:px-6 lg:max-w-7xl lg:px-8">
				<InfiniteScroll
					dataLength={posts?.length}
					next={fetchPost}
					hasMore={true}
					pullDownToRefreshThreshold={500}
				// loader={<h3> Loading...</h3>}
				// endMessage={<h4>Nothing more to show</h4>}
				>
					<div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 p-3">
						{
							filterData
								? filterData.map((data, index) => (
									<SquarePost key={index} data={data} />
								))
								: posts &&
								posts.map((data, index) => (
									<SquarePost key={index} data={data} />
								))
						}
					</div>
				</InfiniteScroll>
			</div>
		</div>
	);
};

export default SquarePostList;
