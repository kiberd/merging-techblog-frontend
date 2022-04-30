import React from 'react';

const Post = ({ data }) => {

    return (
        <div class="bg-white dark:bg-black">
            <a href="#" class="group">
                <div class="transition ease-in-out group-hover:-translate-y-2 bg-slate-100  dark:bg-[#1E1E1E] rounded-md">

                    <div class="w-full aspect-[7/4] bg-gray-200  rounded-t-md overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                        <img src={data.url} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="w-full h-full object-center object-cover" />
                    </div>

                    <div class="flex-col p-2">
                        <div class="block p-2">
                            <h2 class="mt-4 text-md text-gray-800 dark:text-gray-300">{data.title}</h2>

                            {/* 제목 */}
                            <div>
                                <p class="line-clamp-3 mt-1 text-sm text-gray-500 break-words leading-5">{data.id}
                                </p>
                            </div>

                            {/* 설명 */}
                            <div class="mt-2">
                                <span class="text-xs text-gray-400">
                                    2022년 4월 18일
                                </span>
                                <span class="text-xs px-2 text-gray-400">
                                    ·
                                </span>
                                <span class="text-xs text-gray-400">
                                    10개의 댓글
                                </span>
                            </div>

                            <div class="mt-1">
                                <span class="rounded-md bg-slate-300 dark:bg-slate-600 text-xs p-1 mr-2">
                                    tech
                                </span>
                                <span class="rounded-md bg-slate-300 dark:bg-slate-600 text-xs p-1 mr-2">
                                    general
                                </span>
                            </div>

                            {/* 작성자 */}
                            <div class="border-t border-gray-200 mt-2 flex justify-between">
                                <div class="flex items-center mt-2">
                                    <img class="object-cover rounded-full block w-6 h-6 mr-2" src="https://velog.velcdn.com/images/limsaehyun/profile/f45a5b82-3718-49e9-9c43-7f889802aee2/social.jpeg" alt="user thumbnail of limsaehyun" />
                                    <span class="text-xs text-gray-400">by kiberd</span>
                                </div>
                                <div class="flex items-center mt-2">
                                    <span class="text-xs text-gray-400">181</span>
                                </div>
                            </div>



                        </div>
                    </div>

                </div>




            </a>
        </div>
    );
};

export default Post;