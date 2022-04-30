import React, { useState, useEffect } from 'react';
import SquarePost from './SquarePost';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import { getMorePost } from '../api/posts';



const SquarePostList = ({ data }) => {

    const [posts, setPosts] = useState(data);
    const [hasMore, setHasMore] = useState(true);

    const getMorePost = async () => {
        
        if(posts){
            const { data } = await axios(`https://jsonplaceholder.typicode.com/photos?_start=${posts.length}&_limit=10`);
            setPosts((post) => [...post, ...data]);
        
        }
        
    };


    return (
        <div class="bg-white dark:bg-black">
            <div class="max-w-2xl mx-auto py-2 px-4 sm:py-5 sm:px-6 lg:max-w-7xl lg:px-8">
                
                    
                <InfiniteScroll
                        dataLength={posts?.length}
                        next={getMorePost}
                        hasMore={hasMore}
                        pullDownToRefreshThreshold={100}
                        loader={<h3> Loading...</h3>}
                        endMessage={<h4>Nothing more to show</h4>}
                        
                    >
                        <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {
                            posts && posts.map((data) => (
                                <SquarePost data={data}/>
                            ))
                        }
                        </div>
                    </InfiniteScroll>

                
            </div>
        </div>
    );
};

export default SquarePostList;