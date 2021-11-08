function contar(){
   let ini = document.getElementById('txti')
   let fim = document.getElementById('txtf')
   let passo = document.getElementById('txtp')
   let res = document.getElementById('res')

   if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
       window.alert('Informe os dados')
   }else{
       res.innerHTML = 'Resultado:'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if(p == 0){
            p = 1
            window.alert('Passo zero não existe! Vamos considerar Passo 1')
        }

        for(let c=i; c<=f; c += p){
            res.innerHTML += ` ${c} --> `;
        }

        res.innerHTML += 'Fim'
   }

}