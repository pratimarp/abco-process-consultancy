<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve and sanitize user inputs
    $name = htmlspecialchars(strip_tags(trim($_POST["name"])));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(strip_tags(trim($_POST["message"])));

    // Validate inputs
    if (!empty($name) && !empty($email) && !empty($message)) {
        // Email parameters
        $to = "contact@abcoprocess.com";
        $subject = "New Contact Form Submission";
        $headers = "From: $name <$email>\r\n";
        $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

        // Send email
        if (mail($to, $subject, $body, $headers)) {
            echo "Message sent successfully!";
        } else {
            echo "Error sending message. Please try again.";
        }
    } else {
        echo "All fields are required.";
    }
}
?>
