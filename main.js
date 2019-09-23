var i,j;//as counter......
var arr=new Array(13);//in Random.....
var randomFive=new Array(5);//in generate.....
var all=0;//in Random1...
var all1=0;//in unique...
var a=0;//in tables()......
var count1=0;//in unique......
var randomNine=new Array(9);//in total.....
var finalArray=new Array(27);//in total.....
var a1;// in total........
var maxValue=0;//in total

//Calls table() function number of times...

function howMany()
{  
    var count = document.getElementById('loop').value;
    for(var i=0; i<count;i++)
        {
            Random();
            Random1();
            generate();
            tables();
        }   
}

 //Generates 15 random numbers.........

function Random()
{ 
    for(i=0;i<15;i++)
    {
        arr[i]=Math.floor((Math.random()*98)+1);          
    }
    Random1();
}

  //Checks whether the Random() function numbers are unique.....


function Random1()
{
    for(i=0;i<15;i++)
    {
        for(j=0;j<15;j++)
            {
                if(arr[i]==arr[j] && i!=j)
                    {
                    Random();
                    break;
                    }
            }
    }
    all=0;
    for(i=0;i<15;i++)
        {
            all = all + arr[i] + "<br>"; 
        }
    document.getElementById('random').innerHTML="Random 15 numbers :"+"<br>"+all;  
}

//creates table.......
function tables()
{
    var table = document.getElementById("table");
    var row = 3;
    var cols = 9;
    //console.log( count);

    for (var i=0; i<row ; i++)
        {
            var tr = document.createElement('tr'); 
            for(var j=0; j<cols ; j++)
                {
                    var td = document.createElement('td');
                    if (a<27)
                        { 
                            var text = document.createTextNode(finalArray[a]);
                        } 
                    a++;
                    td.appendChild(text);
                    tr.appendChild(td);
                }
            table.appendChild(tr);
        }
    a=0;
    var textnode =document.createTextNode("**");
    table.appendChild(textnode);
}

document.getElementById('makeTable').addEventListener("click",makeTable);
//____________________________________________________________________________________________________________

//genrates 5 numbers betn 0-8........

function generate()
{
    for( i=0; i<5; i++)
        {
            randomFive[i]=0;
        }
    for( i=0; i<5; i++)
        {
            randomFive[i]=Math.floor((Math.random()*9));
            if (i==4)
            {
                unique();
            }
        }
}

//Checks whether the generate() function numbers are unique.....

function unique()
{
    count1 = 0;
    for(i=0;i<5;i++)
        {
            for(j=0;j<5;j++)
                {
                    if(randomFive[i]== randomFive[j] && i!=j)
                        {
                            generate();
                        }
                }
            count1++;
        }
    if (count1==5)
    {
        total();    
    }
}

//Stores 15 numbers in table in random order.........
function total()
{  
    if(maxValue<27)
        {
            if(maxValue==0)
                {
                    a1=0;
                }
            else
                {
                    a1=5*(maxValue/9);
                }
            for ( i=0; i<9; i++)
                {
                    randomNine[i] = '*';
                }
            for ( i=0; i<5; i++)
                {
                    var b=randomFive[i];
                    randomNine[b] = arr[a1];
                    a1++;
                }
            all1=0;
            for(i=0;i<9;i++)
                {   
                    if(i==0)
                        {
                            all1=randomNine[i]+"<br>";
                        }
                    else
                        {
                            all1 = all1 + randomNine[i] + "<br>"; 
                        }
                }
            if (a1>=15)
                {
                    a1 = 0;
                }
            for(j=0;j<9;j++)
                {
                    finalArray[maxValue] = '*';
                    finalArray[maxValue] = randomNine[j];
                    maxValue++ ;
                }
            generate();
        }
    else
        {
            maxValue=0;
            console.log('finished');
        }
}