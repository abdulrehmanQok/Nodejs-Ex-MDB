const fs=require('fs');
const path= require('path');
const rootdir=require('../utils/pathUtil');
const { json } = require('stream/consumers');
let registeredHomes = [];
module.exports=class Home{
  constructor(houseName,price , location,rating,photourl){
    this.houseName=houseName;
    this.price=price;
    this.location=location;
    this.rating=rating;
    this.photourl=photourl

  }
  save(){
    registeredHomes.push(this);
    const home_path=path.join(rootdir,'data','home.json');
    fs.writeFile(home_path,JSON.stringify(registeredHomes),(error)=>{
      console.log("file write cocluded",error);
    })


  }
  static fetchall(callback){
    const home_path=path.join(rootdir,'data','home.json');
    fs.readFile(home_path,(err,data)=>{
      console.log("data is",data);
      if(!err){
              registeredHomes=JSON.parse(data);
      }
          callback(registeredHomes);
    })
     

  }
}