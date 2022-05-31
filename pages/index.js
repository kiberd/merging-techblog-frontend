import React, { useState } from 'react';
import Head from 'next/head';

import Layout from '../components/layout/Layout';
import SquarePostList from '../components/post/SquarePostList'
import RectanglePostList from '../components/post/RectanglePostList'

import { listState } from '../atoms/style';
import { useRecoilState } from 'recoil';

import { getPost } from '../api/posts';


export default function Home() {

  const [isList, setIsList] = useRecoilState(listState);
  
  return (
    <>
    <Head>
      <meta name="google" content="notranslate" />
    </Head>
    
    <Layout>

      {/* main section */}
      <main class="bg-white dark:bg-black">
        <div class="max-w-25xl mx-auto py-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
          <div class="px-4 py-2 sm:px-0 bg-white dark:bg-black">
            <div class="h-100">
              <SquarePostList />
              {/* {isList ? <RectanglePostList data={props.data}/> : <SquarePostList data={props.data}/>} */}
            </div>
          </div>
        </div>
      </main>

    </Layout>

    </>

  )
}

// export const getStaticProps = async () => {
  
//   const data = await getPost(10);

//   return {
//     props: { data }
//   }
// };

