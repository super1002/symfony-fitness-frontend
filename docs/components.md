# Components

Expected components to be used in application.

## PlannedWorkoutEditor

Page dedicated to editing a planned workout.

## WeightEntry

Widget that allows to input a specific weight, with +/- buttons for increasing/decreasing amount.

Properties:
- amount

Elements:
- amount: input[type=number]
- increment: button (+)
- decrement: button (-)

## TimeEntry

Widget that allows to input a specific amount of time in hours/minutes/seconds.

Properties:
- seconds
  - hours and minutes are converted

Elements:
- hours: input[type=number]
- minutes: input[type=number]
- seconds: input[type=number]

## DistanceEntry

Widget that allows for entering a 
