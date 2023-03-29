import React from "react";
import Header from "./Header";

const Previwer = ({getMarkdownHTML, previewerSize, handleSizeChange})=>{

    return(
        <section className="previewerWrap">
            {/* Agregar icono al principio y pantalla completa */}
            <Header sectionName='Previewer' handleSizeChange={handleSizeChange}/>
            <article style={{height: previewerSize}} id="preview" dangerouslySetInnerHTML={getMarkdownHTML()}/>
        </section>
    );
}

export default Previwer;