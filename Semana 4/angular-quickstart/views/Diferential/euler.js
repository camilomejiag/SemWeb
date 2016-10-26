function euler() {
    var t = document.getElementById("lag").value;
    t = parseFloat(t);
    var t2 = document.getElementById("nw").value;
    t2 = parseFloat(t2);
    var y = document.getElementById("li").value;
    var ft = document.getElementById("cu").value;
    var h = document.getElementById("op").value;
    h = parseFloat(h);
    var error = 1.12515248574854;
    error = parseFloat(error);
    y = parseFloat(y);
    var scope;
    var yn;
    yn = parseFloat(yn);
    var yt;
    var code2;
    var fte = 0;
    var node2;
    if (t2 === "") {
        for (var i = 0; error != 0.0; i++) {
            if (i > 0) {
                yt = yn;
                yn = yn + h * fte;
                error = yn - yt;
            }
            if (i == 0) {
                yn = y;
            }
            scope = {
                t: t,
                y: yn
            };
            node2 = math.parse(ft, scope);
            code2 = node2.compile();
            fte = code2.eval(scope);
            t = t + h;
            t = t.toFixed(2);
            t = parseFloat(t);
			
			console.log("t: "+t);
			console.log("y: "+yn);
			console.log("f(t,y): "+fte);
			console.log("error: "+error);
        }
    } else {
        for (var i = 0; t != t2; i++) {
            if (i > 0) {
                yt = yn;
                yn = yn + h * fte;
                error = yn - yt;
            }
            if (i == 0) {
                yn = y;
            }
            scope = {
                t: t,
                y: yn
            };
            node2 = math.parse(ft, scope);
            code2 = node2.compile();
            fte = code2.eval(scope);
            t = t + h;
            t = t.toFixed(2);
            t = parseFloat(t);
			
			console.log("t: "+t);
			console.log("y: "+yn);
			console.log("f(t,y): "+fte);
			console.log("error: "+error);
        }
    }
    
}