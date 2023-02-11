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
<div class="accept_main">
      <div class="accept">
        <img src="../static/img/components_images/profile%20picture(2).png" alt="">
      </div>

      <div class="accept_person-details">
        <h3 class="fnt fnt-bold fnt-mid">Accepted by:- </h3>
        <div class="accept_person fnt fnt-mid">
              Osura De Silva
        </div>
      </div>

    <div class="accept-comment-box">
        <form action="submit">
            <input type="text" placeholder="Comment here...">
            <jsp:include page="send_button.jsp"/>
        </form>
    </div>


</div>



</body>

</html>
