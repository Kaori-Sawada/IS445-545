let options = prompt('Choose an option: \n1: Show messages\n2: Add a message\n3: Delete a message\n0: Quite', 0)
let messages = ['message01', 'message02', 'message03', 'message04', 'message05'] ;
const output = document.getElementById("output")
const output2 = document.getElementById("output2")
const output3 = document.getElementById("output3")
const output4 = document.getElementById("output4")

// input 1 
if (options == 1) {
    let listTop = ''
    for (let i = 0; i < messages.length; i++) {
        listTop += messages[i] + '<br>'
     document.getElementById('output').innerHTML = listTop
    }
    output.innerHTML = 'The current messages are: ' + '<br> ' + listTop
    //return messagess;
} else if (options == 2) {     // input 2
    let newMsg = prompt('Enter a new message ', 0)
        messages[messages.length]= newMsg
        output4.innerHTML = 'The current messages are: ' + '<br>'+ messages.join('<br>')
} else if (options == 3) {         // input 3
    let delMsg = prompt('Enter a message index (between 1 and 5 )', 0)
        if (delMsg >= 1 || delMsg <= 5 ){
        messages.splice(delMsg, 1)
        output4.innerHTML = 'The current messages are: ' + '<br>' + messages.join('<br>')
        } else { // THIS DOES NOT WORK
            alert('Please enter a valid number')
        }
} else if (options == 0){
output4.innerHTML = 'Good Bye'
} else {
    output4.innerHTML = 'Please refresh and select a correct command'
    }



