const qualifier_workouts = [{
	date: 2015,
	name: 'Workout #1',
	type: 'Max lift',
	totalTime: 6,
	partAMovement: 'snatch',
	partBMovement: 'muscle-up',
	description: '5 min to find your three rep max snatch, followed by 1 min max effort bar muscle-ups',
	}, {
	date: 2015,
	name: 'Workout #2',
	type: "for time",
	timecap: 10,
	movements: ["C2B","American KB swing",'BoxJumps'],
	description: '21-15-9 of C2B, American KB swings, and 24" BoxJumps'
	}, {
	date: 2015,
	name: 'Workout #3',
	type: 'AMRAP',
	timecap: 4,
	movements: ['Deadlifts', 'HSPU'],
	description: "2 Deadlifts 275#, 2 HSPU, 4 Deadlifts 275#, 4 HSPU, etc..."
	}, {
	date: 2015,
	name: 'Workout #4',
	type: 'AMRAP',
	timecap: 12,
	movements: ['wallball', 'PowerClean', 'Burpee over bar'],
	description: '60 wallballs 20#, 40 PowerCleans 115#, 20 Burpee over bar'
	}, {
	date: 2016,
	name: 'Workout #1',
	type: 'Max lift',
	timecap: 5,
	movements: ['snatch'],
	description: '5 min to find max snatch'
	}, {
	date: 2016,
	name: 'Workout #2',
	type: 'AMRAP',
	timecap: 12,
	movements: ['double unders', 'burpee', 'muscle-up'],
	description: '42 double unders, 21 burpees, 7 muscle-ups'
	}, {
	date: 2016,
	name: 'Workout #3',
	type: 'AMRAP',
	timecap: 6,
	movements: ['T2B', 'overhead squat'],
	description: 'AMRAP of 25 T2B to 25 overhead squats 95#'
	}, {
	date: 2016,
	name: 'Workout #4',
	type: 'Max lift',
	timecap: 5,
	movements: ['clean and jerk'],
	description: '5 min to find max clean and jerk'
	}, {
	date: 2016,
	name: 'Workout #5',
	type: 'for time',
	timecap: 12,
	movements: ['wallball', 'powersnatch', 'pull up'],
	description: 'for time: 30-20-10 of wallballs 20#, powersnatch 65#, and pull ups'
	}, {
	date: 2016,
	name: 'Workout #6',
	type: 'for time',
	timecap: false,
	movements: ['thruster', 'Deadlifts', 'box jump over', 'row'],
	description: '10 thrusters 135#, 10 deadlifts 225#, 10 box jump over 24", and a 200m row'
	}]

const comp_workouts = [{
	date: 2015,
	name: 'Workout #1',
	type: 'for time',
	timecap: 8,
	movements: ['Double Under', 'thruster', 'rope climb'],
	description: 'for time: 100 double unders, 21 - 15 - 9 of thrusters 115#, 5 - 3 - 1 rope climbs'
	}, {
	date: 2015,
	name: 'Workout #2',
	type: 'for time',
	timecap: 12,
	movements: ['run', 'American KB swing', 'C2B', 'Pistol squat', 'BoxJumps', 'HS walk'],
	description: '800m run, 40 KB Swings, 30 C2B, 20 pistol squats, 10 BoxJumps 30", 15m HS walk',
	}, {
	date: 2015,
	name: 'Workout #3',
	type: 'Max lift',
	timecap: 5,
	movements: ['overhead squat'],
	description: '5 min to find your 3 rep max of overhead squat'
	}, {
	date: 2015,
	name: 'Workout #4',
	type: 'rounds for time',
	timecap: 10,
	movements: ['T2B', 'farmer carry', 'front squat'],
	description: '4 rounds of: 15 T2B, farmers carry, 10 front squat, farmers carry'
	}]