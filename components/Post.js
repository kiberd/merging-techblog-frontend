import React from 'react';

const Post = () => {
    return (
        <a href="#" class="group bg-slate-50">

            <div class="transition ease-in-out group-hover:-translate-y-2">

                <div class="w-full aspect-[7/4] bg-gray-200 rounded-md overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img src="https://velog.velcdn.com/images/limsaehyun/post/8f076de5-1a20-4e8b-a2bb-19e080c8d2c5/image.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="w-full h-full object-center object-cover" />
                </div>

                <div class="flex-col p-2">
                    <div class="block p-2">
                        <h2 class="mt-4 text-md text-gray-800">사이드 프로젝트 플랫폼 정보 모음</h2>
                        <div>
                            <p class="line-clamp-3 mt-1 text-sm text-gray-500 break-words leading-5">저는 안드로이드 개발을 시작한 지 1년 정도 된 주니어 개발자입니다. 주니어 개발자(3년 이하)의 개발자는 개발 커리어 성장 욕구가 강한 개발자라고 합니다. 그러나 학교나 학원 등 다양한 방법을 통해 이론을 공부하더라고 이를 실제 프로젝트에서 적용할 기회는 흔치 않았습니다.
                            </p>
                        </div>

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

                        <div class="border-t border-gray-200 mt-2 flex justify-between">
                            <a class="flex items-center mt-2">
                                <img class="object-cover rounded-full block w-6 h-6 mr-2" src="https://velog.velcdn.com/images/limsaehyun/profile/f45a5b82-3718-49e9-9c43-7f889802aee2/social.jpeg" alt="user thumbnail of limsaehyun" />
                                <span class="text-xs text-gray-400">by kiberd</span>
                            </a>

                            <div class="flex items-center mt-2">
                                <span class="text-xs text-gray-400">181</span>


                            </div>


                        </div>



                    </div>
                </div>

            </div>




        </a>
    );
};

export default Post;