<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Invite teachers</title>

  <jsp:include page="../components/imports.jsp"/>

</head>

<body>

<div class="inviteTeacher">
  <div class="first">
    <p class="fnt fnt-extraLarge fnt-bold">Invite Teacher</p><br>
    <p class="fnt fnt-light fnt-large">Organizations bring in 100s of students to one place with a talented team of teachers pushing the boundaries of online education as a team.
  </div>

  <div class="box-container" style="text-align: left;">

    <form action="/search" method="post">
      <input type="text" placeholder="Search teachers" name="name" class="search2">
      <button type="submit"><img class="butn" src="images/search.svg"></button>
      <!-- <div class="discription">
          Search by names of teachers or subjects they specialize in.
      </div> -->
    </form>
  </div>

  <img src="../static/img/components_images/inviteTeacher.jpg" width="510px" height="310px" class="main_img">




</div>


</body>
</html>
