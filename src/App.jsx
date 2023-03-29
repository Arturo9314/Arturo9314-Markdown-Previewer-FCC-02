import { useState } from 'react'
import './App.css'
import Editor from './components/Editos'
import Previwer from './components/Previewer'
import { marked } from 'marked'

function App() {

  const defaultMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...

### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks


\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
        

`;

  const [markdown, setMarkdown] = useState(defaultMarkdown);
  const [editorSize, setEditorSize]= useState('25vh')
  const [previewerSize, setPreviewerSize] = useState('auto');
  
  const handleInputChange = (event)=>{
    setMarkdown(event.target.value)
  };

  const getMarkdownHTML = ()=>{
    return { __html: 
      marked(markdown, { breaks: true })
      };
  }

  const handleSizeChange = (component) => {
    if (component === "Editor") {
      setEditorSize(editorSize === '25vh' ? '100vh' : '25vh');
    } else if (component === "Previewer") {
      setPreviewerSize(previewerSize === 'auto' ? '100vh' : 'auto');
    }
  };
  

  return (
    <div className="App">
      <Editor handleSizeChange={handleSizeChange} value={markdown} handleInputChange={handleInputChange} editorSize={editorSize} 
        />
      <Previwer handleSizeChange={handleSizeChange} getMarkdownHTML={getMarkdownHTML} previewerSize={previewerSize}
        />
    </div>
  )
}

export default App
