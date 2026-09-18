<?php

require_once __DIR__ . '/../controllers/projectsController.php';

$requestUri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$requestMethod = $_SERVER['REQUEST_METHOD'];

if ($requestUri === '/api/hello' && $requestMethod === 'GET') {
    header('Content-Type: application/json');

    echo json_encode([
        'message' => 'Hello from Konza Portfolio API!'
    ]);
    exit;
}

if ($requestUri === '/api/projects' && $requestMethod === 'GET') {
    getProjects();
    exit;
}

http_response_code(404);

header('Content-Type: application/json');

echo json_encode([
    'error' => 'Route not found'
]);