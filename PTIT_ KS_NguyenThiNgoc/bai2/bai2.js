let projects=JSON.parse(localStorage.getItem("projects"))||[];
console.log(projects)
var add_btn=document.getElementById("add");
var indexUpdate=-1;
function display(){
    document.getElementById("tbody").innerHTML="";
    for(let btn of projects){
        let itemTr=`
        <tr>
            <td>${btn.id}</td>
            <td>${btn.projectName}</td>
            <td>${btn.imgUrl}</td>
            <td>${btn.link}</td>
            <td>${btn.tags.join('&nbsp &nbsp')}</td>
            <td>
                <button id="delete" onclick="deleteItem(${btn.id})">Delete</button>
                <button id="update" onclick="updateItem(${btn.id})">Update</button>
            </td>
        </tr>
        `
        document.getElementById("tbody").innerHTML+=itemTr;
    }

}
display();
function add(){
    let name=document.getElementById("name").value.trim();
    let img=document.getElementById("img").value.trim();
    let link=document.getElementById("link").value.trim();
    let tags=document.getElementById("tags").value.trim();
    if(add_btn.classList.contains("add")){
    let btn={
        id: projects[projects.length-1].id+1,
        imgUrl: img,
        projectName:name,
        link:link,
        tags:tags.split(','),
    }
    projects.push(btn);
    name=document.getElementById("name").value="";
    document.getElementById("img").value="";
    document.getElementById("link").value="";
    document.getElementById("tags").value="";
    localStorage.setItem("projects",JSON.stringify(projects));
    display();
    } else{
    projects[indexUpdate].projectName=name;
    projects[indexUpdate].imgUrl=img;
    projects[indexUpdate].link=link;
    projects[indexUpdate].tags=tags.split(',');
    localStorage.setItem("projects",JSON.stringify(projects));
    display();
    add_btn.classList.add("add");
    }
}
function deleteItem(id){
    let indexDel=projects.findIndex((item)=>{
        return item.id===+id;
    })
    projects.splice(indexDel,1);
    localStorage.setItem("projects",JSON.stringify(projects));
    display();
}
function updateItem(id) {
     indexUpdate=projects.findIndex((item)=>{
        return item.id===+id;
    });
    console.log(indexUpdate);
    console.log(projects[indexUpdate].name)
    document.getElementById("name").value=projects[indexUpdate].projectName;
    document.getElementById("img").value=projects[indexUpdate].imgUrl;
    document.getElementById("link").value=projects[indexUpdate].link;
    document.getElementById("tags").value=projects[indexUpdate].tags;
    add_btn.classList.remove("add");
}
