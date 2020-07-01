var bodyParser = require('body-parser');

// var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});
var fs = require('fs');
var path = require('path');



// read the data file
function readData(fileName){
    let dataRead = fs.readFileSync('./data/' + fileName + '.json');
    let infoRead = JSON.parse(dataRead);
    return infoRead;
}

// read the data file
function writeData(info, fileName){
    data = JSON.stringify(info);
    fs.writeFileSync('./data/' + fileName + '.json', data);
}

function combineCounts(name, value){
    // console.log(value);
    info = readData(name);
     // will be useful for text entry, since the item typed in might not be in the list
    var found = 0;
    for (var i=0; i<info.length; i++){
        if (info[i][name] === value){
            info[i].count = parseInt(info[i].count) + 1;
            found = 1;
        }
    }
    if (found === 0){
        info.push({[name] : value, count: 1});
    }
    writeData(info, name);
}




module.exports = function(app){

    app.get('/analysis', function(req, res){
        var a1 = readData("question01");
        var a2 = readData("question02");
        var a3 = readData("question03");
        var a4 = readData("question04");
        var a5 = readData("question05");
        var a6 = readData("question06");
        var day = readData("day");
        var month = readData("month");
        var birth_year = readData("birth_year");
        var sexe = readData("sexe");
        var schoolyear = readData("schoolyear");
        var faculty = readData("faculty");
        var studentNumber = readData("studentNumber");
        var ui_strength = readData("ui_strength");
        res.render('showResults', {results: [a1, a2, a3, a4, a5, a6, day, month, birth_year, sexe, schoolyear, faculty, studentNumber, ui_strength]});
        console.log([a1, a2, a3, a4, a5, a6, day, month, birth_year, sexe, schoolyear, faculty, studentNumber, ui_strength]);
    });


    app.get('/niceSurvey', function(req, res){
        // res.render('index');
        // console.log(path.join(__dirname, '../views', 'index.html'));
        res.sendFile(path.join(__dirname, '../views', 'niceSurvey.html'));

        // path.join(__dirname, '../views', 'index.ejs')
    });




    app.post('/niceSurvey', urlencodedParser, function(req, res){
        var json = req.body;
        for (var key in json){
            console.log(key + ": " + json[key]);
            // in the case of checkboxes, the user might check more than one
            if ((key === "question03") && (json[key].length > 2)){
                for (var item in json[key]){
                    combineCounts(key, json[key][item]);
                }
            }
            else {
                combineCounts(key, json[key]);
            }
        }
        // mystery line... (if I take it out, the SUBMIT button does change)
        // if anyone can figure this out, let me know!
        res.sendFile(path.join(__dirname, '../views', 'niceSurvey.html'));
    });


};