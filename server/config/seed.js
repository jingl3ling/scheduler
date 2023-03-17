const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config({path: path.join(__dirname,"../../.env")});

const MONGO_URL = process.env.MONGO_URL;
const Schedule = require('../models/schedule');

var hours=['8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm'];

(async function seed(){
    try{
        await mongoose.connect(MONGO_URL);
        console.log("connected");

        await Schedule.collection.drop()

        for(let hour of hours){
            await Schedule.create({
                Date:'3/7/2023',
                Time: hour,
                Availability: 10,
                Visitors: []
            })
        }
    }
    catch(err){
        console.log(err);
    }
    finally{
        await mongoose.connection.close()
    }
})();