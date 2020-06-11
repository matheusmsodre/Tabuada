var name = prompt("Diga seu nome!")
alert("Bem vindo, "+name+", vou lhe ajudar com algumas continhas básicas...vamos lá?")
var numero_do_user = Number(prompt("Digite o número de qual tabuada você deseja saber!"));
var i = 0;
document.write("Com carinho... De Matheus para "+name+"<br>")
while(i<11){
    document.write(`${numero_do_user} x ${i} = ${numero_do_user*i}<br>`)
    i++
}




/*var aux = [0,1,2,3,4,5,6,7,8,9,10];
var numero_do_user = Number(prompt("Digite o número de qual tabuada você deseja saber!"));

for (var x of aux) {
    document.write(`${numero_do_user} x "${x}" = "${numero_do_user*x}<br>`);
}*/