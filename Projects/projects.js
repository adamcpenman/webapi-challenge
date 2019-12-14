const express = require('express')

const projectsDB = require('../data/helpers/projectModel')

const router = express.Router();
router.use(express.json());

router.get('/', (req, res) => {
    projectsDB.get()
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            console.log("Error with Get /projects");
            res.status(500).json({ message: "Error in GET projects" })
        })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;

    projectsDB.get(id)
        .then(project => {
            if(project) {
                res.status(200).json(project)
            } else {
                res.status(404).json({
                    error: "This particular ID can not be found"
                })
            }
        })
})

module.exports = router;