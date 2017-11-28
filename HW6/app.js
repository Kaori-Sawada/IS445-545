const output = document.getElementById("output")
const nameInput = document.getElementById("name")
const candidates = [
    {name:'Anderson.Paak', likes: 700},
    {name:'Bruno Mars', likes: 1000},
    {name:'Steve Lacy', likes: 400},
    {name:'Erica Badu', likes: 790},
    {name: 'Robert Glasper', likes: 800},
]
output.innerHTML = candidates.likes

showList()

function addCandidate () {
    
    candidates.push({ name: nameInput.value, likes: 0})
    showList()
    clearField()

}

function clearField () {
    nameInput.value = ""
}


function showList() {
    let canList = ""
    let index = 0
    candidates.forEach(c => {
        let line = `<li><span> ${c.name}</span> <span>${c.likes}</span>
            <button data-btn-type=like data-line-index=${index}>Like</button>
            <button data-btn-type=delete data-line-index=${index}>Delete</button></li>` 
        canList += line
        index++

    })
    output.innerHTML = canList
}


document.addEventListener('click', lineClick);
 
function lineClick (event){
    const element = event.target

    const btnType = element.getAttribute('data-btn-type')
    const lineIndex = element.getAttribute('data-line-index')
    const index = parseInt(lineIndex, 10)
    if (btnType === 'like') {
        const likes = candidates[index].likes
        candidates[index].likes = likes + 1
    } 

    if (btnType === 'delete') {
        candidates.splice(index, 1)
    } 

    showList()
};


/* function incrementLike () {
    i = candidates.likes
    i++
} */
