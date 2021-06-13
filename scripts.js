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