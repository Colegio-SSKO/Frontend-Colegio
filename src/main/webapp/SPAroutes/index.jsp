 <!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="../static/css/html_template.css">
    <link rel="stylesheet" href="../static/css/style.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

        <div class="main-cont">
            <div class="main-left">
                <jsp:include page="../components/sidebar.jsp"/>
                <div class="burger">
                    <div class="burgerbar burger-up"></div>
                    <div class="burgerbar burger-middle"></div>
                    <div class="burgerbar burger-down"></div>
                </div>
            </div>

            <div class="main-right">

                <jsp:include page="../components/navbar.jsp"/>


                <div class="cont-body">
                    <div class="cont-body-left">

                    </div>
                    <div class="cont-body-right">

                    </div>
                </div>

            </div>
        </div>

        <footer></footer>







    <script src="index.js"></script>

        <script>

            let menu = document.querySelector(".burger");
            let up = document.querySelector(".burger-up");
            let middle = document.querySelector(".burger-middle");
            let down = document.querySelector(".burger-down");
            let sidebar = document.querySelector(".main-left");
            let mainRight = document.querySelector(".main-right");
            menu.addEventListener("click", ()=>{
                up.classList.toggle("burgerbar-up-clicked");
                middle.classList.toggle("burgerbar-middle-clicked");
                down.classList.toggle("burgerbar-down-clicked");
                sidebar.classList.toggle("sidebar-clicked");
                mainRight.classList.toggle("main-right-clicked");
                menu.classList.toggle("burger-clicked");
            });
        </script>

</body>
</html>