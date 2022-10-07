// 01/10/2022 all callback functions 

let {people} = require('../data'); // two levels up

const getPeople = (req, res) => { // http get method to browser
    res.status(200).json({success: true, data: people});
};

const createPerson = (req, res) => { // javascript
    const {name} = req.body;
    if(!name) {
        return res.status(400).json({success: false, msg: 'Please Provide name value!'});
    }
    res.status(201).json({ Success: true, person: name }); 
};

const createPersonPostman = (req, res) => {
    const { name } = req.body;
    if(!name) {
        return res.status(400).json({success: false, msg: 'Please Provide name value!'});
    }
    res.status(201).json({ Success: true, data: [...people, name] }); 

};

const updatePerson = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    // res.send('Hello Postman!')
    const person = people.find((person) => person.id === Number(id));
    if(!person) {
        return res.status(400).json({success: false, msg: `No Person With id ${id}`});
    }
    const newPoeple = people.map((person) => {
        if(person.id === Number(id)) {
            person.name = name;
        }
        return person;
    });
    res.status(200).json({ Success: true, data: newPoeple }); 
};

const deletePerson = (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id));
    if(!person) {
        return res.status(404).json( {success: false, msg: `No Person With id ${req.params.id}` });
    }
    const newPoeple = people.filter((person) => person.id !== Number(req.params.id));
    return res.status(200).json({ success: true, data: newPoeple });
};

module.exports = {
    getPeople,
    createPerson, 
    createPersonPostman,
    updatePerson,
    deletePerson
}