function nbJoursMoisActuel() {
    const calendar = document.getElementById('calendar')
    const jours = []
    const now = new Date();
    const today = now.getDate()
    const mois = now.getMonth() + 1; 
    const annee = now.getFullYear();
    const nbJours = new Date(annee, mois, 0).getDate();
    
  
    for (let j = 0; j < nbJours; j++) {
      jours.push(j + 1)
    }
  
    let table7 = []
  
    for (let i = 0; i < nbJours; i +=7) {
     table7.push(jours.slice(i, i + 7))
    }

    console.log(table7);
  
    for (let l = 0; l < table7.length; l++) {
      let row = document.createElement('tr')
      
    for (let h = 0; h < table7[l].length; h++) {
        let cell = document.createElement('td')
        cell.textContent = table7[l][h]
        row.appendChild(cell)
  
        if( table7[l][h] == today ){
          cell.classList.add('today')
        }
  
      }
  
      calendar.appendChild(row)
    }
   
  }
  
  nbJoursMoisActuel()
  
  let test = document.getElementById('chart')

