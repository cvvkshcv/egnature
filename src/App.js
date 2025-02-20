import React from "react";
import "./App.css";
import ReactAvatarEditor from "react-avatar-editor";
import Dropzone from "react-dropzone";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA0QjVBQzE2MDZBRDExRUFBRTkyQzg0MERENzA2QkFBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA0QjVBQzE3MDZBRDExRUFBRTkyQzg0MERENzA2QkFBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDRCNUFDMTQwNkFEMTFFQUFFOTJDODQwREQ3MDZCQUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDRCNUFDMTUwNkFEMTFFQUFFOTJDODQwREQ3MDZCQUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz64i3UuAAAXjElEQVR42uydC5QU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",
      logo:
        "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 95.3 22' style='enable-background:new 0 0 95.3 22;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%232299DD;%7D .st1%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cpath class='st0' d='M20,22H2c-1.1,0-2-0.9-2-2V2c0-1.1,0.9-2,2-2h18c1.1,0,2,0.9,2,2v18C22,21.1,21.1,22,20,22z'/%3E%3Cg%3E%3Cg%3E%3Cpath class='st1' d='M15.3,16.9H6.9c-1,0-1.8-0.8-1.8-1.8v-2.4c0-0.4,0.2-0.6,0.6-0.6s0.6,0.2,0.6,0.6v2.4c0,0.4,0.2,0.6,0.6,0.6 h8.4c0.4,0,0.6-0.2,0.6-0.6v-2.4c0-0.4,0.2-0.6,0.6-0.6c0.4,0,0.6,0.2,0.6,0.6v2.4C17.1,16.2,16.3,16.9,15.3,16.9z'/%3E%3C/g%3E%3Cg%3E%3Cpath class='st1' d='M14.5,9c-0.1,0.1-0.2,0.2-0.4,0.2S13.8,9.1,13.6,9l-2-2v5.8c0,0.3-0.3,0.6-0.6,0.6c-0.3,0-0.6-0.3-0.6-0.6V7 l-2,2C8.2,9.2,7.9,9.2,7.6,9c-0.2-0.2-0.2-0.6,0-0.8l3-3C10.7,5.1,10.8,5,10.8,5h0.1c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0h0.1 c0.1,0,0.1,0.1,0.2,0.1l3,3C14.7,8.4,14.7,8.7,14.5,9z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cpath d='M31.5,13.7c-0.5-0.2-0.8-0.6-1.1-1c-0.3-0.4-0.4-0.9-0.4-1.5V5.7c0,0,0-0.1,0-0.1s0.1,0,0.1,0h1.4c0,0,0.1,0,0.1,0 c0,0,0,0.1,0,0.1v5.5c0,0.4,0.1,0.8,0.4,1c0.3,0.3,0.6,0.4,1,0.4c0.4,0,0.8-0.1,1-0.4c0.3-0.3,0.4-0.6,0.4-1V5.7c0,0,0-0.1,0-0.1 c0,0,0.1,0,0.1,0h1.4c0,0,0.1,0,0.1,0c0,0,0,0.1,0,0.1v5.5c0,0.6-0.1,1.1-0.4,1.5c-0.3,0.4-0.6,0.8-1.1,1c-0.5,0.2-1,0.4-1.6,0.4 C32.5,14.1,31.9,14,31.5,13.7z'/%3E%3Cpath d='M43.2,10.9c0,0.6-0.1,1.1-0.2,1.5c-0.2,0.5-0.5,0.9-0.9,1.2c-0.4,0.3-0.9,0.5-1.5,0.5c-0.6,0-1-0.2-1.3-0.6c0,0,0,0,0,0 c0,0,0,0,0,0v2.6c0,0,0,0.1,0,0.1c0,0-0.1,0-0.1,0h-1.4c0,0-0.1,0-0.1,0c0,0,0-0.1,0-0.1V8c0,0,0-0.1,0-0.1c0,0,0.1,0,0.1,0h1.4 c0,0,0.1,0,0.1,0c0,0,0,0.1,0,0.1v0.4c0,0,0,0,0,0c0,0,0,0,0,0c0.3-0.4,0.8-0.7,1.4-0.7c0.6,0,1,0.2,1.4,0.5 c0.4,0.3,0.7,0.7,0.9,1.3C43.1,9.9,43.2,10.4,43.2,10.9z M41.5,10.9c0-0.5-0.1-0.9-0.3-1.2c-0.2-0.3-0.5-0.5-0.9-0.5 c-0.4,0-0.6,0.2-0.8,0.5c-0.2,0.3-0.3,0.7-0.3,1.2c0,0.5,0.1,1,0.3,1.2c0.2,0.3,0.5,0.5,0.8,0.5s0.6-0.2,0.8-0.5 S41.5,11.4,41.5,10.9z'/%3E%3Cpath d='M44.3,13.9c0,0,0-0.1,0-0.1V5.7c0,0,0-0.1,0-0.1c0,0,0.1,0,0.1,0h1.4c0,0,0.1,0,0.1,0s0,0.1,0,0.1v8.1c0,0,0,0.1,0,0.1 c0,0-0.1,0-0.1,0h-1.4C44.4,14,44.4,14,44.3,13.9z'/%3E%3Cpath d='M48.2,13.6c-0.5-0.4-0.8-0.8-1-1.4c-0.1-0.4-0.2-0.8-0.2-1.2c0-0.5,0.1-0.9,0.2-1.3c0.2-0.6,0.5-1.1,1-1.4 c0.5-0.3,1.1-0.5,1.7-0.5c0.7,0,1.2,0.2,1.7,0.5c0.5,0.3,0.8,0.8,1,1.4c0.1,0.4,0.2,0.8,0.2,1.3c0,0.4-0.1,0.8-0.2,1.2 c-0.2,0.6-0.5,1.1-1,1.5c-0.5,0.4-1,0.5-1.7,0.5C49.3,14.1,48.7,13.9,48.2,13.6z M50.6,12.4c0.2-0.2,0.3-0.4,0.4-0.7 c0.1-0.3,0.1-0.5,0.1-0.8c0-0.3,0-0.6-0.1-0.9c-0.1-0.3-0.2-0.5-0.4-0.6s-0.4-0.2-0.7-0.2c-0.3,0-0.5,0.1-0.7,0.2 C49.1,9.6,49,9.8,48.9,10c-0.1,0.2-0.1,0.5-0.1,0.9c0,0.4,0,0.6,0.1,0.8c0.1,0.3,0.2,0.5,0.4,0.7c0.2,0.2,0.4,0.2,0.7,0.2 C50.2,12.6,50.4,12.6,50.6,12.4z'/%3E%3Cpath d='M57.8,8c0.4,0.2,0.7,0.4,1,0.7s0.3,0.7,0.3,1v4.1c0,0,0,0.1,0,0.1c0,0-0.1,0-0.1,0h-1.4c0,0-0.1,0-0.1,0c0,0,0-0.1,0-0.1 v-0.4c0,0,0,0,0,0c0,0,0,0,0,0c-0.3,0.4-0.9,0.7-1.6,0.7c-0.6,0-1.1-0.2-1.5-0.5c-0.4-0.3-0.6-0.8-0.6-1.3c0-0.6,0.2-1.1,0.6-1.4 c0.4-0.3,1-0.5,1.8-0.5h1.2c0,0,0.1,0,0.1-0.1V10c0-0.3-0.1-0.5-0.2-0.6s-0.4-0.2-0.7-0.2c-0.2,0-0.5,0-0.6,0.1 c-0.2,0.1-0.3,0.2-0.3,0.4c0,0.1-0.1,0.1-0.2,0.1l-1.5-0.2c-0.1,0-0.1-0.1-0.1-0.1c0-0.3,0.2-0.6,0.4-0.9c0.2-0.3,0.5-0.5,0.9-0.6 c0.4-0.2,0.8-0.2,1.3-0.2C56.9,7.7,57.4,7.8,57.8,8z M57,12.5c0.2-0.2,0.4-0.4,0.4-0.7v-0.4c0,0,0-0.1-0.1-0.1h-0.9 c-0.4,0-0.6,0.1-0.8,0.2c-0.2,0.1-0.3,0.3-0.3,0.6c0,0.2,0.1,0.4,0.2,0.5c0.2,0.1,0.4,0.2,0.6,0.2C56.5,12.8,56.8,12.7,57,12.5z'/%3E%3Cpath d='M64.1,5.6c0,0,0.1,0,0.1,0h1.4c0,0,0.1,0,0.1,0c0,0,0,0.1,0,0.1v8.1c0,0,0,0.1,0,0.1c0,0-0.1,0-0.1,0h-1.4c0,0-0.1,0-0.1,0 c0,0,0-0.1,0-0.1v-0.4c0,0,0,0,0,0c0,0,0,0,0,0c-0.3,0.4-0.8,0.7-1.4,0.7c-0.6,0-1-0.2-1.4-0.5c-0.4-0.3-0.7-0.7-0.9-1.3 c-0.1-0.4-0.2-0.9-0.2-1.5c0-0.6,0.1-1.1,0.2-1.5c0.2-0.5,0.5-0.9,0.9-1.2c0.4-0.3,0.9-0.5,1.5-0.5c0.6,0,1,0.2,1.3,0.6 c0,0,0,0,0,0c0,0,0,0,0,0V5.7C64.1,5.7,64.1,5.7,64.1,5.6z M64.1,10.9c0-0.5-0.1-1-0.3-1.3c-0.2-0.3-0.5-0.5-0.8-0.5 c-0.4,0-0.7,0.2-0.9,0.5c-0.2,0.3-0.3,0.7-0.3,1.3c0,0.5,0.1,0.9,0.3,1.2c0.2,0.3,0.5,0.5,0.9,0.5c0.4,0,0.6-0.2,0.8-0.5 C64,11.8,64.1,11.4,64.1,10.9z'/%3E%3Cpath d='M69.6,13.9c0,0,0-0.1,0-0.1V5.7c0,0,0-0.1,0-0.1s0.1,0,0.1,0h1.4c0,0,0.1,0,0.1,0c0,0,0,0.1,0,0.1v6.7c0,0,0,0.1,0.1,0.1 h3.9c0,0,0.1,0,0.1,0c0,0,0,0.1,0,0.1v1.2c0,0,0,0.1,0,0.1c0,0-0.1,0-0.1,0h-5.5C69.7,14,69.6,14,69.6,13.9z'/%3E%3Cpath d='M77.3,13.6c-0.5-0.4-0.8-0.8-1-1.4c-0.1-0.4-0.2-0.8-0.2-1.2c0-0.5,0.1-0.9,0.2-1.3c0.2-0.6,0.5-1.1,1-1.4 c0.5-0.3,1.1-0.5,1.7-0.5c0.7,0,1.2,0.2,1.7,0.5c0.5,0.3,0.8,0.8,1,1.4c0.1,0.4,0.2,0.8,0.2,1.3c0,0.4-0.1,0.8-0.2,1.2 c-0.2,0.6-0.5,1.1-1,1.5c-0.5,0.4-1.1,0.5-1.7,0.5S77.8,13.9,77.3,13.6z M79.7,12.4c0.2-0.2,0.3-0.4,0.4-0.7 c0.1-0.3,0.1-0.5,0.1-0.8c0-0.3,0-0.6-0.1-0.9c-0.1-0.3-0.2-0.5-0.4-0.6c-0.2-0.2-0.4-0.2-0.7-0.2c-0.3,0-0.5,0.1-0.7,0.2 S78,9.8,77.9,10c-0.1,0.2-0.1,0.5-0.1,0.9c0,0.4,0,0.6,0.1,0.8c0.1,0.3,0.2,0.5,0.4,0.7c0.2,0.2,0.4,0.2,0.7,0.2 C79.3,12.6,79.5,12.6,79.7,12.4z'/%3E%3Cpath d='M86.8,7.9c0,0,0.1,0,0.1,0h1.4c0,0,0.1,0,0.1,0c0,0,0,0.1,0,0.1v5.5c0,1-0.3,1.8-0.9,2.2c-0.6,0.4-1.4,0.7-2.3,0.7 c-0.3,0-0.6,0-0.9-0.1c-0.1,0-0.1-0.1-0.1-0.2l0-1.2c0-0.1,0.1-0.1,0.2-0.1c0.3,0,0.6,0.1,0.8,0.1c0.5,0,0.9-0.1,1.2-0.3 c0.3-0.2,0.4-0.6,0.4-1.1c0,0,0,0,0,0c0,0,0,0,0,0c-0.3,0.3-0.7,0.5-1.3,0.5c-0.5,0-1-0.1-1.4-0.4c-0.4-0.3-0.7-0.7-0.9-1.2 c-0.1-0.4-0.2-0.8-0.2-1.4c0-0.6,0.1-1.1,0.2-1.5c0.2-0.5,0.5-0.9,0.9-1.2c0.4-0.3,0.9-0.4,1.4-0.4c0.6,0,1.1,0.2,1.4,0.6 c0,0,0,0,0,0c0,0,0,0,0,0V8C86.8,7.9,86.8,7.9,86.8,7.9z M86.8,10.9c0-0.2,0-0.4,0-0.6c0-0.1,0-0.3-0.1-0.4 c-0.1-0.2-0.2-0.4-0.4-0.5c-0.2-0.1-0.4-0.2-0.6-0.2c-0.2,0-0.4,0.1-0.6,0.2c-0.2,0.1-0.3,0.3-0.4,0.5c-0.1,0.2-0.2,0.6-0.2,1 c0,0.4,0,0.8,0.1,1c0.1,0.2,0.2,0.4,0.4,0.5c0.2,0.1,0.4,0.2,0.6,0.2c0.3,0,0.5-0.1,0.6-0.2c0.2-0.1,0.3-0.3,0.3-0.5 C86.7,11.6,86.8,11.3,86.8,10.9z'/%3E%3Cpath d='M90.7,13.6c-0.5-0.4-0.8-0.8-1-1.4c-0.1-0.4-0.2-0.8-0.2-1.2c0-0.5,0.1-0.9,0.2-1.3c0.2-0.6,0.5-1.1,1-1.4 c0.5-0.3,1.1-0.5,1.7-0.5c0.7,0,1.2,0.2,1.7,0.5c0.5,0.3,0.8,0.8,1,1.4c0.1,0.4,0.2,0.8,0.2,1.3c0,0.4-0.1,0.8-0.2,1.2 c-0.2,0.6-0.5,1.1-1,1.5c-0.5,0.4-1.1,0.5-1.7,0.5S91.1,13.9,90.7,13.6z M93.1,12.4c0.2-0.2,0.3-0.4,0.4-0.7 c0.1-0.3,0.1-0.5,0.1-0.8c0-0.3,0-0.6-0.1-0.9c-0.1-0.3-0.2-0.5-0.4-0.6c-0.2-0.2-0.4-0.2-0.7-0.2c-0.3,0-0.5,0.1-0.7,0.2 c-0.2,0.2-0.3,0.4-0.4,0.6c-0.1,0.2-0.1,0.5-0.1,0.9c0,0.4,0,0.6,0.1,0.8c0.1,0.3,0.2,0.5,0.4,0.7c0.2,0.2,0.4,0.2,0.7,0.2 C92.7,12.6,92.9,12.6,93.1,12.4z'/%3E%3C/g%3E%3C/svg%3E%0A",
      scrollValue: 1.2,
      position:{x:0.5, y:0.5},
      finalImage: "",
      fullName: "David Johnson",
      title: "SEO Manager",
      websiteurl: "www.loginradius.com",
      editableItem: "",
      isCopied: false,
    };
  }
  // This function will return data of image url (base64)
  toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("get", url);
    xhr.responseType = "blob";
    xhr.onload = function () {
      var fr = new FileReader();
      fr.onload = function () {
        callback(fr.result);
      };
      fr.readAsDataURL(xhr.response);
    };
    xhr.send();
  }
  onCopy = () => {
    var doc = document,
      signature = doc.getElementById("signature"),
      range,
      selection;

    if (doc.body.createTextRange) {
      range = doc.body.createTextRange();
      range.moveToElementText(signature);
      range.select();
    } else if (window.getSelection) {
      selection = window.getSelection();
      range = doc.createRange();
      range.selectNodeContents(signature);
      selection.removeAllRanges();
      selection.addRange(range);
    }
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    this.setState({ isCopied: true });
  };
  onClickSave = () => {
    if (this.editor) {
      this.setState({ editableItem: "" });
      let canvas = document.getElementById("myCanvas");
      const canvasScaled = this.editor.getImageScaledToCanvas();
      const ctx = canvas.getContext("2d");
      let that = this;
      let img = new Image();
      img.onload = function () {
        ctx.beginPath();
        ctx.arc(45, 45, 44, 0, 19.28, false);
        ctx.clip();
        ctx.stroke();
        ctx.closePath();
        ctx.drawImage(img, 0, 0);
        that.setState({ finalImage: canvas.toDataURL() });
      };
      img.src = canvasScaled.toDataURL();
    }
  };

  setEditorRef = (editor) => (this.editor = editor);
  render() {
    let {
      isFinished,
      finalImage,
      fullName,
      title,
      editableItem,
      isCopied,
      websiteurl,
    } = this.state;
    return (
      <div className="App">
        <header className="header">
          <div className="container">
            <div className="logo">
              <svg
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 156.9 33"
              >
                <path
                  class="st0"
                  d="M50.1,12.7v3.6h5.7v3.1h-5.7v3.8h6.5v3.3H46v-17h10.6v3.3L50.1,12.7L50.1,12.7z M66.7,13.6
                c0.7,0.5,1.3,1.1,1.6,1.9V13h4.1v13.3c0,1.2-0.2,2.4-0.7,3.4s-1.2,1.8-2.2,2.4c-1,0.6-2.2,0.9-3.7,0.9c-2,0-3.6-0.5-4.8-1.4
                c-1.2-1-1.9-2.2-2.2-3.9h4.1c0.1,0.5,0.4,1,0.9,1.3s1.1,0.5,1.8,0.5c0.8,0,1.5-0.2,2.1-0.7c0.5-0.5,0.8-1.3,0.8-2.3V24
                c-0.4,0.8-0.9,1.4-1.6,1.9s-1.6,0.7-2.6,0.7c-1.1,0-2.1-0.3-3-0.8c-0.9-0.6-1.6-1.3-2.1-2.4s-0.8-2.3-0.8-3.6c0-1.4,0.3-2.6,0.8-3.7
                c0.5-1,1.2-1.8,2.1-2.4c0.9-0.6,1.9-0.8,3-0.8C65,12.9,65.9,13.1,66.7,13.6z M63.2,17.3c-0.5,0.6-0.8,1.4-0.8,2.4s0.3,1.8,0.8,2.4
                s1.2,0.9,2.1,0.9s1.6-0.3,2.1-0.9c0.6-0.6,0.8-1.4,0.8-2.4s-0.3-1.8-0.8-2.4c-0.6-0.6-1.3-0.9-2.1-0.9
                C64.5,16.5,63.7,16.8,63.2,17.3z M87.4,14.4c0.9,1,1.4,2.4,1.4,4.2v7.8h-4.1v-7.3c0-0.9-0.2-1.6-0.7-2.1s-1.1-0.8-1.9-0.8
                s-1.5,0.3-2,0.8s-0.7,1.3-0.7,2.3v7.1h-4.1V13h4.1v2.4c0.4-0.8,1-1.4,1.7-1.9s1.7-0.7,2.7-0.7C85.2,12.9,86.4,13.4,87.4,14.4z
                M99.1,13.6c0.7,0.5,1.3,1.1,1.6,1.9V13h4.1v13.4h-4.1V24c-0.4,0.8-0.9,1.4-1.6,1.9s-1.6,0.7-2.6,0.7c-1.1,0-2.1-0.3-3-0.8
                c-0.9-0.6-1.6-1.3-2.1-2.4s-0.8-2.3-0.8-3.6c0-1.4,0.3-2.6,0.8-3.7c0.5-1,1.2-1.8,2.1-2.4c0.9-0.6,1.9-0.8,3-0.8
                C97.5,12.9,98.4,13.1,99.1,13.6z M95.7,17.3c-0.5,0.6-0.8,1.4-0.8,2.4s0.3,1.8,0.8,2.4s1.2,0.9,2.1,0.9s1.6-0.3,2.1-0.9
                c0.6-0.6,0.8-1.4,0.8-2.4s-0.3-1.8-0.8-2.4c-0.6-0.6-1.3-0.9-2.1-0.9C96.9,16.5,96.2,16.8,95.7,17.3z M115.3,22.9v3.5h-1.8
                c-1.6,0-2.8-0.4-3.7-1.2c-0.9-0.8-1.3-2.1-1.3-3.9v-4.9h-1.8V13h1.8V9.7h4.1V13h2.7v3.5h-2.7v5c0,0.5,0.1,0.9,0.3,1.1
                c0.2,0.2,0.6,0.3,1.1,0.3H115.3z M130.9,13v13.4h-4.1V24c-0.4,0.8-1,1.4-1.7,1.9c-0.8,0.5-1.6,0.7-2.7,0.7c-1.5,0-2.8-0.5-3.7-1.5
                c-0.9-1-1.4-2.4-1.4-4.2V13h4.1v7.3c0,0.9,0.2,1.6,0.7,2.1s1.1,0.8,1.9,0.8s1.5-0.3,2-0.8s0.7-1.3,0.7-2.3V13H130.9z M139.8,13.6
                c0.8-0.5,1.7-0.7,2.6-0.7v4.4h-1.2c-1.1,0-1.9,0.2-2.5,0.7s-0.9,1.2-0.9,2.4v6.1h-4.1V13h4.1v2.5C138.3,14.7,139,14.1,139.8,13.6z
                M156.8,20.5h-9.3c0,1,0.3,1.7,0.8,2.2c0.5,0.4,1.1,0.7,1.8,0.7c0.6,0,1.1-0.2,1.5-0.5s0.7-0.7,0.8-1.2h4.3
                c-0.2,0.9-0.6,1.8-1.2,2.5c-0.6,0.7-1.3,1.3-2.3,1.8c-0.9,0.4-1.9,0.6-3,0.6c-1.3,0-2.5-0.3-3.5-0.8c-1-0.6-1.8-1.3-2.4-2.4
                s-0.9-2.3-0.9-3.6c0-1.4,0.3-2.6,0.9-3.7c0.6-1,1.4-1.8,2.4-2.4c1-0.6,2.2-0.8,3.5-0.8s2.5,0.3,3.5,0.8s1.8,1.3,2.3,2.3
                c0.6,1,0.8,2.1,0.8,3.4C156.9,19.7,156.8,20.1,156.8,20.5z M152,16.8c-0.5-0.4-1.1-0.7-1.8-0.7c-0.8,0-1.4,0.2-1.9,0.7
                c-0.5,0.4-0.8,1.1-0.8,2h5.2C152.8,17.9,152.5,17.2,152,16.8z M4.6,15c2.6,0,5.3,0,7.9,0s5.2,0,7.7,0c0.5,0,1.2,0.2,1.2-0.6
                c0-0.7-0.7-0.6-1.2-0.6c-5.2,0-10.4,0-15.6,0c-0.5,0-1.2-0.1-1.2,0.6C3.4,15.2,4.1,15,4.6,15z M4.5,9.5c2.6,0,5.3,0,7.9,0
                s5.2,0,7.8,0c0.5,0,1.2,0.2,1.2-0.6c0-0.6-0.6-0.5-1.1-0.5c-5.3,0-10.6,0-15.8,0C4,8.4,3.4,8.3,3.4,9C3.4,9.6,4,9.5,4.5,9.5z
                M20.1,17.8c0.5,0,1.2,0.2,1.2-0.5c0.1-0.8-0.6-0.7-1.1-0.7c-5.3,0-10.6,0-15.8,0c-0.4,0-1-0.1-1.1,0.5c0,0.8,0.6,0.7,1.1,0.7
                c2.6,0,5.2,0,7.8,0C14.9,17.8,17.5,17.8,20.1,17.8z M32.3,4.5c-0.5-1.1-1.1-1.9-2.2-2c-1.2-0.2-2.2,0.4-2.7,1.5
                c-0.2,0.5-0.7,1.1,0,1.5C28,5.8,28,5,28.3,4.6c0.5-0.9,1.2-1.3,2.1-0.7c0.9,0.5,1,1.3,0.5,2.2c-1.7,3.2-3.4,6.4-5,9.6
                c-0.3,0.6-0.5,1.1-1.3,0.6c-0.8-0.4-0.7-0.8-0.4-1.5C25,12.9,25.8,11,26.5,9c0.1-0.4,0.3-0.8-0.2-1.1c-0.5-0.2-0.7,0.2-0.9,0.6
                c-0.2,0.3-0.1,0.8-0.7,0.9c0-2.4,0-4.7,0-7c0-1.9-0.6-2.5-2.6-2.5c-6.5,0-13,0-19.5,0C0.6,0,0,0.6,0,2.6c0,6.8,0,13.7,0,20.6
                c0,1.1,0.3,1.8,1.1,2.5c2.2,2.1,4.3,4.2,6.4,6.3c0.7,0.7,1.5,1,2.4,1c4.1,0,8.2,0,12.3,0c1.8,0,2.4-0.7,2.4-2.5c0-2.8,0-5.7-0.1-8.5
                c0-0.6-0.1-1.1,0.2-1.6c1.4-2.7,2.7-5.4,4.1-8.1c0.9-1.8,1.8-3.5,2.7-5.3c0,0.2,0,0.4,0,0.6c0-0.1,0-0.1,0.1-0.2
                c0,0.1,0,0.1-0.1,0.2l0,0c0,1.9-1.2,3.2-2.1,4.7c-0.4,0.5-0.6,1.1-0.8,1.7c-0.2,0.5-0.2,0.7,0.3,0.9c0.6,0.2,0.8,0,1-0.6
                c0.2-1,0.7-1.9,1.2-2.8C32.9,9.4,33.5,7.1,32.3,4.5z M8.6,31.3c-2.3-2.5-4.5-4.8-6.5-7h5.8c0.5,0,0.7,0.3,0.7,0.8
                C8.6,27,8.6,29,8.6,31.3z M23.5,31.1c0,0.7-0.7,0.8-1.3,0.8c-3.8,0-7.7,0-11.5,0c-0.8,0-1-0.4-1-1.1c0-2.4,0-4.9,0-7.3
                C9.2,23,8.6,23.1,8,23.1c-1.9,0-3.9,0-5.8,0c-0.8,0-1.1-0.3-1.1-1c0-6.5,0-13.1,0-19.6c0-1.1,0.5-1.4,1.5-1.4c6.5,0,13,0,19.5,0
                c1.1,0,1.5,0.5,1.5,1.6c0,3.3,0,6.6,0,9.9c0,1.6-1,2.9-1.6,4.4c-0.9,1.9-1.6,3.9-2.7,5.7c-0.6,1.3-0.7,2.7-0.9,4.1
                c-0.1,0.6-0.2,1.3,0.5,1.6c0.7,0.3,1.1-0.1,1.5-0.6c1-1.2,2.3-2.2,2.7-3.8c0.1,0,0.3,0,0.4,0.1C23.6,26.4,23.6,28.7,23.5,31.1z
                M20.7,25.3c0.2,0.9-0.7,1-1.2,1.9c0.2-1-0.2-1.8,0.6-2.2C20.2,24.9,20.7,25.1,20.7,25.3z M24.5,18.5c-0.8,1.7-1.6,3.4-2.4,5.1
                c-0.1,0.3-0.2,0.7-0.7,0.7c-0.4-0.4-1.5-0.2-0.9-1.4c0.8-1.7,1.6-3.5,2.4-5.2c0.2-0.5,0.5-0.8,1.1-0.5
                C24.6,17.6,24.8,17.8,24.5,18.5z M4.5,4c2.6,0,5.2,0,7.7,0c2.7,0,5.4,0,8.1,0c0.4,0,1,0.1,1-0.6c0-0.6-0.6-0.6-1-0.6
                c-5.3,0-10.5,0-15.8,0c-0.4,0-1.1-0.1-1.1,0.5C3.3,4.1,4,4,4.5,4z M20.6,29.6c-1,0-1.9,0-2.9,0c-0.6,0-1-0.2-1.1-0.6
                c0-0.1-0.1-0.3-0.1-0.5c-0.1-0.2-0.2-0.4-0.3-0.5c-0.2-0.5-0.1-1.3-0.8-1.3s-0.8,0.7-1,1.2c-0.3,0.8-0.8,1.1-1.6,1
                c-0.5,0-1.2,0-1.1,0.7c0.1,0.6,0.6,0.8,1.1,0.7c0.5,0,1,0.1,1.4-0.3c0.1-0.1,0.1-0.1,0.2-0.2c0.2-0.2,0.5-0.4,0.7-0.7
                c0.4,0.9,0.9,1.7,2,1.7c1.2,0,2.3,0,3.5,0c0.4,0,0.9-0.1,0.9-0.6C21.5,29.5,21,29.6,20.6,29.6z M16.5,28.9c-0.1-0.1-0.1-0.1-0.2-0.2
                l0,0c-0.2-0.2-0.3-0.4-0.4-0.6c-0.3-0.9-0.8-1.1-1.2-0.1c-0.5,1.1-1.6,0.9-2.5,1.4c0.7,0.6,1.5,0.3,2.1,0.3h0.1
                c-0.1,0.1-0.1,0.1-0.2,0.2c-0.4,0.4-0.9,0.3-1.4,0.3c-0.6,0-1.1-0.2-1.1-0.7c-0.1-0.7,0.6-0.7,1.1-0.7c0.8,0.1,1.3-0.2,1.6-1
                c0.2-0.5,0.3-1.2,1-1.2s0.6,0.8,0.8,1.3c0.1,0.2,0.2,0.4,0.3,0.5C16.5,28.6,16.5,28.8,16.5,28.9z M21.3,8.9c0,0.8-0.7,0.6-1.2,0.6
                c-2.6,0-5.2,0-7.8,0s-5.3,0-7.9,0c-0.4,0-1,0.1-1-0.5s0.6-0.6,1-0.6c5.3,0,10.6,0,15.8,0C20.7,8.4,21.3,8.3,21.3,8.9z M21.4,14.4
                c0,0.8-0.7,0.6-1.2,0.6c-2.6,0-5.2,0-7.7,0c-2.6,0-5.3,0-7.9,0c-0.5,0-1.2,0.2-1.2-0.6c0-0.7,0.7-0.6,1.2-0.6c5.2,0,10.4,0,15.6,0
                C20.6,13.9,21.3,13.7,21.4,14.4z M21.4,17.3c-0.1,0.7-0.7,0.5-1.2,0.5c-2.6,0-5.3,0-7.9,0s-5.2,0-7.8,0c-0.5,0-1.1,0.1-1.1-0.7
                c0-0.6,0.6-0.5,1.1-0.5c5.3,0,10.6,0,15.8,0C20.7,16.6,21.4,16.5,21.4,17.3z M21.3,3.4c0,0.7-0.6,0.6-1,0.6c-2.7,0-5.4,0-8.1,0
                C9.7,4,7.1,4,4.5,4C4,4,3.3,4.1,3.4,3.4c0-0.6,0.7-0.5,1.1-0.5c5.3,0,10.5,0,15.8,0C20.7,2.9,21.3,2.8,21.3,3.4z M21.3,8.9
                c0,0.8-0.7,0.6-1.2,0.6c-2.6,0-5.2,0-7.8,0s-5.3,0-7.9,0c-0.4,0-1,0.1-1-0.5s0.6-0.6,1-0.6c5.3,0,10.6,0,15.8,0
                C20.7,8.4,21.3,8.3,21.3,8.9z M21.5,30.1c0,0.5-0.4,0.6-0.9,0.6c-1.2,0-2.3,0-3.5,0c-1.1,0-1.5-0.8-2-1.7c-0.3,0.3-0.5,0.5-0.7,0.7
                c-0.1,0.1-0.1,0.1-0.2,0.2c-0.4,0.4-0.9,0.3-1.4,0.3c-0.6,0-1.1-0.2-1.1-0.7c-0.1-0.7,0.6-0.7,1.1-0.7c0.8,0.1,1.3-0.2,1.6-1
                c0.2-0.5,0.3-1.2,1-1.2c0.7,0,0.6,0.8,0.8,1.3c0.1,0.2,0.2,0.4,0.3,0.5c0,0.2,0,0.4,0.1,0.5c0.1,0.4,0.5,0.6,1.1,0.6
                c1,0,1.9,0,2.9,0C21,29.6,21.5,29.5,21.5,30.1z M8.9,6.7H4c-0.3,0-0.6-0.3-0.6-0.6l0,0c0-0.3,0.3-0.6,0.6-0.6h4.9
                c0.3,0,0.6,0.3,0.6,0.6l0,0C9.5,6.5,9.2,6.7,8.9,6.7z M20.8,6.7H11c-0.3,0-0.6-0.3-0.6-0.6l0,0c0-0.3,0.3-0.6,0.6-0.6h9.8
                c0.3,0,0.6,0.3,0.6,0.6l0,0C21.4,6.5,21.1,6.7,20.8,6.7z"
                />
              </svg>
            </div>
          </div>
        </header>
        <div className="app-inner">
          <div className="headTextMain">
            <h1>Email Signature Generator</h1>
            <p>
              Generate your Email Signature by just uploading your Name, Photo
              and Designation. Copy and Paste the signature in your Email and
              you are good to go!
            </p>
          </div>
          <div className="app-inner-wrap">
            <div className="headText">
              {!finalImage && (
                <React.Fragment>
                  <span>STEP 1</span>
                  <p>Generate your Email Signature</p>
                </React.Fragment>
              )}
              {finalImage && (
                <React.Fragment>
                  <span>STEP 2</span>
                  <p>Copy Generated Email Signature</p>
                </React.Fragment>
              )}
            </div>
            <div className="signature-wrap">
              <div
                id="signature"
                style={{
                  marginBottom: "30px",
                  borderSpacing: 0,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  this.setState({ editableItem: "" });
                }}
              >
                <table
                  width="600"
                  border="0"
                  cellSpacing="0"
                  cellPadding="0"
                  bgcolor="#fff"
                >
                  <tbody>
                    <tr>
                      <td
                        width="100"
                        style={{ padding: 15 }}
                        valign="middle"
                        className="demo"
                      >
                        <canvas
                          id="myCanvas"
                          width="90"
                          height="90"
                          style={{ display: "none", verticalAlign: "bottom" }}
                        ></canvas>

                        {finalImage && (
                          <img
                            onError={(e) => (e.target.src = "unnamed.png")}
                            src={this.state.finalImage || "unnamed.png"}
                            width="90"
                            height="90"
                            alt="profile pic"
                            style={{
                              verticalAlign: "bottom",
                              background: "black",
                              borderRadius: 50,
                            }}
                          />
                        )}

                        {!finalImage && (
                          <div>
                            <Dropzone
                              onDrop={(file) => {
                                if (file[0].type.includes("image/")) {
                                  let that = this;
                                  var reader = new FileReader();
                                  reader.readAsDataURL(file[0]);
                                  reader.onload = function () {
                                    that.setState({ image: reader.result });
                                  };
                                  reader.onerror = function (error) {};
                                } else {
                                  alert("Please upload a valid Image file!");
                                }
                              }}
                            >
                              {({ getRootProps, getInputProps }) => (
                                <section>
                                  <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <ReactAvatarEditor
                                      ref={this.setEditorRef}
                                      image={this.state.image}
                                      width={90}
                                      height={90}
                                      color={[255, 255, 255, 0.6]} // RGBA
                                      scale={this.state.scrollValue}
                                      rotate={0}
                                      borderRadius={90}
                                      position={this.state.position}
                                      onDragEnd={(e) => e.stopPropagation()}
                                      onMouseUp={(e) => e.stopPropagation()}
                                      onPositionChange={(e) => this.setState({position:{x:e.x, y:e.y}})}
                                    />
                                  </div>
                                </section>
                              )}
                            </Dropzone>
                          </div>
                        )}

                        {/* import image from url */}
                        <input
                          type="text"
                          style={{
                            margin: 5,
                            borderRadius: 3,
                            border: "1px solid gray",
                            padding: 5,
                            fontSize: 10,
                            display: isFinished ? "none" : "block",
                          }}
                          placeholder="Enter Image URL/Link"
                          onChange={(result) => {
                            this.toDataURL(result.target.value, (data) => {
                              this.setState({ image: data });
                            });
                          }}
                        />
                        {/* end of import image from url */}
                      </td>
                      <td
                        style={{ padding: "0", textAlign: "left" }}
                        valign="middle"
                      >
                        <table>
                          <tbody>
                            <tr>
                              <td
                                style={{
                                  fontSize: "20px",
                                  fontWeight: "normal",
                                  display: "block",
                                }}
                              >
                                {editableItem !== "fullName" && (
                                  <label
                                    className={`${
                                      !this.editor ? "label-styles" : ""
                                    }`}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      if (!finalImage) {
                                        this.setState({
                                          editableItem: "fullName",
                                        });
                                      }
                                    }}
                                  >
                                    {fullName}
                                  </label>
                                )}

                                {editableItem === "fullName" && (
                                  <input
                                    className="name"
                                    type="text"
                                    value={fullName}
                                    onBlur={() =>
                                      this.setState({ editableItem: "" })
                                    }
                                    onChange={(e) => {
                                      this.setState({
                                        fullName: e.target.value,
                                      });
                                    }}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                    }}
                                  />
                                )}
                              </td>
                            </tr>
                            <tr>
                              <td style={{ padding: 0 }}>
                                <div
                                  style={{
                                    fontSize: "16px",
                                    minWidth: "200px",
                                    color: "#b7b5b5",
                                  }}
                                >
                                  {editableItem !== "title" && (
                                    <label
                                      className={`${
                                        !this.editor ? "label-styles" : ""
                                      }`}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        if (!finalImage) {
                                          this.setState({
                                            editableItem: "title",
                                          });
                                        }
                                      }}
                                    >
                                      {title}
                                    </label>
                                  )}
                                  {editableItem === "title" && (
                                    <input
                                      className="degnation"
                                      type="text"
                                      value={title}
                                      onBlur={() =>
                                        this.setState({ editableItem: "" })
                                      }
                                      onClick={(e) => {
                                        e.stopPropagation();
                                      }}
                                      onChange={(e) => {
                                        this.setState({
                                          title: e.target.value,
                                        });
                                      }}
                                    />
                                  )}{" "}
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ padding: 0 }}>
                                <div
                                  style={{
                                    fontSize: "16px",
                                    minWidth: "200px",
                                    borderTop: "1px solid",
                                    paddingTop: 6,
                                    color: "#b7b5b5",
                                  }}
                                >
                                  {editableItem !== "websiteurl" &&
                                    (finalImage ? (
                                      <a
                                        href={`https://${websiteurl}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                          color: "#2299dd",
                                          textDecoration: "none",
                                          fontSize: "14px",
                                        }}
                                      >
                                        {websiteurl}
                                      </a>
                                    ) : (
                                      <label
                                        style={{ textTransform: "lowercase" }}
                                        className={`${
                                          !this.editor ? "label-styles" : ""
                                        }`}
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          if (!finalImage) {
                                            this.setState({
                                              editableItem: "websiteurl",
                                            });
                                          }
                                        }}
                                      >
                                        {websiteurl}
                                      </label>
                                    ))}
                                  {editableItem === "websiteurl" && (
                                    <input
                                      className="degnation"
                                      type="text"
                                      value={websiteurl}
                                      onBlur={() =>
                                        this.setState({ editableItem: "" })
                                      }
                                      onClick={(e) => {
                                        e.stopPropagation();
                                      }}
                                      onChange={(e) => {
                                        this.setState({
                                          websiteurl: e.target.value,
                                        });
                                      }}
                                    />
                                  )}
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2" width="600" style={{ padding: 0 }}>
                        <div
                          style={{
                            display: "flex",
                            padding: "15px 15px 10px 15px",
                            alignItems: "center",
                            borderTop: "1px solid rgb(0 0 0 / 10%)",
                          }}
                        >
                          <span
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            {finalImage && (
                              <img
                                onError={(e) =>
                                  (e.target.src = this.state.logo)
                                }
                                src={this.state.logo}
                                height="27"
                                alt="Logo"
                                style={{
                                  verticalAlign: "bottom",
                                }}
                              />
                            )}

                            {!finalImage && (
                              <div>
                                <Dropzone
                                  onDrop={(file) => {
                                    if (file[0].type.includes("image/")) {
                                      let that = this;
                                      var reader = new FileReader();
                                      reader.readAsDataURL(file[0]);
                                      reader.onload = function () {
                                        that.setState({ logo: reader.result });
                                      };
                                      reader.onerror = function (error) {};
                                    } else {
                                    }
                                  }}
                                >
                                  {({ getRootProps, getInputProps }) => (
                                    <section>
                                      <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <img
                                          alt="Logo"
                                          src={this.state.logo}
                                          height="27px"
                                        />
                                      </div>
                                    </section>
                                  )}
                                </Dropzone>
                              </div>
                            )}
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="action-bar">
                {!finalImage && (
                  <div style={{ display: "flex" }}>
                    {" "}
                    <input
                      type="range"
                      step="0.01"
                      min="1"
                      max="2"
                      name="scale"
                      className="slider"
                      value={this.state.scrollValue}
                      onChange={(e) =>
                        this.setState({ scrollValue: e.target.value })
                      }
                    />
                    <input
                      type="button"
                      value="Done"
                      onClick={() => {
                        this.onClickSave();
                        this.setState({ isFinished: !this.isFinished });
                      }}
                    />
                  </div>
                )}

                {finalImage && (
                  <div>
                    <input
                      type="button"
                      value="Back"
                      onClick={() =>
                        this.setState({
                          finalImage: "",
                          isCopied: false,
                          isFinished: false,
                        })
                      }
                    />
                    <input
                      type="button"
                      value={isCopied ? "Copied" : "Copy"}
                      onClick={() => this.onCopy()}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          {finalImage && (
            <React.Fragment>
              <div className="app-inner-wrap">
                <div className="headText">
                  <span>STEP 3</span>
                  <p>Add your Generated Signature to Gmail</p>
                </div>
                <div class="signature-wrap gmail-steps">
                  <ol>
                    <li>
                      Open Gmail in a web browser. Sign in. Open Gmail settings
                      under the gear icon in the right top corner in Gmail.
                    </li>
                    <li>
                      Scroll down to the signature field. If you have something
                      inside signature field then delete everything inside of
                      it; including spaces. Paste in the signature that was
                      copied in the STEP 2 (right click into the input field and
                      click "Paste" or use keyboard shortcut "Ctrl + V" after
                      you clicked into the input field). Make sure the radio
                      button that is selected in the Signature section of the
                      settings page is NOT the one beside label "No signature".
                    </li>
                    <li>
                      You should see your signature now in the signature field,
                      check it over to make sure there are no typos. DO NOT
                      attempt to fix ANYTHING inside Gmail. If there are any
                      typos then go back to STEP 1 and regenerate the signature.
                      Once you made sure everything is good, scroll down to the
                      very bottom of the page and save your changes via the Save
                      button.
                    </li>
                  </ol>
                </div>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default App;
