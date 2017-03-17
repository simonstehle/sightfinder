/**
 * jTinder initialization
 */



$("#tinderslide").jTinder({
	// dislike callback
    onDislike: function (item) {
	    // set the status text
        $('#status').html('Dislike image ' + (item.index()+1));
    },
	// like callback
    onLike: function (item) {
	    // set the status text
        $('#status').html('Like image ' + (item.index()+1));
    },
	animationRevertSpeed: 200,
	animationSpeed: 400,
	threshold: 1,
	likeSelector: '.like',
	dislikeSelector: '.dislike'
});

/**
 * Set button action to trigger jTinder like & dislike.
 */
$('.actions .like, .actions .dislike').click(function(e){
	e.preventDefault();
	$("#tinderslide").jTinder($(this).attr('class'));
});


$.getJSON("../data/profile-data.json", function(json) {
    console.log(json["name"]); // this will show the info it in firebug console
	$("#loadUsername").append(json["name"]);
    $("#loadSurename").append(json["surname"]);
    $("#loadAge").append(json["age"]);
    $("#loadGender").append(json["gender"]);
});


$("#savePreferences").click(function () {


	setPreference(1, setBoolToBinominal(document.getElementById("musicAndCultureCB").checked));
    setPreference(2, setBoolToBinominal(document.getElementById("sportsAndleisureActivitiesCB").checked));
    setPreference(3, setBoolToBinominal(document.getElementById("natureCB").checked));
    setPreference(4, setBoolToBinominal(document.getElementById("foodAndDrinksCB").checked));
    setPreference(5, setBoolToBinominal(document.getElementById("spaAndRestCB").checked));
    setPreference(6, setBoolToBinominal(document.getElementById("artsCB").checked));
    setPreference(7, setBoolToBinominal(document.getElementById("historyCB").checked));
    setPreference(8, setBoolToBinominal(document.getElementById("shoppingCB").checked));
    setPreference(9, setBoolToBinominal(document.getElementById("animalsCB").checked));
    setPreference(10, setBoolToBinominal(document.getElementById("culinaryCB").checked));
    console.log( document.getElementById("musicAndCultureCB").checked);
});

function setBoolToBinominal(booleanTemp) {

	if(booleanTemp == true){
		return 1;
	} else {
		return 0;
	}

}

function setBinomtoBool(binomTemp) {

    if(binomTemp == "1"){
        return true;
    } else {
        return false;
    }

}

function loadPreferences() {
	var tempCookie = getCookie(prefCookieName);

	var checkboxesPreferences = ["musicAndCultureCB","sportsAndleisureActivitiesCB",  "natureCB", "foodAndDrinksCB", "spaAndRestCB", "artsCB","historyCB","shoppingCB", "animalsCB","culinaryCB"];


	for (i = 0; i < tempCookie.length; i++){
        document.getElementById(checkboxesPreferences[i]).checked = setBinomtoBool(tempCookie.substr(i,1));

        console.log(tempCookie.substr(i,1));

    }

}

$("#loadPreferences").click(function () {
	loadPreferences();

})



