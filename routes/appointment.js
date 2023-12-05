const Appointment = require("../models/Appointment");
const router = require("express").Router()

router.get("/Appointment", async (req, res) => {
    try {
        const Appointments = await Appointment.find();
        const appointmentsCount = await Appointment.countDocuments(); // Fetch count of appointments

        res.status(200).send({
            appointments: Appointments,
            NbAppointments: appointmentsCount // Include count in the response object
        });
    } catch (error) {
        console.log(error);
        res.status(500).send("Error retrieving appointments");
    }
});

router.post("/Appointment", async (req, res) => {
    try {
        // Destructure the request body and set default values for pending and status
        const { NameUser, NameDoctor, DateApp, TimeApp, idDoctor, idUser } = req.body;
        const newAppointment = new Appointment({
            NameUser,
            NameDoctor,
            DateApp,
            TimeApp,
            idDoctor,
            idUser,
            pending: true,
            status: false, 
        });
        await newAppointment.save();
        res.status(200).send("Appointment saved with Success");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error saving the appointment");
    }
});

router.patch("/approve/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const appointment = await Appointment.findById(id);

        if (!appointment) {
            return res.status(404).send("Appointment not found");
        }

        appointment.status = true;
        appointment.pending = false;

        await appointment.save();

        res.status(200).send("Appointment approved successfully");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error approving the appointment");
    }
});

router.patch("/cancel/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const appointment = await Appointment.findById(id);

        if (!appointment) {
            return res.status(404).send("Appointment not found");
        }
        appointment.pending = false;

        await appointment.save();

        res.status(200).send("Appointment canceled successfully");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error canceling the appointment");
    }
});

module.exports=router
