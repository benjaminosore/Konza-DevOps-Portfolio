<?php

function getProjects()
{
    $file = __DIR__ . '/../data/projects.json';

    header('Content-Type: application/json');

    if (!file_exists($file)) {
        http_response_code(500);

        echo json_encode([
            'error' => 'Projects data file not found'
        ]);

        return;
    }

    $projects = json_decode(file_get_contents($file), true);

    if (json_last_error() !== JSON_ERROR_NONE) {
        http_response_code(500);

        echo json_encode([
            'error' => 'Invalid projects JSON data'
        ]);

        return;
    }

    echo json_encode($projects);
}
