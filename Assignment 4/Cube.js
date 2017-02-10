function Cube() {
	this.count = 8;
	
	this.positions = {
		values : new Float32Array([
			0.0, 0.0, 0.0 // V0
			1.0, 0.0, 0.0 // V1
			1.0, 1.0, 0.0 // V2
			0.0, 1.0, 0.0 // V3
			0.0, 1.0, 1.0 // V4
			0.0, 0.0, 1.0 // V5
			1.0, 1.0, 1.0 // V6
			1.0, 0.0, 1.0 // V7
		])
	};
	this.indices = {
		values = new Uint16Array([
			0,1,3, // Front 1
			1,2,3, // Front 2
			1,2,7, // Right 1
			2,6,7, // Right 2
			4,6,7, // Back 1
			4,5,7, // Back 2
			0,1,7, // Bottom 1
			0,5,7, // Bottom 2
			0,3,5, // Left 1
			3,4,5, // Left 2
			2,3,6, // Top 1
			3,4,6  // Top 2
		])
	};
}