<?php include_once ("header.html"); ?>

    <!--userPicPage-->
    <div class="container">
        <div class="row" id="row1">
            <div class="col-sm-12"><img class="insidePic" src="data/defaultprofile.jpg"></div>
        </div>

        <div class = row>
            <div class="col-sm-6" id="profileData">
                <span id="loadUsername"></span>
                <span id="loadSurename"></span>
            </div>
        </div>

        <div class = row>
            <div class="col-sm-6" id="profileData">
                <span id="loadAge"></span>,
                <span id="loadGender"></span>
            </div>
        </div>
        <ul class="checkbox-grid">
            <li>
                    <input type="checkbox" id="musicAndCultureCB">
                    <label for="musicAndCultureCB">Music / Culture</label>
            </li>
            <li>
                <input type="checkbox" id="sportsAndleisureActivitiesCB">
                <label for="sportsAndleisureActivitiesCB">Sports / Leisure</label>
            </li>
            <li>
                <input type="checkbox" id="natureCB">
                <label for="natureCB">Nature</label>
            </li>
            <li>
                <input type="checkbox" id="foodAndDrinksCB">
                <label for="foodAndDrinksCB">Food / Drinks</label>
            </li>
            <li>
                <input type="checkbox" id="spaAndRestCB">
                <label for="spaAndRestCB">Spa / Wellness</label>

            </li>
            <li>
                <input type="checkbox" id="artsCB">
                <label for="artsCB">Art</label>
            </li>
            <li>
                <input type="checkbox" id="historyCB">
                <label for="historyCB">History</label>
            </li>
            <li>
                <input type="checkbox" id="shoppingCB">
                <label for="shoppingCB">Shopping</label>
            </li>
            <li>
                <input type="checkbox" id="animalsCB">
                <label for="animalsCB">Animals</label>
            </li>
            <li>
                <input type="checkbox" id="culinaryCB">
                <label for="culinaryCB">Culinary</label>
            </li>
        </ul>
        <!--  <div class=" btn btn-success btn-lg " id="savePreferences"> -->
        <!-- <div class="centerButton">
             <div class=" btn btn-success btn-lg " id="savePreferences">
                 <span>Save Changes</span>
             </div>
         </div> -->
        <div class="centerButton">
            <a href="swipe.php" class="btn btn-success btn-lg active r" role="button">Start</a>
        </div>
    </div>


<?php include_once ("footer.html"); ?>