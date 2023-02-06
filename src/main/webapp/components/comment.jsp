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
    <div class="comment-main">
        <div class="comment-about">
            <h3 class="fnt fnt-bold fnt-large">Video editing basics</h3>
            <p class="fnt fnt-bold fnt-mid">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Magnam dolores nam, explicabo adipisci tempore voluptatibus eaque eveniet unde,
                mollitia sed accusantium veritatis itaque ducimus non totam! Distinctio itaque ad voluptatem. Natus rem
                soluta maiores corporis magnam id officia odio ipsa quasi ex laudantium, corrupti atque alias
                perspiciatis debitis molestias error, libero provident.</p>


            <jsp:include page="ratings.jsp"/>
            <div class="comment-profile">
                <div class="comment-author">
                    <img src="../static/img/components_images/profile_picture_(1).png" alt="">
                </div>
                <div class="comment-author-name">
                    <h3 class="fnt fnt-bold fnt-small">George gunathilake</h3>
                    <p class="fnt fnt-small">Lorem, ipsum dolor.</p>
                </div>
            </div>
        </div>


        <div class="comment-cmnt">
            <div class="comment-comment-box">
                <img src="../static/img/components_images/pro.png" alt="">
                <form action="submit">
                    <input type="text" placeholder="Comment here...">
                    <button type="submit">></button>
                </form>
            </div>

            <div class="comment-comments">
                <div class="comment-cmnt-1">
                    <img src="../static/img/components_images/pro.png" alt="">
                    <p class="fnt fnt-mid">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, quidem dolor. Minus, veniam
                        inventore pariatur ipsam, similique nemo voluptatibus dolor neque voluptatum est dolore quas!
                    </p>
                </div>

                <div class="comment-cmnt-1">
                    <img src="../static/img/components_images/pro.png" alt="">
                    <p class="fnt fnt-mid">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, quidem dolor. Minus, veniam
                        inventore pariatur ipsam, similique nemo voluptatibus dolor neque voluptatum est dolore quas!
                    </p>
                </div>

                <div class="comment-cmnt-1">
                    <img src="../static/img/components_images/pro.png" alt="">
                    <p class="fnt fnt-mid">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, quidem dolor. Minus, veniam
                        inventore pariatur ipsam, similique nemo voluptatibus dolor neque voluptatum est dolore quas!
                    </p>
                </div>
            </div>
        </div>

    </div>

</body>

</html>