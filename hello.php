<?php
/**
 * Created by PhpStorm.
 * User: simon
 * Date: 16.03.17
 * Time: 20:37
 */


include_once ("header.html");
?>

<div class="container">
    <p>Get started by setting your preferences</p>
    <div class="checkbox">
            <input type="checkbox" id="musicAndCultureCB">
        <label for="musicAndCultureCB">Music / Culture</label>
    </div>

    <div class="checkbox">
            <input type="checkbox" id="sportsAndleisureActivitiesCB">
        <label for="sportsAndleisureActivitiesCB">Sports / Leisure</label>
    </div>

    <div class="checkbox">
            <input type="checkbox" id="natureCB">
        <label for="natureCB">Nature</label>
    </div>

    <div class="checkbox">
        <input type="checkbox" id="foodAndDrinksCB">
        <label for="foodAndDrinksCB">Food / Drinks</label>
    </div>
    <div class="checkbox">
        <input type="checkbox" id="spaAndRestCB">
        <label for="spaAndRestCB">Spa / Wellness</label>
    </div>

    <div class="checkbox">
        <input type="checkbox" id="artsCB">
        <label for="artsCB">Art</label>
    </div>

    <div class="checkbox">
        <input type="checkbox" id="historyCB">
        <label for="historyCB">History</label>
    </div>

    <div class="checkbox">
        <input type="checkbox" id="shoppingCB">
        <label for="shoppingCB">Shopping</label>
    </div>
    <div class="checkbox">
            <input type="checkbox" id="animalsCB">
        <label for="animalsCB">Animals</label>
    </div>

    <div class="checkbox">
        <input type="checkbox" id="culinaryCB">
        <label for="culinaryCB">Culinary</label>
    </div>

    <div class="centerButton" id="savePreferences">
        <span>Save your preferences</span>
    </div>

    <div class="centerButton">
        <a href="swipe.php" class="btn btn-success btn-lg active r" role="button">Start</a>
    </div>
</div>







<?php include_once ("footer.html")?>
