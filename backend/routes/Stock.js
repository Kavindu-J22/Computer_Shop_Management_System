const router = require('express').Router();
let Stock = require('../models/Stock.model');

router.route('/').get((req, res) => {
    Stock.find()
        .then(Stock => res.json(Stock))
        .catch(err => res.status(400).json('Error: ' + err));
});


//Add Function

router.route('/add').post((req, res) => {

    const Itemcode = req.body.Itemcode;
    const Productname = req.body.Productname;
    const Discription = req.body.Discription;
    const Unitprice = req.body.Unitprice;
    const qty = req.body.qty;



    const newStock = new Stock({
        Itemcode,
        Productname,
        Discription,
        Unitprice,
        qty,

    });



    newStock.save()
        .then(() => res.json('Stock added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Get Data 
router.route('/:id').get((req, res) => {
    Stock.findById(req.params.id)
        .then(Stock => res.json(Stock))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete Data

router.route('/:id').delete((req, res) => {
    Stock.findByIdAndDelete(req.params.id)
        .then(() => res.json('Stock deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Update data
router.route('/update/:id').post((req, res) => {
    Stock.findById(req.params.id)
        .then(Stock => {
            Stock.Itemcode = req.body.Itemcode;
            Stock.Productname = req.body.Productname;
            Stock.Discription = req.body.Discription;
            Stock.Unitprice = req.body.Unitprice;
            Stock.qty = req.body.qty;



            Stock.save()
                .then(() => res.json('Stock updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;