/**
 * jTinder initialization
 */



$("#tinderslide").jTinder({
	// dislike callback
    onDislike: function (item) {
	    // set the status text
        //$('#status').html('Dislike image ' + (item.index()+1));
        console.log(item.index());
        var temp_itemIndex = item.index()+1;
        var runBool = true;
        $.getJSON("../data/generalSightsData.json", function(results) {

            //console.log("Json ist geladen"); // this will show the info it in firebug console
            $.each(results, function(i, field){
                //console.log("Json loop");
                //console.log("tempindex: "+temp_itemIndex);
                //console.log("i= "+i);
                //console.log(field);
                if (i+1 == temp_itemIndex){
                    console.log( field["Kategorie"]);
                    countAndSetCategoryIndex( field["Kategorie"], false);

                }




            });
        });
        if  (item.index() == 0){
            window.location = "http://sightfinder.fangwasan.com/res.php";
        }

    },
	// like callback
    onLike: function (item) {
	    // set the status text
        //$('#status').html('Like image ' + (item.index()+1));
        console.log(item.index());
        var temp_itemIndex = item.index()+1;
        var runBool = true;
        $.getJSON("../data/generalSightsData.json", function(results) {

            //console.log("Json ist geladen"); // this will show the info it in firebug console
            $.each(results, function(i, field){
                //console.log("Json loop");
                //console.log("tempindex: "+temp_itemIndex);
                //console.log("i= "+i);
                //console.log(field);
                if (i+1 == temp_itemIndex){
                    console.log( field["Kategorie"]);
                    countAndSetCategoryIndex( field["Kategorie"], true);

                }




            });
        });
        if  (item.index() == 0){
            window.location = "http://sightfinder.fangwasan.com/res.php";
        }
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

});

function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}

function naturalCompare(a, b) {
    var ax = [], bx = [];

    a.replace(/(\d+)|(\D+)/g, function(_, $1, $2) { ax.push([$1 || Infinity, $2 || ""]) });
    b.replace(/(\d+)|(\D+)/g, function(_, $1, $2) { bx.push([$1 || Infinity, $2 || ""]) });

    while(ax.length && bx.length) {
        var an = ax.shift();
        var bn = bx.shift();
        var nn = (an[0] - bn[0]) || an[1].localeCompare(bn[1]);
        if(nn) return nn;
    }

    return ax.length - bx.length;
}


function loadResultspage() {
    var numberOfCategories = categories.length;
    var cookieDateArray=[];
    for(i=0; i<numberOfCategories; i++){
        cookieDateArray[i] = getCookie(categories[i])+" , "+categories[i];

    }
    cookieDateArray.sort(naturalCompare);
    cookieDateArray.reverse();

    console.log(cookieDateArray);
    //For Loop for the first two elements
    loadOneCategorie(0,cookieDateArray);
    loadOneCategorie(1,cookieDateArray);


}

function loadOneCategorie(numberInArray, tempCoockieArray) {
    var tempHTMLCode = "";
    var recentCategorie ="";
    recentCategorie = tempCoockieArray[numberInArray].split(",")[1];
    recentCategorie = recentCategorie.replace(/\s/g, '');
    console.log(recentCategorie);

    $.getJSON("../data/hallandSightsData.json", function (data) {
        $.each(data, function (i, field) {

            //console.log(i);
            //console.log(field);
            //console.log(field["Kategorie"]);
            //console.log(recentCategorie);
            if (field["Kategorie"] == recentCategorie.toString()) {
                //console.log("Hier: " + recentCategorie);
                //TODO: thumbnail link in hallandSightsData.json
                tempHTMLCode = "<tr><td> <img src= "+ field["Thumbnail"] +" class='thumbnail'</td><td>" + field["Bezeichnung Sehenswuerdigkeit"] + "</td><td><a href='details.php?halandid="+field["ID_Halland"] +"' >Homepage</a></td></tr>";


                $("#resultstable").append(tempHTMLCode);
            }
        })

    });
}

/**
 * Helper function to get variable from URL
 * @param variable
 * @returns {*}
 */
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    alert('Query Variable ' + variable + ' not found');
}

function loadDetailsPage(){
    var tempHTMLCodeForTable = "";
    var recentID = getQueryVariable("halandid");

    console.log("Aktuelle ID= "+recentID);

    $.getJSON("../data/hallandSightsData.json", function (data) {
        $.each(data, function (i, field) {

            //console.log(i);
            //console.log(field);
            //console.log(field["Kategorie"]);
            //console.log(recentCategorie);
            if (field["ID_Halland"] == recentID.toString()) {
                tempHTMLCodeForTable = "<tr><td>ID</td><td>"+field["ID_Halland"] +"</td></tr>" +
                    "<tr><td>Name</td><td>"+field["Bezeichnung Sehenswuerdigkeit"] +"</td></tr>" +
                    "<tr><td>Category</td><td>"+field["Kategorie"] +"</td></tr>" +
                    "<tr><td>Type</td><td>"+field["Typ"] +"</td></tr>" +
                    "<tr><td>Information</td><td>"+field["Merkmal#1(optional)"] +"</td></tr>" +
                    "<tr><td>Because you liked</td><td>"+field["Interesse#1"] +"</td></tr>" +
                    "<tr><td>Adress</td><td>"+field["Adresse"] +"</td></tr>" +
                    "<tr><td>Price</td><td>"+field["Preise"] +"</td></tr>" +
                    "<tr><td>Short Info</td><td>"+field["Kurzinfo"] +"</td></tr>";
                $("#detailspageTable").append(tempHTMLCodeForTable);
            }
        })

    });


}


$(document).ready(function () {
	if(window.location.href == "http://sightfinder.fangwasan.com/profile.php"){
        loadPreferences();

    }
    else if(window.location.href == "http://sightfinder.fangwasan.com/hello.php"){
        loadPreferences();

    }
    else if(window.location.href == "http://sightfinder.fangwasan.com/res.php"){
        loadResultspage();

    }

        else if(window.location.href == "http://sightfinder.fangwasan.com/details.php?halandid=1"){
            loadDetailsPage();

        }
        else if(window.location.href == "http://sightfinder.fangwasan.com/details.php?halandid=2"){
        loadDetailsPage();

        }
    else if(window.location.href == "http://sightfinder.fangwasan.com/details.php?halandid=3"){
        loadDetailsPage();

    }
    else if(window.location.href == "http://sightfinder.fangwasan.com/details.php?halandid=4"){
        loadDetailsPage();

    }
    else if(window.location.href == "http://sightfinder.fangwasan.com/details.php?halandid=5"){
        loadDetailsPage();

    }
    else if(window.location.href == "http://sightfinder.fangwasan.com/details.php?halandid=6"){
        loadDetailsPage();

    }
    else if(window.location.href == "http://sightfinder.fangwasan.com/details.php?halandid=7"){
        loadDetailsPage();

    }
    else if(window.location.href == "http://sightfinder.fangwasan.com/details.php?halandid=8"){
        loadDetailsPage();

    }
    else if(window.location.href == "http://sightfinder.fangwasan.com/details.php?halandid=9"){
        loadDetailsPage();

    }
    else if(window.location.href == "http://sightfinder.fangwasan.com/details.php?halandid=10"){
        loadDetailsPage();

    }
    else if(window.location.href == "http://sightfinder.fangwasan.com/details.php?halandid=11"){
        loadDetailsPage();

    }
    else if(window.location.href == "http://sightfinder.fangwasan.com/details.php?halandid=12"){
        loadDetailsPage();

    }
    else if(window.location.href == "http://sightfinder.fangwasan.com/details.php?halandid=13"){
        loadDetailsPage();

    }
    else if(window.location.href == "http://sightfinder.fangwasan.com/details.php?halandid=14"){
        loadDetailsPage();

    }
    else if(window.location.href == "http://sightfinder.fangwasan.com/details.php?halandid=15"){
        loadDetailsPage();

    }
    else if(window.location.href == "http://sightfinder.fangwasan.com/details.php?halandid=16"){
        loadDetailsPage();

    }
    else if(window.location.href == "http://sightfinder.fangwasan.com/details.php?halandid=17"){
        loadDetailsPage();

    }
    else if(window.location.href == "http://sightfinder.fangwasan.com/details.php?halandid=18"){
        loadDetailsPage();

    }
    else if(window.location.href == "http://sightfinder.fangwasan.com/details.php?halandid=19"){
        loadDetailsPage();

    }
    else if(window.location.href == "http://sightfinder.fangwasan.com/details.php?halandid=20"){
        loadDetailsPage();

    }





});



