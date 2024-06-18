const express = require('express');
const router = express.Router();
const Person = require('./../models/person');
const mongoose = require('mongoose');
router.post('/', async (req, res) => {
    try {

        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log('data saved successfully');
        res.status(200).json(response);

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' })
    }
})

router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' })
    }
})


router.get('/:workType',async(req,res)=>{
    try{
        const workType = req.params.workType;
        if(workType=='chef' || workType == 'manager' || workType == 'waiter'){
         const response = await Person.find({work:workType});
         console.log('response fetched');
         res.status(200).json(response);
        }else{
            res.status(404).json({error: 'Invalid work type'});
        }
    }catch(error){
        console.log(error);
        res.status(500).json({error:'Internal server error'})
    }

})

router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id;

        // Validate ObjectId
        if (!mongoose.Types.ObjectId.isValid(personId)) {
            return res.status(404).json({ error: 'Person not found' });
        }

        const updatedPersonData = req.body;
        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true, // Return the updated document
            runValidators: true,
        });



        console.log('data updated');
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.delete('/:id', async (req,res)=>{
    try{
        const personId = req.params.id;

        // Log the ID being processed
        console.log(`Received delete request for ID: ${personId}`);

        // Validate ObjectId
        if (!mongoose.Types.ObjectId.isValid(personId)) {
            console.log(`Invalid ID format: ${personId}`);
            return res.status(404).json({ error: 'Person not found' });
        }

        const response = await Person.findByIdAndDelete(personId);
        if (!response) {
            console.log(`No person found with ID: ${personId}`);
            return res.status(404).json({ error: 'Person not found' });
        }

        console.log(`Person deleted with ID: ${personId}`);
        res.status(200).json({ message: 'Person deleted successfully' });
    }catch(error){
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

module.exports = router;