const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
 
const UserSchema = new mongoose.Schema({
name: String,
email: String,
password: String,
role: {
type: String,
enum: ['admin','user','publisher']

}

})



UserSchema.pre('save', async function(){

//generar una sal 

const salt = await bcryptjs.genSalt(10)

//encriptar la CONTRASEÑA

//utilizando la sal

this.password = await bcryptjs.hash(this.password, salt)


})


UserSchema.methods.compararPassword = async function(password) {
    return await bcryptjs.compare(password, this.password)
}

module.exports = mongoose.model('User',UserSchema);