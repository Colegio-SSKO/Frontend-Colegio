<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <jsp:include page="imports.jsp"/>
    <title>Document</title>
</head>
<body>
    <div class="cart-item">
            <div class="tumbnail-img">
                <img src="./images/Thumbnail.png" alt="">
            </div>
    
            <div class="cart-item-content">
                <h2 class="js-title">Western music for GCE OLs - The Complete Guide</h2>
                <h3 class="js-description">Learn about western music in a way catered towards your OLs, fundemantals straight to master level.</h3>
                <p class="js-author">By Sachini Usha </p>
                <jsp:include page="ratings.jsp"/>
                <p>Published <span class="js-date">January 2022</span></p>
                <p class="js-time">11 Total hours | 12 videos</p>
                <p class="js-audience">OL Levels</p>
            </div>
    
            <div class="cart-item-price">
                <h1 class="js-price">$19.99</h1>
                <button>Remove</button>
            </div>
    </div>
</body>
</html>