const router = require("express").Router();
const Workout = require("../models/Workout");

// Here we are getting all our workouts
router.get("/api/workouts", function (req,res) {
    Workout.find({})
    .then(dbWorkOut => {
        res.json(dbWorkOut);
    })
    .catch(err => {
        res.json(err)
    });
});

// Here we are creating the workouts
router.post("api/workouts", ({ body }, res) => {
    Workout.create(body)
    .then(dbWorkOut => {
        res.json(dbWorkOut);
    })
    .catch(err => {
        res.json(err);
    });
});

// Here we are allowing changes to existing/previous workouts
router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
        params.id, {$push: { exercises: body } },
        { new: true, runValidators: true}
    )
    .then(dbWorkout => {
        res.json(dbWorkOut);
    })
    .catch(err => {
        res.json(err);
    });
});

// getting all the statistics of our posted workouts
router.get('/api/workouts/range', function (req, res) {
    Workout.find()
      .then(dbWorkout => {
        res.json(dbWorkout);   
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  // we are posting stats from our workouts
  router.post('/api/workouts/range', function (req, res) {
    Workout.create({})
      .then(dbWorkout => {
        res.json(dbWorkout)
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  module.exports = router;