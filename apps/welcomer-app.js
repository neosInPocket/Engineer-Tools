const svgIconGraphGenerator = document.querySelector('.icon-graph-generator')
const svgPath = Array.from(document.querySelectorAll('.path'))
const sinusoida = document.querySelector('.sinusoida')
svgPath.forEach(element => element.addEventListener('mouseenter', enter))

function findAllSiblings(element) {
    let sibling = element.firstElementChild
    const siblings = []
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== element) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings
}

console.log(window.innerHeight)


function enter() {
    let currentElement = this
    currentElement.parentNode.style.transform = 'scale(1.5)'
    currentElement.style.fill = 'var(--clr-primary-path-after)'
    svgPath.forEach(element => element.removeEventListener('mouseenter', enter))
    svgPath.forEach(element => element.addEventListener('mouseleave', leave))

}

function leave() {
    let currentElement = this
    currentElement.parentNode.style.transform = 'scale(1)'
    currentElement.style.fill = 'var(--clr-primary-path-before)'
    svgPath.forEach(element => element.removeEventListener('mouseleave', leave))
    svgPath.forEach(element => element.addEventListener('mouseenter', enter))
}


