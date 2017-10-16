const InputNum = prompt('Please enter a number between 2 and 10: ', 0)

alert('Your input is: ' + InputNum)
const output = document.getElementById("output")


const output2 = document.getElementById("output2")
if (InputNum <= 1 || InputNum >= 11) {
    alert('Please enter an invalid number.')
    output.innerHTML = 'Your input number is ' + InputNum + '. The valid input number is between 2 and 10. Please reload this page and try again.'
    output.style.color = "red"
}
else {
    const count = Math.ceil(Math.log2(InputNum / 0.000001))
    output2.innerHTML = 'The number of times to divide by your input number ' + InputNum + ' by 2 to get a value less than one millionth is ' + count + '.'

}

document.write("<table>");
let i, j;
for (i = InputNum; i >= 1; i--) {
    for (j = 1; j <= i; j++) {
        document.write('*')
    }
    document.write('<br/>')
}
document.write("</table>");
/*const output3 = document.getElementById("output3")
output3.style.border = "solid 1px blue"*/
