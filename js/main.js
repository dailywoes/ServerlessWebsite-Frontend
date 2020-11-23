function updateCounter(){
	var json_obj = JSON.parse(Get('https://oogrkvlspk.execute-api.ca-central-1.amazonaws.com/prod/counter'));
	document.getElementById("counter-item").innerText = json_obj.body.Visit_Count;
}

function Get(Url){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",Url,false);
    Httpreq.send(null);
    return Httpreq.responseText;
}
