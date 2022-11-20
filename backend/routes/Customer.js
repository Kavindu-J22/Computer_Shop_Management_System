const router = require('express').Router();
let Customer = require('../models/Customer.model');

router.route('/').get((req, res) => {
    Customer.find()
        .then(Customer => res.json(Customer))
        .catch(err => res.status(400).json('Error: ' + err));
});


//Add Function

router.route('/add').post((req, res) => {

    const Cid = req.body.Cid;
    const username = req.body.username;
    const Address = req.body.Address;
    const Phone = req.body.Phone;
    const birthday = req.body.birthday;
    const Email = req.body.Email;



    const newCustomer = new Customer({

        Cid,
        username,
        Address,
        Phone,
        birthday,
        Email,

    });



    newCustomer.save()
        .then(() => res.json('Customer added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Get Data 
router.route('/:id').get((req, res) => {
    Customer.findById(req.params.id)
        .then(Customer => res.json(Customer))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete Data

router.route('/:id').delete((req, res) => {
    Customer.findByIdAndDelete(req.params.id)
        .then(() => res.json('Customer deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Update data
router.route('/update/:id').post((req, res) => {
    Customer.findById(req.params.id)
        .then(Customer => {
            Customer.username = req.body.username;
            Customer.Address = req.body.Address;
            Customer.Phone =req.body.Phone;
            Customer.birthday =req.body.birthday;
            Customer.Email = req.body.Email;



            Customer.save()
                .then(() => res.json('Customer updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;