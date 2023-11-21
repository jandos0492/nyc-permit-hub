'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("CDLAirBrakesTests",
      [
        {
          "no": 1,
          "question": "The braking power of the spring brakes:",
          "answers": [
            "Is not affected by the condition of the service brakes.",
            "Depends on the service brakes being in adjustment.",
            "Increases when the service brakes are hot."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 2,
          "question": "The air leakage rate for combination vehicles (engine off, brakes on) should be less than ___ psi per minute.",
          "answers": [
            "2",
            "3",
            "4"
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 3,
          "question": "Total stopping distance for air brakes is longer than that for hydraulic brakes due to ______ distance.",
          "answers": [
            "brake lag",
            "reaction",
            "effective braking"
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 4,
          "question": "The driver must be able to see a low air pressure warning which comes on before pressure in the service air tanks falls below _____ psi.",
          "answers": [
            "40",
            "60",
            "80"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 5,
          "question": "Your truck or bus has a dual air brake system. If a low air pressure warning comes on for only one system, what should you do?",
          "answers": [
            "Reduce your speed, and drive to the nearest garage for repairs.",
            "Reduce your speed, and test the remaining system while under way.",
            "Stop right away and safely park. Continue only after the system is fixed."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 6,
          "question": "Your vehicle has a dual air brake system. If a low air pressure warning comes on for only one system, you should:",
          "answers": [
            "Bring the vehicle to a safe stop and continue only after the system is fixed.",
            "Reduce your speed, and test the remaining system while under way.",
            "Reduce your speed, and drive to the nearest garage for repairs."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 7,
          "question": "An air brake system is fully charged at ___ psi.",
          "answers": [
            "75",
            "100",
            "125"
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 8,
          "question": "Air braking takes more time than hydraulic braking because air:",
          "answers": [
            "Brakes use different brake drums.",
            "Takes more time to flow through the lines than hydraulic fluid.",
            "Brakes require heavier return springs."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 9,
          "question": "In air brakes vehicles, the parking brakes should be used:",
          "answers": [
            "As little as possible.",
            "Any time when vehicle is parked.",
            "To hold your speed when going downhill."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 10,
          "question": "The stop light switch:",
          "answers": [
            "Tells you when the air brake system is low on air pressure.",
            "Tells you when you need to use your emergency brakes.",
            "Turns on your brake lights to warn drivers behind you."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 11,
          "question": "During normal driving, spring brakes are usually held back by:",
          "answers": [
            "Bolts.",
            "Air pressure.",
            "Spring pressure."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 12,
          "question": "Repeatedly partially pressing and releasing the brake pedal may result in:",
          "answers": [
            "A loss of brake air pressure.",
            "A build up of brake air pressure.",
            "No change of brake air pressure."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 13,
          "question": "The proper use of the brakes when going down a long steep grade after selecting a proper gear is to brake until your speed is about ______ mph below the posted speed for your safety and release your brakes.",
          "answers": [
            "5",
            "10",
            "15"
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 14,
          "question": "Excessive heat caused by using your brakes too often can also cause:",
          "answers": [
            "Modulating control valve to wear out.",
            "Brake lines to plug.",
            "Brakes to fade or fail."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 15,
          "question": "Excessive use of the service brakes results in overheating which can lead to:",
          "answers": [
            "Improper adjustment of the S-cam.",
            "Increased contact between the brake drums and brake linings.",
            "Expansion of the brake drums."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 16,
          "question": "Why should you drain water from compressed air tanks?",
          "answers": [
            "The low boiling point of water reduces braking power.",
            "Water can freeze in cold weather and cause brake failure.",
            "To keep from fowling the air compressor oil."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 17,
          "question": "The supply pressure gauge shows how much pressure:",
          "answers": [
            "Is in the air tanks.",
            "Tractor brake lines.",
            "Trailer brake lines."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 18,
          "question": "Modern air brake systems combine three different systems. They are the service, the parking and the _______ brakes.",
          "answers": [
            "emergency",
            "foot",
            "S-cam"
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 19,
          "question": "If you must make an emergency stop, you should brake so you:",
          "answers": [
            "Use the hand brake before the brake pedal.",
            "Can steer and so your vehicle stays in a straight line.",
            "Use the full power of the brakes to lock them."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 20,
          "question": "The S-cam:",
          "answers": [
            "Controls the flow air to each of the brake chambers.",
            "Pulls the brake shoes away from the drum and allow the wheels to roll freely.",
            "Forces the brake shoes against the inside of the brake drum."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 21,
          "question": "The brake system that applies and releases the brakes when the driver uses the brake pedal is the ______ brake system.",
          "answers": [
            "emergency",
            "service",
            "parking"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 22,
          "question": "The use of air brakes on a long and steep downgrade under normal conditions is only a supplement to:",
          "answers": [
            "The use of the spring brakes.",
            "The use of the front brakes limiting valve.",
            "The braking effect of the engine."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 23,
          "question": "Some air brake systems have an alcohol evaporator. What may happen if you don't keep the proper level of an alcohol?",
          "answers": [
            "The S-cam may not take back when you release the brake pedal.",
            "Ice may form in the air storage tank and cause a brake failure.",
            "Ice may form on the brake drums and wear them out."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 24,
          "question": "Your brakes are fading when:",
          "answers": [
            "You have to push harder on the brake pedal to control your speed on a downgrade.",
            "Less pressure is needed on the brake pedal for each stop.",
            "The brake pedal feel spongy when you apply pressure."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 25,
          "question": "A straight truck or bus air brake system should not leak at the rate of more than _______ psi per minute with the engine off and the brakes released.",
          "answers": [
            "1",
            "2",
            "3"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 26,
          "question": "The air compressor should stop pumping air when pressure reach ___ psi.",
          "answers": [
            "100",
            "125",
            "150"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 27,
          "question": "Emergency stab braking is:",
          "answers": [
            "Press hard on a brake pedal and apply hand valve until you stop.",
            "Use light steady pressure on the brake pedal.",
            "Brake as hard as you can, release the brakes when the wheels locked, put on the brakes again when the wheels start rolling."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 28,
          "question": "The parking or emergency brake on a heavy vehicle can only be held in position by something that cannot leak away, like:",
          "answers": [
            "Spring pressure.",
            "Air pressure.",
            "Hydraulic pressure"
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 29,
          "question": "When the brakes are applied the brake shoes (or linings) are pressed against the:",
          "answers": [
            "Brake drum or disc.",
            "Slack adjuster.",
            "S-cam"
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 30,
          "question": "The air loss rate for a straight truck or bus with the engine off and the brakes on should not be more than:",
          "answers": [
            "1 psi in one minute.",
            "2 psi in 45 seconds.",
            "3 psi in one minute."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 31,
          "question": "It is not safe to drive a vehicle that has brake drums with cracks that are longer than _____ of the width of the friction area.",
          "answers": [
            "One half.",
            "One fourth.",
            "One eighth."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 32,
          "question": "In ideal conditions, a truck or bus with an air brake going at 55 mph would require stopping distance of:",
          "answers": [
            "Less than 100 feet.",
            "100-300 feet.",
            "More than 300 feet."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 33,
          "question": "The most common type of foundation brake found on heavy vehicles is the:",
          "answers": [
            "Wedge drum.",
            "S-cam drum.",
            "Disc brake."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 34,
          "question": "If you do not have automatic tank drains, how often should you drain the oil and water from the bottom of compressed air storage tanks?",
          "answers": [
            "After every four hours of service.",
            "At the end of each day of driving.",
            "Once a week."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 35,
          "question": "If the spring brakes are on, when should you push the brake pedal?",
          "answers": [
            "Only when driving down a hill.",
            "Only on the slippery road.",
            "Never."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 36,
          "question": "Which of these is NOT a proper time to apply the parking brakes?",
          "answers": [
            "To brake vehicle very hard, in other word when coming down the steep grade.",
            "To use parking brakes if you park for less than one hour.",
            "If you are going to use the parking brakes you need to make sure that they will hold the vehicle."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 37,
          "question": "Your truck has a dual air system and one of the system loses its pressure. What will happen?",
          "answers": [
            "Brake drums will not be fully pressurized.",
            "The manual slack adjusters of the S-cam brakes will not be set properly.",
            "Either the front or back brake will not be fully operational."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 38,
          "question": "The air brake lag distance at 55 mph on dry pavement adds about ____ feet.",
          "answers": [
            "12", "32", "52"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 39,
          "question": "All air brake equipped vehicles have:",
          "answers": [
            "A supply pressure gauge.",
            "An air usage gauge.",
            "A backup hydraulic system."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 40,
          "question": "If your truck has a properly functioning dual air brake system and minimum size air tanks the air pressure should build up from 85 to 100 psi within how many seconds?",
          "answers": [
            "30",
            "45",
            "60"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 41,
          "question": "If you are driving down a steep downgrade and you have reached your \"safe\" speed of 40 mph, you would apply the service brakes until your speed drops to ____ mph.",
          "answers": [
            "25",
            "30",
            "35"
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 42,
          "question": "With air brake vehicles, the parking brakes should be used:",
          "answers": [
            "Whenever you leave the vehicle unattended.",
            "As little as possible.",
            "Only during pre and post-trip inspections."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 43,
          "question": "Any time you park, use the parking brakes, except:",
          "answers": [
            "If the brakes are very hot (e.g., after just coming down a steep grade).",
            "If you are going to test the parking brake make sure that it holds the vehicle.",
            "If you will only be stopped for less then one hour."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 44,
          "question": "Emergency controlled braking is when you:",
          "answers": [
            "Apply the brakes as hard as you can without locking the wheels.",
            "Brake as hard as you can, release the brakes when wheels locking, brakes back on again when the wheels start rolling.",
            "Apply the hand valve for one second, then push hard on the brakes."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 45,
          "question": "The most important thing to do when a low air pressure warning comes on is:",
          "answers": [
            "Upshift.",
            "Downshift.",
            "Stop and safely park as soon as possible."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 46,
          "question": "If air pressure is not built up within the correct amount of time, then:",
          "answers": [
            "You should be ready to use your parking brakes to help stop.",
            "The alcohol container may be low.",
            "Your air pressure may drop too low during driving, requiring an emergency stop."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 47,
          "question": "Parking or emergency brakes of trucks and buses can be legally held on by ______ pressure.",
          "answers": [
            "spring",
            "air",
            "fluid"
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 48,
          "question": "To check the free play of manual slack adjusters of S-cam brakes, you should park on:",
          "answers": [
            "Level ground, chock the wheels and release the parking brakes.",
            "Level ground and apply the parking brakes, then apply service brakes.",
            "Level ground and drain off air pressure before checking the adjustment."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 49,
          "question": "Under normal conditions in order to engage the parking brakes driver:",
          "answers": [
            "Turn off the engine",
            "Let the air out of air brake system.",
            "Be sure that the air brake system is fully pressurized."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 50,
          "question": "How should you check that your service brakes are working properly?",
          "answers": [
            "Park on slight grade, drain off air pressure, set parking brake and check to the movement.",
            "Park on a level ground, chock the wheels, engage the parking brakes when you have the correct amount of air pressure to do so and shut the engine off.",
            "Park on level ground, wait until normal air pressure is reached, release the parking brake and move forward slowly at about 5 mph. Then apply the brakes firmly using the brake pedal."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 51,
          "question": "You have a major leak in the service line and put on the brakes. Service air pressure will escape and cause the:",
          "answers": [
            "trailer tank pressure to be lost.",
            "tractor spring brakes to lock on.",
            "trailer emergency brakes to come on."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 52,
          "question": "The air compressor governor controls:",
          "answers": [
            "The speed of the air compressor.",
            "Air pressure applied to the brakes.",
            "When air is pumped into the air tanks."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 53,
          "question": "If your vehicle has an alcohol evaporator, it is there to:",
          "answers": [
            "Eliminate the need for daily tank draining.",
            "Boost tank pressure the same way that turbocharges boost engine.",
            "Reduce the risk of icing in air brake valves in cold weather."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 54,
          "question": "A slack adjusters freeplay needs to be adjusted if it is more than about ____ how many inches when you pull hard on it?",
          "answers": [
            "one fourth inch",
            "one half inch",
            "one inch"
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 55,
          "question": "Before driving a truck or bus with a dual air brake system, the air pressure must be at least ___ psi.",
          "answers": [
            "80",
            "100",
            "120"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 56,
          "question": "The brake pedal in an air brake system:",
          "answers": [
            "Controls the speed of the air compressor.",
            "Controls the air pressure applied to put on the brakes.",
            "Is connected to slack adjusters by a series of rods and linkages."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 57,
          "question": "The spring brakes used on tractors and straight trucks will bring your truck to a stop when the air pressure drops below ______ psi.",
          "answers": [
            "20",
            "60",
            "100"
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 58,
          "question": "When is it OK to leave your truck unattended without applying the parking brakes and choking the wheels?",
          "answers": [
            "Never.",
            "If you will be away from the truck for a few minutes.",
            "If you are conducting a pre-trip inspection."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 59,
          "question": "To test air service brakes, you should:",
          "answers": [
            "Stop the vehicle, put it in a low gear, depress the service brakes, and then gently pull against the brakes.",
            "Brake firmly while slowly moving forward.",
            "Brake slowly while slowly moving backward."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 60,
          "question": "If your vehicle has an alcohol evaporator, every day during cold weather you should:",
          "answers": [
            "Check and fill the alcohol level.",
            "Change the alcohol from a new bottle.",
            "Check the oil for alcohol content."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 61,
          "question": "The application pressure gauge shows how much air pressure you:",
          "answers": [
            "Have in the air tanks.",
            "Are applying to the brakes",
            "Have in a modulating control valve."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 62,
          "question": "The safety valve discharges automatically at the pressure of:",
          "answers": [
            "50",
            "100",
            "150"
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 63,
          "question": "Which of the following about antilock braking system is true?",
          "answers": [
            "ABS won't help you avoid skids caused by over braking.",
            "ABS changes the way you brakes in emergencies.",
            "ABS allows you to drive faster, follow more closely, and drive less carefully."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 64,
          "question": "The modulating control valve allows you to control:",
          "answers": [
            "Spring brakes.",
            "Front brakes.",
            "Amount of air pressure in the brake system."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 65,
          "question": "If your truck or bus has dual parking control valves, you can use pressure from a separate tank to:",
          "answers": [
            "Balance the service brake system when you are parked.",
            "Stay parked twice as long without using up service air pressure.",
            "Release the spring emergency/parking brakes to move a short distance."
          ],
          "correctAnswerIndex": 0
        }])
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("CDLAirBrakesTests")
  }
};
