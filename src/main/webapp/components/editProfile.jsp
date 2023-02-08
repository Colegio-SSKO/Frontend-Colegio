<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="../static/css/style.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>


    <script type="text/javascript">
        function addText(){
            var editemail2= document.getElementById("editemail");
            editemail2.innerHTML="<label for='edite'>Edit Email</label><br><input type='text' placehoder='Enter email'/>";

            var editpassword= document.getElementById("editpassword");
            editpassword.innerHTML="<label for='Editp'>Password</label><br><input type='text' placeholder='Enter Current Password'/><br><input type='text' placeholder='Enter new password'/><input type='text' placeholder='Re enter new password'/>";

            document.getElementById('btn').disabled = true;
        }

    </script>
</head>
<body>
<div class="profile-card-wrap2">
    <div class="profile-card-image">
        <img src="../static/img/components_images/pro.png" alt="profile picture" srcset="">
    </div>

    <form>
        <div class="profile-card-details-edit">
            <div class="edit_field">
                <label for="first_name_edit" class="fnt fnt-bold fnt-mid">First Name</label><br>
                <input type="text" class="edit fnt fnt-light fnt-mid" required placeholder="First Name" size="6">
            </div>


            <div class="edit_field">
                <label for="last_name" class="fnt fnt-bold fnt-mid">Last Name</label><br>
                <input type="text" class="edit fnt fnt-light fnt-mid" required placeholder="Last Name" size="6">
            </div>

            <div class="edit_field">
                <label for="gender" class="fnt fnt-bold fnt-mid">Gender</label><br>
                <select name="Male" id="gender" class="edit fnt fnt-light fnt-mid">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>

            <div class="edit_field">
                <label for="education_level" class="fnt fnt-bold fnt-mid">Education Level</label><br>
                <select name="G.C.E O/L" id="education_level" class="edit fnt fnt-light fnt-mid">
                    <option value="Grade6">Grade 6</option>
                    <option value="Grade7">Grade 7</option>
                    <option value="Grade8">Grade 8</option>
                    <option value="Grade9">Grade 9</option>
                    <option value="Grade10">Grade 10</option>
                    <option value="Grade11">Grade 11</option>
                    <option value="G.C.EO/L">G.C.E O/L</option>
                    <option value="G.C.EA/L">G.C.E A/L</option>
                    <option value="Undergratuate1">Undergratuate 1st year</option>
                    <option value="Undergratuate2">Undergratuate 2nd year</option>
                    <option value="Undergratuate3">Undergratuate 3rd year</option>
                    <option value="Undergratuate4">Undergratuate 4th year</option>
                </select>
            </div>

            <div id="editemail">

            </div>

            <div id="editpassword">

            </div>

            <center><button class="btn btn-solid btn-large fnt fnt-light fnt-mid">Save</button><br>
                <button class="btn btn-solid btn-large fnt fnt-light fnt-mid" id='btn' onclick="addText();">Edit Privacy and Security</button></center>
        </div>
    </form>

</div>
</body>
</html>