const fs = require( "fs") ;
const path = require( "path") ;
function getAllusers(){
	const usersFilePath = path.join(__dirname, '../data/usuarios.json');
    return JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
}
function writeusers(userToSave){
	const usersToStringify = JSON.stringify(userToSave, null, ' ');
	return fs.writeFileSync('./data/usuarios.json', usersToStringify);
	
}

function generateNewId(){
	const users = getAllusers();
	return users.pop().id + 1;
}


const controller={
    login: (req, res) => {
        res.render('iniciarSesion')
    },
register: (req, res) => {
        res.render('registrarse')
    },
  crear: (req,res)=>{
    const users = getAllusers()
    const intereses=[req.body.proramacion, req.body.cocina, req.body.ciencia, req.body.kids,req.body.otros]  
    
    const newUser ={
    id: generateNewId(),
    nombre: req.body.full_name,
    nacimiento: req.body.birth_date,
    direccion : req.body.adress,
    email: req.body.email,
    username: req.body.username,
    foto_de_perfil:req.files[0].filename ,
    contraseña: req.body.password_1,
    intereses: intereses
} 
const usersToSave = [...users, newUser];
writeusers(usersToSave);

res.redirect('/');
}}
module.exports = controller;