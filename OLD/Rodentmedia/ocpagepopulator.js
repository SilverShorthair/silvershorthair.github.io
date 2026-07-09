const urlparam = new URLSearchParams(window.location.search).get("oc");
if ( urlparam !== null ) {
	document.getElementById("name").innerHTML = ocs[urlparam].name;
	if (Math.random() < 0.05) {
		min = Math.ceil(0);
		max = Math.floor(ocs[urlparam].rarequotes.length);
		document.getElementById("quote").innerHTML = "\"<i>" + "<span style='color:#FFDC00;'>" + (ocs[urlparam].rarequotes[Math.floor(Math.random() * (max - min) + min)]) + "</i>\"" + "</span>";
	}
	else {
		min = Math.ceil(0);
		max = Math.floor(ocs[urlparam].quotes.length);
		document.getElementById("quote").innerHTML = "\"<i>" + (ocs[urlparam].quotes[Math.floor(Math.random() * (max - min) + min)]) + "</i>\"";
	};
	document.getElementById("universe").innerHTML = ocs[urlparam].universe;
	document.getElementById("pfp").src = ocs[urlparam].image;
	document.getElementById("pfp").alt = ocs[urlparam].alt;
	document.getElementById("description").alt = ocs[urlparam].description;
	if ( ocs[urlparam].replacepage.length !== 0 ) {
		document.getElementById("body").innerHTML = ocs[urlparam].replacepage;
	}
}