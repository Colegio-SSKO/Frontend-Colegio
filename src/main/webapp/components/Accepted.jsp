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

    <div class="comment-profile">
      <div class="comment-author">
        <img src="../static/img/components_images/profile%20picture(2).png" alt="">
      </div>

      <div class="comment-author-name">
        <h3 class="fnt fnt-bold fnt-mid">Accepted by:- </h3>
        <div class="accept_person">

        </div>
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
  </div>

</div>

</body>

</html>
