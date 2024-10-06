var ControlUsers   = false;
var ControlBarrios = false;

var UsuarioActual = jQuery.parseJSON(sessionStorage.getItem('user'));

$('#CerrarSesion').click(function(event) {
    sessionStorage.removeItem('user');
    Recargar("../../FrontEnd/PanelControl/");
});


$('#ControlPanelUser').click(function(event) {
	if(!ControlUsers){
		$('#n_img').addClass('hidden');
		listarUsers();
		ControlUsers = true;
	}else{
		ControlUsers = false;
    	$('#n_img').removeClass('hidden');
	}
});


$('#ControlPanelBarrio').click(function(event) {
	if(!ControlBarrios){
		$('#n_img').addClass('hidden');
		listarBarrios();
		ControlBarrios = true;
	}else{
		ControlBarrios = false;
    $('#n_img').removeClass('hidden');
	}
	}
);

jQuery(document).ready(function(){
    $(".oculto").hide();              
      $(".inf").click(function(){
            var nodo = $(this).attr("href");  
   
            if ($(nodo).is(":visible")){
                 $(nodo).hide();
                 return false;
            }else{
          $(".oculto").hide("slow");                             
          $(nodo).fadeToggle("fast");
          return false;
            }
      });
  });

  jQuery(document).ready(function(){
    $('.date').datetimepicker({
        format: 'YYYY-MM-DD'
    });
});