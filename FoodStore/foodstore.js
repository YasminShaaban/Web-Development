var xmlHttp=createHttpRequestObject();
//object responsible for
//communication between js and php files
//object responsible for communicating
//with the server behind the scenes
function createHttpRequestObject(){
  var xmlHttp;
  if (window.ActiveXObject) // INTERNET EXPLORER BROWSER
  {
     try{
       xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
       }
     catch(e){
        xmlHttp=false;
     }
  }
  else{
   try{
       xmlHttp=new XMLHttpRequest();
       }
     catch(e){
        xmlHttp=false;
     }
  }

  if(!xmlHttp) // if xmlHttp ==false
    {
        alert("cant create that object");
    }
  else{
    return xmlHttp;
  }

}

function process(){
    //state 4 means object is done communicating
    if(xmlHttp.readyState==0 || xmlHttp.readyState== 4){
    food=encodeURIComponent(document.getElementById("userInput").value);
    xmlHttp.open("GET","foodstore.php?food="+food,true);
    //create request  GET request then put the php file and what the object sending "food"
    // variable then last parameter takes true or false
    xmlHttp.onreadystatechange=handleServerResponse;
    xmlHttp.send(null);//send request

    }
    else{
     setTimeout('process()',1000); // if the object is busy
     //then wait 1 second then try to communicate
     // with the server "try to send request"
    }

}


function handleServerResponse(){
   if (xmlHttp.readyState==4){
    if(xmlHttp.status==200){ // communication is ok "response is ok "
        //server is not down , communication session is good
        //file is not corrupted and so xml file is
        //generated
        //alert(message);
        xmlResponse=xmlHttp.responseXML;
        xmlDocumentElement=xmlResponse.documentElement; // xml document
        message=xmlDocumentElement.firstChild.data;// it is the only data here first child
        // the only child
        document.getElementById("underInput").innerHTMl='<span style="color:blue">'+message+'</span>';
        setTimeout('process()',1000);
    }

    else{
    alert('Something went wrong')
    }
   }

}
