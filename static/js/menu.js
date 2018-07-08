// let menuList2fi = document.getElementById('menu-fi-2')

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
