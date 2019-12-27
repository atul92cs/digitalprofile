addSkill=e=>{
    e.preventDefault();
    const skillname=document.getElementById('skill-name').value;
    const link=window.location.toString();
    const id =link.substring(link.lastIndexOf('/')+1);
    let xhr=new XMLHttpRequest();
    let data={id:id,skill:skillname};    
    let parameters=JSON.stringify(data);
    let url='/skill/add';
    xhr.open('POST',url,true);
    xhr.setRequestHeader('Content-type','application/json');
    xhr.onload=()=>{
      if(xhr.readyState==4||xhr.status==200)
      {
        document.getElementById('skill-message').innerText='skill added';
        document.getElementById('skill-name').value='';
          window.location.reload();
      }
      else
      {
          document.getElementById('skill-message').innerText='Error occured';
          document.getElementById('skill-name').value='';
      }
    }
    xhr.send(parameters);

}
document.getElementById('skill-form').addEventListener('submit',addSkill);

