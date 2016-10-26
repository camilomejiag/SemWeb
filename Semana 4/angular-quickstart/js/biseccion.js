$( "#biseccion" ).click(function() {
  $( ".append1" ).empty();

  var funcion = $('#funcion1').val();

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
  var x = ( ima + imi)/2;
  var a;
  var b;
  var xF;
   $( ".append" ).append(x + "<br>");
 for(var i=1; i<=iteraciones ;i++){
   var xff = xF;
    a = evaluar(imi);
    b = evaluar(ima);
    xF = evaluar(x);
    var errorr = xF - xff;
   if(Math.abs(errorr)<delta){
     break;
   }
   var x2 =x;
   if(xF*a<0){
     ima = x;
     x= (imi+ima)/2;
   }else if(xF*b<0){
     imi = x;
     x= (imi+ima)/2;
   }
   var tolerancia = x-x2;
   if(Math.abs(tolerancia)<tolerancia){
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

var size = window.getComputedStyle(document.input1,':after').getPropertyValue('content');
var size = window.getComputedStyle(document.input2,':after').getPropertyValue('content');
var size = window.getComputedStyle(document.input3,':after').getPropertyValue('content');
var size = window.getComputedStyle(document.input4,':after').getPropertyValue('content');
var size = window.getComputedStyle(document.input5,':after').getPropertyValue('content');
var size = window.getComputedStyle(document.input6,':after').getPropertyValue('content');

function description() {
  alert("Bisection method, also know as binary cut, interval separator or Bolzano, is a tipe of incremental search in which the interval is divided always by half. If the function changes sign in a piece of the interval,the function is evaluated in the middle point of given interval. The position of the root is determined by placing it in the middle point of the subinterval. The process is repeated until the closest approach is found.Evaluate the following differences in orden to determine the interval:\na)if f(Xi)f(Xr) < 0, then the root is between the left subinterval. Therefore, Xs=Xr.\nb)if (Xi )f(Xr ) > 0, then the root is between the right interval. Therefore, Xi = Xr. \nc)if f(Xi)f(Xr) = 0, the root is equal to Xr.");
}
