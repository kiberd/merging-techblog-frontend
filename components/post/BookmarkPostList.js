import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { getBookmarkPost } from "../../apis/posts";

const BookmarkPostList = () => {

    const postList = ["post-124045-1", "post-124033-1", "post-123877-1"];

    const {
		data: bookmarkData,
        refetch: reFetchBookmarkPost,
	} = useQuery("getBookmarkPost", () => getBookmarkPost(postList), {
		enabled: false,
	});

    useEffect(() => {

        console.log(bookmarkData);
    } ,[bookmarkData])

    return (
        <div>
            
        </div>
    );
};

export default BookmarkPostList;