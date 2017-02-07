var gl = null;
var cone = null;

function init() {
    var canvas = document.getElementById( "webgl-canvas" );

    gl = WebGLUtils.setupWebGL( canvas );

    if ( !gl ) {
        alert("Unable to setup WebGL");
        return;
    }

	var program = initShaders(
	gl,
	"Cone-vertex-shader",
	"Cone-fragment-shader");
    
	gl.useProgram(program);
	
	cone = new Cone( n );

    render();
}

function render() {
    cone.render();
}



window.onload = init;
