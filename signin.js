const myname=document.querySelector('.Username');
const mymail=document.querySelector('.Email');
const mylocation=document.querySelector('.location');
const myinterests=document.querySelector('.interests');
const button=document.querySelector('button');
button.addEventListener('click',(e)=>{
    console.log(`button clicked`)
    // e.preventDefault();
    const obj={
        name:myname.value,
        email:mymail.value,
        location:mylocation.value,
        interests:myinterests.value

    };
    fetch("http://localhost:6000/server",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(obj)
     });

})