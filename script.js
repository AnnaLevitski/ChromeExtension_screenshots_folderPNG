// console.log(window.innerHeight);
 
let all = document.querySelector('body');
// all.style.backgroundColor = 'blue';
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "start" ) {
            scrollDown();
        }
    }
);
// scrollDown();


// console.log(window.outerHeight);   //window.innerHeight
// console.log(window.innerHeight);   //window.innerHeight
// console.log(window.visualViewport.width);
// console.log(all.scrollHeight);
// console.log(all.clientHeight);
// console.log(all.offsetHeight);

let pageHeight = 0;

let forScrollHeight = window.innerHeight-100;


function scrollDown() {
        if(pageHeight<all.scrollHeight){
            setTimeout(() => window.scrollBy(0, forScrollHeight), 100); 
            pageHeight= pageHeight + forScrollHeight;
            setTimeout(() =>  chrome.runtime.sendMessage({greeting:"scroll"}), 1000);       
        }
        // if(pageHeight>0){ // отматыаапет слишеом много 
        //     setTimeout(() => window.scrollBy(0, forScrollHeight), 100); 
        //     pageHeight-=forScrollHeight;
        //     setTimeout(() =>  chrome.runtime.sendMessage({greeting:"scroll"}), 1000);       
        // }
    // setTimeout(() => scrollDown(), 1000);     
    
    
}
// function takePhoto() {
//     //btn.style.color = '#fff37e';
//     chrome.tabs.captureVisibleTab(null, {format: 'png'}, function(dataUrl) {
//     var link = document.createElement('a');
//     link.href = dataUrl;
//     link.download = 'screenshot.png';
//     link.click();
//     });
    

//     // chrome.scripting.executeScript({
//     //     target: {tabId: tab.id},
//     //     files: ['script.js']
//     //   });
// }
