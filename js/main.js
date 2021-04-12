let frame = document.getElementById("iframeWrapper");
let iframeUI = document.getElementById('iframe2');
let test1 = document.getElementById('close')
let widget = document.getElementById('vanguard-icon-wrapper');
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
    // alert('Send Event', btnID)
    // var sendingEvent = {}
    // var raw = JSON.stringify({
    //     "details": {
    //     "companyName": "Zalora",
    //     "user-feedback": document.getElementById('feedback').value
    //     }
    // });

    // feedbackDetails.data = raw;
    window.parent.postMessage(JSON.stringify({
        event_code: 'ym-client-event', data: JSON.stringify({
            event: {
            code: "clickedBtn",
            data: clickedButton,
        
            }
        })
    }), '*');

    // console.error("Feedback Details ---->",feedbackDetails);
}


// function disable() {
//     widget.style.display = 'none';

// }