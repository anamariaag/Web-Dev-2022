"use strict";

let usuarios = [];

function cbErrorData(){
    console.log("Ocurrió un error.");
};
 
function cbOKData(datos){
    datos.forEach(element => usuarios.push(element));
    userListToHTLM(usuarios);
};

function cbCorrectSave() {
    console.log("Guardado.")
}

function cbErrorSave() {
    console.log("Ocurrió un error en la carga de datos.");
}
    

function initData() {
    loadJSON(cbErrorData, cbOKData);
};
 
function saveUsers(){
    guardarEnJSON(cbCorrectSave, cbErrorData);
};

function userListToHTLM(listUser){
    info.innerHTML = listUser.map(user => {
        return userToHTML(user);
    }).join("");
};

function userToHTML(user) {
        return (`
        <div class="media border rounded-6">
            <div class="media-left align-self-center">
                <img class="mr-6 rounded-circle user-img" src=${user.image}>
            </div>
            
            <div class="media-body">
                <h5 class="mt-0" id="Name">${user.nombre} ${user.apellidos}</h5>
                <p>
                    Fecha de nacimiento: ${user.fecha}
                </p>
                <p>
                    Uid: ${user.uid}
                </p>
                <p>
                    Equipo: ${user.team}
                </p>
                <p>
                    Sexo: ${user.sexo}
                </p>
                <p>
                    Bio: ${user.bio}
                </p>
            </div>
    
            <div class="media-right align-self-center">
                <button type="button" class="btn btn-primary">
                    <i class="fas fa-search" aria-hidden="true"></i>
                </button>
                <br><br>
                <button type="button" class="btn btn-primary">
                    <i class="fas fa-edit" aria-hidden="true"></i>
                </button>
                <br><br>
                <button type="button" class="btn btn-primary"data-toggle="modal" data-target="#deleteUserTJ">
                    <i class="fas fa-trash-alt" aria-hidden="true"></i>
                </button>
    
            </div>
        </div>`
        )
};

function generateId(){
    if(usuarios.length == 0){
        return 1;
    }
    for(let i = 1; i <= usuarios.length; i++){
        if(usuarios[i-1].uid != i){
            return i;
        }
    }
    return usuarios.length+1;
};

function addUser(nombre, apellidos, fecha, sexo, team, bio){
    if(usuarios.find(usuario => (usuario.nombre.toUpperCase() === nombre.toUpperCase() &&
                    usuario.apellidos.toUpperCase() === apellidos.toUpperCase() ||
                    usuario.team.toUpperCase() ===team.toUpperCase()))){
                    console.error(`Usuario Repetido ${nombre} ${apellidos} ${email}`);
                    return;
    }
    let uid = generateId();
    let image = sexo.toUpperCase() === "H" ? `imagenes/${uid}H.jpg` : `imagenes/${uid}M.jpg`;

    usuarios.push({bio,uid, sexo, team, fecha, image, nombre, apellidos})
    userListToHTLM(usuarios);
    saveUsers();
};

//addUser("Logan", "Tom", "1981", "M", "USA", "Logan Maile Lei Tom is an American indoor volleyball, beach volleyball player, and current head coach of the Israel women's national volleyball team. She is a four-time Olympian at the outside hitter position. At age 19, Logan became the youngest woman ever to be selected for an American Olympic volleyball team when she competed at the 2000 Olympic Games in Sydney.")
//addUser("Ivan", "Zaytzev","1988", "H", "Lube, Italy", "Nicknamed lo Zar, is an Italian volleyball player of Russian origin, the captain of Italy men's national volleyball team, a bronze medalist of the Olympic Games London 2012, silver medalist of the European Championship, bronze medalist of the World League, Italian Champion and silver medalist of the Olympic Games Rio 2016.")
//addUser("Matt", "Anderson","1987", "H", "Zenit, USA", "American professional volleyball player. He is part of the US national team, a bronze medalist at the Olympic Games Rio 2016 and the 2018 World Championship, 2014 World League and 2015 World Cup winner. He is a multiple winner of the CEV Champions League with the Russian club Zenit Kazan. At the professional club level, he plays for Zenit Saint Petersburg.")
//addUser("Gabi", "Braga Guimaraes", "1994", "M", "VakifBank, Brasil","She is a Brazilian professional volleyball player. Gabriela is a member of the Brazil women's national volleyball team. Guimarães played for the Brazilian national team, winning bronze at the 2014 World Championship after defeating Italy 3–2 in the third-place match. During the 2015 FIVB Club World Championship, Guimarães played with Brazilian club Rexona Ades Rio and her team lost the bronze medal match to Switzerland's Voléro Zürich.7 She helped her national team win the gold medal at the 2015 South American Championship, where she was awarded as the most valuable and best player. Gabi competed at the Tokyo 2020 Olympic Games, winning the silver medal.");
//addUser("Samantha","Bricio","1994", "M", "Dynamo Kazan, Mexico","Mexican volleyball professional player, the youngest player to play for the Mexico national team in its history. Bricio played in the 2009 FIVB Girls Youth World Championship (finishing ninth) and again in 2011, finishing twelfth. She received the 2010 Central American and Caribbean Games Best Scorer and Best Server awards and the Best Scorer award in the 2011 Youth Pan-American Cup, 2011 Junior Pan-American Cup and the 2013 Pan-American Cup.");
//addUser("Valeria", "Ramirez", "2001", "M", "Mexico", "Mexican volleyball player, from Guadalajara, Jalisco. Likes to play volleyball in free time and enjoys watching games.")

function updateUser(id, objNewData){
    let index = usuarios.findIndex(user => user.uid == id);
    objNewData.uid = id; 
    usuarios[index] = Object.assign(usuarios[index], objNewData);
    userListToHTLM(usuarios);
    saveUsers();
};


//updateUser(1, {nombre: "Torey James", team: "Asseco Resovia, USA" })

function deleteUser(id){
    let index = usuarios.findIndex(user => user.uid == id);
    if(index != -1){
        usuarios.splice(index,1);
    }
    else{
        console.error(`Usuario con id - ${id} no existe`);
    }
    saveUsers();
};


function sortUsers(key, asc){
    switch(key){
        case "bio":
            if(asc){
                //ASC
                usuarios.sort((a,b) =>{
                    return a.bio.length - b.bio.length;
                });
            }else{
                //DESC
                usuarios.sort((a,b) =>{
                    return b.bio.length - a.bio.length;
                });
            }
            userListToHTLM(usuarios);
            break;
        case "uid":
            if(asc){
                //ASC
                usuarios.sort((a,b) =>{
                    return a.uid - b.uid;
                });
            }else{
                //DESC
                usuarios.sort((a,b) =>{
                    return b.uid - a.uid;
                });
            }
            userListToHTLM(usuarios);
            break;
        case "sexo":
            if(asc){
                //ASC
                usuarios.sort((a,b) =>{
                    let aSex = a.sexo.toLowerCase();
                    let bSex = b.sexo.toLowerCase();
                    if(aSex < bSex){
                        return -1;
                    }
                    if(aSex > bSex){
                        return 1;
                    }
                    return 0;
                });
            }else{
                //DESC
                usuarios.sort((a,b) =>{
                    let aSex = a.sexo.toLowerCase();
                    let bSex = b.sexo.toLowerCase();
                    if(aSex > bSex){
                        return -1;
                    }
                    if(aSex < bSex){
                        return 1;
                    }
                    return 0;
                });
            }
            userListToHTLM(usuarios);
            break;
        case "team":
            if(asc){
                //ASC
                usuarios.sort((a, b) =>{
                    let aTeam = a.team.toLowerCase();
                    let bTeam = b.team.toLowerCase();
                    if(aTeam < bTeam){
                        return -1;
                    }
                    if(aTeam > bTeam){
                        return 1;
                    }
                    return 0;
                });
            }else{
                //DESC
                usuarios.sort((a, b) =>{
                    let aTeam = a.team.toLowerCase();
                    let bTeam = b.team.toLowerCase();
                    if(aTeam > bTeam){
                        return -1;
                    }
                    if(aTeam < bTeam){
                        return 1;
                    }
                    return 0;
                });
            }
            userListToHTLM(usuarios);
            break;
        case "fecha":
            if(asc){
                //ASC
                usuarios.sort((a,b) => {
                    let aDate = parseFloat(a.fecha);
                    let bDate = parseFloat(b.fecha);
                    return aDate - bDate;
                });
            }else{
                //DESC
                usuarios.sort((a,b) => {
                    let aDate = parseFloat(a.fecha);
                    let bDate = parseFloat(b.fecha);
                    return bDate - aDate;
                });
            }
            userListToHTLM(usuarios);
            break;
        case "image":
            if(asc){
                //ASC
                usuarios.sort((a,b) =>{
                    let aImg = a.image.toLowerCase();
                    let bImg = b.image.toLowerCase();
                    if(aImg < bImg){
                        return -1;
                    }
                    if(aImg > bImg){
                        return 1;
                    }
                    return 0;
                });
            }else{
                //DESC
                usuarios.sort((a,b) =>{
                    let aImg = a.image.toLowerCase();
                    let bImg = b.image.toLowerCase();
                    if(aImg > bImg){
                        return -1;
                    }
                    if(aImg < bImg){
                        return 1;
                    }
                    return 0;
                });
            }
            userListToHTLM(usuarios);
            break;
        case "nombre":
            if(asc){
                //ASC
                usuarios.sort((a,b) =>{
                    let aCompleteName = `${a.nombre} ${a.apellidos}`;
                    let bCompleteName = `${b.nombre} ${b.apellidos}`;
                    if(aCompleteName < bCompleteName){
                        return -1;
                    }
                    if(aCompleteName > bCompleteName){
                        return 1;
                    }
                    return 0;
                });
            }else{
                //DESC
                usuarios.sort((a,b) =>{
                let aCompleteName = `${a.nombre} ${a.apellidos}`;
                let bCompleteName = `${b.nombre} ${b.apellidos}`;
                if(aCompleteName > bCompleteName){
                    return -1;
                }
                if(aCompleteName < bCompleteName){
                    return 1;
                }
                return 0;
                });
            }
            userListToHTLM(usuarios);
            break;
    } 
};

function findUsers(nombre, team, sexo){
    let result = usuarios;

    if (typeof nombre !== 'undefined') {
        result = result.filter(user => {
            let nombreCompleto = `${user.nombre.toLowerCase()} ${user.apellidos.toLowerCase()}`;
            return nombreCompleto.includes(nombre.toLowerCase());
        });
    }

    if (typeof team !== 'undefined') {
        result = result.filter(user => {
            return user.team.toLowerCase().includes(team.toLowerCase());
        });
    }

    if (typeof sexo !== 'undefined') {
        result = result.filter(user => {
            return user.sexo.toLowerCase().includes(sexo.toLowerCase());
        });
    }
    userListToHTLM(result);
}






