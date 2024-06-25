var express = require('express');
var router = express.Router();
let CONTROL = require('../controller/ASSETS1')

/*CREATE ASSETS*/
router.post('/CreateAssets',CONTROL.CreateAssets);

/*GET SINGLE ASSETS*/
router.get('/ReadAssets/:id',CONTROL.ReadAssets);

/*UPDATE ASSETS*/
router.patch('/UpdateAssets/:id',CONTROL.UpdateAssets);

/*DELETE ASSETS*/
router.delete('/DeleteAssets/:id',CONTROL.DeleteAssets);

module.exports = router;