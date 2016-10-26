$( "#newton" ).click(function() {
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


  var x = parseFloat(Math.min(parseFloat(intmin) + (Math.random() * (parseFloat(intmax) - parseFloat(intmin))),parseFloat(intmax)));
  var fa;
  var fb;
for(var i=1;i<=iteraciones;i++){
  var faf = fa;
  fa = evaluar(x,funcion);
  var errorr = fa - faf;
  if(Math.abs(errorr)<delta){
    break;
  }
  fb = evaluar(x,derivada);
  var x2 = x;
  x = x-(fa/fb);
  var cambio = x-x2;
  if(Math.abs(cambio)<tolerancia){
    break;
  }
   $( ".append" ).append("<tr><td>" + i +"</td><td>" + x + "</td><td>"+ fa +"</td><td>" + errorr + "</td></tr>");
}

}
});

function evaluar(evaluar,funcion){
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
  alert("Newton-Raphson's formula is the most used one. If the initial value is Xi, the you can draw a tangent line from point (xi, f(xi)) of the curve. Commonly, the point where the tanget passes by is an aproximation of the solution of the lineal equation.");
}
