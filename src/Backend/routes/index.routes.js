const {Router} = require('express');
const router = Router();

const {renderIndex, renderAbout, renderFirst} = require('../controllers/index.controller');

router.get('/',renderIndex);
router.get('/about',renderAbout);
router.get('/first',renderFirst);

module.exports = router;