let bArea = document.getElementById('buttonsArea');
for(let i of bArea.children)
{
    i.innerHTML = i.id;
}
function ans()
{
    document.getElementById('ans').innerHTML= eval(document.getElementById('exp').value)
}
let textArea = document.getElementById('resultArea');
for(let i of bArea.children)
{
    switch(i.id)
    {
        case '=':
            i.addEventListener('click',()=>
            {
                textArea.innerHTML=eval(textArea.innerHTML);
            })
            break;
        case 'DEL':
            i.addEventListener('click',()=>
            {
                textArea.innerHTML=textArea.innerHTML.substring(0,textArea.innerHTML.length-1);
            })
            break;
        case "AC":
            i.addEventListener('click',()=>
            {
                textArea.innerHTML = "";
            })
            break;
        default:
            i.addEventListener('click',()=>
            {
                document.getElementById('resultArea').innerHTML+=i.id;
            })
            break;
    }
    
    
}