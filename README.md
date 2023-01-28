# WorkoutTracker

This is a web-app for planning and tracking your workouts week-by-week.

POST: /sets
Body: { "weekid": 1, "exerciseid": 2, "reps": 20, "weight": 60 }

PUT: /sets
Body: { "id": 1,"weekid": 1, "exerciseid": 2, "reps": 20, "weight": 60 }

GET: /sets

POST: /weeks
Body: {}

GET: /weeks

DELETE: /weeks/:id

GET: /exercises

POST: /exercises

Body: {"name":Supino}
