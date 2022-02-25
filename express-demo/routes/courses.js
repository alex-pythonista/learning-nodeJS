const express = require('express');
const router = express.Router();

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
];

router.get('/', (req, res) => {
    res.send(courses);
});

router.get('/:id', (req, res) => {
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not found.');
    else res.send(course);
});

router.post('/', (req, res) => {

    const {error} = validateCourse(req.body); // object distructuring

    if (error) return res.status(400).send(result.error.details[0].message);

    let course = {
        id: courses.length + 1,
        name: req.body.name,
    }
    courses.push(course);
    res.send(course);
});

router.put('/:id', (req, res) => {
    // look up the course
    // if not existing, return 404
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not found.');

    // validate
    // if invalid, return 400 - bad request
    const {error} = validateCourse(req.body);

    if (error) return res.status(400).send(result.error.details[0].message);

    // update course
    course.name = req.body.name;
    // return the updated course
    res.send(course);

});

router.delete('/:id', (req, res) => {
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not found.');

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});

function validateCourse(course) {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    })

    return schema.validate(course);
}

module.exports = router;