<?php
$db_hostname = "";
$db_username = "";
$db_password = "";
$db_name = "";

$conn = mysqli_connect($db_hostname, $db_username, $db_password, $db_name);
if (!$conn) {
    echo "Connection failed: " . mysqli_connect_error();
    exit;
}

$name = $_POST['name'];
$email = $_POST['email'];
$mobileno = $_POST['mobileno'];
$message = $_POST['message'];

$sql = "INSERT INTO contacts (name, email, mobileno, message)VALUES('$name', '$email', '$mobileno', '$message')";

$result = mysqli_query($conn, $sql);
if (!$result) {
    echo "Error: " . mysqli_error($conn);
    exit;
}
mysqli_close($conn);
?>

<html>

<script>
    window.location.assign("../index.php");
    alert("Message sent successfully !!!");
</script>

</html>