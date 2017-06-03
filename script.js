//Find the sum of all the multiples of 3 or 5 below 1000.

for(var i = 999; i > 0; i--){
  if(i % 3 === 0){
  	document.write(i + "<br>");
  } else if(i % 5 === 0){
  	document.write(i + "<br>");  	
  } else {
  }
}