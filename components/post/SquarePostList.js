import React, { useState, useEffect } from 'react';
import SquarePost from './SquarePost';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import { getMorePost, getPost } from '../../api/posts';

import { useQuery } from 'react-query';

import { useRecoilValue } from 'recoil';
import { searchFilterState } from '../../atoms/search';


const getDateObject = (dateArry) => {
    return new Date(dateArry[0], dateArry[1] - 1, dateArry[2], 0, 0, 0, 0);
};


const SquarePostList = () => {

    const [posts, setPosts] = useState([]);

    // const [filterData, setFilterData] = useState(data);
    // const filter = useRecoilValue(searchFilterState);

    const {
        isLoading,
        isError,
        data: postData,
        isFetching,
        refetch: fetchPost,
    } = useQuery("getPost", () => getPost(posts.length), {
        enabled: true
    });

    useEffect(() => {

        // setEntireData(postData);
        // setFilterData(postData);

        if (posts && postData) { 
            setPosts((posts) => [...posts, ...postData]);
        } else {
            setPosts(postData);
        }

    }, [postData]);


    // useEffect(() => {

    //     if (!isLoading && !isFetching) {

    //         let newFilterData = entireData;

    //         newFilterData = entireData
    //         .filter((data) => {
    //             if (filter.keyword !== '') {
    //                 return data.title.includes(filter.keyword);
    //             } else {
    //                 return true;
    //             }
    //         })
    //         .filter((data) => {
    //             if (filter.company.length > 0) {
    //                 return filter.company.includes(data.companyId);
    //             } else {
    //                 return true;
    //             }
    //         });            

    //         setFilterData(newFilterData);
    //     }

    // }, [filter]);


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
                        <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {
                            posts && posts.map((data) => (
                                <SquarePost data={data}/>
                            ))

                            // posts && posts.sort((a, b) => {
                            //     return getDateObject(b.date) - getDateObject(a.date);
                            // }).map((data, index) => (
                            //     <SquarePost key={index} data={data} />
                            // ))
                        }
                        </div>
                    </InfiniteScroll>

                {/* <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                    {
                        // filterData && filterData.map((data) => (
                        //     <SquarePost data={data} />
                        // ))

                        filterData && filterData.sort((a, b) => {
                            return getDateObject(b.date) - getDateObject(a.date);
                        }).map((data, index) => (
                            <SquarePost key={index} data={data} />
                        ))

                    }
                </div> */}


            </div>
        </div>
    );
};

export default SquarePostList;