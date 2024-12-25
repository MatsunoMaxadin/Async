let bat = document.getElementById("bat");
let but = document.getElementById("button");
let para = document.getElementById("stop");
let carga = '';
let i = 0;

bat.innerHTML = `{${carga}}`;


function carregar() {
    
    carga = '';
    i = 0;
    
    const addCarga = () => {
        carga += 'I';
        bat.innerHTML = `{${carga}}`
        i++
        console.log(i);
         if (i === 5) {
        
        bat.innerHTML += 'Bateria Completa!';
        
    };
        
    };
    
    const Interval = setInterval(addCarga, 1000);
    setTimeout(()=> clearInterval(Interval), 5000);
     
    
    
    
    
    
    
};




but.addEventListener("click", carregar);