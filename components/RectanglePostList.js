import React, { useState, useEffect } from 'react';
import SquarePost from './SquarePost';
import RectanglePost from './RectanglePost';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import { getMorePost } from '../api/posts';


const RectanglePostList = ({ data }) => {

    const [posts, setPosts] = useState(data);
    const [hasMore, setHasMore] = useState(true);

    const getMorePost = async () => {
        
        const { data } = await axios(`https://jsonplaceholder.typicode.com/photos?_start=${posts.length}&_limit=10`);
        setPosts((post) => [...post, ...data]);
        
    };


    return (
        <div class="bg-white dark:bg-black">
            <div class="max-w-2xl mx-auto py-2 px-4 sm:py-5 sm:px-0 lg:max-w-7xl lg:px-8">
                <div>
                    <InfiniteScroll
                        dataLength={posts.length}
                        next={getMorePost}
                        hasMore={hasMore}
                        pullDownToRefreshThreshold={100}
                        loader={<h3> Loading...</h3>}
                        endMessage={<h4>Nothing more to show</h4>}
                    >
                        {
                            posts.map((data) => (
                                <RectanglePost data={data} />
                            ))
                        }
                    </InfiniteScroll>
                </div>
            </div>
        </div>
    );
};

export default RectanglePostList;