// const judul = document.getElementById('judul');
// judul.style.color = 'white';
// judul.style.backgroundColor = 'gray';
// judul.innerHTML = 'Hello';

// const p = document.getElementsByTagName('p');
// for(i = 0; i < p.length; i++){
//     p[i].style.backgroundColor = 'gray';
// }

// const p5 = document.querySelector('#article2 p');
// p5.style.color = 'green';

// const li2 = document.querySelector('li:nth-child(2)');
// li2.style.color = 'green';

// const p = document.querySelectorAll('p');
// for(i = 0;i < p.length;i++){
//     p[i].innerHTML = 'jancok';
// }

// const secB = document.getElementById('article2');
// const pa5 = secB.querySelector('p');
// pa5.style.backgroundColor = 'gray';

// const judul = document.querySelector('#judul');
// judul.innerHTML = 'halo'
// judul.style.color = 'white'

// const p1 = document.querySelector('.p1');





// const pBaru = document.createElement('p');
// const textPBaru = document.createTextNode('Paragraf Baru');
// pBaru.appendChild(textPBaru);

// const sectionA = document.getElementById('article1');
// sectionA.appendChild(pBaru);


// const liBaru = document.createElement('li');
// const textLiBaru = document.createTextNode('Item Baru');
// liBaru.appendChild(textLiBaru);

// const ul = document.querySelector('section#article2 ul');
// const li2 = ul.querySelector('li:nth-child(2)')

// ul.insertBefore(liBaru, li2)




// const link = document.getElementsByTagName('a')[0];

// sectionA.removeChild(link);

// const sectionB = document.getElementById('article2');
// const p5 = sectionB.querySelector('p');

// const h2Baru = document.createElement('h2');
// const textH2 = document.createTextNode('Judul Baru')
// h2Baru.appendChild(textH2);

// sectionB.replaceChild(h2Baru, p5);


// const p3 = document.querySelector('.p3');
// function ubahWarna(){
//     p2.style.backgroundColor = 'green';
// }

// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarna;


// const p5 = document.querySelector('.p5');
// p5.addEventListener('click', function(){
//     const ul = document.querySelector('section#article2 ul');
//     const li = document.createElement('li');
//     const textBaru = document.createTextNode('Item Baru');
//     li.appendChild(textBaru);
//     ul.appendChild(li);

// });



// const btn = document.createElement('button');
// const text = document.createTextNode('Acak Warna');
// btn.appendChild(text);
// btn.setAttribute('type', 'button')
// document.body.appendChild(btn);


// const btna = document.getElementById('btn');
// btna .addEventListener('click', function(){
//     document.body.classList.toggle('warna');
// });

// btn.addEventListener('click', function(){
//     const r = Math.round (Math.random() * 255 + 1);
//     const g = Math.round (Math.random() * 255 + 1);
//     const b = Math.round (Math.random() * 255 + 1);
//     document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ','  + b + ')';
// });



// const sMerah = document.querySelector('input[name=sMerah]');
// const sHijau = document.querySelector('input[name=sHijau]');
// const sBiru = document.querySelector('input[name=sBiru]');
// sMerah.addEventListener('change', function(){
//     const r = sMerah.value;
//     const g = sHijau.value;
//     const b = sBiru.value;
//     document.body.style.backgroundColor = 'rgb(' + r + ','+ g +','+ b +')';
// });
// sHijau.addEventListener('change', function(){
//     const r = sMerah.value;
//     const g = sHijau.value;
//     const b = sBiru.value;
//     document.body.style.backgroundColor = 'rgb(' + r + ','+ g +','+ b +')';
// });
// sBiru.addEventListener('change', function(){
//     const r = sMerah.value;
//     const g = sHijau.value;
//     const b = sBiru.value;
//     document.body.style.backgroundColor = 'rgb(' + r + ','+ g +','+ b +')';
// });

 

// document.body.addEventListener('mousemove', function(event){
//     // posisi mouse
//     const xPos = Math.round((event.clientX / window.innerWidth) * 255);
//     const yPos = Math.round((event.clientY / window.innerHeight) * 255);
//     document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +', 100)'
// });

function getCompC(){
    const comp = Math.round(Math.random()*2);
    if(comp <= 0) return 'gunting';
    if(comp <= 1) return 'batu';
    if(comp <= 2) return 'kertas';
} 
function imgChange(){
    const imgChange = document.querySelector('.comp-img');
    const img = ['gunting', 'batu', 'kertas'];
    let i = 0;
    const timeS = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - timeS > 1000){
            clearInterval;
            return;
        }
        imgChange.setAttribute('src', 'folder/' + img[i++] + '.png');
        if( i == img.length) i = 0;
    }, 200);
};
function getRulesW(comp, player){
    if(player == comp) return 'Seri!';
    if(player == 'gunting') return (comp == 'batu') ? 'You Lose!' : 'You Win!';
    if(player == 'batu') return (comp == 'gunting') ? 'You Win!' : 'You Lose!';
    if(player == 'kertas') return (comp == 'batu') ? 'You Win!' : 'You Lose!';
}
const choice = document.querySelectorAll('li img');
choice.forEach(function(i){
    i.addEventListener('click', function(){
        
        i.addEventListener('click', function(){
        const compChoice = getCompC();
        const playerChoice = i.className;
        const result = getRulesW(compChoice, playerChoice);
        imgChange();
        setTimeout(function(){
            const compImg = document.querySelector('.comp-img');
        compImg.setAttribute('src', 'folder/' + compChoice + '.png');
        const info = document.querySelector('.info');
        info.innerHTML = result;
        }, 1000);
        });
    })
})


