import React from 'react';
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

export default function DocView() {
  const docs=[
    {uri: "https://firebasestorage.googleapis.com/v0/b/immigration-v1.appspot.com/o/Application%20form%20UMSL%20internation.docx?alt=media&token=7b7c67c5-75e9-42f8-a4fb-4bea29fadbc8", fileType: "docx"},
    {uri: "https://firebasestorage.googleapis.com/v0/b/immigration-v1.appspot.com/o/CASES%2FH1-B%20APPROVAL%20COPY_HGKIWZY43SJKIUA4I7AD_2021-07-29T09%3A33%3A07.545Z.pdf?alt=media&token=f11d82c6-e673-44d4-a744-9c1a8e2bc134", fileType: "pdf"},
    {uri: "https://firebasestorage.googleapis.com/v0/b/immigration-v1.appspot.com/o/6th%20Nov%20Interview%20details.xlsx?alt=media&token=975d7712-da70-44a7-8f7a-6d95c3945a92", fileType: "xlsx"},
    {uri: "https://firebasestorage.googleapis.com/v0/b/immigration-v1.appspot.com/o/CASES%2FH1-B%20APPROVAL%20COPY_HGKIWZY43SJKIUA4I7AD_2021-07-12T10%3A20%3A32.470Z.jpg?alt=media&token=7ec56ca7-4b44-4290-9bd2-17e67f401e61", fileType: "jpg"},
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
      style={{width: 600, height:600}}
      config={{
        header: {
         disableHeader: false,
         disableFileName: false,
         retainURLParams: true
        }
       }}
    />
  );
}
