
var filePath = chrome.extension.getURL("videopage.html")

var url = "";
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    url = tabs[0].url;
	document.write(url);
	chrome.runtime.sendMessage(url);
	print();
	
});


chrome.windows.create({
    type: 'popup',
    url: filePath,
	width: 920, 
	height : 520,
	focused : true,
}, function (newWindow) {
    console.log(newWindow);
    chrome.tabs.executeScript(newWindow.tabs[0].id, {
        code: 'document.write("hello world popup");'
    });
});



function print()
{
	document.write("hey");
}
