const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://foodofrenzy:aran1521@cluster0.qeidlvm.mongodb.net/?retryWrites=true&w=majority';
//const mongoURI2 = 'mongodb+srv://foodofrenzy:aran1521@cluster0.qeidlvm.mongodb.net/?retryWrites=true&w=majority'; 
//const mongoURI3 = 'mongodb://foodofrenzy:aran1521@ac-lmffe97-shard-00-00.qeidlvm.mongodb.net:27017,ac-lmffe97-shard-00-01.qeidlvm.mongodb.net:27017,ac-lmffe97-shard-00-02.qeidlvm.mongodb.net:27017/?ssl=true&replicaSet=atlas-a4t3g9-shard-0&authSource=admin&retryWrites=true&w=majority';

const mongoDB =async()=>{
    await mongoose.connect(mongoURI)
    .then(() => console.log("DB Connected to Express Successfully!!"))
    .catch((err) => {
        console.log(err);
    });
}

module.exports = mongoDB;