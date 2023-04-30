const {Router} = require('express');
const saladRouter = require('./salad');
const ingredientRouter = require('./ingredient');
const router = Router();

router.use('/salads', saladRouter);
router.use('/ingredients', ingredientRouter);

module.exports = router;