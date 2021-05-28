function greet()
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
});
