var express = require('express');
var router = express.Router();
const faunadb = require('faunadb');
const jwtCheck = require("../middlewares/jwt");

//connecting to the database
//Armamentum DB secret key - fnAD4bFmIKACBXcqwnPaRn677HNGOhn_QDatlMpI
const client = new faunadb.Client({ secret: 'fnAD4bFmIKACBXcqwnPaRn677HNGOhn_QDatlMpI'})

// FQL functions
const {
    Ref,
    Paginate,
    Match,
    Update,
    Index,
    Delete,
    Create,
    Collection
} = faunadb.query;

router.get("/", async (req, res) => {

    await client.query(
        Paginate(Match(Index("Notes_sorted"))) //here the results from Match are mapped to the lambda function to get the original data
    )

    .then(doc => {
        res.status(200).json(doc.data)}
        )
    .catch(err => res.status(500).json({error: err}))
    
})

router.put("/updatenote/:id", jwtCheck, async (req,res) => {

    let id = req.params.id;

    // Sample req body: 
    //{
    //    "title":"New title",
    //    "body":"New body"
    //}

    // Update(Ref(Collection("Notes"), '279634973467607553'), {data:{body:"This is the new body"}}) -> sample query

    //console.log(req.body, id); //works

    await client.query(Update(Ref(Collection("Notes"), id), { data: req.body }))
        .then(doc => res.status(200).json(doc))
        .catch(err => res.status(404).json({error: err}))

})

router.post("/postnote", jwtCheck, async (req, res) => {

    await client.query(Create(Collection("Notes"), {data: req.body}))
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => res.status(400).json({error:err}))
})

router.delete("/deletenote/:id", jwtCheck, async (req, res) => {

    await client.query(Delete(Ref(Collection("Notes"), req.params.id)))
        .then(doc => res.status(200).json(doc))
        .catch(err => res.status(404).json({error: err})) 
})

module.exports = router;