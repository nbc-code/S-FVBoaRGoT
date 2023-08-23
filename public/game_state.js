const left = 37;
const right = 39;
const up = 38;
const down = 40;

var width = 1500;
var height = 750;
var cols = width / 50;
var rows = height / 50;

var dx = 0;
var dy = 0;
var direction;
var shipArr;
var terrainArr;
var gameOver = false;
var id;
const socket = io();

socket.on('player-number', num => 
{
    if(num === -1)
    {
        //Redirect to home page or something
        //console.log(num)
    }
    else
    {
        console.log("oof");
    }
});

socket.emit('player-number', num =>
{
    if(num === 0)
    {
        console.log("BIG OOF");
    }
    else
    {
        console.log("little oof");
    }
});

function ship(i, j, isSelected, color)
{
    this.x = i;
    this.y = j;
    this.selected = isSelected;
    this.color = color;
}

function terrain(i, j)
{
    this.x = i;
    this.y = j;
    this.isLand = false;
    this.color = "green";
}

function setup()
{
    var myBoard = document.getElementById("board");
    var context = myBoard.getContext("2d");
    
    var landBoard = document.getElementById("board");
    var context2 = landBoard.getContext("2d");

    terrainArr = new Array(width / 50);

    initializeTerrainArray();
    land(context2, landBoard);
    initializeShipArray(context, myBoard);

    id = setInterval(function run() {
            moveShip(context, myBoard);
    },200);

}

function initializeTerrainArray()
{
    terrainArr = new Array(width / 50);

    for(var i = 0; i < terrainArr.length; i++)
    {
        terrainArr[i] = Array(height / 50);
    }

    for(var i = 0; i < cols; i++)
    {
        for(var j = 0; j < rows; j++)
        {
            terrainArr[i][j] = new terrain(i, j);
        }
    }

    console.log(terrainArr);
}

function initializeShipArray(context, myBoard)
{
    shipArr = new Array(6);

    shipArr[0] = new ship(20, 0, false, "blue");
    shipArr[1] = new ship(10, 10, false, "blue");
    shipArr[2] = new ship(0, 20, false, "blue");
    shipArr[3] = new ship(270, 140, false, "red");
    shipArr[4] = new ship(280, 130, false, "red");
    shipArr[5] = new ship(290, 120, false, "red");

    for(var i = 0; i < shipArr.length; i++)
    {
        drawShip(context, myBoard, shipArr[i]);
    }

    console.log(shipArr);
}

function drawShip(context, myBoard, ship)
{
    //if(ship.color == "red")
        //context.clearRect(ship.x, ship.y, ship.x, ship.y);
    //else
        context.clearRect(ship.x, ship.y, ship.x + 10, ship.y + 10);
    
    context.beginPath();

    context.fillStyle = ship.color;

    ship.x += dx;
    ship.y += dy;
    
    dx = 0;
    dy = 0;

    context.rect(ship.x, ship.y, 10, 10);
    context.fill();
    context.closePath();
}

function changeDir(input)
{
    switch (input)
    {
        case "left":
            if(direction != right)
                direction = left;
            break;
        case "right":
            if(direction != left)
                direction = right;
            break;
        case "up":
            if(direction != down)
                direction = up;
            break;
        case "down":
            if(direction != up)
                direction = down;
            break;
    }
}

function shipDir(ship)
{
    document.onkeydown = function (event)
    {
        event = event || window.event;
        var charCode = event.keyCode || event.which;

        if(charCode == left && direction != right && ship.x > 0)
        {
            event.preventDefault();
            direction = left;
            dx -= 10;
        }
        else if(charCode == right && direction != left && ship.x < 290)
        {
            event.preventDefault();
            direction = right;
            dx += 10;
        } 
        else if(charCode == up && direction != down && ship.y > 0)
        {
            event.preventDefault();
            direction = up;
            dy -= 10;
        }
        else if(charCode == down && direction != up && ship.y < 140)
        {
            event.preventDefault();
            direction = down;
            dy += 10;
        }
        else
        {
            event.returnValue = null;
        }
    }
    
    return direction;
}

function moveShip(context, myBoard)
{
    var selectedShip = null;

    for(var i = 0; i < shipArr.length; i++)
    {
        if(shipArr[i].selected == true)
        {
            selectedShip = shipArr[i];
        }
    }

    direction = shipDir(selectedShip);  
    drawShip(context, myBoard, selectedShip);
}

function shipSelect(input)
{
    //unselect all
    for(var i = 0; i < shipArr.length; i++)
    {
        shipArr[i].selected = false;
    }

    //select based on button
    switch(input)
    {
        case 1:
            shipArr[0].selected = true;
            alert("ship: blue 1 selected");
            break;
        case 2:
            shipArr[1].selected = true;
            alert("ship: blue 2 selected");
            break;
        case 3:
            shipArr[2].selected = true;
            alert("ship: blue 3 selected");
            break;
        case 4:
            shipArr[3].selected = true;
            alert("ship: red 1 selected");
            break;
        case 5:
            shipArr[4].selected = true;
            alert("ship: red 2 selected");
            break;
        case 6:
            shipArr[5].selected = true;
            alert("ship: red 3 selected");
            break;
        default:
            break;
    }
}

function getSelectedShip()
{
    for(var i = 0; i < shipArr.length; i++)
    {
        if(shipArr[i].selected == true)
        {
            return shipArr[i];
        }
    }

    return null;
}

function getRandomNumber()
{
    //rand number between 1 and 5
    var rand1 = Math.floor(Math.random() * 5) + 1;
    return rand1;
}

function drawLand(context2, landBoard, terrain)
{
    context2.clearRect(terrain.x, terrain.y, terrain.x, terrain.y);
    
    context.beginPath();

    context.fillStyle = terrain.color;

    context.rect(terrain.x, terrain.y, 10, 10);
    context.fill();
    context.closePath();
}

function land(context2, landBoard)
{
    var rand = getRandomNumber();

    for(var i = 2; i < cols; i++)
    {
        for(var j = 2; j < rows; j++)
        {
            if(rand == 1){
                terrainArr[i][j].selected = true;
                terrainArr[i][j].x = i * 10;
                terrainArr[i][j].y = j + 10;
            }
        }
    }
    
    for(var i = 0; i < terrainArr.length; i++)
    {
        for(var j = 0; j < terrainArr[0].length; j++)
        {
            if(terrainArr[i][j].selected == true)
            {
                //drawLand(context2, landBoard, terrainArr[i][j]); 
            }
           
        }
    }

    console.log(terrainArr);
}