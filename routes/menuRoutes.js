const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');

// POST endpoint to create a new menu item
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newMenuItem = new MenuItem(data);
        const response = await newMenuItem.save();
        console.log('data saved successfully');
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// GET endpoint to fetch all menu items
router.get('/', async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const menuItemId = req.params.id;

        // Validate ObjectId
        if (!mongoose.Types.ObjectId.isValid(menuItemId)) {
            return res.status(404).json({ error: 'Menu not found' });
        }

        const updatedmenuItemData = req.body;
        const response = await MenuItem.findByIdAndUpdate(menuItemId, updatedmenuItemData, {
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
        const menuItemId = req.params.id;

        // Log the ID being processed
        console.log(`Received delete request for ID: ${menuItemId}`);

        // Validate ObjectId
        if (!mongoose.Types.ObjectId.isValid(menuItemId)) {
            console.log(`Invalid ID format: ${menuItemId}`);
            return res.status(404).json({ error: 'Menu not found' });
        }

        const response = await MenuItem.findByIdAndDelete(menuItemId);
        if (!response) {
            console.log(`No Menu found with ID: ${menuItemId}`);
            return res.status(404).json({ error: 'Menu not found' });
        }

        console.log(`Person deleted with ID: ${menuItemId}`);
        res.status(200).json({ message: 'Menu deleted successfully' });
    }catch(error){
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
})


module.exports = router;