let frame = document.getElementById("iframeWrapper");
let iframeUI = document.getElementById('iframe2');
let test1 = document.getElementById('close')
// const uiFrameWindow = iframeUI.contentWindow;
// const uiFrameDocument = iframeUI.contentDocument
// console.error(uiFrameDocument, "8888888888888888888888888888888888")


function openScreen() {
    // var frame = document.getElementById("iframeWrapper");
    if (frame.style.display === "none") {
        frame.style.display = "block";
    } else {
        frame.style.display = "none";
    }
}


test1.addEventListener('click', () => {
    console.error('Nice');
    frame.style.display = "none";
})
