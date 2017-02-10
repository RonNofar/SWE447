function Cube() {
	this.count = 8;
	
	this.positions = {
		values : new Float32Array {
			0.0, 0.0, 0.0
			1.0, 0.0, 0.0
			1.0, 1.0, 0.0
			1.0, 1.0, 1.0
			0.0, 1.0, 1.0
			0.0, 0.0, 1.0
		}
	};
}