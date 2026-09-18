<?php

require_once __DIR__ . '/../data/projects.php';

function getProjects()
{
    global $projects;

    header('Content-Type: application/json');

    echo json_encode($projects);
}