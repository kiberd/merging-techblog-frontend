import React from 'react';


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


const Post = ({ data }) => {



    return (
        <div class="bg-white dark:bg-black">
            <a href={`${data.link}`} target="_blank" class="group">
                <div class="transition ease-in-out group-hover:-translate-y-2 bg-slate-100  dark:bg-[#1E1E1E] rounded-md">

                    {/* <div class="w-full p-4 rounded-t-md overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                        <img class="object-cover rounded-full block w-6 h-6 mr-2" src="https://velog.velcdn.com/images/limsaehyun/profile/f45a5b82-3718-49e9-9c43-7f889802aee2/social.jpeg" alt="user thumbnail of limsaehyun" />
                    </div> */}

                    <div class="flex-col p-1">
                        <div class="block p-2">

                            <div>
                                {/* <img class="object-cover rounded-full block w-6 h-6 mr-2" src="https://velog.velcdn.com/images/limsaehyun/profile/f45a5b82-3718-49e9-9c43-7f889802aee2/social.jpeg" alt="user thumbnail of limsaehyun" /> */}
                                <img class="object-cover rounded-full block w-9 h-9 mr-2" src={logoUrl(data.companyId)} />
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
                                    {/* 2022년 4월 18일 */}
                                    {data.date[0]}년 {data.date[1]}월 {data.date[2]}일
                                </span>
                                {/* <span class="text-xs px-2 text-gray-400">
                                    ·
                                </span>
                                <span class="text-xs text-gray-400">
                                    10개의 댓글
                                </span> */}
                            </div>

                            <div class="mt-1">
                                {/* <span class="rounded-md bg-slate-300 dark:bg-slate-600 text-xs p-1 mr-2">
                                    tech
                                </span>
                                <span class="rounded-md bg-slate-300 dark:bg-slate-600 text-xs p-1 mr-2">
                                    general
                                </span> */}
                            </div>

                            {/* 작성자 */}
                            <div class="border-t border-gray-200 mt-2 flex justify-between">
                                <div class="flex items-center mt-2">
                                    {/* <img class="object-cover rounded-full block w-6 h-6 mr-2" src="https://velog.velcdn.com/images/limsaehyun/profile/f45a5b82-3718-49e9-9c43-7f889802aee2/social.jpeg" alt="user thumbnail of limsaehyun" /> */}
                                    <span class="text-xs text-gray-400">by  <span class="text-gray-600 text-xs">{data.author}</span></span>
                                </div>
                                <div class="flex items-center mt-2">
                                    <span class="rounded-md bg-slate-300 dark:bg-slate-600 text-xs p-1 mr-2">
                                        tech
                                    </span>
                                    <span class="rounded-md bg-slate-300 dark:bg-slate-600 text-xs p-1 mr-2">
                                        general
                                    </span>
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