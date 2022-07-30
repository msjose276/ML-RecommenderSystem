const Python = require("python-runner");
const fs = require("fs");
const csvParser = require("csv-parser");

const pythonScript2 = "code2.py";
const dirPath = "./api/pythonCode/";
const mlResult = "./api/MLResult/";

var result2 = [];
var map = {};

const recommendationBasedOnUserAndItem = function(req, res){

    const user = req.body.user;
    const item = req.body.item;

    process.env["USER"] = user;
    process.env["ITEM"] = item;

    //check if the similarities for the movie title was already computed
    if(map[title]){
        console.log("Already exists in the cach");
        return res.send(map[title]);
    }
    
    Python.execScript(dirPath + pythonScript2, { bin: "python", args: [title]})
                .then(function (data) {
                    result2 = [];
                    //read from the file.
                    fs.createReadStream(mlResult+"result2.csv")
                        .pipe(csvParser())
                        .on("data", (data) => {
                            result2.push(data);
                            map[title] = result2;
                        })
                        .on("end", () => {
                            console.log("result2"+JSON.stringify(map[title]));
                            res.send(map[title]);
                        });
                })
                .catch(function (err) {
                    console.log("Error", err);
                    res.send(err);
                });
}

const recommendationMatrixFact = function(req, res){

    const user = req.body.user;
    const item = req.body.item;

    process.env["USER"] = user;
    process.env["ITEM"] = item;

    //check if the similarities for the movie title was already computed
    if(map[title]){
        console.log("Already exists in the cach");
        return res.send(map[title]);
    }
    
    Python.execScript(dirPath + pythonScript2, { bin: "python", args: [title]})
                .then(function (data) {
                    result2 = [];
                    //read from the file.
                    fs.createReadStream(mlResult+"result2.csv")
                        .pipe(csvParser())
                        .on("data", (data) => {
                            result2.push(data);
                            map[title] = result2;
                        })
                        .on("end", () => {
                            console.log("result2"+JSON.stringify(map[title]));
                            res.send(map[title]);
                        });
                })
                .catch(function (err) {
                    console.log("Error", err);
                    res.send(err);
                });
}

const recommendationNeutralCol = function(req, res){

    const user = req.body.user;
    const item = req.body.item;

    process.env["USER"] = user;
    process.env["ITEM"] = item;

    //check if the similarities for the movie title was already computed
    if(map[title]){
        console.log("Already exists in the cach");
        return res.send(map[title]);
    }
    
    Python.execScript(dirPath + pythonScript2, { bin: "python", args: [title]})
                .then(function (data) {
                    result2 = [];
                    //read from the file.
                    fs.createReadStream(mlResult+"result2.csv")
                        .pipe(csvParser())
                        .on("data", (data) => {
                            result2.push(data);
                            map[title] = result2;
                        })
                        .on("end", () => {
                            console.log("result2"+JSON.stringify(map[title]));
                            res.send(map[title]);
                        });
                })
                .catch(function (err) {
                    console.log("Error", err);
                    res.send(err);
                });
}

const recommendationBasedOnUser = function(req, res){

    const user = req.body.user;

    process.env["USER"] = user;

    //check if the similarities for the movie title was already computed
    if(map[title]){
        console.log("Already exists in the cach");
        return res.send(map[title]);
    }
    
    Python.execScript(dirPath + pythonScript2, { bin: "python", args: [title]})
                .then(function (data) {
                    result2 = [];
                    //read from the file.
                    fs.createReadStream(mlResult+"result2.csv")
                        .pipe(csvParser())
                        .on("data", (data) => {
                            result2.push(data);
                            map[title] = result2;
                        })
                        .on("end", () => {
                            console.log("result2"+JSON.stringify(map[title]));
                            res.send(map[title]);
                        });
                })
                .catch(function (err) {
                    console.log("Error", err);
                    res.send(err);
                });
}


module.exports = {
    recommendationBasedOnUserAndItem,
    recommendationMatrixFact,
    recommendationNeutralCol,
    recommendationBasedOnUser
}