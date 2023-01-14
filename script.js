

//  funções pra texto....
//  sprit()

  
function checkstatus()
{
    event.preventDefault();
    switch(status_compras.value){
        case "pago":
            document.getElementById("resultado").innerHTML = "pedido pago";
        break;
        case "recusado":
            document.getElementById("resultado").innerHTML = "pedido recusado";
        break;
        case "pendente":
            document.getElementById("resultado").innerHTML = "pedido pendente";
        break;
        case "disputa":
            document.getElementById("resultado").innerHTML = "pedido disputa";
        break;
        default:
            document.getElementById("resultado").innerHTML = "Ocorreu um erro";
            



        

    }
}



 // ---usando o Operador ternário....
function checkidade()
{
    event.preventDefault();

    let resultado = document.getElementById("resultado");
    let idd = Number(idade.value);

   // idd < 10 ? resultado.innerHTML = "É criança" : resultado.innerHTML = "Não é criança";
    idd < 10 &&  (resultado.innerHTML = "É criança" );
    (idd >= 10 && idd < 18 ) && (resultado.innerHTML = "É juvenil" );
    (idd >= 18 && idd < 60 ) && (resultado.innerHTML = "É Adulto" );
    idd > 60 && (resultado.innerHTML = "É Idoso" );
}