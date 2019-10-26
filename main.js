let raceNumber = Math.floor(Math.random() * 1000);

const earlyRegistration = false;
const runnersAge = 18;

if (earlyRegistration === true && runnersAge > 18) {
  raceNumber += 1000
};

if (earlyRegistration === true && runnersAge > 18) {
  console.log(`Your race number is ${raceNumber}. You will race at 9:30 am.`)
} else if (runnersAge > 18 && earlyRegistration === false) {
  console.log(`Your race number is ${raceNumber}. You will race at 11:00 am.`)
} else if (runnersAge < 18) {
  console.log(`Your race number is ${raceNumber}. You will race at 12:30 pm.`)
} else {
  console.log('Please see the registration desk.')
};