<?php include_once ("header.html"); ?>


<div class="container">



    <div class="userPicPage"><img class="insidePic" src="data/defaultprofile.jpg"></div>


    <div class="left"><span id="loadUsername"></span></div>
    <div class="right"><span id="loadSurename"></span></div>
    <div class="left"><span id="loadAge"></span></div>
    <div class="right"><span id="loadGender"></span></div>


    <div class=" btn btn-success btn-lg " id="savePreferences">
        <span>Save Changes</span>
    </div>


    <div class="checkbox">
        <label>
            <input type="checkbox" id="musicAndCultureCB"> Music and Culture
        </label>
    </div>
    <div class="checkbox">
        <label>
            <input type="checkbox" id="sportsAndleisureActivitiesCB"> Sports and leisure Activities
        </label>
    </div>
    <div class="checkbox">
        <label>
            <input type="checkbox" id="natureCB"> Nature
        </label>
    </div>
    <div class="checkbox">
        <label>
            <input type="checkbox" id="foodAndDrinksCB"> Food and Drinks
        </label>
    </div>
    <div class="checkbox">
        <label>
            <input type="checkbox" id="spaAndRestCB"> Spa and rest
        </label>
    </div>
    <div class="checkbox">
        <label>
            <input type="checkbox" id="artsCB"> Arts
        </label>
    </div>
    <div class="checkbox">
        <label>
            <input type="checkbox" id="historyCB"> History
        </label>
    </div>
    <div class="checkbox">
        <label>
            <input type="checkbox" id="shoppingCB"> Shopping
        </label>
    </div>
    <div class="checkbox">
        <label>
            <input type="checkbox" id="animalsCB"> Animals
        </label>
    </div>
    <div class="checkbox">
        <label>
            <input type="checkbox" id="culinaryCB"> Culinary
        </label>
    </div>

    <div class="centerButton">
        <a href="swipe.php" class="btn btn-success btn-lg active r" role="button">Start</a>
    </div>




</div>


<?php include_once ("footer.html"); ?>

