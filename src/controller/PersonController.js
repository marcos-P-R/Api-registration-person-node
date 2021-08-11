const dataBase = require('../models');

class Person{
    static async getAll(req, res){
        try {
            const allPersons = await dataBase.Person.findAll();
            return res.status(200).json(allPersons);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}