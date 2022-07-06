class Iron{
	constructor(x,y){
		var options={
			'restitution': 0.8,
			'friction': 3.0,
			'density': 30.0
		}
		this.body = Bodies.rectangle(x, y, 200, 50, options);
		this.width = 200;
		this.height = 50;
		World.add(world, this.body);
	  };
	  display(){
		var pos = this.body.position;
		var angle = this.body.angle;
		push();
		translate(pos.x, pos.y);
		rotate(angle);
		strokeWeight(3);
		stroke('white')
		fill('silver')
		rectMode(CENTER)
		rect(0, 0, this.width, this.height);
		pop();
	  };
	};