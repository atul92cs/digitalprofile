

getUser=()=>{
    const link=window.location.toString();
    const id =link.substring(link.lastIndexOf('/')+1);
    const url='/user/'+id;
    const xhr=new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.onload=()=>{
        if(xhr.readStatus==4||xhr.status==200)
        {
           const result=JSON.parse(xhr.responseText);
           document.getElementById('id').value=result.user.id;
           document.getElementById('name').value=result.user.Name;
           document.getElementById('highschool').value=result.user.Highschool;
           document.getElementById('seniorsecondary').value=result.user.Seniorsecondary;
           document.getElementById('college').value=result.user.College;
           document.getElementById('branch').value=result.user.Branch;
           const skills=result.skills;
          
           if(skills.length<=0)
           {
             document.getElementById('skill-message').innerText='skill not added please add skill';
           }
           else
           {
             skills.map(skill=>{
               console.log(skill);
             })
           }
          }
        else 
        {
         document.getElementById('message').innerHTML=xhr.responseText;
        }
    }
    xhr.send();
}
getUser();