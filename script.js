

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
    idd < 10 &&  (document.getElementById("imagem").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7aiw-u_-cVQDdjxJsweFzImLl-pF2jELQ-g&usqp=CAU.jpg");
    (idd >= 10 && idd < 18 ) && (document.getElementById("imagem").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw7Y5gEUkFn-bvHBs9v9BzvaKqGhWCswULCA&usqp=CAU");
    (idd >= 18 && idd < 60 ) && (document.getElementById("imagem").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVTLvAd9npUM8TmqfWk_VKnV4oSW5awo_eg&usqp=CAU" );
    idd >= 60 && (document.getElementById("imagem").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR-cRRv0VKguuLc-bYDGj0GAit2mevRxJvpg&usqp=CAU");
}