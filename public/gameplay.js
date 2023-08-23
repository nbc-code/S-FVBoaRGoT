var x = 1;
var y = 1;
var dx = 0;
var dy = 0;

function battleships()
{
    var myBoard = document.getElementById("board2");
    var context = myBoard.getContext("2d");
    drawLand(context, myBoard, landSquares);
    //drawShips(myBoard, context);
}

function drawShips(canvas, context)
{
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.lineWidth = 2;
  context.strokeStyle = 'black';
  context.fillStyle = 'white';

  context.beginPath();
  context.rect(x, y, 7, 7);
  context.stroke();
  context.fill();
  context.closePath();
}

function drawLand(context, canvas, landarr)
{
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	var xOffset = 1;
	
	for(var idX = 0; idX<32; idX++)
	{
		var idY = 0;
		var yOffset = 1;
		while(idY<16)
		{
			if(idX>=10)
				{
					xOffset = 2;
				}
			if(idX>=22)
				{
					xOffset = 2;
				}
			if(idY>=9){
				yOffset = 2;
			}
			context.lineWidth = 0;
			if(landarr[idX][idY])
			{
			context.strokeStyle = 'green';
			context.fillStyle = 'green';
			context.beginPath();
			context.rect(xOffset+idX/3+idX*9, yOffset+idY/3+idY*9, 7, 7);
			context.stroke();
			context.fill();
			context.closePath();
			}
			idY++;
		}
	}
}

function randomGenerator()
{
  var randWidth = (Math.random() * 31);
  var randHeight = (Math.random() * 15);

  alert(randWidth);
  alert(randHeight);
}

var landSquares= [
	[
	true,true,true,false,true,false,false,true,false,false,false,false,false,false,true,true
],
[
	true,true,true,false,false,false,false,false,false,false,false,false,false,false,false,true

],[
	false,true,false,false,false,false,false,false,false,false,false,false,false,false,false

],[
	true,false,false,false,false,false,false,false,false,false,false,false,false,false,false

],[
	false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,
	false

],[
	false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,
	false

],[
	false,false,true,true,false,false,false,false,false,false,false,false,false,false,false,
	false
],[
	false,true,true,false,false,false,false,false,false,false,false,false,false,false,false,
	false
],[
	false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,
	false
],[
	false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,
	false
],[
	false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,
	false
],[
	false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,
	false
],[
	false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,
	false
],[
	false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,
	false
],[
	false,false,false,true,true,true,false,true,false,false,false,false,false,false,false,
	true
],[
	true,true,true,false,true,false,false,true,false,false,false,false,false,false,true,true
],
[
	true,true,true,false,false,false,false,false,false,false,false,false,false,false,false,true

],[
	false,false,false,false,false,false,false,false,false,false,false,false,false,false,false

],[
	true,false,false,false,false,false,false,false,false,false,false,false,false,false,false

],[
	false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,
	false

],[
	false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,
	false

],[
	false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,
	false
],[
	false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,
	false
],[
	false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,
	false
],[
	false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,
	false
],[
	false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,
	false
],[
	false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,
	false
],[
	false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,
	false
],[
	false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,
	false
],[
	false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,
	true
],[
	false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,
	true
],[
	false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,
	true
]
];