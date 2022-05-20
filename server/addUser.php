<?php 

include 'db_connection.php';

header("Access-Control-Allow-Origin: * ");
header("Access-Control-Allow-Headers: * ");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$petNames = $data->petNames;
$petSpecies = $data->petSpecies;
$petGender = $data->petGender;
$petAge = $data->petAge;
$petMicrochip = $data->petMicrochip;
$ownerName = $data->ownerName;
$ownerId = $data->ownerId;
$exportOri = $data->exportOri;
$exportDest = $data->exportDest;

$sql = "INSERT INTO pets (id, name_of_pet, species_of_pet, pet_gender, age_of_pet, pet_microchip_id, pet_owner_name, pet_owner_id_number, export_origin, export_destination) VALUES (NULL,'$petNames','$petSpecies','$petGender','$petAge','$petMicrochip','$ownerName','$ownerId','$exportOri','$exportDest');";

$result = mysqli_query($conn, $sql);

if(!$result){
    echo ("Error Description: " . mysqli_error($conn));
} else {
    echo ("All is Goood!");
}

?>