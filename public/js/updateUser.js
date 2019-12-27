updateUser=(e)=>{
    e.preventDefault();
    const link=window.location.toString();
    const id=link.substring(link.lastIndexOf('/')+1);
    const name=document.getElementById('name').value;
    const highschool=document.getElementById('highschool').value;
    const seniorsecondary=document.getElementById('seniorsecondary').value;
    const college=document.getElementById('college').value;
    const branch=document.getElementById('branch').value;
    const data={id:id,name:name,highschool:highschool,seniorsecondary:seniorsecondary,college:college,branch:branch};
    const paramters=JSON.stringify(data);
    let url='/user/updateuser';
    let xhr=new XMLHttpRequest();
    console.log(paramters);
    xhr.open('PUT',url,true);
    xhr.setRequestHeader('Content-type','application/json');
    xhr.onload=function(){
        if(xhr.readyState==4||xhr.status==200)
        {
            document.getElementById('form-message').innerText='Profile updated';
            window.location.reload();
        }
        else
        {
            document.getElementById('form-message').innerText='error occured';
            window.location.reload();
        }
    }
    xhr.send(paramters);
}

document.getElementById('info-form').addEventListener('submit',updateUser);