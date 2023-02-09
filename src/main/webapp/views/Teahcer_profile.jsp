<div class="prof">
  <profile-card profile_img="../static/img/components_images/profilepicture(2).png" name="Kavinda Medagoda" date="March 1999" gender="Male" education_level="Professional Video Editor"></profile-card>
  <%--  <jsp:include page="../components/profilecard.jsp"/>--%>

</div>

<div class="first">
  <h3 class="fnt fnt-large fnt-bold">Featured on Colegio</h3><br><br>
  <%--  <featured-cont img_src="../static/img/components_images/violinist.jpg" title="Western music for GCE OLs - The Complete Guide" description="Learn about western music in a way catered towards your OLs, fundemantals straight to master level." author="Senith Uthsara" description2="Published January 2022  | 11 total hours | 12 videos | OL Levels" price="$19.99"></featured-cont>--%>
  <jsp:include page="../components/featured-cont.jsp"/>
</div>

<div class="second">
  <h3 class="fnt fnt-large fnt-bold">Trending in Colegio</h3><br><br>
  <jsp:include page="../components/content_list.jsp"/>
</div>