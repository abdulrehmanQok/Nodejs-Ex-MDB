const Home = require("../models/home");

exports.get_add_home=(req,res,next)=>{
  res.render('addHome',{pageTitle:'add home to airbnb',
    currentPage: "addHome"
  });
}


exports.post_home_added=(req, res, next) => {
  console.log('Home Registration successful for:', req.body);
  const home=new Home(req.body.houseName,req.body.price,req.body.location,req.body.rating, req.body.photourl);
  home.save();
  res.render('homeAdded', {pageTitle: 'Home Added Successfully',currentPage:"homeAdded"});
}

exports.home=(req, res, next) => {
  const registeredHomes=Home.fetchall(registeredHomes=>{
    res.render('home', {registeredHomes: registeredHomes, pageTitle: 'airbnb Home'});cd
  }); 
  
}
exports.error =(req, res, next) => {
  res.status(404).render('404', {pageTitle: 'Page Not Found'});
}
