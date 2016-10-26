function splinesCuadraticos() {
    var puntos = document.getElementById("cu").value;
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
    //sin derivar
    var sinDerivada = "";
    var Derivada = [];
    var pDerivada = [];
    var sDerivada = [];
    var Derivada2 = [];
    var a = 0;
    var b = 0;
    var c = 0;
    var a2 = 0;
    var b2 = 0;
    var c2 = 0;
    var am = "+";
    var bm = "+";
    var cm = "+";
    for (var i = 0; i < x.length; i++) {
        a = x[i];
        a = Math.pow(a, 3);
        b = x[i];
        b = Math.pow(b, 2);
        c = x[i];
        a2 = x[i + 1];
        a2 = Math.pow(a2, 3);
        b2 = x[i + 1];
        b2 = Math.pow(b2, 2);
        c2 = x[i + 1];
        if (a >= 0) {
            a = String(a);
            a = am.concat(a);
        }
        if (b >= 0) {
            b = String(b);
            b = bm.concat(b);
        }
        if (c >= 0) {
            c = String(c);
            c = cm.concat(c);
        }
        if (x[i + 2] != null) {
            if (a2 >= 0) {
                a2 = String(a2);
                a2 = am.concat(a2);
            }
            if (b2 >= 0) {
                b2 = String(b2);
                b2 = bm.concat(b2);
            }
            if (c2 >= 0) {
                c2 = String(c2);
                c2 = cm.concat(c2);
            }
            sinDerivada = sinDerivada.concat(a2 + "a" + b2 + "b" + c2 + "c" + "+d=" + y[i] + " " + x[i + 1] + " ");
            Derivada2[i] = sinDerivada;
            sinDerivada = "";
        }
        sinDerivada = sinDerivada.concat(a + "a" + b + "b" + c + "c" + "+d=" + y[i] + " " + x[i] + " ");
        Derivada[i] = sinDerivada;
        sinDerivada = "";
    }
    //primera derivada
    for (var i = 0; i < x.length; i++) {
        if (x[i + 2] != null) {
            a = Math.pow(x[i + 1], 2);
            a = a * 3;
            b = 2 * x[i + 1];
            if (a >= 0) {
                a = String(a);
                a = am.concat(a);
            }
            if (b >= 0) {
                b = String(b);
                b = bm.concat(b);
            }
            sinDerivada = sinDerivada.concat(a + "a" + b + "b" + "+c=" + a + "a" + b + "b" + "+c");
            pDerivada[i] = sinDerivada;
            sinDerivada = "";
        }
    }
    //segunda derivada
    for (var i = 0; i < x.length; i++) {
        if (x[i + 2] != null) {
            a = x[i + 1];
            a = 6 * a;
            if (a >= 0) {
                a = String(a);
                a = am.concat(a);
            }
            sinDerivada = sinDerivada.concat(a + "a" + "2b=" + a + "a" + "2b");
            sDerivada[i] = sinDerivada;
            sinDerivada = "";
        }
    }
    console.log(Derivada);
    console.log(Derivada2);
    console.log(pDerivada);
    console.log(sDerivada);
    console.log(6 * x[0] + "a+" + 2 * x[0] + "b");
    console.log(6 * [x.length - 1] + "a+" + 2 * [x.length - 1] + "b");
}