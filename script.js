let modal = document.querySelector('.modal')

function checkValue(id, errorText){
    const retVal = document.getElementById(id).value
    if (!retVal) alert(errorText)
    return retVal
}

function calc(){
    const diameter = checkValue('diameter', 'Введите высоту бруса/бревна')/100
    const levelNum = checkValue('level-num', 'Введите количество этажей')
    const levelH = checkValue('level-h', 'Введите высоту этажа')
    const levelP = checkValue('level-p', 'Введите периметр этажа')
    const resLevels = Math.floor( levelH / diameter ) * levelP * levelNum
    // alert('Суммарная длина шва для этажей: ' + resLevels)

    const frontonNum = document.getElementById('fronton-num').value 
    const frontonH = document.getElementById('fronton-h').value
    const frontonW = document.getElementById('fronton-w').value
    const resFrontons = Math.floor( frontonH / diameter ) * frontonW * frontonNum /2
    // alert('Суммарная длина шва для фронтонов: ' + resFrontons)

    const windowNum = document.getElementById('window-num').value
    const windowH = document.getElementById('window-h').value/100
    const windowW = document.getElementById('window-w').value/100 
    const resWindows = - Math.floor( windowH / diameter ) * windowW * windowNum
    // alert('Суммарная длина шва для окон: ' + resWindows)

    const doorNum = document.getElementById('door-num').value 
    const doorH = document.getElementById('door-h').value/100 
    const doorW = document.getElementById('door-w').value/100
    const resDoors = - Math.floor( doorH / diameter ) * doorW * doorNum
    // alert('Суммарная длина шва для окон: ' + resDoors)
    
    // alert('Результат: ' + (resLevels + resFrontons + resWindows + resDoors) + ' м шва')

    const rezMeters = document.querySelector('#rez-meters')
    const spanM = document.createElement('span');
    spanM.textContent = ' ' + (resLevels + resFrontons + resWindows + resDoors) + ' м шва';
    rezMeters.appendChild(spanM);

    const rezLiters = document.querySelector('#rez-liters')

    modal.classList.add('open')

}

function closeModal(){
    modal.classList.remove('open')
}

let closeM = document.querySelector('.close')
closeM.addEventListener('click', closeModal)

let closestElem = closeM.closest('.modal')
closestElem.addEventListener('click', closeModal)





// function calc(){
//     const diameter = checkValue('diameter', 'Введите высоту бруса/бревна')/100
//     const levelNum = checkValue('level-num', 'Введите количество этажей')
//     const levelH = checkValue('level-h', 'Введите высоту этажа')
//     const levelP = checkValue('level-p', 'Введите периметр этажа')
//     const resLevels = Math.floor( levelH / diameter ) * levelP * levelNum
//     alert('Суммарная длина шва для этажей: ' + resLevels)

//     const frontonNum = checkValue('fronton-num', 'Введите количество фронтонов')
//     const frontonH = checkValue('fronton-h', 'Введите высоту фронтонов')
//     const frontonW = checkValue('fronton-w', 'Введите ширину фронтонов')
//     const resFrontons = Math.floor( frontonH / diameter ) * frontonW * frontonNum /2
//     alert('Суммарная длина шва для фронтонов: ' + resFrontons)

//     const windowNum = checkValue('window-num', 'Введите количество окон')
//     const windowH = checkValue('window-h', 'Введите высоту окна')/100
//     const windowW = checkValue('window-w', 'Введите ширину окна')/100
//     const resWindows = - Math.floor( windowH / diameter ) * windowW * windowNum
//     alert('Суммарная длина шва для окон: ' + resWindows)

//     const doorNum = checkValue('door-num', 'Введите количество окон')
//     const doorH = checkValue('window-h', 'Введите высоту окна')/100
//     const doorW = checkValue('window-w', 'Введите ширину окна')/100
//     const resDoors = - Math.floor( doorH / diameter ) * doorW * doorNum
//     alert('Суммарная длина шва для окон: ' + resDoors)
    
//     alert('Результат: ' + (resLevels + resFrontons + resWindows + resDoors) + ' м шва')

// }

