// const card = document.createElement("div");
// card.style.border = "3px solid black"
// card.style.height="200px";
// card.style.width="300px";
// card.style.alignItems="center";
// card.style.display = "flex";
// card.style.flexDirection = "column";
// card.style.alignItems = "center";

// const name = document.createElement("h3");
// name.textContent = "Arun Kumar Ghorse";

// const role = document.createElement("h4");
// role.textContent="React";

// const status = document.createElement("p")
// status.textContent="Active";
// card.append(name,role,status);
// const useres = ["Arun","Varun","Tarun"];
const useres = {
    user1: {
        name: "arun",
        role: "frontend",
        status: "Active"
    },
    user2: {
        name: "varun",
        role: ".net",
        status: "Active"
    },
    user3: {
        name: "tarun",
        role: "backend",
        status: "Deactive"
    },
}

for (let key in useres) {
    const user = useres[key];

    const card = document.createElement("div");
    card.style.border = "3px solid black"
    card.style.height = "200px";
    card.style.width = "300px";
    card.style.alignItems = "center";
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.alignItems = "center";

    const name = document.createElement("p");
    name.textContent = user.name;
    const role = document.createElement("p");
    role.textContent = user.role;
    const status = document.createElement("p");
    status.textContent = user.status;
    
    const button = document.createElement("button");
    button.textContent="Change Status";

    button.addEventListener(("click"),()=>{
        if(user.status==="Active"){
            user.status="Deactive";
            status.textContent="Deactive";
        }else if(user.status==="Deactive"){
            user.status="Active";
            status.textContent="Active";
        }
   })    

    card.append(name, role, status,button);
    const root = document.getElementById("root");
    root.style.display = "flex";
    root.style.gap = "20px";
    root.style.flexWrap = "wrap";
    root.append(card);
}


