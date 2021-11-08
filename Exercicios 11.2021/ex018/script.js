let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.querySelector('div#res')
let valores = []

function IsNumero(n){
    if(Number(n) >0 && Number(n)<101){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}


function adicionar(){
    
    if(IsNumero(num.value) && !inLista(num.value,valores)){
       
       let n = Number(num.value)
       valores.push(n)
       
       let item = document.createElement('option')
       item.text = 'Número ' + n + ' foi adicionado'
       lista.appendChild(item)
       res.innerHTML = ''
       
    }else{
       window.alert('Valor inválido ou já se encontra na Lista')

    }

    num.value = ''
    num.focus()
}

function finalizar(){
      if(valores.length == 0){
          window.alert('Adicione números primeiro!')
      }else{
             let tot = valores.length
             let maior = valores[0]
             let menor = valores[0]
             let soma = 0
             let media = 0

             for (let pos in valores){
                 if(valores[pos] > maior){
                     maior = valores[pos]
                 }

                 if(valores[pos] < menor){
                     menor = valores[pos]
                 }
                soma += valores[pos]
                
                 
             }
             media = soma/tot
             res.innerHTML = ''
             res.innerHTML +=  ' <p> Ao todo temos ' + tot + ' números adicionados </p>' 
             res.innerHTML +=  ' <p> O maior número adicionado foi '+ maior +'</p>' 
             res.innerHTML +=  ' <p> O menor número adicionado foi '+ menor +'</p>' 
             res.innerHTML +=  ' <p> A soma dos valores é '+ soma +'</p>' 
             res.innerHTML +=  ' <p> A média dos valores é '+ media +'</p>'

      }
}
    
    
    

