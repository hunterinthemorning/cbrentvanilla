<?php
//var_dump($_POST);
//echo $_POST['email']." ".$_POST['message'];
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = 'manningha@gmail.com';
$subject = 'Message for Brent' ;
$body = "Name: $name<br>Email: $email<br><br>Message:<br>$message";

$headers = 'From: Website autosend@cbrentmooney.com' . "\r\n" ;
$headers .='Reply-To: '. $email . "\r\n" ;
$headers .='X-Mailer: PHP/' . phpversion();
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";

if(mail($to, $subject, $body,$headers)) {
    echo('<br>'."Email Sent ;D ".'</br>');
} else {
    echo("<p>Email Message delivery failed...</p>");
}
?>