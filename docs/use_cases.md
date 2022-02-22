# Use Cases, Goals, Objectives, Terminology

## Goals & Objectives

1. Track weight progress in specific exercises.
2. Visualize progress over time.
3. Have an easy-to-use interface for starting a new workout and adding exercise data.

## Terminology

### Repetition (rep)

A single exercise movement (e.g. a single bicep curl).

### Set

A collection of repetitions. (e.g. doing 10 bicep curls).

### Superset

Two complete collections of repetitions performed back-to-back with no rest in between. (e.g. 10 bicep curls immediately followed by 10 shoulder presses).

### Exercise

A physical activity with a specific movement pattern. (e.g. running, or curling your arm using your bicep).

### Set group



## Use Cases

### Create workout routine

Create a workout routine plan. A workout consists of at least one exercise to be performed. Workouts can be scheduled on specific days and times. 

### On-demand workouts

Be able to create a new workout at any time, adding exercises as you go along and entering data for those exercises.

### Running workout

When running, I want to be able to record time and distance covered.

### Lifting weights

When lifting weights, I want to be able to record the number of sets/reps/weight used for each.

## Scenes

### Normal workout (single-move sets)

== warmup
Jumping jacks warmup 30 seconds
== first set group
== first set
== set exercise
10 push-ups
rest 30 seconds
== second set group
== first set
== set exercise
10 push-ups
rest 30 seconds
== third set group
== first set
== set exercise
10 push-ups
rest 30 seconds
== second exercise
== first set
10 bicep curls
rest 30 seconds
== second set
10 bicep curls
rest 30 seconds
== third set
10 bicep curls
rest 30 seconds
== cooldown
cooldown 2 minutes
done

### Workout with super sets (double-move sets)

== warmup
Jumping jacks warmup 30 seconds

== first set
10 bicep curls
10 shoulder presses
rest 30 seconds
== second set
10 bicep curls
10 shoulder presses
rest 30 seconds
== third set
10 bicep curls
10 shoulder presses
rest 30 seconds
== cooldown
cooldown 2 minutes
done

### Workout with single-move set and double-move sets

Jumping jacks warmup 30 seconds
10 bicep curls
rest 30 seconds
10 bicep curls
rest 30 seconds
10 bicep curls
rest 30 seconds
