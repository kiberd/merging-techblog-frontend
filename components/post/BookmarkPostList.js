import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getBookmarkPost } from "../../apis/posts";
import { userState } from "../../atoms/auth";
import { useRecoilState, useRecoilValue } from "recoil";
import { searchFilterState } from "../../atoms/search";
import BookmarkPost from './BookmarkPost';
import ClipLoader from "react-spinners/ClipLoader";

const BookmarkPostList = () => {

    const [user, setUser] = useRecoilState(userState);
    const [postList, setPostList] = useState();

    const [posts, setPosts] = useState([]);
    const [filterData, setFilterData] = useState();
    const filter = useRecoilValue(searchFilterState);

    useEffect(() => {
        if (user.isLogin) {
            setPostList(user.info.bookmarkList);
        }
    }, [user]);

    const {
        data: bookmarkData,
        // refetch,
        isLoading,
        isFetching
    } = useQuery(["getBookmarkPost", postList], () => getBookmarkPost(postList), {
        enabled: !!postList,
    });


    useEffect(() => {
        if (bookmarkData) setPosts(bookmarkData.posts);
    }, [bookmarkData]);

    useEffect(() => {

        if (
            filter.keyword || filter.company.length > 0
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

    if (isFetching || isLoading) return (
        <div class="bg-white dark:bg-black">
            <div class="max-w-2xl mx-auto py-2 px-4 sm:py-5 sm:px-6 lg:max-w-7xl lg:px-8">
                <div class="flex justify-center items-center h-[70vh]">
                    <ClipLoader
                        // color={color}
                        loading={true}
                        // cssOverride={override}
                        size={50}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
            </div>
        </div>
    )

    return (
        <div class="bg-white dark:bg-black">
            <div class="max-w-2xl mx-auto py-2 px-4 sm:py-5 sm:px-6 lg:max-w-7xl lg:px-8">
                <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 p-3">
                    {
                        filterData
                            ? filterData.map((filterdData, index) => (
                                <BookmarkPost key={index} data={filterdData} />
                            ))
                            : posts ?
                                posts.map((filterdData, index) => (
                                    <BookmarkPost key={index} data={filterdData} />
                            )) : null
                    }
                </div>
            </div>
        </div>
    );
};

export default BookmarkPostList;