deleteSkill=(id)=>{  
    const url='/skill/'+id;
    const xhr=new XMLHttpRequest();
    xhr.open('DELETE',url,true);
    xhr.onload=function(){
        console.log(xhr.status);
        if(xhr.readyState===4||xhr.status===200)
        {
           document.getElementById('skill-message').innerText='skill deleted';
           
        }
        else 
        {
            document.getElementById('skill-message').innerText='error occured';
           
        }
        window.location.reload();
    }
    xhr.send(null);
  }