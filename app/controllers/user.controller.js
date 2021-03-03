// const { noExtendLeft } = require('sequelize/types/lib/operators');
const db = require('../models');
const response = require('../providers/ResponseProvider');
const User = db.user;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // validate
    if(!req.body.nama){
        res.status(400).send({
            message: "tidak boleh kosong"
        });
        return;
    }

    const user = {
        nama : req.body.nama
    };

    User.create(user).then(data => {
        res.json(response.jsonSuccess('berhasil ditambah', data));
    })
    .catch(err => {
        res.status(500).json(response.jsonError(err.message));
    })
};

// Retrieve all Tutorials from the database.
exports.findAll = async (req, res) => {
    try {
        const get = await User.findAll();
        return res.json(response.jsonSuccess('sukses', get))
    } catch(err){
        return next(err)
    }
};

// Find a single Tutorial with an id
exports.findOne = async (req, res) => {
    const id = req.params.id;

    try {
        const find = await User.findByPk(id);
        res.json(response.jsonSuccess('item id '+id, find))
    } catch (error) {
        return res.json(response.jsonError(error.message));
    }
};

// Update a Tutorial by the id in the request
exports.update = async (req, res) => {
    const id = req.params.id;
    if(!req.body.nama){
        res.status(400).send({
            message: "tidak boleh kosong"
        });
        return;
    }

    try {
        const data = await User.update(req.body, {
            where: {
                id: id
            }
        });
        if(data == true){
            res.json(response.jsonSuccess('berhasil di edit', data))
        }else{
            res.status(404).json(response.jsonError('id tidak ada'));
        }
    } catch (error) {
        res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    }
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};