function counterChar(){
    let data=document.getElementById('para').value;
    if (data){
        let now= data.match(/\w+/g).length;
        document.getElementById('character').innerHTML='Total no. of characters : '+data.length+"<br> Total no. of words : "+now;
    }
    else{
        alert("Please enter in input field");
    }
}