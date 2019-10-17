const router = require('express').Router();

const Users = require('./users-model.js');

router.get('/', (req, res) => {
  Users.find()
    .then(users => {
      res.json({ users });
    })
    .catch(err => {
      res.status(500).json({message: `server 500 error ${err}`});
});
})
router.post('/register', (req, res) => {
    let user = req.body;
  
    Users.add(user)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(error => {
        console.log(error)
        res.status(500).json(error);
      });
  });
  
module.exports = router