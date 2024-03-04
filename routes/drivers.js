import express from 'express';
const router = express.Router();

let drivers = [
    {id: '1', lastname: 'Gasly', firstname: 'Pierre', team: 'Alpine'},
    {id: '2', lastname: 'Ocon', firstname: 'Esteban', team: 'Alpine'}
];

router.get('/api/drivers', (req, res) => {
    res.json(drivers)
})

router.get('/api/drivers/:id', (req, res) => {
    const { id } = req.params
    let driver = drivers.find(driver => driver.id == id)
    res.send(driver)
})

router.post('/api/drivers', (req, res) => {
    const driver = {
        id: drivers.length + 1,
        lastname: req.body.lastname,
        firstname: req.body.firstname,
        team: req.body.team,
    }
    drivers.push(driver)
    res.status(201).send(driver);
})


router.put('/api/drivers/:id', (req, res) => {
    let { id } = req.params
    const driver = drivers.find(driver => driver.id == id)
    driver.team = req.body.team
    res.send(driver)
})


router.delete('/api/drivers/:id', (req, res) => {
    const { id } = req.params
    let driver = drivers.find(driver => driver.id == id)
    const index = drivers.indexOf(driver)
    drivers.splice(index, 1)
    res.send(`${driver.lastname} has been delete`)
})

export default router;