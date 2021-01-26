const panels = document.querySelectorAll('.panel')

//This lets each of the panels without an active class become
//active once the user clicks on them.
panels. forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses ()
        panel.classList.add('active')
    })
})
//Removes the active class on all other panels.
function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}
