import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class Content extends Component {
  state = {
    textEditor: "<p>Hello from CKEditor 5!</p>"
  };
  render() {
    console.log(this.state.textEditor);
    return (
      <div className="App">
        <>
          <h2>Using CKEditor 5 build in React</h2>
          <CKEditor
            editor={ClassicEditor}
            onChange={(event, editor) => {
              this.setState({ textEditor: editor.getData() });
            }}
            data={this.state.textEditor}
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          />
        </>
      </div>
    );
  }
}


export default Content;