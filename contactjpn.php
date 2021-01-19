<!DOCTYPE html>

<html class="htmlhome" lang="ja">

<head>
    <meta charset="utf-8">
    <title>shefuyuta.com</title>
    <link rel="icon" href="shefuyutaicons/spaghetti.png">
    <link rel="stylesheet" href="shefuyuta.css">
    <script type="text/javascript" charset="UTF-8"></script>

<link rel="stylesheet"
  href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
  integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
  crossorigin="anonymous">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Cookie&family=Noto+Sans+JP:wght@300&display=swap" rel="stylesheet">
</head>

<body>
  <?php
    mb_language("Japanese");
    mb_internal_encoding("UTF-8");
    $name = $_POST['name'];
    $purpose = $_POST['purpose'];
    $message = <html><body><a>name: $_POST['name']/r/n mail: $_POST['mail']$_POST['message']</a></body></html>;
    $mail = $_POST['mail'];
    $headers = "From: ";
    $headers .= "\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8";
    if(mb_send_mail("shefuyuta@gmail.com", $purpose, $message)){
        echo "メールを送信しました";
      }
    else {
        echo "未入力項目があります";
      };
   ?>

</body>
</html>
