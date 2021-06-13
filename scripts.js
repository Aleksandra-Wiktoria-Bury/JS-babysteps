/*function greet()
{
    let name = document.querySelector("#name").value;
    alert('hello, ' + name);
}

document.addEventListener('DOMContentLoaded', function()
{ 
    document.querySelector('#form2').addEventListener('submit', function()
    {
        let name = document.querySelector('#name2').value;
        alert("hello again, " + name)
    });
}); */

/*document.addEventListener('DOMContentLoaded', function()
{ 
    document.querySelector('#form3').addEventListener('submit', function patADog ()
    {
        let dogCheck = (document.querySelector('#dogCheck').value).toLowerCase();
            
        dogCheck.includes('woof') ? alert('pat, pat') : alert('find me a dog to pat!'); 
    }
    )});
*/

    function patADog ()
    {
        let dogCheck = (document.querySelector('#dogCheck').value).toLowerCase();
            
        dogCheck.includes('woof') ? alert('pat, pat') : alert('Find me a dog to pat!'); 
    }
});

//* ternary operator chained - looking for matching pairs within 3 variables

let answer = 
    (mangoes == oranges) && (apples == mangoes) ? "They are all equal"
    : (mangoes == oranges)  ? "Only mangoes are equal to oranges"
    : (apples == mangoes) ? "Only apples are equal to mangoes"
    : (apples == oranges)  ? "Only apples are equal to oranges": "No pair is equal"
console.log(`Check for equal numbers among the three given variables:\n${answer}.`);

//* removing empty spaces

for (let i = 0; string.includes('  '); i++) {
string = string.replace('  ',' ').trim();
}
console.log(string);
