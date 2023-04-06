function nbJoursMoisActuel() {
  const calendar = document.getElementById('calendar')
  const calendarHeader = document.getElementById('calendar-header')
  const joursSemaine = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']
  const now = new Date();
  const today = now.getDate()
  const mois = now.getMonth(); 
  const annee = now.getFullYear();
  const nbJours = new Date(annee, mois +1, 0).getDate();
  
  let jours = []
  let jourSemaine = new Date(annee, mois +1, today).getDay() // Récupère le jour de la semaine correspondant au premier jour du mois

  let nbLignes = Math.ceil((nbJours + jourSemaine) / 7);

  if (nbLignes < 6 && new Date(annee, mois, nbJours).getDay() === 6) {
    nbLignes++;
  }
  // Créer une ligne d'en-tête pour les jours de la semaine
  for (let k = 0; k < joursSemaine.length; k++) {
    let cell = document.createElement('th')
    cell.textContent = joursSemaine[k]
    calendarHeader.appendChild(cell)
  }

  // Créer une ligne pour chaque semaine du mois
  for (let j = 0; j < nbLignes; j++) {
    let row = document.createElement('tr')

    // Ajouter des cellules vides pour les jours du mois précédent qui ne font pas partie du mois en cours
    for (let i = 0; i < jourSemaine; i++) {
      let cell = document.createElement('td')
      row.appendChild(cell)
    }

    // Ajouter une cellule pour chaque jour du mois en cours
    for (let h = 1; h <= 7 - jourSemaine && jours.length < nbJours; h++) {
      let cell = document.createElement('td')
      cell.textContent = jours.length + 1
      row.appendChild(cell)
      jours.push(jours.length + 1)

      if (jours.length === today) {
        cell.classList.add('today')
      }
    }

    // Réinitialiser le jour de la semaine à Dimanche pour la prochaine semaine
    jourSemaine = 0

    calendar.appendChild(row)
  }
}

nbJoursMoisActuel()