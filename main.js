document.title = 'belajar dom bro'

// const body = document.body;
// body.append('helloworld')

// const h1 = document.createElement('h1');    
// h1.textContent = '<marquee>anjay ini h1 bre</marquee>'; //tidak membaca tag marquee

// const namaSaya = document.createElement('p');    
// namaSaya.innerHTML = '<marquee>Dicky</marquee>'; //membaca tag marquee

// const namaKamu = document.createElement('b');    
// namaKamu.innerText = '<marquee>Fikri Gobles</marquee>'; //tidak membaca tag marquee

// body.append(h1)
// body.append(namaSaya)
// body.append(namaKamu)

const btn1 = document.getElementById('btn1')
const btn2 = document.querySelector('.btn2')
const body = document.body

const defaultText = 'klik saya 1'
btn1.textContent = defaultText

// tugas, variabelnya dibuat global
const newText = document.createElement('p')
newText.textContent = 'Muhammad Dicky Athalla'

console.info(btn1)
btn1.style.border = 'none'
btn1.style.padding = '8px'
btn1.style.background = 'tomato'
btn1.style.fontSize = '16px'

function clickButton(){
    btn1.style.background = 'aqua'
    const newText = document.createElement('p')
    newText.textContent = 'Latihan saja'
    body.append(newText)
}

function ubahText(){
    // console.log('text berubah')
    btn1.textContent = 'Hihihi'
}

function oriText(){
    btn1.textContent = defaultText
}

function clickButton2(){
    btn1.style.background = 'aqua'
   
    body.append(newText)
}

function ubahWarna(){
    newText.style.color = 'aqua'
}