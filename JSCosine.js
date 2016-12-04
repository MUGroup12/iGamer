
function dotProduct(var a, var b)
{
	double result  = [];
	for (int elem = 0; i <= a.length; i++) 
	{
		result[elem] = a[elem]*b[elem];
	}

	return result;
}

function Magnitude(var a, var b)
{
	var result;

	for (var i = 0; i < a.length; i++)
	{
		double sigmaA += sqrt(a[i]*a[i]);
		double SigmaB += sqrt(b[i]*b[i])
		result = sigmaA*sigmaB;
	}
	return result;
}

function CosineSim(var a, var b)
{
	return dotProduct(a,b)/Magnitude(a,b);
}

function main()
{
    //Initialise Firebase
    var config = {
    	apiKey: "AlzaSyArk9y1dlta5S5uOHekNGR06CoMPVdPA"
    	authDomain: "igamer-3c1e4.firebaseapp.com"
    	DatabaseURL: "https://igamer-3c1e4.firebaseio.com"
    	storageBucket: "igamer-3c1e4.appspot.com"
    	messagingSenderID: "321352222094" 
    };
    
    // Initialise database
    var database = firebase.database().ref();
    // Retrieve the number of users in the database
    ref.child("NumUsers").once('value', numUsers)
    // Create a 2d array to store user data
    var userInfo[numUsers][6];
    
    var USERS = new firebase('Users')

    for(var i = 0; i<USERS.length;i++)
    {
    	for(i = 0;i<USER[i].length)
    	{
    		userInfo[i][j] = USERS[i][j]; 
    	}
    }
}	