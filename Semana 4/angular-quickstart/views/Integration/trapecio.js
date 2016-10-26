function equaciones() {
  $('.result').empty();
            var x1 = parseFloat(document.getElementById("x1").value);
            var y1 = parseFloat(document.getElementById("y1").value);
            var x2 = parseFloat(document.getElementById("x2").value);
            var y2 = parseFloat(document.getElementById("y2").value);

            var area = ((y1 + y2)/2)*(x2-x1);
            $('.result').append("<br>El restulado es : "  + area);
            }

function description() {
  alert("Trapezium law is the first closed-formula of integration of Newton-Cotes, which is used to calculate an apporximate value fo a defined integrate");
}
