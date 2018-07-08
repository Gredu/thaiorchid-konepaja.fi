pdfjsLib.getDocument('../thaimenu-fi.pdf').then(function(pdf) {

  let menuList = document.querySelectorAll('#menu-side ul li a')

  menuList.forEach(function(link, pageNumber) {

    link.setAttribute('page', (pageNumber + 1) + 1)
    let pageN = link.getAttribute('page')
    link.onclick = function(pageN) {
      console.log(pageN)
      pdf.getPage(pageN).then(function(page) {

        let scale = 1.3
        let viewport = page.getViewport(scale)

        let canvas = document.getElementById('menu-canvas')
        let context = canvas.getContext('2d')
        canvas.height = viewport.height
        canvas.width = viewport.width

        let renderContext = {
          canvasContext: context,
          viewport: viewport
        }

        page.render(renderContext)

      })

    }

  })
})


// pdfjsLib.getDocument('../thaimenu-fi.pdf').then(function(pdf) {
//
//   let menuContent = document.getElementById('menu-content')
//
//   for (let i = 2, len = pdf.pdfInfo.numPages + 1; i < len - 1; i++) {
//
//     pdf.getPage(i).then(function(page) {
//
//       let newCanvas = document.createElement('canvas')
//       newCanvas.classList.add('hide')
//
//       menuContent.appendChild(newCanvas)
//
//       let scale = 1.3
//       let viewport = page.getViewport(scale)
//
//       // let canvas = document.getElementById('menu-canvas')
//       let context = newCanvas.getContext('2d')
//       newCanvas.height = viewport.height
//       newCanvas.width = viewport.width
//
//       let renderContext = {
//         canvasContext: context,
//         viewport: viewport
//       }
//
//       page.render(renderContext)
//
//     })
//   }
// })

  // pdf.getPage(1).then(function(page) {
  //   let scale = 1.3
  //   let viewport = page.getViewport(scale)
  //
  //   let canvas = document.getElementById('menu-canvas')
  //   let context = canvas.getContext('2d')
  //   canvas.height = viewport.height
  //   canvas.width = viewport.width
  //
  //   let renderContext = {
  //     canvasContext: context,
  //     viewport: viewport
  //   }
  //
  //   page.render(renderContext)
  //
  // })
