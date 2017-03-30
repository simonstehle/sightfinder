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



    <div  class="detailsPagePictureClass" id="detailsPagePic"></div>



    <table class="table" id="detailspageTable">

    </table>

    <div class="centerButton">
        <div class=" btn btn-success btn-lg " id="">
            <a href="res.php">Back to Results</a>
        </div>
        <div class=" btn btn-success btn-lg " id="">
            <div id="submit" type="button" >Show Location</div>
        </div>
    </div>




    <div id="map"></div>





</div>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDmPpJBg_aResuw8J38lHCT7MsRkz_6Zmg&callback=initMap"
        async defer></script>





<?php include_once ("footer.html")?>
