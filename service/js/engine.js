var text;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function test () {

document.getElementById("t").style.display = "block";document.getElementById("g").style.display = "none";
let n = 0;
Que=new Array(10);
Answ=new Array(10);

while (n < 10) {
var q1=getRandomInt(A.length);
if (Que.indexOf(Ac[q1])<0) {
Que[n]=Ac[q1];
Answ[n]=new Array(4);
Answ[n][0]=A[q1];

let m = 1;
while (m < 4) {
var q1=getRandomInt(A.length);
if (Answ[n].indexOf(A[q1])<0) {
Answ[n][m]=A[q1];
m++
}}
n++;
}}

text='<table>';
for (var i=0; i<10; i++) {
text+='<tr><td><a href="../image/big/'+Que[i]+'.jpg" target=_blank id="link'+i+'"><img src="../image/h200/'+Que[i]+'.jpg"></a></td><td>';
//rnd
//text+=Answ[i].join('-');

m = 0;
Arr=new Array(4);

while (m < 4) {
var q1=getRandomInt(4);
if (Arr.indexOf(q1)<0) {
Arr[m]=q1;


text+='<br><input name="A'+i+'" type="radio" value="'+q1+'"><span id="a-'+i+'-'+m+'">'+Answ[i][q1]+'</span>';
m++;
}
}
//text+=Arr.join('-');

text+='</td></tr>';
}
text+='</table><div id="button"><button onclick="check ()">test</button></div>';


document.getElementById("t").innerHTML=text;
}

function check () {

var right=0;

for (var i=0; i<10; i++) {
var inp=document.getElementsByName('A'+i);
for (var j = 0; j < inp.length; j++) {
if (inp[j].checked && inp[j].value==0) {right++;}
if (inp[j].checked && inp[j].value!=0) {document.getElementById('a-'+i+'-'+j).style.color = "red";document.getElementById('a-'+i+'-'+j).style.textDecoration = "line-through";}
if (inp[j].value==0) {document.getElementById('a-'+i+'-'+j).style.color = "green";}
inp[j].disabled = true;
}
var link=document.getElementById('link'+i);
 link.setAttribute('href', Que[i]+'.html');
}

alert (10*right+'%');
document.getElementById("button").innerHTML='<button onclick="test ()">restart</button>';
}
