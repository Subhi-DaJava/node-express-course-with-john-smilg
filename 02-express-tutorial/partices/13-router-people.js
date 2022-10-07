const express = require('express');
const router = express.Router();

const {
    getPeople,
    createPerson, 
    createPersonPostman,
    updatePerson,
    deletePerson
} = require('../controllers/people') // two leveles up

// router.get('/', getPeople);
// router.post('/', createPerson);
// router.post('/postman', createPersonPostman);
// put methode 
// router.put('/:id', updatePerson);
// delete methode 
// router.delete('/:id', deletePerson);

// another way to set up the router
router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPersonPostman);
router.route('/:id').put(updatePerson).delete(deletePerson);


module.exports = router;