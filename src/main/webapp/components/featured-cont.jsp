<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="../button/buttons.css">

    <link rel="stylesheet" href="../ratings/ratings.css">
    <jsp:include page="imports.jsp"/>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="featured-cont-wrap">
        <div class="featured-cont-image">
            <img src="../static/img/components_images/violinist.jpg" alt="">
        </div>
        <div class="featured-cont-details">
            <h4 class="fnt fnt-extraBold fnt-large">Western music for GCE OLs - The Complete Guide</h4>
            <p class="fnt fnt-bold fnt-mid">Learn about western music in a way catered towards your OLs, fundemantals straight to master level.</p>
            <h6 class="fnt fnt-bold fnt-small">Senith Uthsara</h6>
            <h6 class="fnt fnt-small">Published January 2022  | 11 total hours | 12 videos | OL Levels</h6>

            <jsp:include page="ratings.jsp"/>

            <h3 class="fnt fnt-bold fnt-extraLarge">$19.99</h3>

            <div class="featured-cont-actions">
                <button class="btn btn-solid btn-large"><a class="fnt fnt-mid fnt-bold" href="/cart">Add to cart</a></button>
                <button class="btn btn-solid btn-large"><a class="fnt fnt-mid fnt-bold" href="">Buy Now</a></button>
            </div>

        </div>
    </div>
    
</body>
</html>