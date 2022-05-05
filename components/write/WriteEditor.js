import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Router from 'next/router';
import styled from 'styled-components';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { EditorState } from 'draft-js';

import Button from '../common/Button';

const Editor = dynamic(() => import('react-draft-wysiwyg').then((mod) => mod.Editor), {
    ssr: false,
});

const MyBlock = styled.div`
    width: 100%;
    .wrapper-class{
        width: 100% !important;
        margin: 0 auto;
        margin-bottom: 1rem;
        
    }
    .editor-class {
        // width: 100%;
        height: 600px !important;
        border: 1px solid #f1f1f1 !important;
        padding-left: 5px !important;
        border-radius: 2px !important;
  }
`;

const WriteEditor = () => {

    // useState로 상태관리하기 초기값은 EditorState.createEmpty()
    // EditorState의 비어있는 ContentState 기본 구성으로 새 개체를 반환 => 이렇게 안하면 상태 값을 나중에 변경할 수 없음.
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const onEditorStateChange = (editorState) => {
        // editorState에 값 설정
        setEditorState(editorState);
    };

    useEffect(() => {
        console.log(editorState);
    } ,[editorState])
    

    return (
        <>
            <MyBlock>

                <Editor
                    editorState={editorState}
                    wrapperClassName="wrapper-class"
                    toolbarClassName="toolbar-class"
                    editorClassName="editor-class"
                    onEditorStateChange={onEditorStateChange}
                    placeholder="내용을 입력해주세요."
                    toolbar={{
                        options: ['inline', 'list', 'textAlign', 'link'], 
                    }}
                    localization={{
                        locale: 'ko',
                    }}
                />

                <div class="w-full flex justify-between">
                    <div>
                        <button onClick={() => Router.back()} class="border-2 rounded-md p-2 m-2 text-sm"> 뒤로가기 </button>
                    </div>

                    <div class="flex">
                        <button class="border-2 rounded-md p-2 m-2 text-sm"> 임시저장 </button>
                        <button class="border-2 rounded-md p-2 m-2 text-sm"> 발행 </button>
                    </div>

                </div>

            </MyBlock>


        </>
    );
};

export default WriteEditor;