const express = require('express');
const router = express.Router();
const filesController = require('../controllers/filesControllers');


router.get('/files/list', filesController.GetListFiles);
router.get('/files/data', filesController.GetDataFiles);




module.exports = router;
