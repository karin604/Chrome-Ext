
var word = "";
var url = "";
chrome.runtime.onMessage.addListener(function(response, sender, sendResponse){
	/* alert("respone is :" + response); */
	if(response.includes("http"))
	{
		chrome.storage.sync.set({'url': response}, function(){
		/* alert("succes" + response); */	
		});
	}
	
	/* if(response.method == "getUrl")
	{
		alert("i ma requesting the url");
		sendResponse(getUrl());
	} */
});


function getUrl()
{
	var weburl = "";
	chrome.storage.sync.get("url", function(data){
	console.log(data);
	weburl = data.url;
	});
	return weburl;
}