function puntos() {
              var numerop = document.getElementById("numerop").value;
              $("#puntos").empty();
              var oli = "<br>";
              if (numerop <= 4) {
                alert("El numero debe ser impar y mayor que 3.");
              } else if ((numerop % 2) == 0) {
                alert("Ingrese un numero impar de puntos.");
              } else {
                for (var i = 0; i < numerop; i++) {
                  oli += "Punto " + (i+1) + "<br><input placeholder='x" + (i+1) + "' id='x" + (i+1) + "'><input placeholder='y" + (i+1) + "' id='y" + (i+1) + "'><br>";
                oli += "<br><button onclick='equaciones()'>Ejectutar</button>";
                $( "#puntos" ).append(oli);
              }
            }

            function equaciones() {
            var numerop = parseInt(document.getElementById("numerop").value);
            var y0 = parseFloat(document.getElementById("y1").value);
            var yn = parseFloat(document.getElementById("y" + numerop).value);
            var h = parseFloat(document.getElementById("x2").value) - parseFloat(document.getElementById("x1").value);
            var y = [];
            var yi1 = 0;
            var yi2 = 0;
            for (var i = 2; i < numerop; i++) {
              //y[i-1] = document.getElementById("y" + (i+1)).value;
              var b = parseFloat(document.getElementById("y" + i).value);
              if (i % 2 != 0) {
                //yi1 += parseFloat(y[i]);
                yi1 += b;
              } else {
                //yi2 += parseFloat(y[i+1]);
                yi2 += b;
              }
            }

            var area = h/3 * (y0 + 4*yi1 + 2*yi2 + yn);


            $('.result').append("<br>El restulado es : "  + area);
            console.log("El area bajo las rectas de los puntos es: " + area);
            }

function description() {
  alert("Just like Trapezium, Complex Simpson improves by dividing the integration segment between various intervals, all of the same size.");
}