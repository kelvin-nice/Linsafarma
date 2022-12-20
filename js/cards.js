let derecha = document.getElementById('derecha');
let izquierda = document.getElementById('izquierda');

let derecha2 = document.getElementById('derecha2');
let izquierda2 = document.getElementById('izquierda2');

let articles = [...document.querySelectorAll('.articulos')];


derecha.addEventListener('click', function () {
    
    articles[0].style.transform = 'translateX(-1085px)'
    articles[1].style.transform = 'translateX(-1085px)'
    articles[2].style.transform = 'translateX(-1085px)'
    articles[3].style.transform = 'translateX(-1085px)'
    articles[4].style.transform = 'translateX(-1085px)'
    articles[5].style.transform = 'translateX(-1085px)'
    articles[6].style.transform = 'translateX(-1085px)'
    articles[7].style.transform = 'translateX(-1085px)'
})
izquierda.addEventListener('click', function () {
    articles[0].style.transform = 'translateX(0px)'
    articles[1].style.transform = 'translateX(0px)'
    articles[2].style.transform = 'translateX(0px)'
    articles[3].style.transform = 'translateX(0px)'
    articles[4].style.transform = 'translateX(0px)'
    articles[5].style.transform = 'translateX(0px)'
    articles[6].style.transform = 'translateX(0px)'
    articles[7].style.transform = 'translateX(0px)'
})

derecha2.addEventListener('click', function () {
    
    articles[8].style.transform = 'translateX(-1085px)'
    articles[9].style.transform = 'translateX(-1085px)'
    articles[10].style.transform = 'translateX(-1085px)'
    articles[11].style.transform = 'translateX(-1085px)'
    articles[12].style.transform = 'translateX(-1085px)'
    articles[13].style.transform = 'translateX(-1085px)'
    articles[14].style.transform = 'translateX(-1085px)'
    articles[15].style.transform = 'translateX(-1085px)'
})
izquierda2.addEventListener('click', function () {
    articles[8].style.transform = 'translateX(0px)'
    articles[9].style.transform = 'translateX(0px)'
    articles[10].style.transform = 'translateX(0px)'
    articles[11].style.transform = 'translateX(0px)'
    articles[12].style.transform = 'translateX(0px)'
    articles[13].style.transform = 'translateX(0px)'
    articles[14].style.transform = 'translateX(0px)'
    articles[15].style.transform = 'translateX(0px)'
})



/* articles.forEach((item, i)=>{

    


    derecha[i].addEventListener('click', function () {
        i++
        item.style.transform = 'translateX(-250px)'
    })
    izquierda[i].addEventListener('click', function () {
        i--
        item.style.transform = 'translateX(0px)'
    })

}) */
















/* derecha.onclick = ()=>{
    l++;
    for (let i of article) {
        if (l==0) {i.style.left = '0px';}
        if (l==1) {i.style.left = '-740px';}
        if (l==2) {i.style.left = '-1480px';}
        if (l==3) {i.style.left = '-2220px';}
        if (l==4) {i.style.left = '-2960px';}
        if (l>4) {l=4;}
    }
} */