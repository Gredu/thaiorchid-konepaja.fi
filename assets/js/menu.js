
let menuList = document.querySelectorAll('#menu-list ul li a')
let menuContent = document.querySelectorAll('#menu-content img')

menuList.forEach(function(link, id) {
  link.id = (id + 1)
  link.onclick = function(eventInformation) {
    let origin = eventInformation.target
    displayPage(origin.id)
    eventInformation.preventDefault()
  }

})

menuContent.forEach(function(img, id) {
  img.id = (id + 1)
})

menuContent[0].className = ''

function displayPage(pageId) {
  menuContent.forEach(function(img) {
    if (pageId == img.id) {
      img.className = ''
    } else {
      img.className = 'hide'
    }
  })
}

const menuFi = ['Alkupala', 'Salaatti', 'Curry', 'Wok-paistettu', 'Wok nuudeli', 'Nuudelikeitto', 'Ankka', 'Meren elävät', 'Kasvisruoka', 'Thai katuruoka']
const menuEn = ['foo1', 'foo2', 'foo3', 'foo4', 'foo5', 'foo6', 'foo7', 'foo8', 'foo9', 'foo10']

const changeToEn = document.getElementById('change-to-en')

changeToEn.onclick = function(eventInformation) {
  for (let i = 0; i < menuList.length; i++) {
    menuList[i].innerHTML = menuEn[i]
  }
  eventInformation.preventDefault()
}
