import React from 'react';
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

export default function JpgView() {
  const docs=[
    {uri: "https://demo1-app-bucket.s3.ap-south-1.amazonaws.com/download.jpeg", fileType: "jpg"},
  ]

return (
    <DocViewer
        pluginRenderers={DocViewerRenderers}
        documents={docs}
        style={{width: window.innerWidth*0.75, height:window.innerHeight*0.85}}
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
