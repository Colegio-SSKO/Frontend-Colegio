<!DOCTYPE html>
<html lang="en">
<head>

    <jsp:include page="imports.jsp"/>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/da4dde32c9.js" crossorigin="anonymous"></script>
    <title>Document</title>
</head>
<body>
    <nav>

        <h3 class="pagename fnt fnt-bold fnt-extraLarge">Notifications</h3>
        
        <div class="nav-middle">
            <input type="text" id="main_search_icon" class="fnt fnt-bold" placeholder="Search here ...">
            <button class="btn btn-solid"><a href="/test">search</a></button>
        </div>

        <div class="main-profile router">
            <a href="/cart"><img class="is-a-route" src="../static/img/components_images/shopping_cart.svg" alt=""></a>
            <div class="noti-wrapper">
                <a href="/notification"><img class="is-a-route" src="../static/img/components_images/notifications.svg" alt=""><span class="fnt fnt-small is-a-route">4</span></a>
            </div>
            <div class="profile-pic">
                <img src="../static/img/components_images/pro.png" alt="" srcset="">
            </div>
            <h5 class="fnt fnt-bold fnt-mid"><a href="/profile">Senith Uthsara</a> </h5>
        </div>
        
    </nav>
</body>
</html>