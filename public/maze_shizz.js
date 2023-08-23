var cols = 32;
var rows = 16;
var grid = new Array(cols);

var openSet = [];
var closedSet = [];
var start;
var end;
var w,h;

function Cell(i, j)
{
    this.x = i;
    this.y = j;
    this.f = 0;
    this.g = 0;
    this.h = 0;

    this.show = function(col) 
    {
        context.fill(col);
        context.stroke();
        context.rect(this.x * w, this.y * h, w - 1, h - 1);
    }
}

function start()
{
    var myBoard = document.getElementById("board");

    if(myBoard.getContext)
    {
        var context = myBoard.getContext("2d");
        alert("cool");
    }
    else
    {
        console.log("no context");
    }

    w = 1600 / cols;
    h = 800 / rows;

    for(var i = 0; i < cols; i++)
    {
        grid[i] = Array(rows);
    }

    for(var i = 0; i < cols; i++)
    {
        for(var j = 0; j < rows; j++)
        {
            grid[i][j] = new Cell(i, j);
        }
    }

    start = grid[0][0];
    end = grid[cols - 1][rows - 1];

    openSet.push(start);

    draw();


    console.log(grid);
    
}

function draw()
{
    if(openSet.length > 0)
    {
        //keep going
    }
    else
    {
        //no solution
    }

    background(0);

    for(var i = 0; i < cols; i++)
    {
        for(var j = 0; j < rows; j++)
        {
            grid[i][j].show(color(255));
        }
    }

    for(var i = 0; i < closedSet.length; i++)
    {
        closedSet[i].show(color(255,0,0));
    }

    for(var i = 0; i < openSet.length; i++)
    {
        openSet[i].show(color(0,255,0));
    }
}