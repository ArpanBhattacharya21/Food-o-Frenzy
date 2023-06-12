const mongoose = require('mongoose');
//const mongoURI = 'mongodb+srv://foodofrenzy:aran1521@cluster0.qeidlvm.mongodb.net/foodofrenzy?retryWrites=true&w=majority';
const mongoURI = 'mongodb://foodofrenzy:aran1521@ac-lmffe97-shard-00-00.qeidlvm.mongodb.net:27017,ac-lmffe97-shard-00-01.qeidlvm.mongodb.net:27017,ac-lmffe97-shard-00-02.qeidlvm.mongodb.net:27017/foodofrenzy?ssl=true&replicaSet=atlas-a4t3g9-shard-0&authSource=admin&retryWrites=true&w=majority';

const mongoDB = async()=>{
    await mongoose.connect(mongoURI,{ useNewUrlParser: true}, async(err,result)=>{
        if(err) console.log("---",err);
        else{
            console.log("DB connected to Express Successfully");
            const fetched_data=await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function(err,data){
                const foodCategory = await mongoose.connection.db.collection("foodCategory");
                foodCategory.find({}).toArray(function(err,catData){
                    if(err) console.log(err);
                    else 
                        {
                            //console.log(data);
                            global.food_items = data;                                 
                            global.foodCategory = catData;
                        }
                })
                
            })
        }
    });
}


// const mongoDB = async () => {
//     try {
//       await mongoose.connect(mongoURI);
//       console.log('Connected!');
//       let fetched_data = mongoose.connection.db.collection("food_items");
//       let data=await fetched_data.find({}).toArray() 
//       console.log(data);
//     } catch (error) {
//       console.log('err: ', error);
//     }
//   };
module.exports = mongoDB;