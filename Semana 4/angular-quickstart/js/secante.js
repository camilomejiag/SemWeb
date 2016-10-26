$( "#secante" ).click(function() {

  $( ".append1" ).empty();

  var funcion = $('#funcion1').val();
  var derivada = $('#derivada').val();
  var intmin = $('#intmin').val();
  var intmax = $('#intmax').val();
  var iteraciones = $('#iteraciones').val();
  var delta = $('#delta').val();
  var tolerancia = $('#tolerancia').val();

  if (funcion == "") {
  alert("No ingreso nada en el campo funcion. Vuelta a intentar.");
} else if (intmin == "") {
  alert("No ingreso nada en el campo Intervalo Minimo. Vuelta a intentar.");
} else if (intmax == "") {
  alert("No ingreso nada en el campo Intervalo Maximo. Vuelta a intentar.");
} else if (iteraciones == "") {
  alert("No ingreso nada en el criterio Iteraciones. Vuelta a intentar.");
} else if (delta == "") {
  alert("No ingreso nada en el criterio Error Abolsuto. Vuelta a intentar.");
} else if (tolerancia == "") {
  alert("No ingreso nada en el criterio tolerancia. Vuelta a intentar.");
} else {

   $( ".append1" ).append("<table class='table table-bordered'><thead><tr><th>Iteracion</th><th>X</th><th>f(x)</th><th>Error</th></tr></thead><tbody class='append'></tbody></table>");

  var ima = parseFloat(intmax);
  var imi = parseFloat(intmin);
  var a = evaluar(imi);
  var b = evaluar(ima);
  var x = ima - ((b*(ima-imi))/(b-a));

 for(var i=1;i<=iteraciones;i++){
   var xff = xF;
   var xF = evaluar(x);
   var errorr = xF - xff;
   if(Math.abs(errorr)<delta){
     break;
   }
   var x2 = x;
   if(x+ima > x+imi){
     ima = x;
     b = evaluar(ima);
     x = ima - ((b*(ima-imi))/(b-a));
   }else {
     imi = x;
     a = evaluar(imi);
     x = imi - ((b*(ima-imi))/(b-a));
   }
   var cambio = x2-x;
   if(Math.abs(cambio)<delta){
     break;
   }
    $( ".append" ).append("<tr><td>" + i +"</td><td>" + x + "</td><td>"+ xF +"</td><td>" + errorr + "</td></tr>");
 }
}
});

function evaluar(evaluar){
    var funcion = $('#funcion1').val();
  var ev =  parseFloat(evaluar);
  var scope = {
      x: ev,
      y: ev,
      z: ev,
      w: ev
  };
  var node = math.parse(funcion, scope);
  var code = node.compile();
  var res = code.eval(scope);
  return res;
}

function description() {
  alert(
"A big problem when using the Newton-raphson method is the implementation of the derivate. Although its not very useful for the polynomials or the other functions, there are cases in which the derivative is extremaly difficult to calculate. in these cases, itcan be approximated by an infinite backward direntiation. This is secant (Also known as Modified Newton).");
}
