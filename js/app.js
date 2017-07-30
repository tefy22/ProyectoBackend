$(document).ready(function () {
	$("#selectCiudad,#selectTipo").material_select();//cuando se trabaja con materialize se debe inicializar el select
	$.ajax({
				url: './data-1.json',
				type:'GET',
				contentType:'application/json; charset=utf-8',
				dataType: 'json',
				success: function (response) {
					$.each(response, function(i,post){
						$("#selectCiudad").append('<option value='+post.Ciudad+'>'+post.Ciudad+'</option>');
						$("#selectTipo").append('<option value='+post.Tipo+'>'+post.Tipo+'</option>');
					});
				},
				error: function(){
					alert("Error al cargar los datos");
				}
			});

	$("#mostrarTodos").on('click', mostrarTodo);	
	
	$("#selectCiudad").change(function(){		
		alert("hola")
	});
	
});

function mostrarTodo(){
	$.ajax({
			url: './data-1.json',
			type:'GET',
			contentType:'application/json; charset=utf-8',
			dataType: 'json',
			success: function (response) {
				$.each(response, function(i,post){
					$(".colContenido").append(
								"<div class='itemMostrado tituloContenido'>"
								+	"<div class='row'>"								
								+		"<img src='img/home.jpg'/>"								
								+	"<div class='col l7 card-stacked'>"
								+		"<span class='card-action'>Direccion: <b>"+post.Direccion+"</b></span><br>"
								+ 		"<span class='card-action'>Ciudad: <b>"+post.Ciudad+"</b></span><br>"
								+ 		"<span class='card-action'>Telefono: <b>"+post.Telefono+"</b></span><br>"
								+ 		"<span class='card-action'>Codigo Postal: <b>"+post.Codigo_Postal+"</b></span><br>"
								+ 		"<span class='card-action'>Tipo: <b>"+post.Tipo+"</b></span><br>"
								+ 		"<span class='card-action precioTexto'>Precio: <b>"+post.Precio+"</b></span><br><br><br>"
								+ 		"<span class='card-action'>VER MAS</span><br>"
								+	"</div>"
								+	"</div>"
								+ "</div>"
							);
				});
			},
			error: function(){
				alert("Error al cargar los datos");
			}
		});
}


