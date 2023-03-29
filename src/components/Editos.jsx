import React from "react";
import Header from './Header';

const Editor = ({value, handleInputChange, editorSize, handleSizeChange})=>{


    return(
        <section className="editorWrap" >
            <Header sectionName='Editor' handleSizeChange={handleSizeChange}/>
            <textarea style={{height: editorSize}} value={value} onChange={handleInputChange} id="editor" type="text">
            </textarea>
        </section>
    );
}

export default Editor;