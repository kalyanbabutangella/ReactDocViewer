import React from 'react';
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

export default function DocView() {
  const docs=[
    {uri: "https://firebasestorage.googleapis.com/v0/b/immigration-v1.appspot.com/o/Application%20form%20UMSL%20internation.docx?alt=media&token=7b7c67c5-75e9-42f8-a4fb-4bea29fadbc8", fileType: "docx"},
  ]
//   const docs=[
//     // {uri:"https://uploads.codesandbox.io/uploads/user/faa4155a-f802-458d-81ad-90b4709d0cf8/4ETB-10.1.1.324.5566.pdf"},
//     {uri:"https://firebasestorage.googleapis.com/v0/b/flair-technologies.appspot.com/o/EmployeeInfo%2FFLR000001%2Fdocuments%2FFLR000001_2021-08-23T11%3A24%3A10.833Z.xlsx?alt=media&token=ca1723e2-7727-49f0-a03a-8d921bb9e9cb"
// }]
//   const demo="https://firebasestorage.googleapis.com/v0/b/flair-technologies.appspot.com/o/EmployeeInfo%2FFLR000001%2Fdocuments%2FFLR000001_2021-08-23T11%3A24%3A10.833Z.xlsx?alt=media&token=ca1723e2-7727-49f0-a03a-8d921bb9e9cb"
//   useEffect(() => {

//   fetch(demo)
//   .then(res => res.blob()) 
//   .then(blob => {
//     let arr=docs
//     let objectURL = URL.createObjectURL(blob).slice(5);
//     console.log(objectURL,arr)
//     arr.push({uri:objectURL})
//     setDocs(arr)
// });
    
    
//   }, [demo])

  return (
    <DocViewer
      pluginRenderers={DocViewerRenderers}
      documents={docs}
      style={{width: window.innerWidth*0.75, height:window.innerHeight*0.9}}
      config={{
        header: {
         disableHeader: false,
         disableFileName: true,
         retainURLParams: true
        }
       }}
    />
  );
}
