export const createService:any=async(db:any, data:any)=>{
  var list:any[]=[];
  const query:string='INSERT INTO  STUDENT_DETAILS (NAME,EMAIL,ADDRESS,DEPARTMENT,PHONENUMBER,STATE,CITY,COUNTRY,PINCODE) VALUES(?,?,?,?,?,?,?,?,?);'
  const querydata:any[]=[data.name,data.email,data.address,data.department,data.phone,data.state,data.city,data.country,data.pincode];
  const p=new Promise (function(resolve, reject){
    db.get(query,querydata,(err:any,data:any)=>{
      if (err) {
        throw err;
      }
    resolve('success')
  })
  })
  list.push(p.then(function(fromresolve){
    return fromresolve
  }).catch(function(fromReject){
       return fromReject
  }))

  return list
  }
export const verifystudentService:any=async(db:any, data:any)=>{
  let list=[];
  const query="SELECT * FROM STUDENT_DETAILS WHERE NAME=? AND  PHONENUMBER =? AND DEPARTMENT=?"
  const querydata=[data.name,data.phone,data.department];
  const p=new Promise (function(resolve, reject){
  db.get(query,querydata,(err:any,data:any)=>{
    if (err) {
      throw err;
    }
    if(data === undefined){
    resolve(false)
  }
  resolve(data)
})
})
list.push(p.then(function(fromresolve){
  return fromresolve
}).catch(function(fromReject){
     return fromReject
})
)
return list
}
export const getstudentService:any=async(db:any, data:any)=>{
  let list=[]
  const query="SELECT * FROM STUDENT_DETAILS;"
  const p=new Promise (function(resolve, reject){
  db.all(query,(err:any,data:any)=>{
    if (err) {
      throw err;
    }
    console.log(data)
    resolve(data)
  })
})
list.push(p.then(function(fromresolve){
  return fromresolve
}).catch(function(fromReject){
     return fromReject
})
)
return list
}

