


var Datastore = require('nedb'), db = new Datastore({ filename: 'db/tesdb' });
db.loadDatabase(function (err) {    // Callback is optional
    if (err) { console.log("Err - load db" + err); }

    console.log("db connected");

    //for (var i = 1; i < 50000; i++) {
    //    console.log("Inserting " + i);
    //    var user = getFakeUser();
    //    db.insert(user, function (err, newDoc) {
    //        if (err) { console.log("Err - insert db" + err); }
    //    });
    //}

    // Find all documents in the collection
    //db.find({}, function (err, docs) {
    //    console.log("Data - " + JSON.stringify(docs));
    //});

    // find using reg expression
    //db.find({ displayName: /Ma/ }, function (err, docs) {
    //    console.log("Data - " + JSON.stringify(docs));
    //});
    
    db.find({}).limit(1).exec(function (err, docs) {
        console.log("Data - " + JSON.stringify(docs));
    });

});

function getFakeUser() {
    return myJson = {
        displayName: getFakeString(),
        company: getFakeString(),
        department: "College",
        title: "Principal ",
        mail: getFakeString(),
        mobile: "+545325",
        telephoneNumber: "+5345",
        otherTelephone: "5342-5342",
        thumbnailPhoto: "/fdsfdsgdsgfgdsg==Z"
    };
}

function getFakeString() {
    var fakeString = "";
    var possibleCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var possible = "abcdefghijklmnopqrstuvwxyz";

    fakeString += possibleCaps.charAt(Math.floor(Math.random() * possibleCaps.length));
    for (var i = 0; i < 10; i++) {
        fakeString += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    fakeString += " " + possibleCaps.charAt(Math.floor(Math.random() * possibleCaps.length));
    for (var i = 0; i < 10; i++) {
        fakeString += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return fakeString;
}