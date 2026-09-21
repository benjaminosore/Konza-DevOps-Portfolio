<?php

require_once __DIR__ . '/../data/contacts.php';

function submitContact()
{
    global $contactsFile;

    $data = json_decode(file_get_contents('php://input'), true);

    $name = trim($data['name'] ?? '');
    $email = trim($data['email'] ?? '');
    $message = trim($data['message'] ?? '');

    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400);

        header('Content-Type: application/json');

        echo json_encode([
            'error' => 'All fields are required'
        ]);

        return;
    }

    $contacts = [];

    if (file_exists($contactsFile)) {
        $existingData = file_get_contents($contactsFile);
        $contacts = json_decode($existingData, true) ?? [];
    }

    $contacts[] = [
        'id' => count($contacts) + 1,
        'name' => $name,
        'email' => $email,
        'message' => $message,
        'created_at' => date('Y-m-d H:i:s')
    ];

    file_put_contents(
        $contactsFile,
        json_encode($contacts, JSON_PRETTY_PRINT)
    );

    header('Content-Type: application/json');

    echo json_encode([
        'message' => 'Thank you! Your message has been received.'
    ]);
}