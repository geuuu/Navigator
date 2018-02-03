// add the select form drop down item

$('#menu').append(
  //'<select id="select-1"></select>' +
  //'<select id="select-2"></select>' +
  //'<select id="select-3"></select>' +
  '<select id="select-4"></select>'
);

// fill the drop down menu with the menu options
$('#menu a').each(function() {
  //El gato te lleva a la misma página
  var $anchor= $(this);
  //id menu y dentro del menu hay un elemento a(anchor)
  $('#menu select').append(
    '<option value="'+$anchor.attr("href")+'">'+$anchor.text()+
    //opcion valor (este atributo "href(#home)" + texto del atributo)
    '</option>'
  );
  $('#menu option').addClass('select-option'
);
//el "option" hace referencia al valor de opción de arriba
});

// navigate to correct location based on option selected
$('#menu select').on("change",function() {
  var $select = $(this);
  var $option= $select.find('option:selected')
  console.info(
    "Habeis seleccionado la opción " +
    $option.text() +
    'del menú ' +
    $select.attr('id') +
    'y te lleva a ' +
    $option.val()
  );
  location.href = $(this).val();
});

// indicate which navigation item we are currently looking at
$('#menu a').on('click',function() {
  var $anchor = $(this);
  console.info(
    "Habeis seleccionado la opción " +
    $anchor.text()
  );
  $('#menu li').removeClass("selected");
  $anchor.parent().addClass("selected");
});
