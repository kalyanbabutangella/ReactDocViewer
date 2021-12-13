import React from 'react';
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

export default function JpgView() {
  const docs=[
    {uri: "https://firebasestorage.googleapis.com/v0/b/immigration-v1.appspot.com/o/CASES%2FH1-B%20APPROVAL%20COPY_HGKIWZY43SJKIUA4I7AD_2021-07-12T10%3A20%3A32.470Z.jpg?alt=media&token=7ec56ca7-4b44-4290-9bd2-17e67f401e61", fileType: "jpg"},
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
