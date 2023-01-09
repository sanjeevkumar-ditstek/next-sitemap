import dynamic from 'next/dynamic';
import React, { useState } from 'react';
const Editor = dynamic(() => import("./editor"), { ssr: false });

const Post = () => {
    const [editorData, setEditorData] = useState("");
     return (
        <div>
            <Editor editorData = {editorData} onChange={(data) => setEditorData(data)} />
        </div>
    );
}

export default Post;
