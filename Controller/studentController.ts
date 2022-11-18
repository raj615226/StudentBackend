import {Request,Response,RequestHandler} from 'express';
import db from '../Config/db';
import {  verifystudentService, getstudentService, createService } from '../Service/studentService';
import dotenv from'dotenv';

interface type {
    status:string,
    msg:string,
    data?:any
}

dotenv.config();
export const StudentController:RequestHandler=async(req:Request,res:Response)=>{;
    let response :type = {
        status: 'error',
        msg: 'Something went wrong.'

    }
    try{
        const data:any=req.body;
        const querys=await verifystudentService(db,data);
        var values=Promise.all(querys)
        var datas:any=await values;
        console.log(datas[0])
        if(datas[0] === false){
            console.log("ok")
            const query=await createService(db,data)
            let anothervalue=Promise.all(query)
             let another:any=await anothervalue;
             console.log(another)
             if(another[0] === 'success'){
                response={
                    status: 'success',
                    msg:'Data  Created.'
                }
                
             }else{
                console.log('bad')
             }
    }
    else{
        response={
            status: 'failed',
            msg:'Data Already Created.'
        }
    }}catch(err){
        console.log(err)
        response = {
            status: 'error',
            msg: 'Ops! Something went wrong. Please try again later.'

        }
} finally {
    res.send(response)
}
    }
export const getStudentController:RequestHandler=async(req:Request,res:Response)=>{
   
        let response :type = {
            status: 'error',
            msg: 'Something went wrong.'
    
        }
        try{
            const querys=await getstudentService(db);
            var values=Promise.all(querys)
            var datas=await values;
            console.log(datas)
            if(datas){
                response={
                    status: 'success',
                    msg:'Data Found Successfully.',
                    data:datas
                }
            }
        else{
            response={
                status: 'failed',
                msg:'Data Already Created.'
            }
        }}catch(err){
            console.log(err)
            response = {
                status: 'error',
                msg: 'Ops! Something went wrong. Please try again later.'
    
            }
    } finally {
        res.send(response)
    }
}