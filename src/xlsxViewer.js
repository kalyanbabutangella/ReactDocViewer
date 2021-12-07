import React from 'react';
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

export default function XlsxView() {
    const docs=[
        {uri: "https://firebasestorage.googleapis.com/v0/b/immigration-v1.appspot.com/o/6th%20Nov%20Interview%20details.xlsx?alt=media&token=975d7712-da70-44a7-8f7a-6d95c3945a92", fileType: "xlsx"},
    ]

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
