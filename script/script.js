let isIgnite = true

function changeCard(event) {
    const card = event.currentTarget;
    const backgroundImage = isIgnite ?  "url(../assets/img-Explorer.svg)" : "url(../assets/img-Ignite.svg)"
    isIgnite = !isIgnite
    card.style.backgroundImage = backgroundImage  
}
