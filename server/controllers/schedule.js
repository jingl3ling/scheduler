const mongoose = require('mongoose');
const Schedule = require('../models/schedule')

exports.getAvail = async(req, res)=>{
    const date = req.query.date;
    const time = req.query.time;

    try{
        const avail = await Schedule.find({$and:[{Time:{$eq:time}},{Date:{$eq:date}}]})
        const ans= {availability:avail[0].Availability}
        res.json(ans);
    }
    catch(err){
        res.json('err');
    }

}

exports.reserve = async(req, res)=>{
    const date = req.query.date;
    const time = req.query.time;
    const visitor = {
        FirstName:req.body.name,
        Phone: req.body.phone,
        Quantity: req.body.quantity
    }
    console.log(visitor);
    try{
        const ans = await Schedule.find({$and:[{Time:{$eq:time}},{Date:{$eq:date}}]});
        const avail = ans[0].Availability;
        await Schedule.updateOne({$and:[{Time:{$eq:time}},{Date:{$eq:date}}]},
            {$addToSet:{Visitors:visitor}})
        await Schedule.updateOne({$and:[{Time:{$eq:time}},{Date:{$eq:date}}]},
            {Availability:avail-req.body.quantity})
        res.json('success');
    }
    catch(err){
        res.json('err');
    }
}

exports.getReserve = async(req, res)=>{
    const firstname=req.query.name;
    const phone=req.query.phone;
    console.log(firstname, phone)
        var ans = [];
        Schedule.find()
        .then((result)=>{
            for(let i=0; i<result.length; i++){
                for(let j=0; j<result[i].Visitors.length; j++){
                    if(result[i].Visitors[j].FirstName==firstname && 
                        result[i].Visitors[j].Phone==phone){
                            const curr={
                                id:result[i]._id,
                                Date:result[i].Date,
                                Time:result[i].Time,
                                Quantity:result[i].Visitors[j].Quantity,
                                res_id:result[i].Visitors[j]._id
                            }
                            ans.push(curr);
                            console.log(curr);
                        }
                }
            }
            console.log(ans)
            res.send(ans);
        })
        .catch((err)=>{
            res.send(err);
        })
}

exports.modifyReserve = async(req, res)=>{
    const id=new mongoose.Types.ObjectId(req.body.res_id);
    await Schedule.findByIdAndUpdate(req.body.dt_id,{$pull:{Visitors:{_id:{$eq:id}}}}).exec();
    await Schedule.findByIdAndUpdate(req.body.dt_id,{$inc:{Availability:req.body.quantity}});
    // if(req.body.type=='update'){
    //     //add new
    // }
    res.send('success');
}