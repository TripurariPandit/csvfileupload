const File = require('../models/csv');

// for display home page
module.exports.home = async function(req, res){
    try{
        const file = await File.find({});
        return res.render('home', {
            title: 'Home',
            files: file
        });
    }
    catch(err){
        console.log(`Error in homeController ${err}`);
        return;
    }
}