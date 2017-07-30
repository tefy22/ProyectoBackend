<?php  
	
function abrirArchivo(){
	$archivo= fopen('data-1.json', 'r');
	$lectura= fread($archivo, filesize("data-1.json"));
	$datos= json_decode($lectura, true);
	fclose($archivo);
	return $datos;
}

function obtenerDatos(){
	foreach (abrirArchivo() as $key => $value) {
		echo $value['id'];
	}
}



?>