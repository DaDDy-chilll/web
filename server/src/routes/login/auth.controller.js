function getAuth(req,res){
    res.render('auth',{
        title:'Login',
        head:'Login',
        path:'login'

    });
};

module.exports= {
    getAuth,
}