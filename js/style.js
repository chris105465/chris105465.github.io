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
    const event = gID('eventCon')
    const food = gID('foodCon')
    const pride = gID('prideCon')
    const scenic = gID('scenicCon')
    const seasonal = gID('seasonalCon')
    const simple = gID('simpleCon')
    const dark = gID('darkCon')
    const none = gID('noneCon')

    css.forEach(entry => {
        const card = document.createElement('div')
        card.classList = 'col-sm-12 col-md-6 col-lg-4 mb-3'
        let codeName = entry.name
        codeName = codeName.replace(/\s+/g, '')
        let url = `https://chris105465.github.io/layouts/css/${entry.category}/${entry.link}.css`
        card.innerHTML = `<div class="card h-100"><img src="./img/${entry.category}/${entry.link}.png" class="card-img-top" alt="${entry.name} Layout Preview"><div class="card-body"><h5 class="card-title pb-1 ${entry.green}">${entry.name}</h5><div class="d-flex justify-content-between align-items-end"><label class="pb-2" for="${codeName}DenCode">Den/Branch/Clan Code:</label><button onclick="copyButton('${codeName}DenCode')" class="btn btn-primary mb-2">Copy</button></div><textarea name="copy-field" id="${codeName}DenCode" class="copy-field" rows="3">&lt;link rel="stylesheet" type="text/css" href="${url}" /></textarea><div class="d-flex justify-content-between align-items-end"><label class="py-2" for="${codeName}CaveCode">Cave/Mounds URL:</label><button onclick="copyButton('${codeName}CaveCode')" class="btn btn-primary mb-2">Copy</button></div><textarea name="copy-field" id="${codeName}CaveCode" class="copy-field" rows="2">${url}</textarea></div></div>`

        if (entry.category == "aesthetic") {
            aesthetic.appendChild(card)
        } else if (entry.category == "animal") {
            animal.appendChild(card)
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

async function populateTemplates() {
    const requestURL =
        "../../json/templates.json"
    const request = new Request(requestURL)

    const response = await fetch(request)
    const templates = await response.json()

    displayTemplates(templates)
}

function displayTemplates(html) {
    const div = gID('templateCon')

    html.forEach(entry => {
        const card = document.createElement('div')
        card.classList = "card mb-3"

        let codeName = entry.name
        codeName = codeName.replace(/[&\/\#, +()$~%.'":@^*?<>{}]/g, '')

        card.innerHTML = `<div class="row g-0"><div class="col-12 col-md-6 col-lg-4"><img src="../../img/html/${entry.img}" class="img-fluid" alt="${entry.name} Template Preview"></div><div class="col-12 col-md-6 col-lg-8"><div class="card-body"><h5 class="card-title mb-3 mt-1"><div class="d-flex justify-content-between align-items-end"><label for="${codeName}Code">${entry.name}</label><button onclick="copyButton('${codeName}Code')" class="btn btn-primary">Copy Code</button></div></h5>` +
            `<textarea id="${codeName}Code" name="copy-field" rows="10" class="copy-field">&lt;div style="max-height:90vh;height:auto;min-width:450px;">&lt;table style="background: url('${entry.bgImg}') repeat; background-attachment: fixed; width: 100%;max-height: 90vh; height: auto; border: ${entry.mainBorder}; padding: 0;">&lt;tbody>&lt;tr>&lt;td style="padding-bottom: 3%; font-family: ${entry.bodyFont}; font-size: 1em;">&lt;span style="background-color: #${entry.bgColor}; border: ${entry.otherBorder}; margin: 3%; margin-bottom: 0; width: 94%; padding: 20px; font-family: ${entry.headerFont}; font-size: 2em; text-align: center; float: left;">&lt;font color="#${entry.fontColor}">Big Header&lt;/font>&lt;/span>&#10;&lt;span style="background-color: #${entry.bgColor}; border: ${entry.otherBorder}; margin: 3%; margin-right: 1.5%; margin-bottom: 0; width: 45.5%; padding: 20px; font-family: ${entry.headerFont}; font-size: 1.5em; text-align: center; float: left;">&lt;font color="#${entry.fontColor}">Left Header&lt;/font>&lt;/span>&#10;&lt;span style="background-color: #${entry.bgColor}; border: ${entry.otherBorder}; margin: 3%; margin-left: 1.5%; margin-bottom: 0; width: 45.5%; padding: 20px; font-family: ${entry.headerFont}; font-size: 1.5em; text-align: center; float: right;">&lt;font color="#${entry.fontColor}">Right Header&lt;/font>&lt;/span>&#10;&lt;span style="background-color: #${entry.bgColor}; border: ${entry.otherBorder}; margin: 3%; margin-bottom: 0; margin-right: 1.5%; width: 45.5%;  padding: 20px; text-align: left; float: left;">&lt;font color="#${entry.fontColor}">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi neque minima odit necessitatibus dolores nostrum sed delectus cum sapiente architecto, inventore doloremque, ad ipsam id dignissimos expedita?&lt;/font>&lt;/span>&#10;&lt;span style="background-color: #${entry.bgColor}; border: ${entry.otherBorder}; margin: 3%; margin-bottom: 0; margin-left: 1.5%; width: 45.5%; padding: 20px; text-align: left; float: right;">&lt;font color="#${entry.fontColor}">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sapiente expedita repudiandae ab ipsa harum nisi dignissimos? Voluptas id neque numquam quo tenetur perferendis rerum eum ad! Quae, architecto consectetur!&lt;/font>&lt;/span>` +
            `&#10;&lt;span style="background-color: #${entry.bgColor}; border: ${entry.otherBorder};margin: 3%; margin-bottom: 0; width: 94%; padding: 20px; font-family: ${entry.headerFont}; font-size: 1.5em; text-align: center; float: left;">&lt;font color="#${entry.fontColor}">Wide Header&lt;/font>&lt;/span>&#10;&lt;span style="background-color: #${entry.bgColor}; border: ${entry.otherBorder};margin: 3%; margin-bottom: 0; width: 94%; padding: 20px; text-align: left; float: left;">&lt;font color="#${entry.fontColor}">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, quas earum inventore, soluta laborum, veritatis voluptatem quos aliquam laudantium repellat qui nulla optio molestiae eum temporibus quaerat necessitatibus praesentium! Magnam?&lt;/font>&lt;/span>&#10;&lt;span style="background-color: #${entry.bgColor}; border: ${entry.otherBorder};margin: 3%; margin-bottom: 0; width: 94%; padding: 10px; font-size: 0.8em; text-align: center; float: left;">&lt;font color="#${entry.fontColor}">HTML Template by &lt;a href="https://lioden.com/territory.php?id=105465">&lt;font color="#${entry.linkColor}">Chris (#105465)&lt;/font>&lt;/a>&lt;/font>&lt;/span>&lt;/td>&lt;/tr>&lt;/tbody>&lt;/table>&lt;/div></textarea></div></div></div>`

        div.appendChild(card)
    })
}

function copyButton(id) {
    var copyText = gID(id)

    copyText.select()

    navigator.clipboard.writeText(copyText.value)

    alert('The code is now copied to your clipboard! :D')
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