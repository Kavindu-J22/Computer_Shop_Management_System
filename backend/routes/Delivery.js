const router = require("express").Router();
let Delivery = require("../models/Delivery.model");

router.route("/").get((req, res) => {
    Delivery.find()
        .then((Delivery) => res.json(Delivery))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const DPID = req.body.DPID;
    const DPname = req.body.DPname;
    const DPPlace = req.body.DPPlace;
    const DPItem = req.body.DPItem;
    const Amount = req.body.Amount;
    const Date = req.body.Date;
    const Contactno = req.body.Contactno;
    

    const newDelivery = new Delivery({
        DPID,
        DPname,
        DPPlace,
        DPItem,
        Amount,
        Date,
        Contactno,
       
      
    });

    newDelivery
        .save()
        .then(() => res.json("Delivery Added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
    Delivery.findById(req.params.id)
        .then((Delivery) => res.json(Delivery))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
    Delivery.findById(req.params.id)
        .then((Delivery) => {
            Delivery.DPID = req.body.DPID;
            Delivery.DPname = req.body.DPname;
            Delivery.DPPlace = req.body.DPPlace;
            Delivery.DPItem = req.body.DPItem;
            Delivery.Amount = req.body.Amount;
            Delivery.Date = req.body.Date;
            Delivery.Contactno = req.body.Contactno;
           

            Delivery.save()
                .then(() => res.json("Delivery updated!"))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
    Delivery.findByIdAndDelete(req.params.id)
        .then(() => res.json("Delivery deleted."))
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;