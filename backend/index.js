const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

const movieModel = require('./models/movie')

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://adminAbhi:UmpRt8Tt5BT8DUp@cluster0.gn0lr.mongodb.net/MovieDB?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false})

app.post('/insert',async(req,res)=>{

    const movieName = req.body.movieName
    const Language = req.body.Language
    const ReleaseDate = req.body.ReleaseDate
    const Budget = req.body.Budget
    const Collection = req.body.Collection

    const movie = new movieModel({
        movieName:movieName,
        Language:Language,
        ReleaseDate:ReleaseDate,
        Budget:Budget,
        Collection:Collection
    })
    try{
        await movie.save()
    }catch(err){
        console.log(err);
    }
    res.send('started')
})

app.get('/read',(req,res)=>{
    movieModel.find({},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
})

app.put('/update1',(req,res)=>{
    const newmoviename = req.body.newmoviename
    const id = req.body.id

    try{
        movieModel.findById(id,(err,updateMovie)=>{
            updateMovie.movieName = newmoviename
            updateMovie.save()
            res.send('updated')
        })
    }catch(err){
        console.log(err);
    }
})
app.put('/update2',(req,res)=>{
    const newlanguage = req.body.newlanguage
    const id = req.body.id

    try{
        movieModel.findById(id,(err,updateMovie)=>{
            updateMovie.Language = newlanguage
            updateMovie.save()
            res.send('updated')
        })
    }catch(err){
        console.log(err);
    }
})
app.put('/update3',(req,res)=>{
    const newrelease = req.body.newrelease
    const id = req.body.id

    try{
        movieModel.findById(id,(err,updateMovie)=>{
            updateMovie.ReleaseDate = newrelease
            updateMovie.save()
            res.send('updated')
        })
    }catch(err){
        console.log(err);
    }
})
app.put('/update4',(req,res)=>{
    const newbudget = req.body.newbudget
    const id = req.body.id

    try{
        movieModel.findById(id,(err,updateMovie)=>{
            updateMovie.Budget = newbudget
            updateMovie.save()
            res.send('updated')
        })
    }catch(err){
        console.log(err);
    }
})
app.put('/update5',(req,res)=>{
    const newcollection = req.body.newcollection
    const id = req.body.id

    try{
        movieModel.findById(id,(err,updateMovie)=>{
            updateMovie.Collection = newcollection
            updateMovie.save()
            res.send('updated')
        })
    }catch(err){
        console.log(err);
    }
})

app.delete('/delete/:id',(req,res)=>{
    const id = req.params.id
    movieModel.findByIdAndRemove(id).exec()
    res.send('deleted')
})

app.listen(3001,()=>{
    console.log("On ort 3001");
})