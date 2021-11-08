function verificar(){
    var data = new Date()
    var anoatual = data.getFullYear()
    var fano = document.getElementById('txtano')
   

    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > anoatual){
        window.alert('Preenchimento incorreto! Tente novamente')
    }else{
           var fsex = document.getElementsByName('radsex')
           var idade = anoatual- Number(fano.value)
           var genero = ''
           if (fsex[0].checked){
               genero = 'Homem'
           }else{
               genero = 'Mulher'
           }
           res.style.textAlign = 'center'
           res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade`
    }         
}