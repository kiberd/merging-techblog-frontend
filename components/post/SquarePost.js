import React, { useEffect, useState } from 'react';

import { useRecoilState } from "recoil";
import { userState } from "../../atoms/auth";


import { BookmarkIcon as OutlineBookmarkIcon } from "@heroicons/react/outline";
import { BookmarkIcon as SolidBookmarkIcon } from '@heroicons/react/solid';

import { getUser, updateUser } from "../../apis/user";

const logoUrl = (companyId) => {

    switch (companyId) {
        case 1:
            return "/line.png"
        case 2:
            return "/kakao.png"
        case 3:
            return "/wooahan.png"
        default:
            return "/line.png"
    }
}


const SquarePost = ({ data }) => {

    const [tagList, setTagList] = useState();
    const [openTagList, setOpenTagList] = useState(false);
    const [user, setUser] = useRecoilState(userState);
    
    useEffect(() => {
        const arrDup = data.tagList;
        const arrUnique = arrDup.filter((tagObj, index, arr) => {
            return arr.findIndex(item => item.tag === tagObj.tag && item.tagLink === tagObj.tagLink) === index
        });

        setTagList(arrUnique);

    }, [data]);

    const handleTagListClick = (e) => {
        e.preventDefault();
        setOpenTagList(!openTagList);
    }

    const handleBookmark = async (e) => {
        e.preventDefault();

        const postId = data.postId;

        let newBookmarkList;

        // 서버에 있는 bookmarkList 가져와서 정제과정 거친 후
        const dbUser = await getUser(user?.info?.email);
        const oldBookmarkList = dbUser[0].bookmarks;

        if (oldBookmarkList.includes(postId)) {
            newBookmarkList = oldBookmarkList.filter((id) => id !== postId);
        } else {
            if (oldBookmarkList.length > 0) {
                newBookmarkList = [...oldBookmarkList, data.postId];
            } else {
                newBookmarkList = [data.postId];
            }

        };

        // server에 저장
        const newUserInfo = { ...dbUser[0], bookmarkList: newBookmarkList };
        const updateResult = await updateUser(newUserInfo);

        // local에 저장
        const newLocalUserInfo = {
            name: user.info.name,
            email: user.info.email,
            img: user.info.img,
            bookmarkList: newBookmarkList
        }

        setUser({ ...user, info: newLocalUserInfo });

    };

    return (
        <div class="bg-white dark:bg-black">
            <a href={`${data.link}`} target="_blank" class="group">
                {/* <div class="transition ease-in-out group-hover:-translate-y-2 bg-slate-100  dark:bg-[#1E1E1E] rounded-md"> */}
                <div class="bg-slate-100  dark:bg-[#1E1E1E] rounded-md">
                    <div class="flex-col p-1">
                        <div class="block p-2">

                            <div className="flex justify-between" >
                                <img class="object-cover rounded-full block w-9 h-9 mr-2" src={logoUrl(data.companyId)} />

                                {user.isLogin ?
                                    user.info.bookmarkList.some((id) => id === data.postId) ? (
                                        <SolidBookmarkIcon
                                            onClick={handleBookmark} className="w-5 h-5"
                                        />
                                    ) : (
                                        <OutlineBookmarkIcon
                                            onClick={handleBookmark} className="w-5 h-5"
                                        />
                                    )
                                    : null}
                            </div>

                            <h2 class="my-4 text-xl text-gray-800 dark:text-gray-300 line-clamp-2 min-h-[6vh]">{data.title}</h2>

                            {/* 제목 */}
                            <div className="min-h-[10vh]">
                                <p class="line-clamp-3 mt-1 text-sm text-gray-500 break-words leading-5">{data.briefContent}
                                </p>
                            </div>

                            {/* 설명 */}
                            <div class="mt-2">
                                <span class="text-xs text-gray-400">
                                    {data.date[0]}년 {data.date[1]}월 {data.date[2]}일
                                </span>
                            </div>
                            {/* 작성자 */}
                            <div class="border-t border-gray-200 mt-2 flex justify-between">
                                <div class="flex items-center mt-2">
                                    {/* <img class="object-cover rounded-full block w-6 h-6 mr-2" src="https://velog.velcdn.com/images/limsaehyun/profile/f45a5b82-3718-49e9-9c43-7f889802aee2/social.jpeg" alt="user thumbnail of limsaehyun" /> */}
                                    <span class="text-xs text-gray-400">by  <span class="text-gray-600 text-xs">{data.author}</span></span>
                                </div>
                            </div>
                            {/* Tag List */}
                            <div class="mt-2 flex justify-between">
                                <div class="flex min-h-[1.6rem]">
                                    {!openTagList && tagList && tagList.map((tagObj, index) => {
                                        if (index === 0 || index === 1) {
                                            return (
                                                <span key={index} class="rounded-md bg-slate-300 dark:bg-slate-600 text-[0.5rem] justify-center flex px-2 py-1 mr-1 w-auto">
                                                    {tagObj.tag}
                                                </span>
                                            )
                                        }
                                    })}
                                </div>
                                {tagList?.length > 3 ?
                                    <div onClick={handleTagListClick}>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                        </svg>
                                    </div> : null}
                            </div>

                            <div>
                                {openTagList && tagList && tagList.map((tagObj, index) => {
                                    if (tagList.length > 2) return (
                                        <span class="rounded-md bg-slate-300 dark:bg-slate-600 text-[0.5rem] justify-center flex px-2 py-1 my-1 w-auto">
                                            {tagObj.tag}
                                        </span>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default React.memo(SquarePost);