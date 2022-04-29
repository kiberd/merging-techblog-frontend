import React from 'react';

const RectanglePost = () => {
    return (
        <div class="mb-4 bg-white dark:bg-black">
            <a href="#" class="group">
                <div class=" dark:bg-[#1E1E1E] flex flex-initial justify-between box-border items-center w-full bg-slate-100 p-5 rounded-md transition ease-in-out group-hover:-translate-y-2">

                    {/* 왼쪽 내용 */}
                    <div class="mr-6 min-w-0 w-9/12">

                        {/* 작성자 */}
                        <div class="flex items-center">
                            <img class="object-cover rounded-full block w-7 h-7 mr-2" src="https://velog.velcdn.com/images/limsaehyun/profile/f45a5b82-3718-49e9-9c43-7f889802aee2/social.jpeg" alt="user thumbnail of limsaehyun" />
                            <span class="text-sm text-gray-400">by kiberd</span>
                        </div>
                        {/* 제목 */}
                        <h1 class="mt-4 text-xl font-bold text-gray-800 dark:text-gray-300 border-b pb-2">사이드 프로젝트 플랫폼 정보 모음</h1>

                        {/* 내용 */}
                        <div class="pt-4">
                            <p class="line-clamp-2 text-gray-500 break-words leading-6">저는 안드로이드 개발을 시작한 지 1년 정도 된 주니어 개발자입니다. 주니어 개발자(3년 이하)의 개발자는 개발 커리어 성장 욕구가 강한 개발자라고 합니다. 그러나 학교나 학원 등 다양한 방법을 통해 이론을 공부하더라고 이를 실제 프로젝트에서 적용할 기회는 흔치 않았습니다.</p>
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
                            <span class="text-xs px-2 text-gray-400">
                                ·
                            </span>
                            <span class="rounded-md bg-slate-300 dark:bg-slate-600 text-xs p-1 mr-2">
                                tech
                            </span>
                            <span class="rounded-md bg-slate-300 dark:bg-slate-600 text-xs p-1 mr-2">
                                general
                            </span>
                        </div>


                    </div>

                    <div class="w-3/12">
                        <div class="w-full aspect-[7/7] bg-gray-200 rounded-md overflow-hidden xl:aspect-[7/5]">
                            <img src="https://velog.velcdn.com/images/limsaehyun/post/8f076de5-1a20-4e8b-a2bb-19e080c8d2c5/image.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="w-full h-full object-center object-cover" />
                        </div>
                    </div>


                </div>
            </a>
        </div>
    );
};

export default RectanglePost;