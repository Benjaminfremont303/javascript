/* const {article} = require("../model/article");
const article =  require("../bd/connect");
const { collection } = require("../models/Article");

const ajouterArticle = async (req,res)=>{
    try {
        let article = new article(
            req.body.titre, 
            req.body.contenu, 
            req.body.date
        );

        let resultat = await client
        .bd()
        .collection("articles")
        .insertOne(article);

        res.status(200).json(resultat);

    } catch (error) {
        console.log(error);
        re.status(500).json(error);
    }
}

module.export = {ajouterArticle}; */