const router = require("express").Router();
let Repair = require("../models/Repair.model");

router.route("/").get((req, res) => {
    Repair.find()
        .then((Repair) => res.json(Repair))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const Itemcode = req.body.Itemcode;
    const Issue = req.body.Issue;
    const Discription = req.body.Discription;
    const Unitprice = req.body.Unitprice;
    const Contactno = req.body.Contactno;
    const Status = req.body.Status;
    

    const newRepair = new Repair({
        Itemcode,
        Issue,
        Discription,
        Unitprice,
        Contactno,
        Status,
       
      
    });

    newRepair
        .save()
        .then(() => res.json("New Repair Added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
    Repair.findById(req.params.id)
        .then((Repair) => res.json(Repair))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
    Repair.findById(req.params.id)
        .then((Repair) => {
            Repair.Itemcode = req.body.Itemcode;
            Repair.Issue = req.body.Issue;
            Repair.Discription = req.body.Discription;
            Repair.Unitprice = req.body.Unitprice;
            Repair.Contactno = req.body.Contactno;
            Repair.Status = req.body.Status;
           

            Repair.save()
                .then(() => res.json("Repair updated!"))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
    Repair.findByIdAndDelete(req.params.id)
        .then(() => res.json("Repair deleted."))
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;