'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "CDLCombinationVehiclesTests";
    return await queryInterface.bulkInsert(options,
      [
        {
          "no": 1,
          "question": "What will happen if the air lines are crossed when you hook up to an old trailer?",
          "answers":
            ["The hand valve will apply the tractor brakes instead of the trailer brakes.",
              "If the trailer has no spring brakes, you could drive away but you would not have trailer brakes.",
              "The brake lights will not come on when you press the brake pedal."
            ], 
              "correctAnswerIndex": 1
        }, 
        {
          "no": 2,
          "question": "The earliest and best way to recognize that the trailer has started to skid is by:",
          "answers":
            ["Seeing it in your mirrors.",
              "Feel for \"pulling\" in the cab.",
              "Hear the wheels skidding."
            ], 
              "correctAnswerIndex": 0
        }, 
        {
          "no": 3,
          "question": "Air brake equipped trailers made before 1975:",
          "answers":
            ["Often do not have spring brakes.",
              "Usually need a glad hand converter.",
              "Cannot be legally operated on interstate highways."
            ], 
              "correctAnswerIndex": 0
        }, 
        {
          "no": 4,
          "question": "How should you test the tractor-semitrailer connection for security?",
          "answers":
            ["Look at it carefully.",
              "Rock the trailer back and forth with the trailer brakes locked.",
              "Pull gently forward in low gear against the locked trailer brakes then look at it carefully."
            ], 
              "correctAnswerIndex": 2
        }, 
        {
          "no": 5,
          "question": "If you cannot make a turn without enteringanother traffic line, you should:",
          "answers":
            ["Turn wide as you complete your turn.",
              "Not make that turn - go to another place where you won't have to cross into another line.",
              "Turn wide before you start your turn."
            ], 
              "correctAnswerIndex": 0
        }, 
        {
          "no": 6,
          "question": "Loss of air pressure in the emergency line causes:",
          "answers":
            ["The relay valves to close.",
              "An increase in air pressure to the service brakes",
              "The trailer's emergency brakes to come on."
            ], 
              "correctAnswerIndex": 2
        }, 
        {
          "no": 7,
          "question": "When connecting the glad hands, press the two seals of the couplers together at a _____ degree angle to one another.",
          "answers":
            ["45",
              "90",
              "180"
            ], 
              "correctAnswerIndex": 1
        }, 
        {
          "no": 8,
          "question": "Compared to a straight truck or bus, there are _____ things to inspect in combination vehicle.",
          "answers":
            ["fewer",
              "the same number of",
              "more"
            ], 
              "correctAnswerIndex": 2
        }, 
        {
          "no": 9,
          "question": "How much space should be allowed between upper and lower fifth wheel after coupling?",
          "answers":
            ["About 1/4 inch.",
              "Just enough to see light through it.",
              "None."
            ], 
              "correctAnswerIndex": 2
        }, 
        {
          "no": 10,
          "question": "The air leakage rate for a combination vehicle (engine off, brakes off) should be less than _____ psi per minute.",
          "answers":
            ["1/2.",
              "2",
              "3"
            ], 
              "correctAnswerIndex": 2
        }, 
        {
          "no": 11,
          "question": "If the service air line comes apart while you are driving a combination vehicle but the emergency line stays together, what will happen right away?",
          "answers":
            ["The trailer's tank will exhaust through the open line.",
              "The emergency trailer brakes will come on.",
              "Nothing is likely to happen until you try to apply the brakes."
            ], 
              "correctAnswerIndex": 2
        }, 
        {
          "no": 12,
          "question": "The front trailer supports are up and the trailer is resting on the tractor. Make sure:",
          "answers":
            ["There is enough clearance between the upper and lower fifth wheel.",
              "The safety latch is in the unlocked position.",
              "There is enough clearance between the tractor frame and the landing gear."
            ], 
              "correctAnswerIndex": 2
        }, 
        {
          "no": 13,
          "question": "A tractor with a(n) ______ trailer requires the shortest amount of stopping distance.",
          "answers":
            ["empty",
              "lightly loaded",
              "fully loaded"
            ], 
              "correctAnswerIndex": 2
        }, 
        {
          "no": 14,
          "question": "A tractor-trailer vehicle combination is most likely to roll over in turn when the configuration includes:",
          "answers":
            ["a 45 ft. and a 27 ft. trailer.",
              "triple 27 ft. trailers.",
              "double 45 ft. trailers."
            ], 
              "correctAnswerIndex": 1
        }, 
        {
          "no": 15,
          "question": "You are coupling tractor to a semitrailer. You have connected the airlines. Before backing under the trailer you should:",
          "answers":
            ["Supply air to the trailer system, then pull out the air supply knob.",
              "Pull ahead to test the glad hands connections.",
              "Make sure that the trailer brakes are off."
            ], 
              "correctAnswerIndex": 0
        }, 
        {
          "no": 16,
          "question": "Glad hands are used for connecting the:",
          "answers":
            ["Electric lines from the tract to the trailer.",
              "Kingpin from the trailer to the locking jaws of the fifth wheel.",
              "Service and emergency air lines from the vehicle to the trailer."
            ], 
              "correctAnswerIndex": 2
        }, 
        {
          "no": 17,
          "question": "After you supply air to the trailer, make sure the air lines are not crossed and the trailer brakes are working. This is done by:",
          "answers":
            ["Turning on the parking brakes from the cab.",
              "Watching your mirrors to see if the trailer lights come on.",
              "Applying and releasing the trailer brakes and listening for brake sounds."
            ], 
              "correctAnswerIndex": 2
        }, 
        {
          "no": 18,
          "question": "The hand valve should be used:",
          "answers":
            ["only with a foot brake.",
              "to test the trailer brakes.",
              "as a parking brake."
            ], 
              "correctAnswerIndex": 1
        }, 
        {
          "no": 19,
          "question": "Having antilock brakes on only your trailer:",
          "answers":
            ["Will give you more control over the vehicle when braking.",
              "Will increase the likelihood of a rear wheel power until skid when braking.",
              "Will increase the likelihood of jackknifing when braking."
            ], 
              "correctAnswerIndex": 0
        }, 
        {
          "no": 20,
          "question": "There are two things that a driver can do to prevent a rollover. They are: (1) Keep the cargo as close to the ground as possible; and (2):",
          "answers":
            ["Make sure that the brakes are properly adjusted.",
              "Keep both hands firmly on the steering wheel.",
              "Go slow around turns."
            ], 
              "correctAnswerIndex": 2
        }, 
        {
          "no": 21,
          "question": "A trailer is most likely to jackknife when it is ____.",
          "answers":
            ["loaded to full capacity",
              "over loaded",
              "empty"
            ], 
              "correctAnswerIndex": 2
        }, 
        {
          "no": 22,
          "question": "While driving behind other vehicle under good condition you should allow at least one second between your vehicle and the vehicle ahead for each _______ (how many) feet of your vehicle length?",
          "answers":
            ["10",
              "20",
              "30"
            ], 
              "correctAnswerIndex": 0
        }, 
        {
          "no": 23,
          "question": "After you have coupled the trailer you should have to raise the landing gear by using:",
          "answers":
            ["Low gear",
              "Intermediate",
              "High gear"
            ], 
              "correctAnswerIndex": 0
        }, 
        {
          "no": 24,
          "question": "When do you need to use chocks to park a trailer?",
          "answers":
            ["Never.",
              "Always.",
              "Only when it will be parked on an incline."
            ], 
              "correctAnswerIndex": 1
        }, 
        {
          "no": 25,
          "question": "You supply air to the trailer tanks by:",
          "answers":
            ["Pushing in the trailer air supply valve.",
              "Pulling out the trailer air supply valve.",
              "Connecting the service line glad hands."
            ], 
              "correctAnswerIndex": 0
        }, 
        {
          "no": 26,
          "question": "Why should you be sure that the fifth wheel plate is greased as required?",
          "answers":
            ["To ensure a good electrical connection.",
              "To prevent steering problems.",
              "To reduce heat and noise."
            ], 
              "correctAnswerIndex": 1
        }, 
        {
          "no": 27,
          "question": "Semitrailers made before 1975 that are equipped with the air brakes:",
          "answers":
            ["Usually need a glad hand converter.",
              "Often do not have spring brakes.",
              "Have only a service air line."
            ], 
              "correctAnswerIndex": 1
        }, 
        {
          "no": 28,
          "question": "The front trailer supports are up and the trailer is resting on the tractor. Make sure:",
          "answers":
            ["There is enough clearance between the top of the tractor tires and nose of the trailer.",
              "There is enough clearance between the tractor frame and the landing gear.",
              "Both a and b are correct."
            ], 
              "correctAnswerIndex": 2
        }, 
        {
          "no": 29,
          "question": "When you are allowed to get out of your vehicle while backing?",
          "answers":
            ["When you are unsure of your path of travel.",
              "When your trailer begins to drift to passenger side",
              "You should never get out of your vehicle when backing."
            ], 
              "correctAnswerIndex": 0
        }, 
        {
          "no": 30,
          "question": "Off-tracking or \"cheating\" causes of which of these to follow the wider path while making a turn?",
          "answers":
            ["Triple towing a 45 feet trailer.",
              "Tractor with two 27 feet trailers.",
              "53-feet bobtail."
            ], 
              "correctAnswerIndex": 0
        }, 
        {
          "no": 31,
          "question": "Which part of the kingpin should the locking jaws close around?",
          "answers":
            ["The shank.",
              "The head.",
              "The base."
            ], 
              "correctAnswerIndex": 0
        }, 
        {
          "no": 32,
          "question": "You should not back a tractor under a trailer until the whole air system is:",
          "answers":
            ["Empty.",
              "At normal pressure.",
              "Between 60 and 80 psi."
            ], 
              "correctAnswerIndex": 1
        }, 
        {
          "no": 33,
          "question": "When should you use the hand valve to park a combination vehicle?",
          "answers":
            ["To park at loading docks.",
              "To park on a grade.",
              "Never."
            ], 
              "correctAnswerIndex": 2
        }, 
        {
          "no": 34,
          "question": "Before you back under a trailer, make sure that:",
          "answers":
            ["The trailer brakes are locked.",
              "The air brakes are off.",
              "The air supply knob is in."
            ], 
              "correctAnswerIndex": 0
        }, 
        {
          "no": 35,
          "question": "In normal driving, some drivers use the hand valve before the brake pedal to prevent a jackknife. Which of these statements is true?",
          "answers":
            ["It should not be done.",
              "It results in less skidding than using the brake pedal alone.",
              "It is the best way to brake and keep the vehicle in a straight line."
            ], 
              "correctAnswerIndex": 0
        }, 
        {
          "no": 36,
          "question": "The fifth wheel locking lever is not locked after the jaws close around the kingpin. This means that:",
          "answers":
            ["The trailer will not swivel on the fifth wheel.",
              "The parking lock is off and you may drive away.",
              "The coupling is not right and should be fixed before driving the coupled unit."
            ], 
              "correctAnswerIndex": 2
        }, 
        {
          "no": 37,
          "question": "Your emergency air line breaks or gets pulled apart while you are driving. The loss of pressure will cause the:",
          "answers":
            ["Air compressor to unload instead of pumping air.",
              "Tractor's air to dump into the trailer tank through the service line.",
              "Emergency trailer brakes to come on."
            ], 
              "correctAnswerIndex": 2
        }, 
        {
          "no": 38,
          "question": "After connecting the air lines but before backing under the trailer, you should:",
          "answers":
            ["Supply air to the trailer system, then pull out the air supply knob.",
              "Make sure that the trailer brakes are off.",
              "Walk around the rig to be sure that it is clear."
            ], 
              "correctAnswerIndex": 0
        }, 
        {
          "no": 39,
          "question": "Which of these statements is true?",
          "answers":
            ["The brakes and suspension systems of combination vehicles work best with a light load.",
              "Light vehicles need more braking power to stop than heavy ones.",
              "\"Bobtail\" tractors can take longer to stop than a combination vehicle loaded to maximum gross weight."
            ], 
              "correctAnswerIndex": 2
        }, 
        {
          "no": 40,
          "question": "If your antilock braking system is not working on your trailer, you should:",
          "answers":
            ["Drive at a lower speed and get the system serviced soon.",
              "Not drive until it is repaired.",
              "Drive normally, but get the system serviced soon."
            ], 
              "correctAnswerIndex": 2
        }, 
        {
          "no": 41,
          "question": "Air and electrical lines from the tractor to the trailer should be:",
          "answers":
            ["Pulled tight, with very little slack.",
              "Secured, but with enough slack for turns.",
              "Resting on the frame of the tractor."
            ], 
              "correctAnswerIndex": 1
        }, 
        {
          "no": 42,
          "question": "You will know if the trailer ABS brakes are NOT working properly by:",
          "answers":
            ["Yellow ABS malfunction lamps on the left side of the trailer stays ON.",
              "Yellow ABS malfunction lamps on the right side of the trailer stays ON.",
              "Red malfunction lamps on the trailer brake cylinders stays ON."
            ], 
              "correctAnswerIndex": 0
        }, 
        {
          "no": 43,
          "question": "The safest way to make turn without entering another traffic lane is:",
          "answers":
            ["You should turn wide before you start the turn.",
              "You should turn wide as you complete the turn.",
              "You should not make a turn and move to another place where you can make a turn without crossing other lane."
            ], 
              "correctAnswerIndex": 1
        }, 
        {
          "no": 44,
          "question": "What gear should the tractor transmission be in after you have uncoupled the trailer and are inspecting the trailer supports?",
          "answers":
            ["Neutral.",
              "Low reverse.",
              "High reverse."
            ], 
              "correctAnswerIndex": 0
        }, 
        {
          "no": 45,
          "question": "When driving a set of doubles, it is necessary to close the ____ shut-off valve in the last trailer.",
          "answers":
            ["front",
              "mid-section",
              "back"
            ], 
              "correctAnswerIndex": 2
        }, 
        {
          "no": 46,
          "question": "After you lock the kingpin into the fifth wheel, you should check the connection by:",
          "answers":
            ["Pulling forward 50 feet, turning right and then left.",
              "Pulling the tractor ahead sharply to release the trailer brakes.",
              "Pulling the tractor ahead gently with the trailer brakes locked."
            ], 
              "correctAnswerIndex": 2
        }, 
        {
          "no": 47,
          "question": "Why should you lock the tractor glad hands to each other (or dummy couplers) when you are not towing a trailer?",
          "answers":
            ["The connected brake circuit becomes a back up air tank.",
              "It will keep dirt and water out of the lines.",
              "If you didn't, you could never build system pressure."
            ], 
              "correctAnswerIndex": 1
        }, 
        {
          "no": 48,
          "question": "You are coupling a tractor to a semitrailer and have backed up but are not under it. What should you hook up before backing under?",
          "answers":
            ["The emergency and service air lines.",
              "The electrical service cable.",
              "Nothing. Back up and lock the fifth wheel."
            ], 
              "correctAnswerIndex": 0
        }, 
        {
          "no": 49,
          "question": "You have crashed with another vehicle. What you have to do first?",
          "answers":
            ["Use reverse gear to back up off the crash.",
              "Turn on your four-way flashers.",
              "Get out of your vehicle and away from the scene."
            ], 
              "correctAnswerIndex": 1
        }, 
        {
          "no": 50,
          "question": "The tractor protection valve will close and the trailer emergency brakes will come on when there is a major leak in the _______ brake line.",
          "answers":
            ["Service.",
              "Parking.",
              "Emergency."
            ], 
              "correctAnswerIndex": 2
        }, 
        {
          "no": 51,
          "question": "To unlock the fifth wheel the locking lever should be placed in the ______ position.",
          "answers":
            ["neutral.",
              "closed",
              "open"
            ], 
              "correctAnswerIndex": 2
        }, 
        {
          "no": 52,
          "question": "You are driving a combination vehicle when the trailer breaks away, pulling apart both air lines. You would expect the trailer brakes to come on and:",
          "answers":
            ["The trailer supply valve to stay open.",
              "The tractor to lose all air pressure.",
              "The tractor protection valve to close."
            ], 
              "correctAnswerIndex": 2
        }, 
        {
          "no": 53,
          "question": "When checking the trailer's emergency brakes, the tractor protection control valve should be placed in the ______ position.",
          "answers":
            ["normal",
              "emergency",
              "neutral"
            ], 
              "correctAnswerIndex": 1
        }, 
        {
          "no": 54,
          "question": "Air lines on a combination vehicles are often colored to prevent them from mixing up. The emergency line is____; the service line is ____.",
          "answers":
            ["red, blue",
              "black, yellow",
              "blue, red"
            ], 
              "correctAnswerIndex": 0
        }, 
        {
          "no": 55,
          "question": "To unlock the fifth wheel, pull the release handle to the _____ position.",
          "answers":
            ["neutral",
              "closed",
              "open"
            ], 
              "correctAnswerIndex": 2
        }, 
        {
          "no": 56,
          "question": "The trailer air supply control valve should automatically close when air pressure falls to between _______ psi.",
          "answers":
            ["20 and 45",
              "60 and 85",
              "100 and 125"
            ], 
              "correctAnswerIndex": 0
        }, 
        {
          "no": 57,
          "question": "To stop a trailer skid you should:",
          "answers":
            ["Use the trailer hand brakes.",
              "Release the service brakes.",
              "Countersteer."
            ], 
              "correctAnswerIndex": 1
        }, 
        {
          "no": 58,
          "question": "When backing a tractor under a trailer you should:",
          "answers":
            ["Always use the lowest reverse gear.",
              "Always approach the trailer at a slight angle.",
              "Do it quickly to ensure that the kingpin is locked into the fifth wheel."
            ], 
              "correctAnswerIndex": 0
        }, 
        {
          "no": 59,
          "question": "When uncoupling the trailer, after you have shut off the trailer air supply and locked the trailer brakes, you should:",
          "answers":
            ["Back up gently to ease pressure on the fifth wheel locking jaws.",
              "Immediately put on your tractor parking brakes.",
              "Begin to lower the trailer landing gear."
            ], 
              "correctAnswerIndex": 0
        }, 
        {
          "no": 60,
          "question": "When coupling, the proper position of the fifth wheel is:",
          "answers":
            ["Level with the ground.",
              "Tilted down toward the end of the trailer.",
              "Tilted up toward the end the trailer."
            ], 
              "correctAnswerIndex": 1
        }, 
        {
          "no": 61,
          "question": "After the trailer has been coupled to the tractor, the tractor protection control valve should be placed in _____ position.",
          "answers":
            ["down",
              "up",
              "normal"
            ], 
              "correctAnswerIndex": 2
        }, 
        {
          "no": 62,
          "question": "In general, the higher the \"center of gravity\" of your truck, the:",
          "answers":
            ["Easier it is to turn around corners.",
              "More stable it is when turning.",
              "Easier it is to turn over."
            ], 
              "correctAnswerIndex": 2
        }, 
        {
          "no": 63,
          "question": "You are about to back your tractor under a semitrailer. The trailer is at the right height when the:",
          "answers":
            ["The kingpin is about 1 1/4 inches above the fifth wheel.",
              "The end of the kingpin is even with the top of the fifth wheel.",
              "It will be raised slightly when the trailer is backed under it."
            ], 
              "correctAnswerIndex": 2
        }, 
        {
          "no": 64,
          "question": "While checking if the trailer is securely coupled to the trailer the landing gears should be:",
          "answers":
            ["Fully raised.",
              "Slightly raised.",
              "Fully lowered."
            ], 
              "correctAnswerIndex": 1
        }, 
        {
          "no": 65,
          "question": "When you get ready to back under a semitrailer you should line up:",
          "answers":
            ["The kingpin to engage the driver's side locking jaw first.",
              "Directly in front of the trailer.",
              "The left rear outer dual wheel with the kingpin."
            ], 
              "correctAnswerIndex": 1
        }, 
        {
          "no": 66,
          "question": "There are two things that a driver can do to prevent a rollover. They are: (1) Go slow around turns; and (2):",
          "answers":
            ["Keep both hands firmly on the steering wheel.",
              "Keep the cargo as close to the ground as possible.",
              "Make sure that the brakes are properly balanced."
            ], 
              "correctAnswerIndex": 1
        }, 
        {
          "no": 67,
          "question": "You have coupled with a semitrailer. Where should you put the front trailer supports before driving away?",
          "answers":
            ["Raised 1/2 way with the crank handle secured in its bracket.",
              "Fully raised with the crank handle secured in its bracket.",
              "Raised 3/4 way with crank handle removed."
            ], 
              "correctAnswerIndex": 1
        }, 
        {
          "no": 68,
          "question": "You will know if the trailer you are driving has antilock brakes by:",
          "answers":
            ["Yellow ABS malfunction lamps on the left side of the trailer.",
              "Red malfunction lamps on the trailer brake cylinders.",
              "Yellow ABS malfunction lamps on the right side of the trailer."
            ], 
              "correctAnswerIndex": 0
        }, 
        {
          "no": 69,
          "question": "You have a major leak in the service line and you put on the brakes. Service air will escape and cause the:",
          "answers":
            ["Trailer emergency brakes to come on.",
              "Trailer tank pressure to be lost.",
              "Tractor spring brakes to lock on."
            ], 
              "correctAnswerIndex": 0
        }, 
        {
          "no": 70,
          "question": "The air leakage rate for a combination vehicle (engine off, brakes on) should be less than _____ psi per minute.",
          "answers":
            ["2",
              "3",
              "4"
            ], 
              "correctAnswerIndex": 2
        }, 
        {
          "no": 71,
          "question": "When you are uncoupling a loaded trailer, you should lower the landing gear until it:",
          "answers":
            ["Makes firm contact with the ground, then crank it in low gear a few extra turns.",
              "Make contact with the ground and lifts the trailer off of the fifth wheel.",
              "Just reaches the ground."
            ], 
              "correctAnswerIndex": 0
        }, 
        {
          "no": 72,
          "question": "Off-tracking or \"cheating\" causes which of these to follow the widest path while making a turn?",
          "answers":
            ["5-axle tractor towing a 45 feet trailer.",
              "5-axle tractor towing two 27 feet trailers.",
              "A bobtail."
            ], 
              "correctAnswerIndex": 0
        }, 
        {
          "no": 73,
          "question": "The safety catch for the fifth wheel locking lever must be ______ for a coupling to be complete.",
          "answers":
            ["over the locking lever",
              "straight up",
              "through the locking lever"
            ], 
              "correctAnswerIndex": 0
        }, 
        {
          "no": 74,
          "question": "If the spring brakes don't release when you push the trailer air supply valve, you should:",
          "answers":
            ["Check air line connections.",
              "Cross the air lines.",
              "Check the electrical service cable."
            ], 
              "correctAnswerIndex": 0
        }, 
        {
          "no": 75,
          "question": "Where should the tractor be when you inspect landing gear after un-coupling the trailer?",
          "answers":
            ["With the tractor frame under the trailer.",
              "Completely cleared from the trailer.",
              "With the fifth wheel directly beneath the kingpin."
            ], 
              "correctAnswerIndex": 0
        }, 
        {
          "no": 76,
          "question": "When coupling, the proper position of the fifth wheel is:",
          "answers":
            ["Level with the ground.",
              "Tilted up toward the end the tractor.",
              "Tilted down toward the end the tractor."
            ], 
              "correctAnswerIndex": 2
        }
      ])
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("CDLCombinationVehiclesTests");
  }
};
