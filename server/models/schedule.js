const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
    Date:{
        type:String
    },
    Time:{
        type:String
    },
    Availability:{
        type:Number
    },
    Visitors:[{
        FirstName:{
            type:String
        },
        Phone:{
            type:Number
        }
    }]
})

module.exports = mongoose.model('Schedule', ScheduleSchema);