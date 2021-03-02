const fs = require('fs');
const path = require('path');



module.exports= function ReadJson(){
    const usersFilePath = path.join(__dirname, '../data/usuarios.json' );
	return JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
}