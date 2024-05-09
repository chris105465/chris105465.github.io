function gID(id) {
    theElement = document.getElementById(id)
    return theElement
}

async function populateLayouts() {
    const requestURL =
        "./json/layouts.json"
    const request = new Request(requestURL)

    const response = await fetch(request)
    const layouts = await response.json()

    console.log(layouts)
    displayLayouts(layouts)
}

function displayLayouts(css) {
    const aesthetic = gID('aestheticCon')
    const event = gID('eventCon')
    const pride = gID('prideCon')
    const scenic = gID('scenicCon')
    const seasonal = gID('seasonalCon')
    const simple = gID('simpleCon')
    const twt = gID('twtCon')
    const none = gID('noneCon')

    css.forEach(entry => {
        const card = document.createElement('div')
        card.classList += 'col-sm-12 col-md-6 col-lg-4 mb-3'
        card.innerHTML = `<div class="card h-100"><img src="./img/${entry.category}/${entry.img}" class="card-img-top" alt="${entry.name} Layout Preview"><div class="card-body"><h5 class="card-title pb-1 ${entry.green}">${entry.name}</h5><textarea name="copy-field" class="copy-field" rows="4">&lt;link rel="stylesheet" type="text/css" href="${entry.link}" /></textarea></div></div>`

        if (entry.category == "aesthetic") {
            aesthetic.appendChild(card)
        } else if (entry.category == "event") {
            event.appendChild(card)
        } else if (entry.category == "pride") {
            pride.appendChild(card)
        } else if (entry.category == "scenic") {
            scenic.appendChild(card)
        } else if (entry.category == "seasonal") {
            seasonal.appendChild(card)
        } else if (entry.category == "simple") {
            simple.appendChild(card)
        } else if (entry.category == "twt") {
            twt.appendChild(card)
        } else {
            none.classList = "row pb-3"
            none.appendChild(card)
        }
    });
}