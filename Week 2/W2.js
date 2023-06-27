console.log("test");

// Function 1 to perform addition

function Add( a = 0 , b = 0 , c = 0 , d = 0 ) {
    console.log( a + b + c + d );
}

// Function 2 to perform subtraction

function Sub( a = 0 , b = 0 , c = 0 , d = 0 ) {
    console.log( a - b - c - d );
}

// Function 3 to perform multiplication

function Mul( a = 1 , b = 1 , c = 1 , d = 1 ) {
    console.log( a * b * c * d );
}

// Function 4 to perform division

function Div( a = 1 , b = 1 , c = 1 , d = 1 ) {
    var temp = ( ( ( a/b )/c )/d );
    console.log(Math.floor(temp));
}


Add(10 , 20 , 30 , 40 , 50);
Sub(10 , 20 , 30 , 40 , 50);
Mul(10 , 20 , 30 , 40 , 50);
Div( 1296 , 6 , 6 , 6 , 6);