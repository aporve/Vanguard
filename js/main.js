let frame = document.getElementById("iframeWrapper");
let iframeUI = document.getElementById('iframe2');
let test1 = document.getElementById('close')
let widget = document.getElementById('vanguard-icon-wrapper');
let  childWindow = document.getElementsByTagName("iframe")[0].contentWindow;
let childW = document.getElementById('vanguard-iframe').contentWindow;
// let childWindow = document.getElementById('vanguard-iframe');
// const uiFrameWindow = iframeUI.contentWindow;
// const uiFrameDocument = iframeUI.contentDocument
// console.error(uiFrameDocument, "8888888888888888888888888888888888")


function openScreen() {
    // var frame = document.getElementById("iframeWrapper");
    if (frame.style.display === "none") {
        frame.style.display = "block";
        widget.style.display = 'none';
    } else {
        frame.style.display = "none";
    }
}


test1.addEventListener('click', () => {
    console.error('Nice');
    frame.style.display = "none";
    widget.style.display = 'block';
})



function sendEvent(btnID) {
    let clickedButton = btnID;
    alert(clickedButton);
    console.log('Testing');

    // childW.postMessage(JSON.stringify({
    //     event_code: 'ym-client-event', data: JSON.stringify({
    //         event: { 
    //         code: "clickedBtn",
    //         data: clickedButton
    //         }
    //     })
    // }), '*');

    // feedbackDetails.data = raw;
    document.getElementById('vanguard-iframe').contentWindow.postMessage(JSON.stringify({
        event_code: 'ym-client-event',
        data: JSON.stringify({
        event: {
             code: "recaptcha_token",
             data: clickedButton
            }
        })
   }), '*');
   return;
    // window.parent.postMessage(JSON.stringify({
    //     event_code: 'ym-client-event', data: JSON.stringify({
    //         event: {
    //         code: "clickedBtn",
    //         data: clickedButton
    //         }
    //     })
    // }), '*');

    // HTMLIFrameElement.contentWindow.postMessage(JSON.stringify({
    //     event_code: 'ym-client-event', data: JSON.stringify({
    //         event: {
    //         code: "clickedBtn",
    //         data: clickedButton
    //         }
    //     })
    // }), '*');

    // childWindow.contentWindow.postMessage(JSON.stringify({
    //     event_code: 'ym-client-event', data: JSON.stringify({
    //         event: {
    //         code: "clickedBtn",
    //         data: clickedButton
    //         }
    //     })
    // }), '*');

}
