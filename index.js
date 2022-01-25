
let header = document.querySelector('#page-header')
header.style.textAlign = "right"
header.style.color = "purple"

//Images
let dogImages = document.querySelectorAll('.dog-image')
for (let i = 0; i < dogImages.length; i++) {
    dogImages[i].style.borderRadius = '50px'
    dogImages[i].style.borderColor = "green"
    dogImages[i].style.borderLeftWidth = "10px"
}

// Next 
let dogName = document.querySelectorAll('.dog-name')
for (let i = 0; i < dogName.length; i++) {
    dogName[i].style.textAlign = "left"
}

//let dogName = document.querySelectorAll('.dog-name')
for (let i = 0; i < dogName.length; i++) {
    dogName[i].style.color = "green"
}
//Footer 
let footer = document.querySelector('.footer')
footer.style.backgroundColor = 'red'
