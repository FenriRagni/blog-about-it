const router = require('experess').Router();

router.get('/', (req, res) => {
    res.render('all');
});

module.exports = router;