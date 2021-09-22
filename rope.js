class Rope{
	constructor(bodyA,pointB)
	{
		//this.pointB = pointB;
		//this.bodyA = body1
		var options = {
			bodyA : bodyA,
			pointB : pointB,
			stiffness :1,
			length : 200
		}
	//create rope constraint here

	this.rope = Matter.Constraint.create(options);
	this.pointB= pointB;
	World.add(world,this.rope);

	}
    //create display() here 
	display(){
		var pointA = this.rope.bodyA.position;
		var pointB = this.pointB;
		strokeWeight(4);
		line(pointA.x,pointA.y,pointB.x,pointB.y);
	}
	}
