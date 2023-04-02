async function getCommits() {
    const response = await fetch('https://www.cbr-xml-daily.ru/latest.js');
    let data = await response.json();
    
    let date = document.getElementById('date')
    date.innerHTML = data.date

    let ul = document.getElementById('five_v')


    let select_l = document.getElementById('select_l'); // список для дешевых валют
    let select_r = document.getElementById('select_r');
    dataRates = data.rates; // инфв о валютах
    
    for (let key in dataRates) {
        if(dataRates[key]>1) {
            let newOption = new Option(key,dataRates[key]);
            select_l.append(newOption);
            
        }else {
            let newOption = new Option(key,dataRates[key]);
            select_r.append(newOption);
        }
    }

    
    let l1 = document.getElementById('l1')
    let l2 = document.getElementById('l2')
    let l3 = document.getElementById('l3')
    let l4 = document.getElementById('l4')
    let l5 = document.getElementById('l5')
    for(let vol in dataRates){
        if(vol=='HUF'){
            l1.innerHTML=vol + ` = ` + dataRates[vol]
        }
        if(vol=='USD'){
            l2.innerHTML=vol + ` = ` + dataRates[vol]
        }
        if(vol=='EUR'){
            l3.innerHTML=vol + ` = ` + dataRates[vol]
        }
        if(vol=='AMD'){
            l4.innerHTML=vol + ` = ` + dataRates[vol]
        }
        if(vol=='AZN'){
            l5.innerHTML=vol + ` = ` + dataRates[vol]
        }
    }


}
getCommits();
