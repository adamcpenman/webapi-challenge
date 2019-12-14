const express = require('express')

const actionsDB = require('../data/helpers/actionModel')

const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
    actionsDB.get()
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

    actionsDB.get(id)
        .then(action => {
            if(action) {
                res.status(200).json(action)
            } else {
                res.status(404).json({
                    error: "This particular ID can not be found"
                })
            }
        })
})

router.post('/', (req, res) => {
    const action = req.body

    actionsDB.insert(action)
        .then(actions => {
            res.status(200).json(actions)
        })
        .catch(err => {
            console.log("Error with POST action", err)
            res.status(500).json({
                message: "Can't Post to action"
            })
        })
})

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const {project_id, description, notes, completed} = req.body;

    actionsDB.get(id)
        .then(action => {
            if(action) {
                actionsDB.update(id, {project_id, description, notes, completed})
                .then(update => {
                    res.status(200).json(update)
                })
        .catch(err => {
            console.log("Error with PUT actions", err)
            res.status(500).json({
                message: "Error with updating actions"
            })
            })
        }
     })
})

router.delete("/:id", (req, res) => {
    const {id} = req.params

    actionsDB.get(id)
        .then(action => {
            if(action){
                actionsDB.remove(id)
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
            console.log("Error with GET on DELETE actions", err)
            res.status(404).json({ message: "No posts with that ID"})
        })
})


module.exports = router;