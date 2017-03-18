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
    <div class="wrap">
        <!-- start jtinder container -->
        <div id="tinderslide">
            <ul>
                <li class="pane1">
                    <div class="img"></div>
                    <div></div>
                    <div class="like"></div>
                    <div class="dislike"></div>
                </li>
                <li class="pane2">
                    <div class="img"></div>
                    <div></div>
                    <div class="like"></div>
                    <div class="dislike"></div>
                </li>
                <li class="pane3">
                    <div class="img"></div>
                    <div></div>
                    <div class="like"></div>
                    <div class="dislike"></div>
                </li>
                <li class="pane4">
                    <div class="img"></div>
                    <div>Torre de Eiffel</div>
                    <div class="like"></div>
                    <div class="dislike"></div>
                </li>
                <li class="pane5">
                    <div class="img"></div>
                    <div></div>
                    <div class="like"></div>
                    <div class="dislike"></div>
                </li>
            </ul>
        </div>
        <!-- end jtinder container -->
    </div>
    <!-- end padding container -->
    <!-- jTinder trigger by buttons  -->
    <div class="actions">
        <a href="#" class="dislike"><i></i></a>
        <a href="#" class="like"><i></i></a>
    </div>
    <div class="centerButton">
        <a href="res.php" class="btn btn-success btn-lg active r" role="button">Show Results</a>
    </div>

    <!-- jTinder status text  -->
    <div id="status"></div>




<?php include_once ("footer.html")?>
