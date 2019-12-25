deleteUser=(id)=>{
    const url='/user/deleteuser/'+id;
    const xhr=new XMLHttpRequest();
    xhr.open('DELETE',url,true);
    xhr.onload=function(){
        if(xhr.readyState==4||xhr.status==200)
        {
            alert('user deleted')
            window.location.reload();
        }
        else 
        {
            alert('error occured');
            window.location.reload();
        }
    }
    xhr.send(null);
}