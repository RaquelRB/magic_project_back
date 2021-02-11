const router = require('express').Router();

router.use('/auth', require('./auth.routes'));
router.use('/cards', require('./magic.routes'));

module.exports = router;
