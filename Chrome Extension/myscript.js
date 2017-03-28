
/* alert(document.URL);
chrome.runtime.sendMessage("hey I am from fag"); */

var url = " test";
chrome.storage.sync.get("url", function(data){
	//console.log("get");
	url = data.url;
	//alert("Starting youtube web extend url " + data.url);

/* var videoCode = extractCode(url);
	
var fragment = create('<iframe width="854" height="480" src="https://www.youtube.com/embed/' + videoCode + '" frameborder="0" allowfullscreen></iframe>');

//load();
// You can use native DOM methods to insert the fragment:
document.body.insertBefore(fragment, document.body.childNodes[0]); */
});

/* function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}

function embedCodeParser(theUrl)
{
	 var url = theUrl;
	 var hasCode = false;
	 
	 var theVarrible = "watch?v="
	 
	 var size = url.lenght;
	 
	 for(var i =0; i < size; i++)
	 {
		if(theUrl[i] == theVarrible[0])
		{
			document.write("w");
		}
	 }
	 
}

function extractCode(theUrl)
{
	 var url = theUrl;
     var urlArray = url.split('');
     var videoID;
	 var hasCode = false;
	 
	 var theVarrible = "watch?v=";
     var pivot= 0;
     var varribleSize = theVarrible.length;
	 var startIndex; 
     
	 var size = urlArray.length;
     
	 
	 for(i = 0; i < size; i++)
	 {
		//document.write(urlArray[i]);
        if(url[i] == theVarrible[pivot])
		{
			document.write(url[i]);
            if(pivot == (varribleSize -1))
            {
            	hasCode = true;
                startIndex = i;
                document.write(startIndex);
                break;
            }else
            {
            	pivot++;
            }
		}else
        {
        	pivot = 0;
        }
	 }

     var embedCode = parseEmbedCode(startIndex, urlArray);
	 
	 return embedCode;
}
function parseEmbedCode(theStartIndex, url)
{
	theStartIndex++;
    
    var embedCode = "";
    
    for(i = theStartIndex; i < url.length; i++)
    {
    	embedCode = embedCode + url[i];
    }
    document.write("\n");
    document.write(embedCode);
    return embedCode;
} */



