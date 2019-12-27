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
         document.getElementById('skill-name').value='';
          let list=document.getElementById('list');
          let listelement=document.createElement('li');
          let skill=document.createTextNode(data.skill);
          let button=document.createElement('button');
          button.textContent='delete';
          button.onclick=deleteSkill(skill.id);
          listelement.appendChild(skill);
          listelement.appendChild(button);
          list.appendChild(listelement);
          
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

