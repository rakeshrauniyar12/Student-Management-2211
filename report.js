document.querySelector("form").addEventListener("submit",myFunction);
function myFunction(event){
    event.preventDefault();
    let avatar=document.querySelector("#image").value
    let name=document.querySelector("#name").value
    let batch=document.querySelector("#batch").value
    let dsa=document.querySelector("#dsa").value
    let skillathon=document.querySelector("#cs").value
    let coding=document.querySelector("#coding").value
    let tr=document.createElement("tr")
    let td1=document.createElement("td")
    let im=document.createElement("img");
    im.setAttribute("src",avatar);
     td1.append(im);
    let td2=document.createElement("td")
    td2.innerText=name;
    let td3=document.createElement("td")
    td3.innerText=batch;
    let td4=document.createElement("td")
    td4.innerText=dsa;
    let td5=document.createElement("td")
    td5.innerText=skillathon;
    let td6=document.createElement("td")
    td6.innerText=coding;
    let td7=document.createElement("td")
    let obtainMarks= Number(dsa)+Number(skillathon)+Number(coding);
    let percentage=(obtainMarks*100)/30;
    td7.innerText=percentage;
     let td8=document.createElement("td")
     if(percentage>50){
         td8.innerText="Regular";
         td8.style.backgroundColor="green";
     } else {
         td8.innerText="Async"
         td8.style.backgroundColor="red";
     }
    let td9=document.createElement("td")
    td9.innerText="DELETE";
    td9.style.backgroundColor="red";
    td9.style.cursor="pointer";
    td9.addEventListener("click",del);
    function del(event){
        event.target.parentNode.remove();
    }
    tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9);
    document.querySelector("tbody").append(tr);
    console.log(tr);

}