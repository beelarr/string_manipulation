/**
 * Created by beelarr on 7/21/17.
 */
let input = document.querySelector('input');
let button = document.querySelector('button');
let output = document.querySelector('output');
let output1 = document.querySelector('output1');
let output2 = document.querySelector('output2');



button.addEventListener('click', ()=>{
    reversal()
    alphabits()
    palindrome()
    testString = input.value
})


function reversal(str) {
    input.addEventListener('keyup', ()=>{
        output1.innerHTML = input.value.split(str).reverse(str).join(str)
        console.log(output1.innerHTML)
    })

}

function alphabits(str) {
    input.addEventListener('keyup', () => {
        output2.innerHTML = input.value.split(str).sort(str).join(str)
        console.log(output2.innerHTML)

    })
}

function palindrome(str) {
    input.addEventListener('keyup', () => {
        if (str === str.split(str).reverse(str).join(str)){
        output.innerHTML = 'Your string is a palindrome'
        console.log(output.innerHTML)
    }
    })

}

var testString = "";

reversal(testString);
alphabits(testString);
palindrome(testString);