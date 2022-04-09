<?php
    $TITLE = "The Everything Server";
    $PREFIX = '.';
    require("header.php");
    require("navbar.php");
?>

<div class="header">
    <div class="container-fluid py-3">
        <div class="row d-flex justify-content-center align-items-center">
            <div class="col text-center">
                <h1>The <span>Community</span> for <span>Everything</span> That You Need.</h1>
                <h3 class="py-2">The Everything Server</h3>
                <p>A full-featured discord community server for everything discussions!</p>
                <br>
                <a href="https://discord.gg/dKArUwBMKw" class="btn btn-outline-light d-block d-md-inline-block mb-2 mb-md-0">Join Us</a>
                <a href="<?= $PREFIX ?>/about/" class="btn btn-outline-light d-block d-md-inline-block">About</a>
            </div>
        </div>
    </div>

    <br>
    <br>

    <div class="container mt-5">
        <div class="row">
            <div class="col-md feature">
                <div>
                    <i class="fa fa-shield"></i>
                </div>
                <div>
                    <h3>Secure &amp; Always Moderated</h3>
                    <p>Our server is secure and always moderated.</p>
                </div>
            </div>
            <div class="col-md feature">
                <div>
                    <i class="fa fa-users"></i>
                </div>
                <div>
                    <h3>Friendly</h3>
                    <p>Our server staff group members are friendly enough to help you.</p>
                </div>
            </div>
            <div class="col-md feature">
                <div>
                    <i class="fa fa-handshake-o"></i>
                </div>
                <div>
                    <h3>Supportive</h3>
                    <p>We're always ready to support and help you.</p>
                </div>
            </div>
        </div>
    </div>
</div>



<?php
    require("footer.php");
?>