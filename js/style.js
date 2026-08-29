function gID(id) {
    const element = document.getElementById(id)
    return element
}

async function populateLayouts() {
    const requestURL =
        "./json/layouts.json"
    const request = new Request(requestURL)

    const response = await fetch(request)
    const layouts = await response.json()

    displayLayouts(layouts)
}

function displayLayouts(css) {
    const aesthetic = gID('aestheticCon')
    const animal = gID('animalCon')
    const artemis = gID('artemisCon')
    const event = gID('eventCon')
    const food = gID('foodCon')
    const pride = gID('prideCon')
    const scenic = gID('scenicCon')
    const seasonal = gID('seasonalCon')
    const simple = gID('simpleCon')
    const dark = gID('darkCon')
    const none = gID('noneCon')

    let identity = -1
    let taglist = ""

    css.forEach(entry => {
        identity += 1
        let tags = entry.tags
        taglist = ""
        tags.forEach((item) => {
            taglist += ` ${item}`
        })
        const card = document.createElement('div')
        card.classList = `bigCards col-sm-12 col-md-6 col-lg-4 mb-3${taglist}`
        card.id = identity
        let codeName = entry.name
        codeName = codeName.replace(/\s+/g, '')
        let url = `https://chris105465.github.io/layouts/css/${entry.category}/${entry.link}.css`
        card.innerHTML = `<div class="card h-100"><a href="https://raw.githubusercontent.com/chris105465/previews/refs/heads/main/portfolio-site/${entry.category}/${entry.link}.png" target="_blank" title="Open Image in New Tab"><img src="https://raw.githubusercontent.com/chris105465/previews/refs/heads/main/portfolio-site/${entry.category}/${entry.link}.png" class="card-img-top" alt="${entry.name} Layout Preview"></a><div class="card-body pb-2"><h5 class="card-title pb-1 ${entry.green}">${entry.name}</h5><div class="d-flex justify-content-between align-items-end"><label class="pb-2" for="${codeName}DenCode">Den/Branch/Clan Code:</label><button onclick="copyButton('${codeName}DenCode')" class="btn btn-primary mb-2">Copy</button></div><textarea name="copy-field" id="${codeName}DenCode" class="copy-field" rows="3">&lt;link rel="stylesheet" type="text/css" href="${url}" /></textarea><div class="d-flex justify-content-between align-items-end"><label class="py-2" for="${codeName}CaveCode">Cave/Mounds URL:</label><button onclick="copyButton('${codeName}CaveCode')" class="btn btn-primary mb-2">Copy</button></div><textarea name="copy-field" id="${codeName}CaveCode" class="copy-field" rows="2">${url}</textarea><p class="text-muted text-end m-0 mt-1">Last Updated: ${entry.updated}</p></div></div>`

        if (entry.category == "aesthetic") {
            aesthetic.appendChild(card)
        } else if (entry.category == "animal") {
            animal.appendChild(card)
        } else if (entry.category == "artemis") {
            artemis.appendChild(card)
        } else if (entry.category == "event") {
            event.appendChild(card)
        } else if (entry.category == "food") {
            food.appendChild(card)
        } else if (entry.category == "pride") {
            pride.appendChild(card)
        } else if (entry.category == "scenic") {
            scenic.appendChild(card)
        } else if (entry.category == "seasonal") {
            seasonal.appendChild(card)
        } else if (entry.category == "simple") {
            simple.appendChild(card)
        } else if (entry.category == "dark") {
            dark.appendChild(card)
        } else {
            none.classList = "row pb-3"
            none.appendChild(card)
        }
    })
}

function filterContent() {
    let value = gID('value').value
    let color = gID('color').value
    let cards = document.getElementsByClassName('bigCards')
    let valueFilter = document.getElementsByClassName(value)
    let colorFilter = document.getElementsByClassName(color)

    for(let card = 0; card < cards.length; card++) {
        cards[card].style.display ="none"
    
        if(value != "0" && color != "0") {
            for(let filter = 0; filter < valueFilter.length; filter++) {
                if(cards[card].id == valueFilter[filter].id) {
                    for(let filter = 0; filter < colorFilter.length; filter++) {
                        if(cards[card].id == colorFilter[filter].id) {
                            cards[card].style =""
                        }
                    }
                }
            }
        } else if(value != "0") {
            for(let filter = 0; filter < valueFilter.length; filter++) {
                if(cards[card].id == valueFilter[filter].id) {
                    cards[card].style =""
                }
            }
        } else if(color != "0") {
            for(let filter = 0; filter < colorFilter.length; filter++) {
                if(cards[card].id == colorFilter[filter].id) {
                    cards[card].style =""
                }
            }
        } else {
            cards[card].style =""
        }
    }
}

async function populatePride() {
    const requestURL =
        "./json/pride.json"
    const request = new Request(requestURL)

    const response = await fetch(request)
    const flags = await response.json()

    displayPride(flags)
}

function displayPride(flag) {
    const sexuality = gID('sexualityCon')
    const gender = gID('genderCon')
    const rainbow = gID('rainbowCon')

    flag.forEach(entry => {
        const card = document.createElement('div')
        card.classList = 'col-sm-12 col-md-6 col-lg-4 mb-3'
        card.innerHTML = `<div class="card h-100"><div class="card-body"><div class="text-center"><span class="pride-banner ${entry.class} mb-2">${entry.name} Pride!</span><span class="pride-banner ${entry.class} mb-2"></span><span class="pride-flag ${entry.class}"></span></div><h5 class="card-title pb-1">${entry.name}</h5><div class="d-flex justify-content-between align-items-end"><label class="pb-2" for="${entry.class}TextBanner">Text Banner:</label><button onclick="copyButton('${entry.class}TextBanner')" class="btn btn-primary mb-2">Copy</button></div><textarea name="copy-field" id="${entry.class}TextBanner" class="copy-field" rows="2">&lt;span class="pride-banner ${entry.class}">YOUR TEXT HERE&lt;/span></textarea><div class="d-flex justify-content-between align-items-end"><label class="py-2" for="${entry.class}Banner">Banner:</label><button onclick="copyButton('${entry.class}Banner')" class="btn btn-primary mb-2">Copy</button></div><textarea name="copy-field" id="${entry.class}Banner" class="copy-field" rows="1">&lt;span class="pride-banner ${entry.class}">&lt;/span></textarea><div class="d-flex justify-content-between align-items-end"><label class="py-2" for="${entry.class}Flag">Flag:</label><button onclick="copyButton('${entry.class}Flag')" class="btn btn-primary mb-2">Copy</button></div><textarea name="copy-field" id="${entry.class}Flag" class="copy-field" rows="1">&lt;span class="pride-flag ${entry.class}">&lt;/span></textarea></div></div>`

        if (entry.category == "sexuality") {
            sexuality.appendChild(card)
        } else if (entry.category == "gender") {
            gender.appendChild(card)
        } else {
            rainbow.appendChild(card)
        }
    })
}

function copyButton(id) {
    var copyText = gID(id)

    copyText.select()

    navigator.clipboard.writeText(copyText.value)

    alert('The info is now copied to your clipboard! :D')
}

let codeForm = gID('code-form')
if (codeForm) {
    codeForm.addEventListener('submit', (e) => {
        e.preventDefault()

        let codeBox = gID('code-box').value
        let finalCode = gID('final-code')

        codeBox = codeBox.replaceAll('<', '&lt;')

        finalCode.innerText = codeBox
    })
}