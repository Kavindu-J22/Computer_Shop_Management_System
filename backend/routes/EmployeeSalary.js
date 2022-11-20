const router = require("express").Router();
let EmployeeSalary = require("../models/EmployeeSalary.model");

router.route("/").get((req, res) => {
    EmployeeSalary.find()
        .then((EmployeeSalary) => res.json(EmployeeSalary))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const Eid = req.body.Eid;
    const Username = req.body.Username;
    const Phone = req.body.Phone;
    const Discription = req.body.Discription;
    const Payment = req.body.Payment;
    const Date = req.body.Date;
    const Email = req.body.Email;
  

    const newEmployeeSalary = new EmployeeSalary({
        Eid,
        Username,
        Phone,
        Discription,
        Payment,
        Date,
        Email,
      
    });

    newEmployeeSalary
        .save()
        .then(() => res.json("New EmployeeSalary Added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
    EmployeeSalary.findById(req.params.id)
        .then((EmployeeSalary) => res.json(EmployeeSalary))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
    EmployeeSalary.findById(req.params.id)
        .then((EmployeeSalary) => {
            EmployeeSalary.Eid = req.body.Eid;
            EmployeeSalary.Username = req.body.Username;
            EmployeeSalary.Phone = req.body.Phone;
            EmployeeSalary.Discription = req.body.Discription;
            EmployeeSalary.Payment = req.body.Payment;
            EmployeeSalary.Date = req.body.Date;
            EmployeeSalary.Email = req.body.Email;
           

            EmployeeSalary.save()
                .then(() => res.json("Employee Salary updated!"))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
    EmployeeSalary.findByIdAndDelete(req.params.id)
        .then(() => res.json("Employee Salary deleted."))
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;