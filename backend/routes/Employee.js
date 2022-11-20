const router = require('express').Router();
let Employee = require('../models/Employee.model');

router.route('/').get((req, res) => {
    Employee.find()
        .then(Employee => res.json(Employee))
        .catch(err => res.status(400).json('Error: ' + err));
});


//Add Function

router.route('/add').post((req, res) => {

    const Eid = req.body.Eid;
    const username = req.body.username;
    const Address = req.body.Address;
    const Phone = req.body.Phone;
    const birthday = req.body.birthday;
    const Position = req.body.Position;
    const Gender = req.body.Gender;
    const Email = req.body.Email;



    const newEmployee = new Employee({

        Eid,
        username,
        Address,
        Phone,
        birthday,
        Position,
        Gender,
        Email,

    });



    newEmployee.save()
        .then(() => res.json('Employee added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Get Data 
router.route('/:id').get((req, res) => {
    Employee.findById(req.params.id)
        .then(Employee => res.json(Employee))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete Data

router.route('/:id').delete((req, res) => {
    Employee.findByIdAndDelete(req.params.id)
        .then(() => res.json('Employee deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Update data
router.route('/update/:id').post((req, res) => {
    Employee.findById(req.params.id)
        .then(Employee => {
            Employee.Eid = req.body.Eid;
            Employee.username = req.body.username;
            Employee.Address = req.body.Address;
            Employee.Phone =req.body.Phone;
            Employee.birthday = req.body.birthday;
            Employee.Position = req.body.Position;
            Employee.Gender = req.body.Gender;
            Employee.Email = req.body.Email;
            



            Employee.save()
                .then(() => res.json('Employee updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;