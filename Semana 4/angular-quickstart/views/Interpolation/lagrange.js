function lagranja() {
    var ev = document.getElementById("evaluar").value;
    ev = parseFloat(ev);
    var puntos = document.getElementById("lag").value;
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
            y[t] = puntoS.substr(c + 1, cy - c - 1);
            entreUno = true;
            t++;
        }
    }

    var lagran = "";
    for (var i = 0; i < x.length; i++) {
        var lagrang = "";
        var div = 0;
        var divF = 1;
        for (var j = 0; j < x.length; j++) {
            if (i != j) {
                div = x[i] - x[j];
                divF = divF * div;
                if (x[j] >= 0) {
                    var xS = String(x[j]);
                    lagrang = lagrang.concat("(x-" + xS + ")");
                } else {
                    var xS = x[j] * -1;
                    var xS = String(xS);
                    lagrang = lagrang.concat("(x+" + xS + ")");
                }
            }
        }

        if (y[i] < 0 && divF < 0) {
            y[i] = y[i] * -1;
            divF = divF * -1;

        } else if (divF < 0) {
            y[i] = y[i] * -1;
            divF = divF * -1;
        }
        if (i == 0) {
            lagran = lagran.concat("(" + y[i] + "/" + divF + ") ");
        } else if (y[i] < 0) {
            lagran = lagran.concat("(" + y[i] + "/" + divF + ") ");
        } else {
            lagran = lagran.concat("+(" + y[i] + "/" + divF + ") ");
        }
        lagran = lagran.concat(lagrang);

    }
    var scope = {
        x: ev,
        y: ev,
        z: ev,
        w: ev
    };
    var node = math.parse(lagran, scope);
    var code = node.compile();
    var res = code.eval(scope);
    console.log(lagran);
    console.log(res);
}