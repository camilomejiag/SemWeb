function newton() {
    var ev = document.getElementById("evaluar").value;
    ev = parseFloat(ev);
    var puntos = document.getElementById("nw").value;
    var puntoS = String(puntos);
    var x = [];
    var y = [];
    var n = puntoS.length;
    var c = 0;
    var cy = 0;
    var t = 0;
    var entreUno = true;
    for (var i = 0; i < n; i++) {
        if (puntoS.charAt(i) === "(") {
            for (var j = i; j == j; j++) {
                if (puntoS.charAt(j) === "," && entreUno) {
                    c = j;
                    entreUno = false;
                }
                if (puntoS.charAt(j) === ")") {
                    cy = j;
                    break;
                }
            }
            x[t] = parseFloat(puntoS.substr(i + 1, c));
            y[t] = parseFloat(puntoS.substr(c + 1, cy - c - 1));
            entreUno = true;
            t++;
        }
    }
    var newton = "";
    var nwR = [];
    var j = 0;
    for (var i = 0; i == i; i++) {
        if (i == 0 && j == 0) {
            var xS = String(y[0]);
            newton = xS;
        }
        if (y.length == 1) {
            break;
        }
        var r = (y[i + 1] - y[i]) / (x[i + 1 + j] - x[i]);
        y[i] = r;
        if (i == 0) {
            nwR[j] = r;
        }
        if (i == y.length - 2) {
            i = -1;
            j++;
            y.pop();
        }
    }
    for (var i = 0; i < nwR.length; i++) {
        if (nwR[i] >= 0) {
            var xS = String(nwR[i]);
            newton = newton.concat("+" + xS);
        } else {
            newton = newton.concat(nwR[i]);
        }
        for (var j = 0; j <= i; j++) {
            if (x[j] >= 0) {
                var xS = String(x[j]);
                newton = newton.concat("(x-" + xS + ")");
            } else {
                var xS = x[j] * -1;
                var xS = String(xS);
                newton = newton.concat("(x+" + xS + ")");
            }
        }
    }
    var scope = {
        x: ev,
        y: ev,
        z: ev,
        w: ev
    };
    var node = math.parse(newton, scope);
    var code = node.compile();
    var res = code.eval(scope);
    console.log(newton);
    console.log(res);
}