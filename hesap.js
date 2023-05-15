const hesapForm = document.querySelector('#hesap_form');
const sonucDiv = document.querySelector('#result');

hesapForm.addEventListener('submit',(event)=>
{
    event.preventDefault();
    const bolenInput =document.querySelector('#bolen');
    const bolunenInput =document.querySelector('#bolunen');
    const bolen = parseFloat(bolenInput.value);
    const bolunen = parseFloat(bolunenInput.value);

    fetch('/bol',
    {
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({bolen,bolunen})
    })
    .then((response) => response.json())
    .then((data) => 
    {
        if(data.error)
        {
            sonucDiv.innerText = `Error:${data.error}`;
        }
        else
        {
            sonucDiv.innerText = `Sonuc:${data.result}`;
        }
    })
    .catch((error) =>
        {
            sonucDiv.innerText = `Error:${error.message}`;
        });
})