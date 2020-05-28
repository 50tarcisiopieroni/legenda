const Entradas = document.querySelector('.entradas');


const texto = "ESPIRITAS! AMAI-VOS, EIS O PRIMEIRO ENSINAMENTO. INSTRUI-VOS, EIS O SEGUNDO. TODAS AS VERDADES SAO ENCONTRADAS NO CRISTIANISMO; OS ERROS QUE NELE CRIARAM RAIZ SAO DE ORIGEM HUMANA. E EIS QUE, ALEM DO TUMULO, EM QUE ACREDITAVEIS O NADA, VOZES VEM CLAMAR-VOS: IRMAOS!"

for (var i = 0; i< texto.length; i++){
    const aux = texto[i];
    var entrada = document.createElement("div");  
    entrada.className = "entrada";

    if ( aux.charCodeAt() >= 65 && aux.charCodeAt() <= 90){
        var imagem = document.createElement("img");
        var input = document.createElement("input")
        
        imagem.src = "./assets/Alfabeto/" + aux +".png";

        input.maxLength = 1;
        input.id = i;
        
        entrada.appendChild(imagem);
        entrada.appendChild(input);
    }else{
        var h = document.createElement("H1");
        if (aux === ' '){
            var t = document.createTextNode(aux);
            h.style.marginLeft = "5px";
        }else
        {
            var t = document.createTextNode(aux);
        }
        entrada.appendChild(h);
        h.appendChild(t);

    }
    Entradas.appendChild(entrada);
}


// <div class="entrada">
//      <img src="./assets/Alfabeto/A.png" alt="letra">
//       <input maxlength="1" />
//  </div>