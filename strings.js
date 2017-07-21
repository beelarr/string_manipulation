/**
 * Created by beelarr on 7/21/17.
 */

let input = document.querySelector('input');
let button = document.querySelector('button');
let output = document.querySelector('output');
let output1 = document.querySelector('output1');
let output2 = document.querySelector('output2');



function reversal() {
    output1.innerHTML = input.value.split('').reverse().join('')
    }

function alphabits() {
    output2.innerHTML = input.value.split('').sort().join('')
    }

function palindrome(str) {
    if (input.value === input.value.split('').reverse().join('')){
        output.innerHTML = 'Your string is a palindrome'
        }
    }

input.addEventListener('keypress', (e) => {



    let key = e.which || e.keyCode
    if (key === 13) {
        testString = input.value
        reversal(testString);
        alphabits(testString);
        palindrome(testString);

    }
})

input.addEventListener('keypress', (e) => {
    let key = e.which || e.keyCode
    if (key === 13) {
        testString = input.value
        reversal(testString);
        alphabits(testString);
        palindrome(testString);
    }
})



