function puntos() {
              var numerop = document.getElementById("numerop").value;
              $("#puntos").empty();
              var oli = "";
              if (numerop <= 2) {
                alert("La cantidad de puntos debe ser mayor a 2")
              } else {
              for (var i = 0; i < numerop; i++) {
                oli += "Punto " + (i+1) + "<br><input placeholder='x" + (i+1) + "' id='x" + (i+1) + "'><input placeholder='y" + (i+1) + "' id='y" + (i+1) + "'><br>";
                              }
              oli += "<br><button onclick='equaciones()'>Ejectutar</button>";
              $( "#puntos" ).append(oli);
              }
            }

            function equaciones() {
            var numerop = parseInt(document.getElementById("numerop").value);
            var y0 = parseFloat(document.getElementById("y1").value);
            var yn = parseFloat(document.getElementById("y" + numerop).value);
            var h = parseFloat(document.getElementById("x2").value) - parseFloat(document.getElementById("x1").value);
            var x = [];
            var y = [];
            var yi = 0;
            for (var i = 1; i < numerop-1; i++) {
              y[i-1] = parseFloat(document.getElementById("y" + (i+1)).value);
              yi += parseInt(y[i-1]);
            }

            var area = h/2 * (y0 + 2*yi + yn);


            $('.result').append("<br>El restulado es : "  + area);
            console.log("El area bajo las rectas de los puntos es: " + area);
            }

function description() {
  alert("A way of improving the precision on trapezium's law consists on dividing the integration interval in various segments, and applying the method to each one of them. Adding all the areas below the segments will give the correct answer. The resulting equations are called integration formulas, of multiple action or complex.");
}