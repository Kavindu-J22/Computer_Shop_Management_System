const router = require("express").Router();
let Exchange = require("../models/Exchange.model");

router.route("/").get((req, res) => {
    Exchange.find()
        .then((Exchange) => res.json(Exchange))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const EXID = req.body.EXID;
    const EXname = req.body.EXname;
    const Amount = req.body.Amount;
    const Date = req.body.Date;
    const Contactno = req.body.Contactno;
    const Discription = req.body.Discription;
    

    const newExchange = new Exchange({
        EXID,
        EXname,
        Amount,
        Date,
        Contactno,
        Discription,
       
      
    });

    newExchange
        .save()
        .then(() => res.json("New Exchange Added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
    Exchange.findById(req.params.id)
        .then((Exchange) => res.json(Exchange))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
    Exchange.findById(req.params.id)
        .then((Exchange) => {
            Exchange.EXID = req.body.EXID;
            Exchange.EXname = req.body.EXname;
            Exchange.Amount = req.body.Amount;
            Exchange.Date = req.body.Date;
            Exchange.Contactno = req.body.Contactno;
            Exchange.Discription = req.body.Discription;
           

            Exchange.save()
                .then(() => res.json("Exchange updated!"))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
    Exchange.findByIdAndDelete(req.params.id)
        .then(() => res.json("Exchange deleted."))
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;