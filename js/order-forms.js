function gID(id) {
    theElement = document.getElementById(id)
    return theElement
}

// order forms
let basicOrder = gID('basicOrder')
let premiumOrder = gID('premiumOrder')
let coderOrder = gID('coderOrder')
let extravagantOrder = gID('extravagantOrder')

// error containers
let basicErrors = gID('basicErrors')
let premiumErrors = gID('premiumErrors')
let coderErrors = gID('coderErrors')
let extravagantErrors = gID('extravagantErrors')

// error lists
let basicErrorList = gID('basicErrorList')
let premiumErrorList = gID('premiumErrorList')
let coderErrorList = gID('coderErrorList')
let extravagantErrorList = gID('extravagantErrorList')

function basicFormPop() {
    // error list
    let errors = []

    // payment section
    let paymentGB = gID('gbPaymentBasic').checked
    if (paymentGB == true) {
        paymentGB = 'GB'
    } else {
        paymentGB = ''
    }
    let paymentItems = gID('itemPaymentBasic').checked
    if (paymentItems == true) {
        paymentItems = 'Items'
    } else {
        paymentItems = ''
    }
    let paymentText = gID('itemPaymentTextBasic').value

    // logo section
    let logoColor = gID('logoColorBasic').checked
    if (logoColor == true) {
        logoColor = 'Color'
    } else {
        logoColor = ''
    }
    let logoItem = gID('logoItemBasic').checked
    if (logoItem == true) {
        logoItem = 'Item'
    } else {
        logoItem = ''
    }
    let logoText = gID('logoItemTextBasic').value
    if (logoText == '') {
        errors.push('Required field left blank (Logo Color/Item)')
    }

    // bg image
    let bgImage = gID('bgImageTextBasic').value
    if (bgImage == '') {
        errors.push('Required field left blank (Background Color/Image)')
    } else if (bgImage.includes('images.unsplash')) {
        errors.push('Wrong Unsplash link provided. Correct link up in the address bar when looking at the download page for image. (Background Color/Image)')
    } else if (bgImage.includes('images.pexels')) {
        errors.push('Wrong Pexels link provided. Correct link up in the address bar when looking at the download page for image. (Background Color/Image)')
    }

    // font section
    let mainFont = gID('mainFontBasic').value
    if (mainFont == '') {
        errors.push('Required field left blank (Main Font)')
    } else if(mainFont.includes('fonts.google.com')) {
        errors.push('Please only give the name of the font (Main Font)')
    }
    let headFont = gID('headFontBasic').value
    if(headFont.includes('fonts.google.com')) {
        errors.push('Please only give the name of the font (Header Font)')
    }

    // border section
    let borderRound = gID('borderRoundBasic').checked
    if (borderRound == true) {
        borderRound = 'Rounded'
    } else {
        borderRound = ''
    }
    let borderSharp = gID('borderSharpBasic').checked
    if (borderSharp == true) {
        borderSharp = 'Not Rounded'
    } else {
        borderSharp = ''
    }
    let borderSolid = gID('borderSolidBasic').checked
    if (borderSolid == true) {
        borderSolid = 'Solid'
    } else {
        borderSolid = ''
    }
    let borderNone = gID('borderNoneBasic').checked
    if (borderNone == true) {
        borderNone = 'None'
    } else {
        borderNone = ''
    }
    let borderDouble = gID('borderDoubleBasic').checked
    if (borderDouble == true) {
        borderDouble = 'Double'
    } else {
        borderDouble = ''
    }

    // color section
    let pc = gID('pcBasic').value
    if (pc == '') {
        errors.push('Required field left blank (Primary Color)')
    } else if(pc.includes(' ')) {
        errors.push('Only single word responses accepted (Primary Color)')
    } else if(pc.includes('#')) {
        errors.push('Hex codes not accepted. Please just give the name of a color (Primary Color)')
    } else if(pc.includes('rgb')) {
        errors.push('RGB codes not accepted. Please just give the name of a color (Primary Color)')
    }
    let sc = gID('scBasic').value
    if(sc.includes(' ')) {
        errors.push('Only single word responses accepted (Secondary Color)')
    } else if(sc.includes('#')) {
        errors.push('Hex codes not accepted. Please just give the name of a color (Secondary Color)')
    } else if(sc.includes('rgb')) {
        errors.push('RGB codes not accepted. Please just give the name of a color (Secondary Color)')
    }
    let tc = gID('tcBasic').value
    if (tc == '') {
        errors.push('Required field left blank (Tertiary Color)')
    } else if(tc.includes(' ')) {
        errors.push('Only single word responses accepted (Tertiary Color)')
    } else if(tc.includes('#')) {
        errors.push('Hex codes not accepted. Please just give the name of a color (Tertiary Color)')
    } else if(tc.includes('rgb')) {
        errors.push('RGB codes not accepted. Please just give the name of a color (Tertiary Color)')
    }

    // gradient section
    let vertGradient = gID('vertGradientBasic').checked
    if (vertGradient == true) {
        vertGradient = 'Vertical Gradient'
    } else {
        vertGradient = ''
    }
    let horiGradient = gID('horiGradientBasic').checked
    if (horiGradient == true) {
        horiGradient = 'Horizontal Gradient'
    } else {
        horiGradient = ''
    }
    let stripeGradient = gID('stripeGradientBasic').checked
    if (stripeGradient == true) {
        stripeGradient = 'Stripes'
    } else {
        stripeGradient = ''
    }
    let noGradient = gID('noGradientBasic').checked
    if (noGradient == true) {
        noGradient = 'No Gradient'
    } else {
        noGradient = ''
    }
    let gradientProgress = gID('gradientProgressBasic').checked
    if (gradientProgress == true) {
        gradientProgress = 'Progress Bars'
    } else {
        gradientProgress = ''
    }
    let gradientHeader = gID('gradientHeaderBasic').checked
    if (gradientHeader == true) {
        gradientHeader = 'Headers'
    } else {
        gradientHeader = ''
    }
    let gradientDetail = gID('gradientDetailBasic').value

    // additional images section
    let caveImg = gID('caveImgBasic').value
    if (caveImg == '') {
        errors.push('Required field left blank (Caves Image)')
    } else if (caveImg.includes('images.unsplash')) {
        errors.push('Wrong Unsplash link provided. Correct link up in the address bar when looking at the download page for image. (Caves Image)')
    } else if (caveImg.includes('images.pexels')) {
        errors.push('Wrong Pexels link provided. Correct link up in the address bar when looking at the download page for image. (Caves Image)')
    }
    let prideImg = gID('prideImgBasic').value
    if (prideImg == '') {
        prideImg = caveImg
    } else if (prideImg.includes('images.unsplash')) {
        errors.push('Wrong Unsplash link provided. Correct link up in the address bar when looking at the download page for image. (Unsorted, Nesting, and Pride Overview Image)')
    } else if (prideImg.includes('images.pexels')) {
        errors.push('Wrong Pexels link provided. Correct link up in the address bar when looking at the download page for image. (Unsorted, Nesting, and Pride Overview Image)')
    }
    let moundImg = gID('moundImgBasic').value
    if (moundImg == '') {
        moundImg = caveImg
    } else if (moundImg.includes('images.unsplash')) {
        errors.push('Wrong Unsplash link provided. Correct link up in the address bar when looking at the download page for image. (Mounds Image)')
    } else if (moundImg.includes('images.pexels')) {
        errors.push('Wrong Pexels link provided. Correct link up in the address bar when looking at the download page for image. (Mounds Image)')
    }
    let dynastyImg = gID('dynastyImgBasic').value
    if (dynastyImg == '') {
        dynastyImg = caveImg
    } else if (dynastyImg.includes('images.unsplash')) {
        errors.push('Wrong Unsplash link provided. Correct link up in the address bar when looking at the download page for image. (Dynasties Image)')
    } else if (dynastyImg.includes('images.pexels')) {
        errors.push('Wrong Pexels link provided. Correct link up in the address bar when looking at the download page for image. (Dynasties Image)')
    }
    let extraImg = gID('extraCaveBasic').value
    if (extraImg == '') {
        extraImg = 'None'
    } else if (extraImg.includes('images.unsplash')) {
        errors.push('Wrong Unsplash link provided. Correct link up in the address bar when looking at the download page for image. (Other Extra Cave Image(s))')
    } else if (extraImg.includes('images.pexels')) {
        errors.push('Wrong Pexels link provided. Correct link up in the address bar when looking at the download page for image. (Other Extra Cave Image(s))')
    }

    // featured lion bg
    let featuredBG = gID('featuredBGBasic').value
    if (featuredBG == '') {
        errors.push('Required field left blank (Featured Lion BG)')
    } else if(featuredBG.includes('unsplash')) {
        errors.push('Unsplash images not accepted in this field. Please provide the name of an LD BG. (Featured Lion BG)')
    } else if(featuredBG.includes('pexels')) {
        errors.push('Pexels images not accepted in this field. Please provide the name of an LD BG. (Featured Lion BG)')
    }

    // king image section
    let kingRounded = gID('kingRoundedBasic').checked
    if (kingRounded == true) {
        kingRounded = 'Rounded Square'
    } else {
        kingRounded = ''
    }
    let kingSquare = gID('kingSquareBasic').checked
    if (kingSquare == true) {
        kingSquare = 'Square'
    } else {
        kingSquare = ''
    }
    let kingCircle = gID('kingCircleBasic').checked
    if (kingCircle == true) {
        kingCircle = 'Circle'
    } else {
        kingCircle = ''
    }
    // HTML box section
    let boxStatic1 = gID('boxStatic1Basic').checked
    if (boxStatic1 == true) {
        boxStatic1 = 'Static #1'
    } else {
        boxStatic1 = ''
    }
    let boxStatic2 = gID('boxStatic2Basic').checked
    if (boxStatic2 == true) {
        boxStatic2 = 'Static #2'
    } else {
        boxStatic2 = ''
    }
    let boxStatic3 = gID('boxStatic3Basic').checked
    if (boxStatic3 == true) {
        boxStatic3 = 'Static #3'
    } else {
        boxStatic3 = ''
    }
    let boxHover = gID('boxHoverBasic').checked
    if (boxHover == true) {
        boxHover = 'Hover Boxes'
    } else {
        boxHover = ''
    }
    let boxDefault = gID('boxDefaultBasic').checked
    if (boxDefault == true) {
        boxDefault = 'Default'
    } else {
        boxDefault = ''
    }

    // add ons
    let pagedoll = gID('boxPagedollBasic').checked
    if (pagedoll == true) {
        pagedoll = 'Pagedoll'
    } else {
        pagedoll = ''
    }
    let popUp = gID('boxPopUpBasic').checked
    if (popUp == true) {
        popUp = 'Pop-Up Tab'
    } else {
        popUp = ''
    }
    let plainBox = gID('boxPlainBasic').checked
    if (plainBox == true) {
        plainBox = 'Plain Box'
    } else {
        plainBox = ''
    }

    // other specs
    let specs = gID('specsBasic').value

    let button = gID('getFormBasic')
    button.innerHTML = 'Update Basic Form'

    basicErrorList.innerHTML = ''

    if(errors.length > 0) {
        basicOrder.innerHTML = ''
        basicErrors.classList = 'mt-4 p-3'
        errors.forEach((error) => {
            let list = document.createElement('li')
            list.innerHTML = error
            basicErrorList.appendChild(list)
        })
    } else {
        basicErrors.classList = 'd-none'
        basicOrder.innerHTML = `<div class="d-flex justify-content-between align-items-end mt-3"><label class="form-label fs-5 fw-medium" for="basicOrderText">Order Form:</label><button onclick="copyButton('basicOrderText')" class="btn btn-primary mb-3">Copy Code</button></div><textarea name="copy-field" class="form-control copy-field" id="basicOrderText" aria-describedby="basicOrderDesc" rows="10">1. Payment Type: ${paymentGB}${paymentItems}|${paymentText}
2. Custom Logo: ${logoColor}${logoItem}|${logoText}
3. Background Color/Image: ${bgImage}
4. Chosen Font(s): ${mainFont}|${headFont}
5. Border style: ${borderRound}${borderSharp}|${borderSolid}${borderNone}${borderDouble}
6. Color Pallet: ${pc}|${sc}|${tc}
7. Desired Gradients/Stripes and their locations: ${vertGradient},${horiGradient},${stripeGradient},${noGradient}|${gradientProgress},${gradientHeader}|${gradientDetail}
8. Additional images w/ location names:
- Caves: ${caveImg}
- Pride Tabs: ${prideImg}
- Mounds: ${moundImg}
- Dynasties: ${dynastyImg}
- Extras: ${extraImg}
9. Featured lion BG: ${featuredBG}
10. King image styling: ${kingRounded}${kingSquare}${kingCircle}
11. HTML Boxes: ${boxStatic1}${boxStatic2}${boxStatic3}${boxHover}${boxDefault}|${pagedoll},${popUp},${plainBox}
12. Any other specifications: ${specs}</textarea><div class="form-text" id="basicOrderDesc">Please double check that all of the fields are filled in how you like before you send this order form on the thread or in my PMs. Don't worry if there's some extra spaces between some words in the form, that's just how the code worked out lol. I won't mind that one bit, so no need to remove any extras.</div>`
    }
}

function premiumFormPop() {
    // error list
    let errors = []

    // payment section
    let paymentGB = gID('gbPaymentPremium').checked
    if (paymentGB == true) {
        paymentGB = 'GB'
    } else {
        paymentGB = ''
    }
    let paymentItems = gID('itemPaymentPremium').checked
    if (paymentItems == true) {
        paymentItems = 'Items'
    } else {
        paymentItems = ''
    }
    let paymentText = gID('itemPaymentTextPremium').value

    // sb/gb
    let sbgbYes = gID('sbgbYesPremium').checked
    if (sbgbYes == true) {
        sbgbYes = 'Yes'
    } else {
        sbgbYes = ''
    }
    let sbgbNo = gID('sbgbNoPremium').checked
    if (sbgbNo == true) {
        sbgbNo = 'No'
    } else {
        sbgbNo = ''
    }
    let sbText = gID('sbTextPremium').value
    let gbText = gID('gbTextPremium').value
    if (sbgbNo == 'No') {
        sbText = ''
        gbText = ''
    }

    // logo section
    let logoColor = gID('logoColorPremium').checked
    if (logoColor == true) {
        logoColor = 'Color'
    } else {
        logoColor = ''
    }
    let logoItem = gID('logoItemPremium').checked
    if (logoItem == true) {
        logoItem = 'Item'
    } else {
        logoItem = ''
    }
    let logoText = gID('logoItemTextPremium').value
    if (logoText == '') {
        errors.push('Required field left blank (Logo Color/Item)')
    }

    // bg image
    let bgImage = gID('bgImageTextPremium').value
    if (bgImage == '') {
        errors.push('Required field left blank (Background Color/Image)')
    } else if (bgImage.includes('images.unsplash')) {
        errors.push('Wrong Unsplash link provided. Correct link up in the address bar when looking at the download page for image. (Background Color/Image)')
    } else if (bgImage.includes('images.pexels')) {
        errors.push('Wrong Pexels link provided. Correct link up in the address bar when looking at the download page for image. (Background Color/Image)')
    }

    // font section
    let mainFont = gID('mainFontPremium').value
    if (mainFont == '') {
        errors.push('Required field left blank (Main Font)')
    } else if(mainFont.includes('fonts.google.com')) {
        errors.push('Please only give the name of the font (Main Font)')
    }
    let headFont = gID('headFontPremium').value
    if(headFont.includes('fonts.google.com')) {
        errors.push('Please only give the name of the font (Header Font)')
    }

    // border section
    let borderRound = gID('borderRoundPremium').checked
    if (borderRound == true) {
        borderRound = 'Rounded'
    } else {
        borderRound = ''
    }
    let borderSharp = gID('borderSharpPremium').checked
    if (borderSharp == true) {
        borderSharp = 'Not Rounded'
    } else {
        borderSharp = ''
    }
    let borderSolid = gID('borderSolidPremium').checked
    if (borderSolid == true) {
        borderSolid = 'Solid'
    } else {
        borderSolid = ''
    }
    let borderNone = gID('borderNonePremium').checked
    if (borderNone == true) {
        borderNone = 'None'
    } else {
        borderNone = ''
    }
    let borderDouble = gID('borderDoublePremium').checked
    if (borderDouble == true) {
        borderDouble = 'Double'
    } else {
        borderDouble = ''
    }

    // color section
    let pc = gID('pcPremium').value
    if (pc == '') {
        errors.push('Required field left blank (Primary Color)')
    } else if(pc.includes(' ')) {
        errors.push('Only single word responses accepted (Primary Color)')
    } else if(pc.includes('#')) {
        errors.push('Hex codes not accepted. Please just give the name of a color (Primary Color)')
    } else if(pc.includes('rgb')) {
        errors.push('RGB codes not accepted. Please just give the name of a color (Primary Color)')
    }
    let sc = gID('scPremium').value
    if(sc.includes(' ')) {
        errors.push('Only single word responses accepted (Secondary Color)')
    } else if(sc.includes('#')) {
        errors.push('Hex codes not accepted. Please just give the name of a color (Secondary Color)')
    } else if(sc.includes('rgb')) {
        errors.push('RGB codes not accepted. Please just give the name of a color (Secondary Color)')
    }
    let tc = gID('tcPremium').value
    if (tc == '') {
        errors.push('Required field left blank (Tertiary Color)')
    } else if(tc.includes(' ')) {
        errors.push('Only single word responses accepted (Tertiary Color)')
    } else if(tc.includes('#')) {
        errors.push('Hex codes not accepted. Please just give the name of a color (Tertiary Color)')
    } else if(tc.includes('rgb')) {
        errors.push('RGB codes not accepted. Please just give the name of a color (Tertiary Color)')
    }

    // gradient section
    let vertGradient = gID('vertGradientPremium').checked
    if (vertGradient == true) {
        vertGradient = 'Vertical Gradient'
    } else {
        vertGradient = ''
    }
    let horiGradient = gID('horiGradientPremium').checked
    if (horiGradient == true) {
        horiGradient = 'Horizontal Gradient'
    } else {
        horiGradient = ''
    }
    let stripeGradient = gID('stripeGradientPremium').checked
    if (stripeGradient == true) {
        stripeGradient = 'Stripes'
    } else {
        stripeGradient = ''
    }
    let noGradient = gID('noGradientPremium').checked
    if (noGradient == true) {
        noGradient = 'No Gradient'
    } else {
        noGradient = ''
    }
    let gradientProgress = gID('gradientProgressPremium').checked
    if (gradientProgress == true) {
        gradientProgress = 'Progress Bars'
    } else {
        gradientProgress = ''
    }
    let gradientHeader = gID('gradientHeaderPremium').checked
    if (gradientHeader == true) {
        gradientHeader = 'Headers'
    } else {
        gradientHeader = ''
    }
    let gradientDetail = gID('gradientDetailPremium').value

    // additional images section
    let caveImg = gID('caveImgPremium').value
    if (caveImg == '') {
        errors.push('Required field left blank (Caves Image)')
    } else if (caveImg.includes('images.unsplash')) {
        errors.push('Wrong Unsplash link provided. Correct link up in the address bar when looking at the download page for image. (Caves Image)')
    } else if (caveImg.includes('images.pexels')) {
        errors.push('Wrong Pexels link provided. Correct link up in the address bar when looking at the download page for image. (Caves Image)')
    }
    let prideImg = gID('prideImgPremium').value
    if (prideImg == '') {
        prideImg = caveImg
    } else if (prideImg.includes('images.unsplash')) {
        errors.push('Wrong Unsplash link provided. Correct link up in the address bar when looking at the download page for image. (Unsorted, Nesting, and Pride Overview Image)')
    } else if (prideImg.includes('images.pexels')) {
        errors.push('Wrong Pexels link provided. Correct link up in the address bar when looking at the download page for image. (Unsorted, Nesting, and Pride Overview Image)')
    }
    let moundImg = gID('moundImgPremium').value
    if (moundImg == '') {
        moundImg = caveImg
    } else if (moundImg.includes('images.unsplash')) {
        errors.push('Wrong Unsplash link provided. Correct link up in the address bar when looking at the download page for image. (Mounds Image)')
    } else if (moundImg.includes('images.pexels')) {
        errors.push('Wrong Pexels link provided. Correct link up in the address bar when looking at the download page for image. (Mounds Image)')
    }
    let dynastyImg = gID('dynastyImgPremium').value
    if (dynastyImg == '') {
        dynastyImg = caveImg
    } else if (dynastyImg.includes('images.unsplash')) {
        errors.push('Wrong Unsplash link provided. Correct link up in the address bar when looking at the download page for image. (Dynasties Image)')
    } else if (dynastyImg.includes('images.pexels')) {
        errors.push('Wrong Pexels link provided. Correct link up in the address bar when looking at the download page for image. (Dynasties Image)')
    }
    let extraImg = gID('extraCavePremium').value
    if (extraImg == '') {
        extraImg = 'None'
    } else if (extraImg.includes('images.unsplash')) {
        errors.push('Wrong Unsplash link provided. Correct link up in the address bar when looking at the download page for image. (Other Extra Cave Image(s))')
    } else if (extraImg.includes('images.pexels')) {
        errors.push('Wrong Pexels link provided. Correct link up in the address bar when looking at the download page for image. (Other Extra Cave Image(s))')
    }

    // featured lion bg
    let featuredBG = gID('featuredBGExtravagant').value
    if (featuredBG == '') {
        errors.push('Required field left blank (Featured Lion BG)')
    } else if(featuredBG.includes('unsplash')) {
        errors.push('Unsplash images not accepted in this field. Please provide the name of an LD BG. (Featured Lion BG)')
    } else if(featuredBG.includes('pexels')) {
        errors.push('Pexels images not accepted in this field. Please provide the name of an LD BG. (Featured Lion BG)')
    }

    // king image section
    let kingRounded = gID('kingRoundedPremium').checked
    if (kingRounded == true) {
        kingRounded = 'Rounded Square'
    } else {
        kingRounded = ''
    }
    let kingSquare = gID('kingSquarePremium').checked
    if (kingSquare == true) {
        kingSquare = 'Square'
    } else {
        kingSquare = ''
    }
    let kingCircle = gID('kingCirclePremium').checked
    if (kingCircle == true) {
        kingCircle = 'Circle'
    } else {
        kingCircle = ''
    }
    let kingHoverYes = gID('kingHoverYesPremium').checked
    if (kingHoverYes == true) {
        kingHoverYes = 'Yes'
    } else {
        kingHoverYes = ''
    }
    let kingHoverNo = gID('kingHoverNoPremium').checked
    if (kingHoverNo == true) {
        kingHoverNo = 'No'
    } else {
        kingHoverNo = ''
    }
    let kingHoverRounded = gID('kingHoverRoundedPremium').checked
    if (kingHoverRounded == true) {
        kingHoverRounded = 'Rounded Square'
    } else {
        kingHoverRounded = ''
    }
    let kingHoverSquare = gID('kingHoverSquarePremium').checked
    if (kingHoverSquare == true) {
        kingHoverSquare = 'Square'
    } else {
        kingHoverSquare = ''
    }
    let kingHoverCircle = gID('kingHoverCirclePremium').checked
    if (kingHoverCircle == true) {
        kingHoverCircle = 'Circle'
    } else {
        kingHoverCircle = ''
    }
    if (kingHoverNo == 'No') {
        kingHoverRounded = ''
        kingHoverSquare = ''
        kingHoverCircle = ''
    }

    // HTML box section
    let boxStatic1 = gID('boxStatic1Premium').checked
    if (boxStatic1 == true) {
        boxStatic1 = 'Static #1'
    } else {
        boxStatic1 = ''
    }
    let boxStatic2 = gID('boxStatic2Premium').checked
    if (boxStatic2 == true) {
        boxStatic2 = 'Static #2'
    } else {
        boxStatic2 = ''
    }
    let boxStatic3 = gID('boxStatic3Premium').checked
    if (boxStatic3 == true) {
        boxStatic3 = 'Static #3'
    } else {
        boxStatic3 = ''
    }
    let boxHover = gID('boxHoverPremium').checked
    if (boxHover == true) {
        boxHover = 'Hover Boxes'
    } else {
        boxHover = ''
    }
    let boxDefault = gID('boxDefaultPremium').checked
    if (boxDefault == true) {
        boxDefault = 'Default'
    } else {
        boxDefault = ''
    }
    // add ons
    let pagedoll = gID('boxPagedollPremium').checked
    if (pagedoll == true) {
        pagedoll = 'Pagedoll'
    } else {
        pagedoll = ''
    }
    let popUp = gID('boxPopUpPremium').checked
    if (popUp == true) {
        popUp = 'Pop-Up Tab'
    } else {
        popUp = ''
    }
    let plainBox = gID('boxPlainPremium').checked
    if (plainBox == true) {
        plainBox = 'Plain Box'
    } else {
        plainBox = ''
    }

    // credit removal
    let creditYes = gID('creditRemoveYesPremium').checked
    if (creditYes == true) {
        creditYes = 'Yes'
    } else {
        creditYes = ''
    }
    let creditNo = gID('creditRemoveNoPremium').checked
    if (creditNo == true) {
        creditNo = 'No'
    } else {
        creditNo = ''
    }

    // other specs
    let specs = gID('specsPremium').value

    let button = gID('getFormPremium')
    button.innerHTML = 'Update Premium Form'

    premiumErrorList.innerHTML = ''

    if(errors.length > 0) {
        premiumOrder.innerHTML = ''
        premiumErrors.classList = 'mt-4 p-3'
        errors.forEach((error) => {
            let list = document.createElement('li')
            list.innerHTML = error
            premiumErrorList.appendChild(list)
        })
    } else {
        premiumErrors.classList = 'd-none'
        premiumOrder.innerHTML = `<div class="d-flex justify-content-between align-items-end mt-3"><label class="form-label fs-5 fw-medium" for="premiumOrderText">Order Form:</label><button onclick="copyButton('premiumOrderText')" class="btn btn-primary mb-3">Copy Code</button></div><textarea name="copy-field" class="form-control copy-field" id="premiumOrderText" aria-describedby="premiumOrderDesc" rows="10">1. Payment Type: ${paymentGB}${paymentItems} ${paymentText}
2. SB/GB customization: ${sbgbYes}${sbgbNo}|${sbText}|${gbText}
3. Custom Logo: ${logoColor}${logoItem}|${logoText}
4. Background Color/Image: ${bgImage}
5. Chosen Font(s): ${mainFont}|${headFont}
6. Border style: ${borderRound}${borderSharp}|${borderSolid}${borderNone}${borderDouble}
7. Color Pallet: ${pc}|${sc}|${tc}
8. Desired Gradients/Stripes and their locations: ${vertGradient},${horiGradient},${stripeGradient},${noGradient}|${gradientProgress},${gradientHeader}|${gradientDetail}
9. Additional images w/ location names:
- Caves: ${caveImg}
- Pride Tabs: ${prideImg}
- Mounds: ${moundImg}
- Dynasties: ${dynastyImg}
- Extras: ${extraImg}
10. Featured lion BG: ${featuredBG}
11. King image styling: ${kingRounded}${kingSquare}${kingCircle}|${kingHoverYes}${kingHoverNo}|${kingHoverRounded}${kingHoverSquare}${kingHoverCircle}
12. HTML Boxes: ${boxStatic1}${boxStatic2}${boxStatic3}${boxHover}${boxDefault}|${pagedoll},${popUp},${plainBox}
13. Visible Credit Removal: ${creditYes}${creditNo}
14. Any other specifications: ${specs}</textarea><div class="form-text" id="premiumOrderDesc">Please double check that all of the fields are filled in how you like before you send this order form on the thread or in my PMs. Don't worry if there's some extra spaces between some words in the form, that's just how the code worked out lol. I won't mind that one bit, so no need to remove any extras.</div>`
    }
}

function coderFormPop() {
    // error list
    let errors = []

    // payment section
    let paymentGB = gID('gbPaymentCoder').checked
    if (paymentGB == true) {
        paymentGB = 'GB'
    } else {
        paymentGB = ''
    }
    let paymentItems = gID('itemPaymentCoder').checked
    if (paymentItems == true) {
        paymentItems = 'Items'
    } else {
        paymentItems = ''
    }
    let paymentText = gID('itemPaymentTextCoder').value

    // bg image
    let bgImage = gID('bgImageTextCoder').value
    if (bgImage == '') {
        errors.push('Required field left blank (Background Color/Image)')
    } else if (bgImage.includes('images.unsplash')) {
        errors.push('Wrong Unsplash link provided. Correct link up in the address bar when looking at the download page for image. (Background Color/Image)')
    } else if (bgImage.includes('images.pexels')) {
        errors.push('Wrong Pexels link provided. Correct link up in the address bar when looking at the download page for image. (Background Color/Image)')
    }

    // add img section
    let unsplash = gID('addImgUnsplashCoder').checked
    if (unsplash == true) {
        unsplash = 'Unsplash/Pexels'
    } else {
        unsplash = ''
    }
    let ldbg = gID('addImgLDBGCoder').checked
    if (ldbg == true) {
        ldbg = 'LD BG Directory'
    } else {
        ldbg = ''
    }
    let noPref = gID('addImgNoCoder').checked
    if (noPref == true) {
        noPref = 'No Preference'
    } else {
        noPref = ''
    }

    // HTML box section
    let boxStatic1 = gID('boxStatic1Coder').checked
    if (boxStatic1 == true) {
        boxStatic1 = 'Static #1'
    } else {
        boxStatic1 = ''
    }
    let boxStatic2 = gID('boxStatic2Coder').checked
    if (boxStatic2 == true) {
        boxStatic2 = 'Static #2'
    } else {
        boxStatic2 = ''
    }
    let boxStatic3 = gID('boxStatic3Coder').checked
    if (boxStatic3 == true) {
        boxStatic3 = 'Static #3'
    } else {
        boxStatic3 = ''
    }
    let boxHover = gID('boxHoverCoder').checked
    if (boxHover == true) {
        boxHover = 'Hover Boxes'
    } else {
        boxHover = ''
    }
    let boxDefault = gID('boxDefaultCoder').checked
    if (boxDefault == true) {
        boxDefault = 'Default'
    } else {
        boxDefault = ''
    }
    // add ons
    let pagedoll = gID('boxPagedollCoder').checked
    if (pagedoll == true) {
        pagedoll = 'Pagedoll'
    } else {
        pagedoll = ''
    }
    let popUp = gID('boxPopUpCoder').checked
    if (popUp == true) {
        popUp = 'Pop-Up Tab'
    } else {
        popUp = ''
    }
    let plainBox = gID('boxPlainCoder').checked
    if (plainBox == true) {
        plainBox = 'Plain Box'
    } else {
        plainBox = ''
    }

    // vibe
    let vibe = gID('vibeCoder').value
    if (vibe == '') {
        errors.push('Required field left blank (Vibe)')
    }

    let button = gID('getFormCoder')
    button.innerHTML = 'Update Coder\'s Choice Form'

    coderErrorList.innerHTML = ''

    if(errors.length > 0) {
        coderOrder.innerHTML = ''
        coderErrors.classList = 'mt-4 p-3'
        errors.forEach((error) => {
            let list = document.createElement('li')
            list.innerHTML = error
            coderErrorList.appendChild(list)
        })
    } else {
        coderErrors.classList = 'd-none'
        coderOrder.innerHTML = `<div class="d-flex justify-content-between align-items-end mt-3"><label class="form-label fs-5 fw-medium" for="coderOrderText">Order Form:</label><button onclick="copyButton('coderOrderText')" class="btn btn-primary mb-3">Copy Code</button></div><textarea name="copy-field" class="form-control copy-field" id="coderOrderText" aria-describedby="coderOrderDesc" rows="5">1. Payment Type: ${paymentGB}${paymentItems}|${paymentText}
2. Background Color/Image: ${bgImage}
3. Additional Image Source: ${unsplash}${ldbg}${noPref}
4. HTML Boxes: ${boxStatic1}${boxStatic2}${boxStatic3}${boxHover}${boxDefault}|${pagedoll},${popUp},${plainBox}
5. The vibe you're going for: ${vibe}</textarea><div class="form-text" id="coderOrderDesc">Please double check that all of the fields are filled in how you like before you send this order form on the thread or in my PMs. Don't worry if there's some extra spaces between some words in the form, that's just how the code worked out lol. I won't mind that one bit, so no need to remove any extras.</div>`
    }
}

function extravagantFormPop() {
    // error list
    let errors = []

    // payment section
    let paymentGB = gID('gbPaymentExtravagant').checked
    if (paymentGB == true) {
        paymentGB = 'GB'
    } else {
        paymentGB = ''
    }
    let paymentItems = gID('itemPaymentExtravagant').checked
    if (paymentItems == true) {
        paymentItems = 'Items'
    } else {
        paymentItems = ''
    }
    let paymentText = gID('itemPaymentTextExtravagant').value

    // logo section
    let logoText = gID('logoItemTextExtravagant').value
    if (logoText == '') {
        errors.push('Required field left blank (Logo Item)')
    }

    // bg image
    let bgImage = gID('bgImageTextExtravagant').value
    if (bgImage == '') {
        errors.push('Required field left blank (Background Color/Image)')
    } else if (bgImage.includes('images.unsplash')) {
        errors.push('Wrong Unsplash link provided. Correct link up in the address bar when looking at the download page for image. (Background Color/Image)')
    } else if (bgImage.includes('images.pexels')) {
        errors.push('Wrong Pexels link provided. Correct link up in the address bar when looking at the download page for image. (Background Color/Image)')
    }

    // font section
    let mainFont = gID('mainFontExtravagant').value
    if (mainFont == '') {
        errors.push('Required field left blank (Main Font)')
    } else if(mainFont.includes('fonts.google.com')) {
        errors.push('Please only give the name of the font (Main Font)')
    }
    let headFont = gID('headFontExtravagant').value
    if(headFont.includes('fonts.google.com')) {
        errors.push('Please only give the name of the font (Header Font)')
    }

    // color section
    let pc = gID('pcExtravagant').value
    if (pc == '') {
        errors.push('Required field left blank (Main Color)')
    } else if(pc.includes(' ')) {
        errors.push('Only single word responses accepted (Main Color)')
    } else if(pc.includes('#')) {
        errors.push('Hex codes not accepted. Please just give the name of a color (Main Color)')
    } else if(pc.includes('rgb')) {
        errors.push('RGB codes not accepted. Please just give the name of a color (Main Color)')
    }
    let tc = gID('tcExtravagant').value
    if (tc == '') {
        errors.push('Required field left blank (Accent Color)')
    } else if(tc.includes(' ')) {
        errors.push('Only single word responses accepted (Accent Color)')
    } else if(tc.includes('#')) {
        errors.push('Hex codes not accepted. Please just give the name of a color (Accent Color)')
    } else if(tc.includes('rgb')) {
        errors.push('RGB codes not accepted. Please just give the name of a color (Accent Color)')
    }

    // overlay section
    let overlay = gID('overlayExtravagant').value
    if (overlay == '') {
        errors.push('Required field left blank (Overlay Image)')
    }

    // sidebar panels
    let memberPanel = gID('mPanelExtravagant').value
    if (memberPanel == '') {
        errors.push('Required field left blank (Members Panel)')
    } else if(memberPanel.includes('unsplash')) {
        errors.push('Unsplash images not accepted in this field. Please provide the name of an LD BG. (Members Panel)')
    } else if(memberPanel.includes('pexels')) {
        errors.push('Pexels images not accepted in this field. Please provide the name of an LD BG. (Members Panel)')
    }
    let kingPanel = gID('kPanelExtravagant').value
    if (kingPanel == '') {
        kingPanel = memberPanel
    } else if(kingPanel.includes('unsplash')) {
        errors.push('Unsplash images not accepted in this field. Please provide the name of an LD BG. (King Stats Panel)')
    } else if(kingPanel.includes('pexels')) {
        errors.push('Pexels images not accepted in this field. Please provide the name of an LD BG. (King Stats Panel)')
    }
    let bookmarkPanel = gID('bPanelExtravagant').value
    if (bookmarkPanel == '') {
        bookmarkPanel = memberPanel
    } else if(bookmarkPanel.includes('unsplash')) {
        errors.push('Unsplash images not accepted in this field. Please provide the name of an LD BG. (Bookmarks Panel)')
    } else if(bookmarkPanel.includes('pexels')) {
        errors.push('Pexels images not accepted in this field. Please provide the name of an LD BG. (Bookmarks Panel)')
    }

    // sidebar arrows
    let kingArrow = gID('kArrowExtravagant').value
    if (kingArrow == '') {
        kingArrow = 'None'
    }
    let achieveArrow = gID('aArrowExtravagant').value
    if (achieveArrow == '') {
        achieveArrow = 'None'
    }
    let bookArrow = gID('bArrowExtravagant').value
    if (bookArrow == '') {
        bookArrow = 'None'
    }

    // player table
    let tableBG = gID('tableExtravagant').value
    if (tableBG == '') {
        errors.push('Required field left blank (Player Table BG)')
    } else if(tableBG.includes('unsplash')) {
        errors.push('Unsplash images not accepted in this field. Please provide the name of an LD BG. (Player Table BG)')
    } else if(tableBG.includes('pexels')) {
        errors.push('Pexels images not accepted in this field. Please provide the name of an LD BG. (Player Table BG)')
    }

    // pride tabs section
    let unsorted = gID('unsortedExtravagant').value
    if (unsorted == '') {
        errors.push('Required field left blank (Unsorted Cave Image)')
    } else if(unsorted.includes('unsplash')) {
        errors.push('Unsplash images not accepted in this field. Please provide the name of an LD BG. (Unsorted Cave Image)')
    } else if(unsorted.includes('pexels')) {
        errors.push('Pexels images not accepted in this field. Please provide the name of an LD BG. (Unsorted Cave Image)')
    }
    let nesting = gID('nestingExtravagant').value
    if (nesting == '') {
        nesting = unsorted
    } else if(nesting.includes('unsplash')) {
        errors.push('Unsplash images not accepted in this field. Please provide the name of an LD BG. (Nesting Cave Image)')
    } else if(nesting.includes('pexels')) {
        errors.push('Pexels images not accepted in this field. Please provide the name of an LD BG. (Nesting Cave Image)')
    }
    let overview = gID('overviewExtravagant').value
    if (overview == '') {
        overview = unsorted
    } else if(overview.includes('unsplash')) {
        errors.push('Unsplash images not accepted in this field. Please provide the name of an LD BG. (Pride Overview Cave Image)')
    } else if(overview.includes('pexels')) {
        errors.push('Pexels images not accepted in this field. Please provide the name of an LD BG. (Pride Overview Cave Image)')
    }

    // caves section
    let caveDefault = gID('caveDefaultExtravagant').value
    if (caveDefault == '') {
        errors.push('Required field left blank (Default Cave Image)')
    } else if(caveDefault.includes('unsplash')) {
        errors.push('Unsplash images not accepted in this field. Please provide the name of an LD BG. (Default Cave Image)')
    } else if(caveDefault.includes('pexels')) {
        errors.push('Pexels images not accepted in this field. Please provide the name of an LD BG. (Default Cave Image)')
    }
    let cave1 = gID('cave1Extravagant').value
    if (cave1 == '') {
        cave1 = caveDefault
    } else if(cave1.includes('unsplash')) {
        errors.push('Unsplash images not accepted in this field. Please provide the name of an LD BG. (Cave 1 Image)')
    } else if(cave1.includes('pexels')) {
        errors.push('Pexels images not accepted in this field. Please provide the name of an LD BG. (Cave 1 Image)')
    }
    let cave2 = gID('cave2Extravagant').value
    if (cave2 == '') {
        cave2 = caveDefault
    } else if(cave2.includes('unsplash')) {
        errors.push('Unsplash images not accepted in this field. Please provide the name of an LD BG. (Cave 2 Image)')
    } else if(cave2.includes('pexels')) {
        errors.push('Pexels images not accepted in this field. Please provide the name of an LD BG. (Cave 2 Image)')
    }
    let cave3 = gID('cave3Extravagant').value
    if (cave3 == '') {
        cave3 = caveDefault
    } else if(cave3.includes('unsplash')) {
        errors.push('Unsplash images not accepted in this field. Please provide the name of an LD BG. (Cave 3 Image)')
    } else if(cave3.includes('pexels')) {
        errors.push('Pexels images not accepted in this field. Please provide the name of an LD BG. (Cave 3 Image)')
    }
    let caveExtra = gID('caveExtraExtravagant').value
    if (caveExtra == '') {
        caveExtra = 'None'
    } else if(caveExtra.includes('unsplash')) {
        errors.push('Unsplash images not accepted in this field. Please provide the name(s) of any LD BG(s). (Additional Cave Image(s))')
    } else if(caveExtra.includes('pexels')) {
        errors.push('Pexels images not accepted in this field. Please provide the name(s) of any LD BG(s). (Additional Cave Image(s))')
    }

    // mounds section
    let moundDefault = gID('moundDefaultExtravagant').value
    if (moundDefault == '') {
        errors.push('Required field left blank (Default Mound Image)')
    } else if(moundDefault.includes('unsplash')) {
        errors.push('Unsplash images not accepted in this field. Please provide the name of an LD BG. (Default Mound Image)')
    } else if(moundDefault.includes('pexels')) {
        errors.push('Pexels images not accepted in this field. Please provide the name of an LD BG. (Default Mound Image)')
    }
    let mound1 = gID('mound1Extravagant').value
    if (mound1 == '') {
        mound1 = moundDefault
    } else if(mound1.includes('unsplash')) {
        errors.push('Unsplash images not accepted in this field. Please provide the name of an LD BG. (Default Mound Image)')
    } else if(mound1.includes('pexels')) {
        errors.push('Pexels images not accepted in this field. Please provide the name of an LD BG. (Default Mound Image)')
    }
    let mound2 = gID('mound2Extravagant').value
    if (mound2 == '') {
        mound2 = moundDefault
    } else if(mound2.includes('unsplash')) {
        errors.push('Unsplash images not accepted in this field. Please provide the name of an LD BG. (Default Mound Image)')
    } else if(mound2.includes('pexels')) {
        errors.push('Pexels images not accepted in this field. Please provide the name of an LD BG. (Default Mound Image)')
    }
    let moundExtra = gID('moundExtraExtravagant').value
    if (moundExtra == '') {
        moundExtra = 'None'
    } else if(moundExtra.includes('unsplash')) {
        errors.push('Unsplash images not accepted in this field. Please provide the name(s) of any LD BG(s). (Additional Mound Image(s))')
    } else if(moundExtra.includes('pexels')) {
        errors.push('Pexels images not accepted in this field. Please provide the name(s) of any LD BG(s). (Additional Mound Image(s))')
    }

    // dynasties section
    let kingDynasty = gID('kingDynExtravagant').value
    if (kingDynasty == '') {
        errors.push('Required field left blank (King Dynasty Image)')
    } else if(kingDynasty.includes('unsplash')) {
        errors.push('Unsplash images not accepted in this field. Please provide the name of an LD BG. (King Dynasty Image)')
    } else if(kingDynasty.includes('pexels')) {
        errors.push('Pexels images not accepted in this field. Please provide the name of an LD BG. (King Dynasty Image)')
    }
    let prideDynasty = gID('prideDynExtravagant').value
    if (prideDynasty == '') {
        prideDynasty = kingDynasty
    } else if(prideDynasty.includes('unsplash')) {
        errors.push('Unsplash images not accepted in this field. Please provide the name of an LD BG. (Pride Dynasty Image)')
    } else if(prideDynasty.includes('pexels')) {
        errors.push('Pexels images not accepted in this field. Please provide the name of an LD BG. (Pride Dynasty Image)')
    }
    let achieveDynasty = gID('achieveDynExtravagant').value
    if (achieveDynasty == '') {
        achieveDynasty = kingDynasty
    } else if(achieveDynasty.includes('unsplash')) {
        errors.push('Unsplash images not accepted in this field. Please provide the name of an LD BG. (Achievements Image)')
    } else if(achieveDynasty.includes('pexels')) {
        errors.push('Pexels images not accepted in this field. Please provide the name of an LD BG. (Achievements Image)')
    }
    let showcaseDynasty = gID('showcaseDynExtravagant').value
    if (showcaseDynasty == '') {
        showcaseDynasty = kingDynasty
    } else if(showcaseDynasty.includes('unsplash')) {
        errors.push('Unsplash images not accepted in this field. Please provide the name of an LD BG. (Showcase Image)')
    } else if(showcaseDynasty.includes('pexels')) {
        errors.push('Pexels images not accepted in this field. Please provide the name of an LD BG. (Showcase Image)')
    }
    let beetleDynasty = gID('beetleDynExtravagant').value
    if (beetleDynasty == '') {
        beetleDynasty = kingDynasty
    } else if(beetleDynasty.includes('unsplash')) {
        errors.push('Unsplash images not accepted in this field. Please provide the name of an LD BG. (Beetle Book Image)')
    } else if(beetleDynasty.includes('pexels')) {
        errors.push('Pexels images not accepted in this field. Please provide the name of an LD BG. (Beetle Book Image)')
    }

    // featured lion bg
    let featuredBG = gID('featuredBGExtravagant').value
    if (featuredBG == '') {
        errors.push('Required field left blank (Featured Lion BG)')
    } else if(featuredBG.includes('unsplash')) {
        errors.push('Unsplash images not accepted in this field. Please provide the name of an LD BG. (Featured Lion BG)')
    } else if(featuredBG.includes('pexels')) {
        errors.push('Pexels images not accepted in this field. Please provide the name of an LD BG. (Featured Lion BG)')
    }

    // comment box
    let comment = gID('commentExtravagant').value
    if (comment == '') {
        comment = 'Default'
    } else if(comment.length > 100) {
        errors.push('Text provided is too long. Must be fewer than 100 characters (Comment Box Message)')
    }

    // online/offline
    let online = gID('onlineExtravagant').value
    if (online == '') {
        online = 'None'
    } else if(online.includes(' ')) {
        errors.push('Only single word responses accepted (Online Text)')
    }
    let offline = gID('offlineExtravagant').value
    if (offline == '') {
        offline = 'None'
    } else if(offline.includes(' ')) {
        errors.push('Only single word responses accepted (Offline Text)')
    }

    // HTML box section
    let boxStatic1 = gID('boxStatic1Extravagant').checked
    if (boxStatic1 == true) {
        boxStatic1 = 'Static #1'
    } else {
        boxStatic1 = ''
    }
    let boxStatic2 = gID('boxStatic2Extravagant').checked
    if (boxStatic2 == true) {
        boxStatic2 = 'Static #2'
    } else {
        boxStatic2 = ''
    }
    let boxStatic3 = gID('boxStatic3Extravagant').checked
    if (boxStatic3 == true) {
        boxStatic3 = 'Static #3'
    } else {
        boxStatic3 = ''
    }
    let boxHover = gID('boxHoverExtravagant').checked
    if (boxHover == true) {
        boxHover = 'Hover Boxes'
    } else {
        boxHover = ''
    }
    let boxDefault = gID('boxDefaultExtravagant').checked
    if (boxDefault == true) {
        boxDefault = 'Default'
    } else {
        boxDefault = ''
    }

    // add ons
    let pagedoll = gID('boxPagedollExtravagant').checked
    if (pagedoll == true) {
        pagedoll = 'Pagedoll'
    } else {
        pagedoll = ''
    }
    let popUp = gID('boxPopUpExtravagant').checked
    if (popUp == true) {
        popUp = 'Pop-Up Tab'
    } else {
        popUp = ''
    }
    let plainBox = gID('boxPlainExtravagant').checked
    if (plainBox == true) {
        plainBox = 'Plain Box'
    } else {
        plainBox = ''
    }

    // value
    let valueLight = gID('valueLightExtravagant').checked
    if (valueLight == true) {
        valueLight = 'Light'
    } else {
        valueLight = ''
    }
    let valueDark = gID('valueDarkExtravagant').checked
    if (valueDark == true) {
        valueDark = 'Dark'
    } else {
        valueDark = ''
    }

    let button = gID('getFormExtravagant')
    button.innerHTML = 'Update Extravagant Form'

    extravagantErrorList.innerHTML = ''

    if(errors.length > 0) {
        extravagantOrder.innerHTML = ''
        extravagantErrors.classList = 'mt-4 p-3'
        errors.forEach((error) => {
            let list = document.createElement('li')
            list.innerHTML = error
            extravagantErrorList.appendChild(list)
        })
    } else {
        extravagantErrors.classList = 'd-none'
        extravagantOrder.innerHTML = `<div class="d-flex justify-content-between align-items-end mt-3"><label class="form-label fs-5 fw-medium" for="extravagantOrderText">Order Form:</label><button onclick="copyButton('extravagantOrderText')" class="btn btn-primary mb-3">Copy Code</button></div><textarea name="copy-field" class="form-control copy-field" id="extravagantOrderText" aria-describedby="extravagantOrderDesc" rows="10">1. Payment Type: ${paymentGB}${paymentItems}|${paymentText}
2. Logo: ${logoText}
3. Background Image: ${bgImage}
4. Chosen Font(s): ${mainFont}|${headFont}
5. Main Color: ${pc}
6. Accent Color: ${tc}
7. Overlay Image: ${overlay}
8. Sidebar Panel Images:
- Members Panel: ${memberPanel}
- Kings Stats Panel: ${kingPanel}
- Bookmarks Panel: ${bookmarkPanel}
9. Sidebar Arrow Images:
- King Stats Arrow: ${kingArrow}
- Achievements Arrow: ${achieveArrow}
- Bookmarks Arrow: ${bookArrow}
10. Player Table BG Image: ${tableBG}
11. Caves:
- Unsorted: ${unsorted}
- Nesting: ${nesting}
- Overview: ${overview}
- Default Cave: ${caveDefault}
- Cave 1: ${cave1}
- Cave 2: ${cave2}
- Cave 3: ${cave3}
- Extras: ${caveExtra}
12. Mounds:
- Default Mound: ${moundDefault}
- Mound 1: ${mound1}
- Mound 2: ${mound2}
- Extras: ${moundExtra}
13. Dynasties:
- King Dynasty: ${kingDynasty}
- Pride Dynasty: ${prideDynasty}
- Achievements: ${achieveDynasty}
- Showcase: ${showcaseDynasty}
- Beetle Book: ${beetleDynasty}
14. Featured Lion BG: ${featuredBG}
15. Comment Box Message: ${comment}
16. Online/Offline Text: ${online}|${offline}
17. HTML Boxes: ${boxStatic1}${boxStatic2}${boxStatic3}${boxHover}${boxDefault}|${pagedoll},${popUp},${plainBox}
18. Light or Dark: ${valueLight}${valueDark}</textarea><div class="form-text" id="extravagantOrderDesc">Please double check that all of the fields are filled in how you like before you send this order form on the thread or in my PMs. Don't worry if the formatting seems strange. I made it look the way it does on purpose.</div>`
}
}