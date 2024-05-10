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
        card.classList = 'col-sm-12 col-md-6 col-lg-4 mb-3'
        let codeName = entry.name
        codeName = codeName.replace(/\s+/g, '')
        card.innerHTML = `<div class="card h-100"><img src="./img/${entry.category}/${entry.img}" class="card-img-top" alt="${entry.name} Layout Preview"><div class="card-body"><h5 class="card-title pb-1 ${entry.green}"><label for="${codeName}Code">${entry.name}</label></h5><textarea name="copy-field" id="${codeName}Code" class="copy-field" rows="4">&lt;link rel="stylesheet" type="text/css" href="${entry.link}" /></textarea></div></div>`

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
    })
}

async function populateTemplates() {
    const requestURL =
        "./json/templates.json"
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
        card.innerHTML = `<div class="row g-0"><div class="col-12 col-md-6 col-lg-4"><img src="./img/html/${entry.img}" class="img-fluid" alt="${entry.name} Template Preview"></div><div class="col-12 col-md-6 col-lg-8"><div class="card-body"><h5 class="card-title">${entry.name}</h5><textarea name="copy-field" rows="10" class="copy-field">&lt;div style="max-height:90vh;height:auto;min-width:450px;">&lt;table style="background: url('${entry.bgImg}') repeat; background-attachment: fixed; width: 100%;max-height: 90vh; height: auto; border: ${entry.mainBorder}; padding: 0;">&lt;tbody>&lt;tr>&lt;td style="padding-bottom: 3%; font-family: ${entry.bodyFont}; font-size: 1em;">&lt;span style="background-color: #${entry.bgColor}; border: ${entry.otherBorder}; margin: 3%; margin-bottom: 0; width: 94%; padding: 20px; font-family: ${entry.headerFont}; font-size: 2em; text-align: center; float: left;">&lt;font color="#${entry.fontColor}">Big Header&lt;/font>&lt;/span>&#10;&lt;span style="background-color: #${entry.bgColor}; border: ${entry.otherBorder}; margin: 3%; margin-right: 1.5%; margin-bottom: 0; width: 45.5%; padding: 20px; font-family: ${entry.headerFont}; font-size: 1.5em; text-align: center; float: left;">&lt;font color="#${entry.fontColor}">Left Header&lt;/font>&lt;/span>&#10;&lt;span style="background-color: #${entry.bgColor}; border: ${entry.otherBorder}; margin: 3%; margin-left: 1.5%; margin-bottom: 0; width: 45.5%; padding: 20px; font-family: ${entry.headerFont}; font-size: 1.5em; text-align: center; float: right;">&lt;font color="#${entry.fontColor}">Right Header&lt;/font>&lt;/span>&#10;&lt;span style="background-color: #${entry.bgColor}; border: ${entry.otherBorder}; margin: 3%; margin-bottom: 0; margin-right: 1.5%; width: 45.5%;  padding: 20px; text-align: left; float: left;">&lt;font color="#${entry.fontColor}">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi neque minima odit necessitatibus dolores nostrum sed delectus cum sapiente architecto, inventore doloremque, ad ipsam id dignissimos expedita?&lt;/font>&lt;/span>&#10;&lt;span style="background-color: #${entry.bgColor}; border: ${entry.otherBorder}; margin: 3%; margin-bottom: 0; margin-left: 1.5%; width: 45.5%; padding: 20px; text-align: left; float: right;">&lt;font color="#${entry.fontColor}">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sapiente expedita repudiandae ab ipsa harum nisi dignissimos? Voluptas id neque numquam quo tenetur perferendis rerum eum ad! Quae, architecto consectetur!&lt;/font>&lt;/span>&#10;&lt;span style="background-color: #${entry.bgColor}; border: ${entry.otherBorder};margin: 3%; margin-bottom: 0; width: 94%; padding: 20px; font-family: ${entry.headerFont}; font-size: 1.5em; text-align: center; float: left;">&lt;font color="#${entry.fontColor}">Wide Header&lt;/font>&lt;/span>&#10;&lt;span style="background-color: #${entry.bgColor}; border: ${entry.otherBorder};margin: 3%; margin-bottom: 0; width: 94%; padding: 20px; text-align: left; float: left;">&lt;font color="#${entry.fontColor}">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, quas earum inventore, soluta laborum, veritatis voluptatem quos aliquam laudantium repellat qui nulla optio molestiae eum temporibus quaerat necessitatibus praesentium! Magnam?&lt;/font>&lt;/span>&#10;&lt;span style="background-color: #${entry.bgColor}; border: ${entry.otherBorder};margin: 3%; margin-bottom: 0; width: 94%; padding: 10px; font-size: 0.8em; text-align: center; float: left;">&lt;font color="#${entry.fontColor}">HTML Template by &lt;a href="https://lioden.com/territory.php?id=105465">Chris (#105465)&lt;/a>&lt;/font>&lt;/span>&lt;/td>&lt;/tr>&lt;/tbody>&lt;/table>&lt;/div></textarea></div></div></div>`

        div.appendChild(card)
    })
}