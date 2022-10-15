const express = require('express');
const router = express.Router();
const filesController = require('../controllers/files.controllers');


router.get('/files/list', filesController.GetFileList);
router.get('/files/data', filesController.GetFilesData);


module.exports = router;
