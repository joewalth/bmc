<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $attendance = htmlspecialchars($_POST['attendance']);
    $workSummary = htmlspecialchars($_POST['workSummary']);

    $to = "brandevoagency@gmail.com";
    $subject = "Daily Attendance and Work Summary";
    $message = "Name: $name\nAttendance: $attendance\n\nWork Summary:\n$workSummary";
    $headers = "From: no-reply@bmc.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "Attendance marked successfully!";
    } else {
        echo "Error in sending email. Please try again later.";
    }
} else {
    echo "Invalid request.";
}
