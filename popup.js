
//let all = document.querySelector('body');

let btn = document.querySelector('.yellow_btn');
btn.style.background = 'linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%)';
btn.style.boxShadow = 'inset 0px 1px 0px 0px #ffffff';
btn.style.backgroundColor = '#ededed';
btn.style.borderRadius = '6px';
btn.style.border = '1px solid #dcdcdc';
btn.style.cursor = 'pointer';
btn.style.color = '#4e6096';
btn.style.fontSize = '15px';
btn.style.textShadow = '0px 1px 0px #ffffff';
btn.style.padding = '6px 24px';

btn.addEventListener( "mouseover" , ()=> btn.style.color = '#69dec7');
btn.addEventListener( "mouseout" , ()=> btn.style.color = '#4e6096');

btn.addEventListener('click', takePhoto);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting === "scroll"){
        takePhoto();
    }
  }
);

let i = 0;
var file;

function takePhoto() {
    btn.style.color = '#fff37e';
    chrome.tabs.captureVisibleTab(null, {format: 'png'}, function(dataUrl) {
        // var link = document.createElement('a');
        // link.href = dataUrl;
        // link.download = i+'.png';
        chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
            var tabId = tabs[0].id
            chrome.downloads.download({url: dataUrl, filename: 'screenshots' + tabId +'/'+i+'.png'}); 
        });
        ++i;
        //link.click();
    });

    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "start"});
    });
}




// function takePhoto() {  // Тут все работает
//     btn.style.color = '#fff37e';
//     chrome.tabs.captureVisibleTab(null, {format: 'png'}, function(dataUrl) {
//     var link = document.createElement('a');
//     link.href = dataUrl;
//     link.download = i+'.png';
//     ++i;
//     link.click();
//     });

//     chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
//         var activeTab = tabs[0];
//         chrome.tabs.sendMessage(activeTab.id, {"message": "start"});
//     });
// }






