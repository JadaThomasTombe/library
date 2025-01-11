alert('WELCOME TO OUR WEBSITE. FEEL HOME')
var age = prompt ("HOW OLD ARE YOU ?");
console.log(age);// Prints the value inserted by the user
var canvas =document.createElement('canvas');
canvas.width=500;
canvas.height=250;
var cxt=canvas.getContext('2d');
cxt.font = '30px Cursive';
cxt.fillText("  WELCOME TO TOMBE ",50,50);
document.body.appendChild(canvas);
var svg = document. createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.width = 500
svg.height=50
var text =document.createElementNS('http://www.w3.org/2000/svg', 'text');
text.setAttribute('x', '0');
text.setAttribute('y','50');
text.style.fontFamily='Times New Roman';
text.style.fontStyle='50';