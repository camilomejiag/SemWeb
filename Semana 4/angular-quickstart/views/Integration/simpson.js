function equaciones() {
  $('.result').empty();
            var x1 = parseFloat(document.getElementById("x1").value);
            var y1 = parseFloat(document.getElementById("y1").value);
            var x2 = parseFloat(document.getElementById("x2").value);
            var y2 = parseFloat(document.getElementById("y2").value);
            var x3 = parseFloat(document.getElementById("x3").value);
            var y3 = parseFloat(document.getElementById("y3").value);
            var h = parseFloat(document.getElementById("x2").value) - parseFloat(document.getElementById("x1").value);

            var area = (h/3) * (y1 + 4*y2 + y3);
            //document.getElementById('result') = area;
            $('.result').append("<br>El restulado es : "  + area);
      }

function description() {
      alert("Simpson's law's calculate the approximate value of a defined integrate, forming a parabola among 3 points.");
}