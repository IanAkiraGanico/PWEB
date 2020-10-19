var n1 = parseFloat(prompt("Digite um número:"));
var n2 = parseFloat(prompt("Digite um número:"));
var n3 = parseFloat(prompt("Digite um número:"));


function maiorDosTres() 
{
    var num = [].sort.call(arguments);
    var maior = num[2]; 
    var menor = num[0] 
	
	if (num[0] == num[1] == num[2])
	{
		alert("Os tres valores sao iguais");
	}
	
	else
	{
		if (num[0] > maior)
		{	
			maior = num[0];
		}
	
		if (num[1] > maior)
		{
			maior = num[1];
		}
	
		if (num[2] < menor)
		{
			menor = num[2];
		}
	
		if (num[1] < menor)
		{
			menor = num[1];
		}

		if (num[0] == num[1])
		{
			alert("O valor " + num[0] + "é igual ao valor " + num[1]);
		}
	
		if (num[0] == num[2])
		{
			alert("O valor " + num[0] + "é igual ao valor " + num[2]);
		}
	
		if (num[1] == num[2])
		{
			alert("O valor " + num[1] + "é igual ao valor " + num[2]);
		}
				
		
		alert("O maior é: " + maior + "\n" + "O menor é: " + menor);
	}
	
}

maiorDosTres(n1, n2, n3);