import {Question} from "../models/questionSchema.js"
import {Result} from "../models/resultSchema.js"
import {questions , answers } from '../database/data.js'


/** get all questions */
export async function getQuestions(req, res){
    try {
        const q = await Question.find();
        res.status(200).json( q );
        console.log(q)
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
      }
}

/** insert all questinos */
export async function insertQuestions(req, res){
    try {
       const insertedQuestions = await Question.insertMany({ questions, answers })
       console.log(insertedQuestions);
            res.json({ msg: "Data Saved Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}

/** Delete all Question */
export async function dropQuestions(req, res){
   try {
        await Question.deleteMany();
        res.json({ msg: "Question Deleted Successfully...!"});
   } catch (error) {
        res.json({ error })
   }
}

/** get all result */
export async function getResults(req, res){
    try {
        const r = await Result.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

/** post all result */
export async function storeResults(req, res){
   try {
        const { username, result, attempts, points, achived } = req.body;
        if(!username && !result) throw new Error('Data Not Provided...!');

        Result.create({ username, result, attempts, points, achived }, function(err, data){
            res.json({ msg : "Result Saved Successfully...!"})
        })

   } catch (error) {
        res.json({error})
   }
}

/** delete all result */
export async function dropResults(req, res){
    try {
        await Result.deleteMany();
        res.json({ msg : "Result Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}