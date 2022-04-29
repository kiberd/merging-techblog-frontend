import React, { useState } from 'react';

import Layout from '../components/Layout';
import SquarePostList from '../components/SquarePostList'
import RectanglePostList from '../components/RectanglePostList'

import { listState } from '../atoms/style';
import { useRecoilState } from 'recoil';

import { getPost } from '../api/posts';


export default function Home(props) {

  const [isList, setIsList] = useRecoilState(listState);
  
  return (
    <Layout>

      {/* main section */}
      <main class="bg-white dark:bg-black">
        <div class="max-w-25xl mx-auto py-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
          <div class="px-4 py-2 sm:px-0 bg-white dark:bg-black">
            <div class="h-100">
              {isList ? <RectanglePostList data={props.data}/> : <SquarePostList data={props.data}/>}
            </div>
          </div>
        </div>
      </main>

    </Layout>

  )
}

export const getStaticProps = async () => {
  
  const data = await getPost(10);

  return {
    props: { data }
  }
};

