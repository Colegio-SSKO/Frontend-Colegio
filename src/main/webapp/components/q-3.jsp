<!DOCTYPE html>
<html lang="en">

<head>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <jsp:include page="imports.jsp"/>

    <title>Document</title>
</head>

<body>
    <div class="q-3-main">
        <div class="q-3-about">
            <h2 class="fnt fnt-bold fnt-large">Electronics circuits for GCE OLs English Medium</h2>
            <p class="fnt fnt-light fnt-mid">Lorem ipsum, dolor ipsa quasi ex laudantium, corrupti atque alias perspiciatis debitis molestias error, libero provident.</p>

            <div class="q-3-cmnt">
                <div class="q-3-comment-box">
                    <form action="submit">
                        <input type="text" placeholder="Type your response">
                        <jsp:include page="send_button.jsp"/>
                    </form>
                </div>
            </div>

            <jsp:include page="with_titles.jsp"/>

        </div>

        <div class="Q-3_button"><center>
            <button class="btn btn-solid btn-large"><a class="fnt fnt-bold fnt-mid" href="">Payment</a></button>
            <button class="btn btn-solid btn-large"><a class="fnt fnt-bold fnt-mid" href="">Cancel</a></button>
        </center></div>

    </div>

</body>

</html>