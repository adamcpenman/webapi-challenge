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
            console.log("Error with Get /projects", err);
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

router.post('/', (req, res) => {
    const project = req.body

    projectsDB.insert(project)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            console.log("Error with POST projects", err)
            res.status(500).json({
                message: "Can't Post to projects"
            })
        })
})

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const {name, description} = req.body;

    projectsDB.get(id)
        .then(post => {
            if(post) {
                projectsDB.update(id, {name, description})
                .then(update => {
                    res.status(200).json(update)
                })
        .catch(err => {
            console.log("Error with PUT projects", err)
            res.status(500).json({
                message: "Error with updating projects"
            })
            })
        }
     })
})

router.delete("/:id", (req, res) => {
    const {id} = req.params

    projectsDB.get(id)
        .then(project => {
            if(project){
                projectsDB.remove(id)
                .then(removed => {
                    res.status(200).json(removed)
                })
            } else {
                res.status(500).json({
                    message: "Error can't delete data"
                })
            }
        })
        .catch(err => {
            console.log("Error with GET on DELETE projects", err)
            res.status(404).json({ message: "No posts with that ID"})
        })
})

router.get("/:id/actions", (req, res) => {
    const {id} = req.params

    projectsDB.get(id)
        .then(project => {
            if(project) {
                projectsDB.getProjectActions(project.id)
                    .then(action => {
                        res.status(200).json(action)
                    })
                    .catch(err => {
                        console.log("ERROR with GET id/actions", err)
                        res.status(500).json({
                            message: "ERROR with getting data"
                        })
                    })
            }
        })
})

module.exports = router;