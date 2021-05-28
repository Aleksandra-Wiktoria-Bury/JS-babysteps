function greet()
{
    let name = document.querySelector("#name").value;
    alert('hello, ' + name);
}

document.querySelector('#form2').addEventListener('submit',greet2);

function greet2 ()
{
    let name = document.querySelector('#name2').value;
    alert("hello again, " + name)
}