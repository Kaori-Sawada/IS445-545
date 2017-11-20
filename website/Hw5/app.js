let options = prompt('Choose an option: \n1: Show messages\n2: Add a message\n3: Delete a message\n0: Quite', 0)
let messages = ['message01', 'message02', 'message03', 'message04', 'message05'] ;
const output = document.getElementById("output")
let output2 = document.getElementById("output2")
const output4 = document.getElementById("output4")


let number = 1

// input 1 
if (options == 1) {
    let listTop = ''
    for (let i = 0; i < messages.length; i++) {
        listTop += messages[i] + '<br>'
     document.getElementById('output').innerHTML = listTop
    }
    output.innerHTML = 'The current messages are: ' + '<br> ' + listTop
    //return messagess;
} 

else if (options == 2) {     // input 2
    let newMsg1 = prompt('Enter a new message ', 0)
        messages[messages.length]= newMsg1
        //let newMsg2 = document.createTextNode(newMsg1)  // added msg
        //Linum.appendChild(newMsg2) // add added msg
       // document.getElementById('OLlist').appendChild(Linum) //display the msg in html
        output4.innerHTML = 'The current messages are: ' + '<br>'+ messages.join('<br>')
}
/* else if (options == 2) {     // input 2
    let newMsg = prompt('Enter a new message ', 0)
        messages[messages.length]
        
      //先生  
      let output2 = ""
        messages.forEach( messages => {
            output += number + ":" + messages + "<br>"
            number ++
        })
        output.innerHTML = 'The current messages are: ' + '<br>'+ messages
} */

else if (options == 3) {         // input 3
    let newMsg1 = prompt('Enter a message index (between 1 and 5 )', 0)
        if (newMsg1 >= 1 || newMsg1 <= 5 ){
        messages.splice(newMsg1, 1)
        output4.innerHTML = 'The current messages are: ' + '<br>' + messages.join('<br>')
        } else { // THIS DOES NOT WORK
            alert('Please enter a valid number')
        }
} 

else if (options == 0){
output4.innerHTML = 'Good Bye'
} else {
    output4.innerHTML = 'Please refresh and select a correct command'
    }

/// in class demo
/*let children = document.body.childNodes[2]
for (const node of children){}

function t() { console.log("something") ; return 3;}
undefined // declare function
t()  // call function
VM348:1 something
3
*/

//DOM
//let OLlist = document.createElement('ol') // create numbered list
//OLlist.setAttribute('id', 'numList')
//document.body.appendChild(OLlist)
//let Linum = document.createElement('li') //add numbered list
//let newMsg2 = document.createTextNode(newMsg1)  // added msg
//Linum.appendChild(newMsg2) // add added msg
//document.getElementById('OLlist').appendChild(Linum) //display the msg in html