<?php
$sendto   = "ummo93@gmail.com";
$userphone = $_POST['calories'];
$username = $_POST['name'];

// Формирование заголовка письма
$subject  = "Новый продукт для базы";
$headers  = "From: Minute\r\n";

$headers .= "Content-Type: text/plain;charset=utf-8 \r\n";

// Формирование тела письма
$msg="Название: $username \nЭнергетическая ценность: $userphone кК в 100 г продукта.\n\n";

// отправка сообщения
if(@mail($sendto, $subject, $msg, $headers)) {
	echo "true";
} else {
	echo "false";
}

?>
