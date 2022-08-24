let addData = "";
fetch("/1")
  .then((response) => response.json())
  .then((json) => {
    addData = json;
    start();
  });
const start = () => {
  let layout = "";
  addData.forEach((element) => {
    document
      .querySelector(".fileList")
      .insertAdjacentHTML(
        "beforeend",
        `<div><a href="http://localhost:5000/1/${element.fileName}">${element.fileName} </a></div>`
      );
  });
};
