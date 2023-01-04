const fs = require('fs')

exports.homePage = (req, res) => {
    fs.readFile('highlights.json', (err, data) => {
        if(err) throw err;
        let highlights = JSON.parse(data);
        return res.render('home', highlights);
    })
}

exports.teams = (req, res) => {
    fs.readFile('teams.json', (err, data) => {
        if(err) throw err;
        let teams = JSON.parse(data);
        return res.render('teams', teams);
    })
}

exports.pilotDetail = (req, res) => {
    let queryPilotName = req.query.name;
    queryPilotName = queryPilotName.charAt(0).toUpperCase() + queryPilotName.slice(1);
    let queryPilotLastname = req.query.lastname;
    queryPilotLastname = queryPilotLastname.charAt(0).toUpperCase() + queryPilotLastname.slice(1);
    if(queryPilotName && queryPilotLastname) {
        fs.readFile('teams.json', (err, data) => {
            if(err) throw err;
            let teams = JSON.parse(data);
            let arrTeams = teams.teams;
            let arrTeamsPilot = [];
            arrTeams.forEach(team => {
               arrTeamsPilot.push(team.drivers[0]);
               arrTeamsPilot.push(team.drivers[1]);
            });
            arrTeamsPilot.forEach(pilot => {
                if(pilot.pilotName == queryPilotName && pilot.pilotLastName == queryPilotLastname){
                    return res.render('pilot-detail', pilot);
                }
            })
        })
    }
}

exports.grandPrix = (req, res) => {
    fs.readFile('grandprix.json', (err, data) => {
        if(err) throw err;
        let circuits = JSON.parse(data);
        return res.render('grandprix', circuits);
    })
}

exports.contact = (req, res) => {
    return res.render('contact');
}

exports.send = (req, res) => {
    let query = req.query;
    if(query && query){
        res.redirect('/success')
        return;
    }
    res.redirect('/error')
}

exports.contact = (req, res) => {
    return res.render('contact');
}

exports.success = (req, res) => {
    return res.render('success');
}

exports.error = (req, res) => {
    return res.render('error');
}

exports.pageNotFound = (req, res) => {
    return res.render('404');
}