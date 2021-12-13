import React from 'react';
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

export default function PdfView() {
    const docs=[
        {uri: "https://firebasestorage.googleapis.com/v0/b/immigration-v1.appspot.com/o/CASES%2FH1-B%20APPROVAL%20COPY_HGKIWZY43SJKIUA4I7AD_2021-07-29T09%3A33%3A07.545Z.pdf?alt=media&token=f11d82c6-e673-44d4-a744-9c1a8e2bc134", fileType: "pdf"},
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
