'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "CDLGeneralKnowladgeTests";
    return await queryInterface.bulkInsert(options,
      [
        {
          "no": 1,
          "question": "Containerized loads:",
          "answers": [
            "Are not required to be inspected by a driver.",
            "Should be supplied with their own tiedown devices or locks.",
            "Generally are used when freight is carried part way by rail or ship."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 2,
          "question": "Which of these is NOT required knowledge for drivers needing the hazardous material endorsement?",
          "answers": [
            "Basic chemistry.",
            "Which products can be loaded together.",
            "When to use the placards."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 3,
          "question": "There are several things to do when driving through a highway work zone. In addition to obeying the speed limit, which of these should you also do?",
          "answers": [
            "Turn off your 4-way flashers.",
            "Decrease your speed even further for adverse weather.",
            "Adjust your speed to traffic."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 4,
          "question": "To avoid a crash, you had to drive into the right shoulder. You are now driving at 40 mph on the shoulder. How should you move back onto the pavement?",
          "answers": [
            "If the shoulder is clear, stay on it until your vehicle has come to a stop. Then move back onto the pavement when it is safe.",
            "Brake hard to slow the vehicle, then steer sharply onto the pavement.",
            "Keep moving at the present speed and steer very gently back onto the pavement."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 5,
          "question": "\"Implied consent\" means:",
          "answers": [
            "You have giving your consent to inspection of your vehicle for alcohol.",
            "It is understood that you may drink alcohol now and then.",
            "You have given your consent to be tested for alcohol in your blood."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 6,
          "question": "You should stop driving:",
          "answers": [
            "After 5 hours.",
            "After 9 hours.",
            "Whenever you become sleepy."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 7,
          "question": "Which of these is true about hazardous materials:",
          "answers": [
            "All public roads allow trucks carrying hazardous materials if they are loaded correctly.",
            "All hazardous materials present a health and safety threat.",
            "Every truck carrying any amount of hazardous materials must have placards."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 8,
          "question": "For first offence of driving a commercial vehicle under the influence of alcohol or drugs, you will lose your CDL for at least ____.",

          "answers": [
            "1 year",
            "6 months",
            "2 years"
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 9,
          "question": "Why is it important to shift gears correctly?",
          "answers": [
            "Keep control of the vehicle.",
            "Keep the engine warm.",
            "Keep the engine oil flowing."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 10,
          "question": "Where should the ignition key be during the pre-trip inspection?",
          "answers": [
            "In your pocket.",
            "In the ignition.",
            "On the driver's seat."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 11,
          "question": "Extra care is needed to keep your vehicle centered in your lane because commercial vehicles:",
          "answers": [
            "Require a lot of room to change lane.",
            "Are often wider than other vehicles.",
            "Tend to sway from time to time."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 12,
          "question": "How many red reflective triangles are you required to carry?",
          "answers": [
            "2.",
            "3.",
            "4."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 13,
          "question": "If you must cross into the oncoming line as you make a turn, you should:",
          "answers": [
            "Watch for an oncoming traffic.",
            "Back up to allow the oncoming traffic to pass.",
            "Complete your turn without stopping."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 14,
          "question": "When driving at night, you should:",
          "answers": [
            "Look to the left side of the road when a vehicle is coming toward you.",
            "Adjust your speed to keep your stopping distance within your sight distance.",
            "Dim your lights within 300 feet of an oncoming vehicle."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 15,
          "question": "Which of the following is NOT a characteristic of a front tire failure?",
          "answers": [
            "Vehicle fishtail.",
            "Steering wheel twisting.",
            "Difficult steering."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 16,
          "question": "Which of these items is NOT checked for a pre-trip inspection?",
          "answers": [
            "Whatever all vehicle lights are working and are clean.",
            "Amount of fuel in the vehicle.",
            "Cargo securement."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 17,
          "question": "You do NOT have a Hazardous Materials Endorsement on your Commercial Driver's License. You are asked to deliver hazardous materials in a placarded vehicle. You should:",
          "answers": [
            "Refuse to haul the load.",
            "Haul the load, but only to the nearest place where a driver with a Hazardous Materials Endorsement can take over.",
            "Haul the load, but file a report with the Department of Transportation after the trip."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 18,
          "question": "To determine Blood Alcohol Concentration (BAC) for a person it is necessary to know:",
          "answers": [
            "How often the person drinks alcohol (tolerance level).",
            "How much the person weighs.",
            "How old the person is."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 19,
          "question": "To correct a drive-wheel braking skid, you should:",
          "answers": [
            "Stop braking.",
            "Stop braking, turn quickly, and countersteer.",
            "Increase braking, turn quickly, and countersteer."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 20,
          "question": "ABS (antilock brakes) brakes:",
          "answers": [
            "Give you more control over the vehicle when braking.",
            "Increase the likelihood of jackknifing when braking.",
            "Increase the likelihood of a rear wheel skid when braking."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 21,
          "question": "For your safety, when setting out reflective triangles you should:",
          "answers": [
            "Hold the triangles between yourself and oncoming traffic.",
            "Keep them out of sight while you walk to the spots where you set them out.",
            "Carry the triangles at your side."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 22,
          "question": "Escape ramps:",
          "answers": [
            "Should be used by any driver who looses braking power.",
            "Are not designed for tractors-double trailers.",
            "Are designed to slow vehicles so they can get back on the road at the safe speed."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 23,
          "question": "Which of these should be tested on the vehicle to stopped?",
          "answers": [
            "Service brake.",
            "Parking brake.",
            "Hydraulic brakes."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 24,
          "question": "When hydraulic brakes fail while driving, the system won't build up pressure and the brake pedal will feel spongy or go to the floor. What action should you take?",
          "answers": [
            "Push down on the brake pedal as hard as you can.",
            "Pump the brake pedal to generate pressure.",
            "Put the vehicle in neutral and set the parking brake."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 25,
          "question": "When there is a vehicle fire, get your vehicle off the road and:",
          "answers": [
            "Put out the fire.",
            "Keep the fire from spreading.",
            "Notify emergency services."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 26,
          "question": "If you have been drinking alcohol, before you drive, you should:",
          "answers": [
            "Drink coffee.",
            "Take a cold shower.",
            "Wait for it to wear off."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 27,
          "question": "When driving in cold weather, your tire tread should:",
          "answers": [
            "Provide enough traction to steer and push the vehicle through snow.",
            "Be double the depth required in normal weather.",
            "Be checked every 100 miles or every two hours."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 28,
          "question": "Which statement is true about using engine braking?",
          "answers": [
            "It creates extra heat between the brake shoes or pads and drum(s) or disks.",
            "You should NOT use engine breaking as the main way to control speed.",
            "The use of brakes on a downgrade adds to the braking effect of the engine."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 29,
          "question": "When you are driving on a snow-packed road, you should reduce your speed by:",
          "answers": [
            "1/4.",
            "1/3.",
            "1/2."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 30,
          "question": "What is countersteering?",
          "answers": [
            "Turning the steering wheel counterclockwise.",
            "Using the steering axle brakes to prevent oversteering.",
            "Turning the wheel back in the other direction after steering to avoid a traffic emergency."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 31,
          "question": "During a vehicle inspection, checking the ________ will NOT help prevent a fire?",
          "answers": [
            "cargo ventilation", "battery fluid level", "electrical system insulation"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 32,
          "question": "Which of these happens when a tire blows out at highway?",
          "answers": [
            "A vibrating feeling.",
            "A hissing sound.",
            "A rapid drop in speed to less then 20mph."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 33,
          "question": "Why is a broken exhaust system dangerous?",
          "answers": [
            "Poison fumes could enter into the cab or sleeper berth.",
            "You could pollute the air with the exhaust smoke.",
            "Loud noise could damage the driver's ears."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 34,
          "question": "You should signal continuously while turning because:",
          "answers": [
            "You need both hands on the wheel to turn safely.",
            "It is illegal to turn off your signal before completing the turn.",
            "Most vehicle have self-canceling signals."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 35,
          "question": "The distance that you should look ahead of your vehicle while driving is about ____ at low speed.",

          "answers": [
            "one block", "two blocks", "half block"
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 36,
          "question": "When exiting or entering on a curved freeway ramp, you should:",
          "answers": [
            "Maintain a speed 5-10 mph under the posted speed limit.",
            "Maintain the posted speed limit.",
            "Slow down to at least 50 % of the posted speed limit."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 37,
          "question": "When you confronted by an aggressive driver, you should:",
          "answers": [
            "Gesture that you make a mistake.",
            "Make every attempt to get out of their way.",
            "Maintain your position."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 38,
          "question": "Whenever you double your speed, it takes about _____ times as much distance to stop.",

          "answers": [
            "two", "three", "four"
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 39,
          "question": "When the roads are slippery, you should:",
          "answers": [
            "Make turns as gently as possible.",
            "Stop and test the traction while going uphill.",
            "Decrease the distance that you look ahead of your vehicle."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 40,
          "question": "According to the Driver's Manual, why should you limit the use of your horn?",
          "answers": [
            "It can startle other drivers.",
            "On vehicles with air brakes, it can use air pressure that may be needed to stop", "You should keep a firm grip on the steering wheel with both hands at all times."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 41,
          "question": "Which of the following is recommended as a way of preventing fatigue on a long trip?",
          "answers": [
            "Stop periodically for rest and exercise.",
            "Keep the vehicle closed and heated.",
            "Take an over-the-counter stimulant."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 42,
          "question": "Which of these is NOT a type of retarder?",
          "answers": [
            "Electric.",
            "Hydraulic.",
            "Robotic."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 43,
          "question": "Which of these is true about proper use of a steering wheel?",
          "answers": [
            "If you do not have both hands on the wheel, the wheel could pull away from you.",
            "Once you have reached a \"cruising speed\" on a highway, you can drive with one hand on the wheel.",
            "Only when attempting a difficult turn must you use both hands on the wheel."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 44,
          "question": "Which of these is true about hours of service?",
          "answers": [
            "After you have put in 1000 hours of service you will be exempt from certain regulations.",
            "You should balance your hour of service with enough sleep to keep you alert.",
            "You must take a break after every 2 hours of driving."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 45,
          "question": "Aggressive driving is:",
          "answers": [
            "Driving a vehicle with the intent to do harm to others.",
            "Driving a vehicle in a selfish, bold or pushy manner.",
            "Driving a vehicle when your full attention is not on driving."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 46,
          "question": "If your vehicle catches fire while you are driving, you should:",
          "answers": [
            "Park in an open area.",
            "Park where a building or trees shelter your vehicle from the wind.",
            "Increase your speed to put out the flames."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 47,
          "question": "When driving at night, you should use your low beams when an oncoming vehicle is within:",
          "answers": [
            "300 feet.",
            "400 feet.",
            "500 feet."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 48,
          "question": "When a coolant container is part of a pressurized system, which of these is true?",
          "answers": [
            "The radiator cap can safely removed and coolant added while the engine is hot.",
            "You never need to check the antifreeze in such a system.",
            "You can check the coolant level of a hot engine."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 49,
          "question": "To prevent a load from shifting, there should be at least one tiedown for every ______ feet of cargo.",
          "answers": [
            "10",
            "15",
            "20"
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 50,
          "question": "If you have a heavy load that is slowing you down on an upgrade you should:",
          "answers": [
            "Shift into a lower gear.",
            "Exit the road until traffic is lighter.",
            "Drive on the shoulder so others can pass easily."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 51,
          "question": "Which of these statements about cargo loading is true?",
          "answers": [
            "If cargo is loaded by the shipper, the driver is not responsible for overloading.",
            "The legal maximum weight allowed by a state can be considered safe for all driving conditions.",
            "State laws dictate legal weight limits."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 52,
          "question": "You are driving on a two-lane road. An oncoming driver drifts into your lane and is headed straight for you. Which of these is most often the best action to take?",
          "answers": [
            "Hard braking.",
            "Steer to the right.",
            "Steer onto the left shoulder."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 53,
          "question": "You must stop on a hill or curve on a two-lane two-way road. How far should you place reflective triangles?",
          "answers": [
            "As far back as necessary so others can see you.",
            "Within 200 feet behind you.",
            "Within 500 feet behind you."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 54,
          "question": "You are driving a long vehicle that makes wide turns. You want to turn left from one street onto another. Both are two-lane two-way streets. You should:",
          "answers": [
            "Begin turning your vehicle as soon as you enter the intersection.",
            "Begin turning your vehicle when you are halfway through the intersection.",
            "Turn into the left lane of Poplar Street and then move to the right lane when the traffic is clear."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 55,
          "question": "What is NOT true about bad weather and driving conditions?",
          "answers": [
            "When the temperature drops, the bridges will freeze before roads will.",
            "The road is more slippery as rain continues than when rain begins.",
            "Driving conditions became more dangerous as the temperature rises above freezing."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 56,
          "question": "Drivers of trucks and tractors-trailers with cargo must check that the cargo well secured within the first ____ miles of the trip.",

          "answers": [
            "25",
            "10",
            "50"
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 57,
          "question": "When you are starting to move up a hill from a stop:",
          "answers": [
            "Release the parking brakes as you apply engine power.",
            "Engage the clutch and accelerate quickly.",
            "Keep the trailer brake hand valve applied until you reach 20 mph."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 58,
          "question": "A full stop is required at a railroad crossing when:",
          "answers": [
            "There are no flagmen, warning signals, or gates at the crossing.",
            "The nature of the cargo makes a stop mandatory under state or federal regulations.",
            "The crossing is located in a city or town with frequent train traffic."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 59,
          "question": "In the event of a rear tire failure, dual rear tire:",
          "answers": [
            "Will usually prevent fishtail.",
            "May prevent vibration or thumping.",
            "Will allow you to brake immediately."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 60,
          "question": "Retarders can be used:",
          "answers": [
            "Only where they are permitted by law.",
            "Only for downhill braking.",
            "Only on roads with poor traction."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 61,
          "question": "Which of these statements about vehicle fire is true?",
          "answers": [
            "If cargo in a van or box trailer catches on fire, you should open the cargo door as soon as you can.",
            "If your engine is on fire, you should open the hood as soon as you can.",
            "A burning tire should be cooled with water."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 62,
          "question": "You should use your horn when:",
          "answers": [
            "It may help avoid a crash.",
            "A car is in your way.",
            "You want to change lanes."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 63,
          "question": "When driving a commercial vehicle with a height over 13 feet, you should:",
          "answers": [
            "Not worry about height clearance as long as you stay on state or federal highways.",
            "Assume all clearances are high enough.",
            "Stop and make sure that a clearance is high enough."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 64,
          "question": "When you passing the other vehicle, pedestrian, or bicycle, you should assume that:",
          "answers": [
            "They may move into your traffic lane.",
            "They know you want to pass.",
            "They see your vehicle."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 65,
          "question": "A vehicle is loaded with very little weight on the drive axle. What may happen?",
          "answers": [
            "Poor traction.",
            "Damage to drive axle tires.",
            "Better handling."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 66,
          "question": "When should you test you parking brake?",
          "answers": [
            "While moving at a very low speed.",
            "While the vehicle is parked.",
            "When backing."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 67,
          "question": "How far should a driver look ahead of the vehicle while driving?",
          "answers": [
            "5 - 8 seconds.",
            "12 - 15 seconds.",
            "18 - 21 seconds."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 68,
          "question": "You are driving a car with ABS brakes, and see yellow light on a dashboard starts flashing during driving. It means:",
          "answers": [
            "Your vehicle ABS may not be functioning properly.",
            "Your brake fluid may be low.",
            "The roadway may be slick."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 69,
          "question": "Which of these is NOT true?",
          "answers": [
            "Alcohol goes directly from the stomach to the blood stream.",
            "A drinker can control how fast his or her body absorbs and gets rid of alcohol.",
            "BAC is determined by how fast you drink, how much you drink, and your weight."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 70,
          "question": "Controlled braking is:",
          "answers": [
            "Slamming on the brakes hard and making wheels lock up.",
            "Squeezing the brakes firmly without locking them up.",
            "Pressing brakes until wheel lock-up occurs, releasing and then reapplying."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 71,
          "question": "Which of these statements about driving in fog is true?",
          "answers": [
            "Stay as close behind a vehicle as possible so you can always see the vehicle.",
            "Use high-beam headlights.",
            "Assume that the fog will become thicker after you enter it."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 72,
          "question": "You are checking your wheels and rims for a pre-trip inspection. Which of these statements is true?",
          "answers": [
            "Rust around wheel nuts may mean that they are loose.",
            "A vehicle can be safely driven with one missing lug nut on a wheel.",
            "Mismatched lock rings can be used on the same vehicle."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 73,
          "question": "Which of these is NOT something you should do if your headlights are not working properly?",
          "answers": [
            "Leave on your high beams.",
            "Clean the headlights.",
            "Adjust the headlights."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 74,
          "question": "Which of these is a good thing to do when steering to avoid a crash?",
          "answers": [
            "Apply the brakes while turning.",
            "Don't turn any more then needed to clear what is in you way.",
            "Avoid countersteering."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 75,
          "question": "You drive through the heavy rain or snow. You can hardly see what is going on outside. You can let the other drivers know about you by:",
          "answers": [
            "Using your horn.",
            "Turning on inside cab lights.",
            "Turning on the low-beam headlights."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 76,
          "question": "You are driving a heavy vehicle. You must exit a highway using an off-ramp that curves downhill. You should:",
          "answers": [
            "Slow to the posted speed limit for the off-ramp.",
            "Slow down to 5 mph below the posted speed limit.",
            "Slow down to 15 mph below the posted speed limit."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 77,
          "question": "What is the best advice for drivers when a heavy fog occurs?",
          "answers": [
            "Do not drive too slowly, or other drivers may hit you.",
            "Park at a rest area or truck stop until the fog has gone.",
            "Alternate your low and high beams to improve your vision."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 78,
          "question": "You must park on the side of a level, straight, four-lane divided highway. Where should you place the reflective triangles?",
          "answers": [
            "One within 10 feet of the rear of the vehicle, one about 100 feet to the rear, and one about 200 feet to the rear.",
            "One within 10 feet of the rear of the vehicle, one about 100 feet to the rear, and one about 100 feet to the front of the vehicle.",
            "One within 10 feet of the front of the vehicle, one about 100 feet to the rear, and one about 200 feet to the rear."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 79,
          "question": "You are checking your brakes and suspension system for a pre-trip inspection. Which of these statements is true?",
          "answers": [
            "Just one missing leaf spring is not dangerous.",
            "Spring hangers that are cracked but still tight are not dangerous.",
            "Brake shoes should not have oil, grease, or brake fluid on them."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 80,
          "question": "Which of these is the most important thing to remember about emergency braking?",
          "answers": [
            "Never do it without downshifting first.",
            "If the wheels are skidding, you cannot control your vehicle.",
            "Disconnecting the steering axle brakes will help keep your vehicle in a straight line during emergency braking."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 81,
          "question": "Your vehicle will be put out of service if _____ or more leaves in any leaf spring are missing.",

          "answers": [
            "One fourth (1/4).",
            "One third (1/3).",
            "One-half (1/2)."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 82,
          "question": "Which of the following is a good way to react to an aggressive driver?",
          "answers": [
            "Give the driver the benefit of the doubt.",
            "Changing the CD or have a snack.",
            "Smoke a cigarette to relax."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 83,
          "question": "How does vehicle weight affect stopping?",
          "answers": [
            "Fully loaded trucks take longer to stop or the buses loaded with passengers take less distance than empty ones.",
            "It doesn't, brakes work the same no matter the weight of the vehicle for both trucks and buses.",
            "Empty trucks take longer to stop than if loaded, but this is not the normally case for buses."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 84,
          "question": "What should you do when you see a hazard in the roadway ahead of you?",
          "answers": [
            "Swerve around it and get back in your lane.",
            "Stop quickly and pull to the side of the road.",
            "Use your 4-way flashers or brake lights to warn others."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 85,
          "question": "Which of these statements about downshifting is true?",
          "answers": [
            "When you downshift for a curve, you should do so before you enter the curve.",
            "When you downshift for a curve, you should do so just after you enter the curve.",
            "When double-clutching, you should let the rpms decrease while the clutch is released and the shift lever is in neutral."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 86,
          "question": "Which of the following is a sign of an aggressive driver?",
          "answers": [
            "Driving 10 or more miles-per-hour over the speed limit.",
            "Changing lines frequently and abruptly without notice.",
            "Driving in the center line."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 87,
          "question": "You should use your mirrors to check ____.",

          "answers": [
            "blind spots",
            "if you running lights are working properly",
            "where the rear of your vehicle is while you make turns"
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 88,
          "question": "Why tourists may be a hazard?",
          "answers": [
            "Police officers will not give then a ticket.",
            "They often drive rental cars.",
            "They may drive slowly and make sudden stops or lane changes."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 89,
          "question": "Which of these statements about shipping hazardous materials is true?",
          "answers": [
            "Gas cylinders that will not hold a label must be shipped under cover.",
            "A diamond-shaped hazardous materials label must be on the container.",
            "A circular, red hazardous material label must be on the container."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 90,
          "question": "Fatigue:",
          "answers": [
            "It will go away by itself over period of time.",
            "It can only be paid off by sleeping.",
            "Overcome it with willpower abd non-sleep aids."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 91,
          "question": "Which of these statements about acceleration is true?",
          "answers": [
            "When traction is poor, more power should be applied to the accelerator.",
            "Rough acceleration can cause mechanical damage.",
            "You should feel a \"jerking\" motion if you are accelerating your vehicle properly."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 92,
          "question": "Your vehicle has hydraulic brakes. While traveling on a level road, you press the brake pedal and find that it goes to the floor. Which of these statements is true?",
          "answers": [
            "Pumping the brake pedal may bring the pressure up so you can stop the vehicle.",
            "The parking brake will not work either because it is a part of the same hydraulic system.",
            "Shifting into neutral will help to slow the vehicle."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 93,
          "question": "There are two types of jackknife, they are:",
          "answers": [
            "Trailer.",
            "Tractor.",
            "Both A and B."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 94,
          "question": "The bridge formula:",
          "answers": [
            "Permit less maximum axle weight for the axles that are close together.",
            "Permit less maximum axle weight for the axles that are far apart.",
            "Permit the same maximum axle weight for any axle spacing."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 95,
          "question": "When loading a trailer, if the cargo is loaded all to the rear, it may result in:",
          "answers": [
            "Wheel lockup.",
            "Damage to steering axle.",
            "Poor traction on drive wheels."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 96,
          "question": "A round, black on yellow warning sign means: (X)",
          "answers": [
            "Slow down, look and listen, and be prepared to stop if a train is approaching.",
            "Low overpass ahead.",
            "School crossing ahead."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 97,
          "question": "Which of these lights cannot be checked at the same time?",
          "answers": [
            "Turn signals, taillights, and clearance lights.",
            "Turn signals, brake lights, and four-way flashers.",
            "Headlights, brake lights, and clearance lights."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 98,
          "question": "Perception distance is the distance your vehicle travels from the time:",
          "answers": [
            "The eyes see a hazard to the time your foot pushes to the brake pedal.",
            "The brain tells the foot to push the brake pedal to time the foot responses.",
            "The eyes see a hazard to the time the brain knows it is a hazard."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 99,
          "question": "Which of these statements about speed management is true?",
          "answers": [
            "Empty trucks always stop in a shorter distance than fully loaded ones.",
            "When you double your speed (go twice as fast), it will take twice the distance to stop.",
            "You should choose a speed that lets you stop within the distance that you can see ahead."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 100,
          "question": "If your brakes fail on a downgrade, you must first:",
          "answers": [
            "Look outside your vehicle for another means of slowing it.",
            "Hit some object in order to stop your vehicle.",
            "Wait until you find an escape ramp to exit the roadway."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 101,
          "question": "Which of these statements about drugs is true?",
          "answers": [
            "Use of drugs can lead to accidents and/or arrest.",
            "Certain prescription drugs are allowed to reduce fatigue.",
            "A driver can use any prescription drug while driving."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 102,
          "question": "The new BAC (Blood Alcohol Concentration) for commercial drivers to be considered intoxicated when driving a commercial vehicle is:",
          "answers": [
            "0.04", "0.01", "0.10"
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 103,
          "question": "You are checking your tires for a pre-trip inspection. Which of these statements is true?",
          "answers": [
            "Tires of mismatched sizes should not be used on the same vehicle.",
            "Radial and bias-ply tires can be used together on the same vehicle.",
            "2/32 inch tread depth is safe for the front tires."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 104,
          "question": "Which of these statements about double-clutching and shifting is true?",
          "answers": [
            "You can use the tachometer to tell you when to shift.",
            "Double-clutching should not be used when the road is slippery.",
            "Double-clutching should only be used with a heavy load."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 105,
          "question": "Which of this is true about other drivers?",
          "answers": [
            "Mail or delivery trucks are professionals and do not pose a hazard.",
            "Drivers using turn signals can always be trusted to turn in the direction they indicate.",
            "Short-term or daily rental truck drivers are often not used to the limited vision and pose the hazard."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 106,
          "question": "Which of these is especially true about your tires in hot weather?",
          "answers": [
            "A small amount of air should be let out so air pressure remains steady.",
            "You should check tire mounting and air pressure before driving.",
            "If a tire is too hot to touch, you should hose it down with water."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 107,
          "question": "When stopped on a one-way or divided highway, you should you place the reflective triangles at:",
          "answers": [
            "10 feet, 100 feet, and 500 feet toward approaching traffic.",
            "10 feet, 100 feet, and 200 feet toward approaching traffic.",
            "10 feet, 50 feet, and 100 feet toward approaching traffic."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 108,
          "question": "You will be placed out-of-service for 24 hours if your blood alcohol concentration (BAC) is:",
          "answers": [
            "At least 0.02%.",
            "At least 0.04%.",
            "Any detectable amount."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 109,
          "question": "You are checking your brakes and suspension system for a pre-trip inspection. Which of these statements is NOT true?",
          "answers": [
            "Brake shoes should have brake fluid on them.",
            "One missing leaf in a leaf spring can be dangerous.",
            "A cracked drum should be replaced."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 110,
          "question": "Which of these is NOT true about braking in an emergency situation?",
          "answers": [
            "You should brake in a way that will keep your vehicle in a straight line.",
            "It is not important how you brake in an emergency situation.",
            "You should avoid using the brakes until your speed is down to 20 mph."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 111,
          "question": "You should avoid driving through deep puddles or flowing water. But if you must, which of these steps can help to keep your brakes working?",
          "answers": [
            "Gently putting on the brakes while driving through the water.",
            "Applying hard pressure on both the brake pedal and accelerator after coming out of the water.",
            "Turning on your brake heaters."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 112,
          "question": "If you are convicted for driving under the influence while driving a commercial vehicle, and this is your first offense, you most likely will get:",
          "answers": [
            "A probation period of 1 year.",
            "At least one year suspension of your CDL.",
            "A fine of $250"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 113,
          "question": "The distance that you should look ahead of your vehicle while driving amounts to about ____ miles at normal highway speed.",

          "answers": [
            "one eighth",
            "one quarter",
            "one half"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 114,
          "question": "Which of these is true regarding the use of drugs while driving?",
          "answers": [
            "No prescription or non-prescription drugs are allowed at any time when you driving.",
            "Use of amphetamines like \"speed\" is allowed if you are using this drug to stay alert.",
            "Prescription drugs are allowed if a doctor says the drugs will not affect the driving ability."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 115,
          "question": "To help you stay alert while driving, you should:",
          "answers": [
            "Schedule trips for hours that you are normally asleep.",
            "Take short breaks before you get drowsy.",
            "Keep the cab warm and quiet."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 116,
          "question": "High beams should be:",
          "answers": [
            "Used when it is safe and legal to do so.",
            "Turned on when an oncoming driver does not dim his/her lights.",
            "Dimmed at the time you get within 100 feet of another vehicle."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 117,
          "question": "When looking ahead of your vehicle while driving you should look:",
          "answers": [
            "Straight ahead at all times.",
            "To the right side of the road.",
            "Back and forth, near and far."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 118,
          "question": "Which of these is a good thing to remember when crossing or entering traffic with a heavy vehicle?",
          "answers": [
            "Heavy vehicles need larger gaps in traffic than cars.",
            "The best way to cross the traffic is to pull the vehicle partway across the road and block one lane while waiting for the other to clear.",
            "Because heavy vehicles are easy to see, you can count on other drivers to move out of your way or slow down for you."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 119,
          "question": "If you need to leave the road in a traffic emergency, you should:",
          "answers": [
            "Try to get all wheels off the pavement.",
            "Avoid braking until your speed has dropped to about 20 mph.",
            "Avoid the shoulder because most shoulders will not support a large vehicle."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 120,
          "question": "Which of these is true about bad weather and driving conditions?",
          "answers": [
            "The road is more slippery as rain continues than when rain begins.",
            "Driving conditions became more dangerous as the temperature rises above freezing.",
            "When the temperature drops, the bridges will freeze before roads will."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 121,
          "question": "You are checking your steering and exhaust system in a pre-trip inspection.Which of these problems, if found, should be fixed before the vehicle is driven:",
          "answers": [
            "Steering wheel play of more than 10 degrees (2 inches on 20 inches steering wheel).",
            "Oil on a tire rod.",
            "If a gray smoke coming out from the exhaust pipe."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 122,
          "question": "How can you identify a distracted driver?",
          "answers": [
            "The vehicle is drifting across lines and moving at variable speeds.",
            "The vehicle is weaving in and out of traffic.",
            "The vehicle is speeding."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 123,
          "question": "Which of these is NOT a danger when an automatic transmission is forced into a low gear at a high speed?",
          "answers": [
            "Damage to the transmission.",
            "Loss of engine braking effect.",
            "Loss of steering control."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 124,
          "question": "You should try to park so that:",
          "answers": [
            "You can pull forward when you leave.",
            "Park along curb next to other vehicle.",
            "That your vehicle is parked by tree."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 125,
          "question": "The safest method for using in-vehicle communication equipment is:",
          "answers": [
            "Pre-program your cell phone.",
            "Use a hands-free device so both hands remain on the steering wheel.",
            "Pull off the road in a safe, legal place to use the equipment."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 126,
          "question": "When going down a long steep downgrade you should always:",
          "answers": [
            "Use the braking effect of the engine.",
            "Use controlled braking.",
            "Brake when you exceed safe speed by 5 mph."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 127,
          "question": "Which of these is true about hauling of hazardous materials?",
          "answers": [
            "Cylinders with compressed gases should be transported under covers if there is no label on them.",
            "Such a load should be marked with a four inches diamond shaped labels on the containers.",
            "Such a load should be marked with a four inches circle red colored labels on the containers."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 128,
          "question": "As the blood alcohol concentration (BAC) goes up, what happens?",
          "answers": [
            "The drinker more clearly sees how alcohol is affecting him/her.",
            "The effects of alcohol decrease.",
            "Judgment and self control are affected."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 129,
          "question": "A key principle to remember about loading cargo is to keep the load:",
          "answers": [
            "To the front.",
            "To the rear.",
            "Balanced in the cargo area."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 130,
          "question": "Which of these is true about your overhead clearance?",
          "answers": [
            "Warnings are always posted for low clearance areas like bridges and overpasses.",
            "The weight of cargo can change the height of your vehicle.",
            "Paving a road does not affect the clearance height under bridges or overpasses."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 131,
          "question": "Which of the following can keep you from being distracted while you drive?",
          "answers": [
            "Try to use communication devices only in light traffic.",
            "Constantly review your maps and your route plan as you drive.",
            "Pre-load your favorite CDs or cassette tapes."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 132,
          "question": "You are driving a heavy vehicle. You must exit a highway using an off-ramp that curves downhill. You should:",
          "answers": [
            "Slow down to a safe speed before the curve.",
            "Slow to the posted speed limit for the off-ramp.",
            "Wait until you are in the curve before downshifting."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 133,
          "question": "Which of the following vehicles will have the longest stopping distance?",
          "answers": [
            "Empty truck.",
            "Loaded truck.",
            "Bobtail tractor."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 134,
          "question": "You are driving a long vehicle that makes wide turns. You want to make a left turn from Ocean Street onto Atlantic Street. There are two left turn lanes: inside lane (first from the left) and outside (second from the left) lane. You should:",
          "answers": [
            "Use inside turn lane (first from the left).",
            "Use outside turn lane (second from the left).",
            "Start from inside left turn lane and swing onto outside left turnlane just beforeentering the intersection."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 135,
          "question": "To avoid an accident you moved to the shoulder. To return to the road:",
          "answers": [
            "Ride on shoulder to the next exit and then re-enter the road.",
            "Using mirrors and turn signals turn sharply to get back to the road.",
            "Using mirrors and turn signals return when the road is clear."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 136,
          "question": "Where must you keep shipping papers when transporting hazardous materials?",
          "answers": [
            "Under the driver's seat.",
            "In a pouch on the driver's door or on the seat.",
            "In the glove compartment, which must be locked"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 137,
          "question": "Should brake adjustment be checked often?",
          "answers": [
            "It depends on how new the brakes are.",
            "No, because the other brakes will make up for a brake that is out of adjustment.",
            "Yes, because brakes can get out of adjustment when they are used a lot."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 138,
          "question": "Heavy vehicles often move slower than others. Which of these is NOT a good rule to follow while driving a heavy vehicle?",
          "answers": [
            "Stay on a right side of the road.",
            "Use four-way flashers if it is legal in your state.",
            "Signal other drivers when it is safe to pass you."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 139,
          "question": "If a straight vehicle (no trailer or articulation) goes into front-wheel skid, it will:",
          "answers": [
            "Slide sideways and spin out.",
            "Go straight ahead even if the steering wheel is turned.",
            "Go straight ahead but will turn if you turn the steering wheel."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 140,
          "question": "Which fires can you use water to put out?",
          "answers": [
            "Tire fires.",
            "Gasoline fires.",
            "Electrical fires."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 141,
          "question": "Sometimes you need to leave a road to avoid a hazard or emergency. When you do so you should keep in mind, that:",
          "answers": [
            "Most shoulders are not strong enough to support a heavy vehicle.",
            "You might be unable to re-enter the road because of the gravel used on shoulders.",
            "It is less dangerous to drive onto the shoulders than to make a collision."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 142,
          "question": "A good indication that ice is forming on the roadway is when:",
          "answers": [
            "You can see spray from other vehicles.",
            "You outside mirrors have ice on them.",
            "You cannot see the exhaust of other vehicles."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 143,
          "question": "Which of these is correct about emergency or evasive action?",
          "answers": [
            "In order to turn quickly, you must have a firm grip on the steering wheel.",
            "You can usually stop more quickly than you can turn to miss obstacles.",
            "Stopping is always the safest thing to do in an emergency."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 144,
          "question": "Which of these is true about driving in a tunnel?",
          "answers": [
            "Emergency flashers are required by law.",
            "Headlights are required by law.",
            "There may be strong winds when exiting."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 145,
          "question": "Which of these is NOT a danger of a rough acceleration?",
          "answers": [
            "Mechanical damage.",
            "Tire damage.",
            "Damage to coupling."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 146,
          "question": "You may get hang up on a railroad tracks if:",
          "answers": [
            "You try to shift gears when crossing.",
            "You cross the double tracks too slowly.",
            "The tracks have a steep approach."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 147,
          "question": "Brake drums (or discs) must not have cracks longer than _____ the width of the friction area.",

          "answers": [
            "One-half (1/2)",
            "One third (1/3)",
            "One tenth (1/10)"
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 148,
          "question": "You should wear your seat belt in a moving vehicle:",
          "answers": [
            "Only when you are driving.",
            "All the times.",
            "Only when you are on a highway."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 149,
          "question": "Trucks and buses are subjects of certain laws, regulations, and restrictions. Which of these statements is true?",
          "answers": [
            "County and city laws do not apply to trucks and buses engaged in interstate commerce.",
            "Federal regulations apply only to trucks and buses driven at least 50 miles on a trip.",
            "Laws and restrictions can vary from place to place."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 150,
          "question": "Which of the statement about backing a heavy vehicle is NOT true?",
          "answers": [
            "You should back and turn toward the driver's side whenever it is possible.",
            "You should use a helper and communicate with hand signals.",
            "Because you can't see, you should back slowly until you slightly bump into the dock."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 151,
          "question": "In a mountain driving you should go slow for safety. Which of these is the most important?",
          "answers": [
            "Weight of the vehicle.",
            "Tire tread type.",
            "Depth of the tread."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 152,
          "question": "Which of these statements about backing a heavy vehicle is true?",
          "answers": [
            "You should avoid backing whenever you can.",
            "Helpers should be out of the driver's sight and they should use only voice (spoken) signals to communicate with the driver.",
            "It is safer to back toward the right side of the vehicle than toward the driver's side."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 153,
          "question": "You should lightly apply your brakes to flash the brake lights if:",
          "answers": [
            "You are about to exit the road and need to slow down.",
            "A police car is approaching you from the other direction.",
            "A driver tailgates your vehicle."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 154,
          "question": "The road you are driving on becomes very slippery due to the glare ice. Which of these is a good thing to do in such a situation?",
          "answers": [
            "Stop driving as soon as you can safely do so.",
            "Downshift to stop.",
            "Keep varying your speed by accelerating and braking."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 155,
          "question": "Which of the following statements about speed management is true?",
          "answers": [
            "If you double your speed, stopping distance will double.",
            "Empty truck and loaded trucks will have the same stopping distance.",
            "If you double your speed, stopping distance will be increased by 4 times."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 156,
          "question": "Which of these is a good thing to remember about drinking alcohol?",
          "answers": [
            "The driver can control how fast the body gets rid of alcohol.",
            "Small quantities of alcohol improve reaction time.",
            "Alcohol first affect judgment and self-control, which are necessary for safe driving."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 157,
          "question": "How much space in front of you is needed while driving on a highway?",
          "answers": [
            "1 second for each 10 feet of vehicle length.",
            "1 second for each 20 feet of vehicle length.",
            "1 second for each 30 feet of vehicle length."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 158,
          "question": "You are driving a vehicle that could safely be driven at 55 mph on an open road. However, traffic is heavy and other vehicle driving at 35 mph, although the speed limit is 55 mph. The safest speed for your vehicle is more likely to be:",
          "answers": [
            "35 mph.",
            "45 mph.",
            "55 mph."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 159,
          "question": "If a tractor, truck or bus has antilock brakes and the yellow ABS malfunction lamp lights up on the instrument panel when you areunderway:",
          "answers": [
            "Your vehicle's ABS may not be functioning.",
            "The roadway may be slick.",
            "Your brake fluid may be low."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 160,
          "question": "You are driving a 40-foot vehicle at 35 mph. The road is dry and visibility is good. What is the least amount of space that you should keep in front of your vehicle to be safe?",
          "answers": [
            "3 seconds.",
            "4 seconds.",
            "5 seconds."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 161,
          "question": "You should adjust and check each mirror to show:",
          "answers": [
            "Some part of the vehicle is showing.",
            "You can see your entire vehicle.",
            "You do not have a blind spot."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 162,
          "question": "The primary cause of fatal crashes is:",
          "answers": [
            "Driving at night.",
            "Driving while eating.",
            "Driving too fast."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 163,
          "question": "If you have convicted of driving a commercial vehicle under influence of alcohol or drugs, you will lose your CDL for at least ____.",

          "answers": [
            "6 months",
            "1 year",
            "2 years"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 164,
          "question": "Optional safety equipment may include emergency phone number, tire chains, and:",
          "answers": [
            "Tire changing equipment.",
            "Red reflective triangles.",
            "Charged fire extinguisher."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 165,
          "question": "The driver's manual suggests several things to do, when you pass a vehicle. Which of these in NOT one of them?",
          "answers": [
            "Lightly tap your horn.",
            "At night, turn on your high beams before you start to pass and leave them on until you have completely passed the vehicle.",
            "Assume that the other driver does not see you."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 166,
          "question": "The best drivers are those who watch and prepare for hazard. This is called the _______ driving.",

          "answers": [
            "offensive",
            "defensive",
            "objective"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 167,
          "question": "Which of these statements about hazard of vehicle fire is true?",
          "answers": [
            "Poor trailer ventilation can cause cargo to catch on fire.",
            "Carrying a properly charged fire extinguisher will help prevent fires.",
            "Under-inflated tires will not cause a vehicle fire."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 168,
          "question": "In mounting driving you will have to use a lower gears to drive safely on a grade. Which of these does NOT affect your choice of gear?",
          "answers": [
            "Weight of the load.",
            "Tire tread type.",
            "Length of the grade."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 169,
          "question": "Which of these would probably NOT help if windshield covered with ice?",
          "answers": [
            "Brush.",
            "Scraper.",
            "Defroster."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 170,
          "question": "In your mirror you see a car approaching from the rear. The next time you check your mirror, you do not see the car. You wish to change the lane. You should:",
          "answers": [
            "Wait to change lanes until you are sure that car isn't in your blind spot.",
            "Ease into the other lane very slowly so the car can get out of the way if it is beside you.",
            "Assume that car left the road and change lane as normal."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 171,
          "question": "Which of these statements about marking a stopped vehicle is true?",
          "answers": [
            "If a hill or curve keeps drivers behind you from seeing the vehicle within 500 feet, the rear reflective triangle should be moved down the road to give adequate warning.",
            "You do not need to put out reflective triangles unless the vehicle will be stopped for 30 minutes or more.",
            "The vehicle's taillights should be kept on to warn other drivers."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 172,
          "question": "If antilock braking system is not working, you should:",
          "answers": [
            "Drive normally, but get system serviced soon.",
            "Drive at a lower speed and get thesystem serviced soon.",
            "Not drive until it is repaired."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 173,
          "question": "Which of these is true about notifying the authorities after an accident occurs?",
          "answers": [
            "An exact location is not necessary, just identify the road and the vehicles involved.",
            "You should notify authorities about an accident before doing anything else.",
            "If you have a cellular phone or CB radio, you should notify the authorities before exiting your vehicle."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 174,
          "question": "Which of these best describes how you should use the brake pedal on a steep downhill grade?",
          "answers": [
            "Light, pumping action.",
            "Light, steady pressure.",
            "Repeated strong pressure then release."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 175,
          "question": "When starting a bus on a level surface with good traction there is often no need for:",
          "answers": [
            "A tire check.",
            "The packing brake.",
            "Slow acceleration."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 176,
          "question": "You are starting your vehicle in motion from a stop. As you apply power to the drive wheels, they start to spin. You should:",
          "answers": [
            "Take your foot off the accelerator.",
            "Take your foot off the accelerator and apply the brakes.",
            "Try a lower gear."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 177,
          "question": "You will know if the vehicle you are driving is equipped with ABS brakes by:",
          "answers": [
            "Red indicator lamps on the brake cylinders.",
            "The certification on the driver-side door.",
            "When you turn on the ignition, yellow ABS malfunction lamps light up on the instrument panel."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 178,
          "question": "The speed at which you drive should be determined by:",
          "answers": [
            "Your schedule.",
            "Your engine type.",
            "Your visibility."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 179,
          "question": "You are driving a heavy vehicle with a manual transmission. You have to stop the vehicle on the shoulder while driving on an uphill grade. Which of these is a good rule to follow when putting it back in motion up the grade?",
          "answers": [
            "Keep the clutch slipping while slowly accelerating.",
            "Use the parking brake to hold the vehicle until the clutch engages.",
            "Let the vehicle roll backwards a few feet before you engage the clutch, but turn the wheel so that the back moves away from the roadway."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 180,
          "question": "A hazard:",
          "answers": [
            "Is any road condition or other road user that is possible danger.",
            "Cannot turn into emergency.",
            "Does not need to be seen."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 181,
          "question": "Which of these is true about radiator shutters and the winterfront during the winter driving?",
          "answers": [
            "The winterfront should be closed tightly.",
            "Ice should be removed from the radiator shutter.",
            "The engine may overheat if winterfront left open."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 182,
          "question": "Most skids:",
          "answers": [
            "Happen on ice.",
            "Will not happen with radial tires.",
            "Are caused by going too fast or trying to stop too quickly."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 183,
          "question": "Your brake can get wet when you are driving through the heavy rain. What can happen if the brakes are applied?",
          "answers": [
            "Hydroplaning.",
            "Extensive brake wear.",
            "Trailer jackknife."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 184,
          "question": "The center of gravity of a load:",
          "answers": [
            "Should be kept as high as possible.",
            "Can make a vehicle more likely to tip over on curves if it is high.",
            "Is only a problem if the vehicle is overloaded."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 185,
          "question": "Brake fade:",
          "answers": [
            "Can be caused by the brakes getting very hot.",
            "Can be corrected by letting up on the brakes for 1 - 2 seconds and then reapplying them.",
            "Can be caused by very cold weather."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 186,
          "question": "Controlled braking:",
          "answers": [
            "Involves locking the wheels for short periods of time.",
            "Is used to keep a vehicle in a straight line when braking.",
            "Should only be used with hydraulic brakes."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 187,
          "question": "Which of these statements about cold-weather driving is true?",
          "answers": [
            "An engine cannot overheat when the weather is very cold.",
            "Windshield washer antifreeze should be used.",
            "Exhaust system leaks are less dangerous in cold weather."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 188,
          "question": "Backing of the commercial vehicle is:",
          "answers": [
            "Always dangerous.",
            "Not dangerous if you don't have to turn.",
            "Not dangerous if you have a helper."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 189,
          "question": "Which of these statements about speed management is true?",
          "answers": [
            "Shady parts of the road allow better traction then do open areas.",
            "Road surfaces will freeze before bridges.",
            "When the road is slippery, it will take longer to stop and it will be harder to turn without skidding."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 190,
          "question": "What is the first thing you should do if your brakes fail while going down a hill?",
          "answers": [
            "Get off the road as soon as possible.",
            "Try to use your parking brakes to stop.",
            "Call or radio for help."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 191,
          "question": "Communication means:",
          "answers": [
            "Talking with law enforcement officers.",
            "Communicating your intention to other motorists.",
            "Talking on the CB radio."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 192,
          "question": "The amount of the brake pressure you need to stop the behicle will depend on:",
          "answers": [
            "Whether the vehicle is equipped with antilock brakes.",
            "The vehicle's speed and how quickly you want to stop.",
            "The type of brakes the vehicle has."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 193,
          "question": "Which of these is NOT a good rule to follow when caring for an injured person at an accident scene?",
          "answers": [
            "If a qualified person is helping them, stay out of the way unless asked to assist.",
            "Keep an injured persons cool.",
            "Move severely injured persons if there is danger due to fire or passing traffic."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 194,
          "question": "The engine braking effect is greatest when the engine is ______ governed RPM and the transmission is in the ______ gear.",

          "answers": [
            "below, higher", "near, lower", "above, lower"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 195,
          "question": "Can federal inspectors inspect your truck or bus?",
          "answers": [
            "Yes, but they cannot put it out of service.",
            "Yes, and they can put it out of service if it is unsafe.",
            "No."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 196,
          "question": "What keeps an engine cool in a hot weather driving?",
          "answers": [
            "Enough engine oil level.",
            "Air conditioner use.",
            "High speed driving in order to put more air to the radiator."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 197,
          "question": "What should you do before driving in mountains?",
          "answers": [
            "Know escape ramps locations on your way.",
            "Unhook your steering axle brake.",
            "Carry the tire chains in your vehicle."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 198,
          "question": "Which of these statements about certain types of cargo is true?",
          "answers": [
            "Unstable loads such as hanging meat or livestock can require extra caution on curves.",
            "Oversize loads can be hauled without a special permits during times when the roads are not busy.",
            "When liquids are hauled, the tank should always be loaded totally full."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 199,
          "question": "Which of these is true about the use of a heater?",
          "answers": [
            "You must have at least one extra heater, such as a mirror heater, battery box heater, or fuel tank heater, when driving in temperatures below freezing.",
            "If you feel sleepy, warming your cab with the heater will help you stay alert.",
            "When driving in winter weather, you should check that the heater is working properly before starting your trip."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 200,
          "question": "Antilock braking system use sensors and computers to sense:",
          "answers": [
            "Potential wheel lock up.",
            "Brake wear and condition.",
            "Roadway surface conditions."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 201,
          "question": "Which of these actions are NOT recommended for a left turn?",
          "answers": [
            "Start at the inside lane and swing right as you turn.",
            "Use a right-hand turn lane if there are two turning lanes.",
            "Start your turn in the center of the intersection."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 202,
          "question": "Which of the following about antilock braking systems is true?",
          "answers": [
            "ABS allows you to drive faster, follow more closely or drive less carefully.",
            "ABS prevents power or turning skids.",
            "ABS changes the way you brake in an emergency."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 203,
          "question": "You are driving a 40-feet vehicle at 55 mph. The road is dry and visibility is good. What is a least amount of space that you need to have in front of your vehicle?",
          "answers": [
            "4 seconds.",
            "5 seconds.",
            "6 seconds."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 204,
          "question": "While driving, ice builds up on your wipers and they no longer clean the windshield. You should:",
          "answers": [
            "Keep driving, and turn your defroster on.",
            "Keep driving and spray the windshield with washer fluid.",
            "Stop safely and fix the problem."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 205,
          "question": "What does emergency braking mean?",
          "answers": [
            "Pushing down on the brake pedal as hard as you can.",
            "Responding to a hazard by slowing the vehicle.",
            "Using the vehicle's emergency brake."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 206,
          "question": "In bad weather, many car drivers tailgate large vehicles. What should you do?",
          "answers": [
            "Increase your following distance.",
            "Lightly tap your brakes to warn the tailgater to drop back.",
            "Speed up to distance yourself from the tailgater."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 207,
          "question": "You need at least ___ inch tread depth in every major groove of your front tires.",

          "answers": [
            "2/32",
            "4/32",
            "6/32"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 208,
          "question": "Which of these statements about braking is true?",
          "answers": [
            "The heavier vehicle or the faster it is moving, the more heat the brakes have to absorb to stop it.",
            "Brake drums cool very quickly when the vehicle is moving very fast.",
            "Brake fade is not caused by heat."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 209,
          "question": "Retarders:",
          "answers": [
            "Can cause the driver wheels to skid when they have poor traction.",
            "Allow you to disconnect the steering axle brakes.",
            "Cannot be used on interstate highways."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 210,
          "question": "Tires chains:",
          "answers": [
            "Should always be carried when driving in winter weather.",
            "Should never be used on asphalt.",
            "Should only be used on the drive wheels."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 211,
          "question": "The space _______ your vehicle is the most important to manage.",

          "answers": [
            "in back of", "in front of", "to the side of"
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 212,
          "question": "What happens to tar in road pavement during hot weather?",
          "answers": [
            "It becomes gummy, making tires stick to the road.",
            "It bleeds, making the road surface slippery.",
            "Nothing, it is made for hot weather."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 213,
          "question": "Which of these is the proper way to signal to change lane?",
          "answers": [
            "Signal early, and change lanes slowly and smoothly.",
            "Signal just as you begin to change lines, and move quickly.",
            "Signal after you begin change and cross over slowly."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 214,
          "question": "What is the proper way to hold a steering wheel?",
          "answers": [
            "With both hands close together, near the top of the wheel.",
            "With both hands close together, near the bottom of the wheel.",
            "With both hands, on the opposite sides of the wheel."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 215,
          "question": "Which of these statements about tires is true?",
          "answers": [
            "You should inspect your tires every two hours or every 100 miles when driving in very hot weather.",
            "The air pressure of a tire decreases as the temperature of the tire increases.",
            "If tires are too hot to touch, let 5-10 pounds of air pressure out to cool them down."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 216,
          "question": "When a helper should be used to help back your vehicle?",
          "answers": [
            "Only when you need to back on a curved path.",
            "Whenever you have to back.",
            "Only when you have a trailer on your vehicle."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 217,
          "question": "The tread depth on a front steering wheels tires should be:",
          "answers": [
            "Not less than 4/32 (four thirty two) inch.",
            "More than 6/32 (six thirty two) inch.",
            "Not less than 2/32 (two thirty two)inch."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 218,
          "question": "Which of these is good thing to remember about using mirrors?",
          "answers": [
            "You should look at a mirror for several seconds at a time.",
            "Convex mirrors make things look larger and closer than they really are.",
            "There are blind spots that your mirror cannot show."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 219,
          "question": "You are required to inspect your truck within how many miles after beginning the trip?",
          "answers": [
            "100.",
            "150.",
            "50."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 220,
          "question": "Whenever you double your speed, your vehicle has about _____ times of destructive power if it crashes?",
          "answers": [
            "two", "three", "four"
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 221,
          "question": "If you must stop into the oncoming lane as you make a turn, you should:",
          "answers": [
            "Watch for an oncoming traffic.",
            "Complete your turn without stopping.",
            "Back up to allow the oncoming traffic to pass."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 222,
          "question": "Which of these pieces of emergency equipment should always be carried in your vehicle?",
          "answers": [
            "Circuit breakers.",
            "First aid kit.",
            "Warning devices for parking vehicle."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 223,
          "question": "When approaching a bridge on a two-lane road, you should:",
          "answers": [
            "Drive in the center of the bridge.",
            "Check the weight limit of the bridge.",
            "Slow down to 25 mph on the bridge."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 224,
          "question": "Which of these is usually true about driving in tunnels?",
          "answers": [
            "Headlights are required by law.",
            "There may be crosswinds when exiting.",
            "Speeds are limited to 30 mph. or less."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 225,
          "question": "Which of these is a danger of crossing railroad tracks on dirt roads?",
          "answers": [
            "The ground underneath the tracks may not be stable.",
            "You could get hung up halfway across the tracks.",
            "Your tires could sink into the dirt and not cross the trucks."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 226,
          "question": "Which of these is true about mirror adjustment?",
          "answers": [
            "You should adjust your mirrors before starting the trip.",
            "You can adjust your mirrors while you are driving.",
            "The mirrors could be adjusted correctly even if the trailer is not straight."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 227,
          "question": "What should you do when your vehicle hydroplanes?",
          "answers": [
            "Start stab braking.",
            "Release accelerator.",
            "Accelerate slightly."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 228,
          "question": "A car suddenly cuts in front of you, creating a hazard. Which of these actions should you NOT take?",
          "answers": [
            "Honk your horn and stay close behind the car.",
            "Signal and change lanes to avoid hazard.",
            "Slow down to prevent a crash."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 229,
          "question": "What should you do if you are unsure whether you have enough overhead clearance?",
          "answers": [
            "Slow down slightly and try to drive under the object.",
            "Find another route that will not require driving under the object.",
            "Estimate the height of an overhead object if it is not posted."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 230,
          "question": "During an inspection of hydraulic brakes, you should pump the brake pedal three times then apply firm pressure to the pedal for five seconds. If the brakes are working properly, the pedal should:",
          "answers": [
            "Depress slightly.",
            "Sink to the floor.",
            "Not move."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 231,
          "question": "Over-weight or over-sized loads:",
          "answers": [
            "Can only be driven in daylight.",
            "Require a special transit permit.",
            "Must be escorted by police."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 232,
          "question": "What is the most important reason to inspect your truck or bus?",
          "answers": [
            "Safety.",
            "To avoid being cited.",
            "It's the law."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 233,
          "question": "If your vehicle gets stuck on a raised railroad-highway crossing, you should:",
          "answers": [
            "Use reverse gear to back up off the crossing.",
            "Get out the vehicle and away from the tracks.",
            "Turn off all your lights."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 234,
          "question": "Which of these is true about commercial vehicle habit of swinging wide on turns?",
          "answers": [
            "Off-tracking.",
            "Wide-rounding.",
            "Sidewinding."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 235,
          "question": "You feel tired during long trip. To stay alert you should:",
          "answers": [
            "Take an over-the-counter stimulant.",
            "Stop periodically for rest and exercise.",
            "Keep the vehicle closed and heated."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 236,
          "question": "Medicine used to treat the common cold:",
          "answers": [
            "Should only be used when driving at daytime.",
            "Often makes you sleepy and thus should not be used while driving.",
            "Can still be used while driving if you only take half the regular dosage."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 237,
          "question": "If you are not sure what to use to put out the hazardous material fire, you should:",
          "answers": [
            "Wait for qualified firefighters.",
            "Use water.",
            "Use dirt."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 238,
          "question": "An antilock braking system is:",
          "answers": [
            "Used to compensate for poor brakes.",
            "An addition to your normal brakes.",
            "An integral part of the vehicle's braking system."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 239,
          "question": "When it is necessary to learn how a fire extinguisher works?",
          "answers": [
            "Before a fire happens.",
            "Only when a fire happens.",
            "Only when you are transporting flammable materials."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 240,
          "question": "You do NOT have a Hazardous Materials Endorsement on your Commercial Driver's License. You can drive a vehicle hauling hazardous materials when:",
          "answers": [
            "The vehicle does not required placards.",
            "A person who has the Hazardous Materials Endorsement rides with you.",
            "The GVWR is 26,001 pounds or less."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 241,
          "question": "You are driving a vehicle at 55 mph on dry pavement. About how much total stopping distance will you need to bring it to a stop?",
          "answers": [
            "Twice the length of the vehicle.",
            "Half the length of a football field.",
            "The length of a football field."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 242,
          "question": "Hydroplaning:",
          "answers": [
            "Only occurs when there is a lot of water.",
            "Cannot occur when driving through a puddle.",
            "Is more likely if tire pressure is low."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 243,
          "question": "The purpose of the retarders is to:",
          "answers": [
            "Help slow the vehicle while driving and reduce brake wear.",
            "Apply extra braking power to the non-drive axles.",
            "Help prevent skids."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 244,
          "question": "Which may be a sign of tire failure?",
          "answers": [
            "Wheels skidding.",
            "A loud hissing noise.",
            "Vibration."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 245,
          "question": "Stab braking should not be used on vehicle with:",
          "answers": [
            "Trailers.",
            "Hazardous materials.",
            "Anti-lock brakes."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 246,
          "question": "Placards must be:",
          "answers": [
            "Displayed on all vehicles hauling any amount of hazardous materials.",
            "Placed only on the front and rear of a vehicle.",
            "Placed on all four sides of a vehicle."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 247,
          "question": "Where or how is cargo blocking used?",
          "answers": [
            "In the front, back, and/or sides of the cargo.",
            "From the upper part of the cargo to the floor.",
            "Loosely around the cargo."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 248,
          "question": "Which vehicle will have the most difficulty staying in its lane during strong winds?",
          "answers": [
            "A double with an empty trailers.",
            "A tractor pulling a loaded flatbed trailer.",
            "A triple axle vehicle with cargo."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 249,
          "question": "Which of these statements about engine overheating is true?",
          "answers": [
            "You should never shut off an overheated engine until it cools.",
            "You should never remove the radiator cap on a pressurized system until the system is cooled.",
            "Antifreeze is not needed when the weather is warm."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 250,
          "question": "When driving through work zones, you should:",
          "answers": [
            "Reduce your speed only if workers are close to the roadway.",
            "Turn on your parking lights.",
            "Watch for sharp pavement drop-offs."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 251,
          "question": "How do you correct a rear-wheel acceleration skid?",
          "answers": [
            "Apply more power to the wheels.",
            "Stop accelerating.",
            "Downshift."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 252,
          "question": "Which of these statements about driving in areas with strong wind is true?",
          "answers": [
            "You should drive alongside other vehicles to help break up the wind.",
            "The lighter your vehicle, the less trouble you will have with the wind.",
            "Winds are especially a problem when coming out of tunnels."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 253,
          "question": "What three distances add up the total stopping distance for your truck or bus?",
          "answers": [
            "Attention distance, reaction distance, slowing distance.",
            "Observation distance, respond distance, braking distance.",
            "Perception distance, reaction distance, braking distance."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 254,
          "question": "If you must use a cell phone while you are driving, you should:",
          "answers": [
            "Reduce your speed.",
            "Pull off the road onto a safe and legal position.",
            "Position the phone so you can drive and see the road in front of you."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 255,
          "question": "Which of these is true about rear drive wheel braking skids?",
          "answers": [
            "Locked wheels usually have more traction than rolling wheels.",
            "Front wheels slide sideway to try to catch up with the rear wheels.",
            "On a vehicle with a trailer the trailer can push the towing vehicle sideways."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 256,
          "question": "Which of the statement is true?",
          "answers": [
            "Most people are more alert at night than during the day.",
            "Most hazards are easier to see at night than during the day.",
            "Many heavy vehicles accidents occur between midnight and 6 a.m."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 257,
          "question": "Which of these is true about tire pressure?",
          "answers": [
            "Air pressure in tires increases with the temperature.",
            "Air should be let out of hot tires so the tires do not blow out.",
            "Tire pressure need not be checked during a trip if it passed pre-trip inspection."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 258,
          "question": "Which of these statements about overhead clearance is true?",
          "answers": [
            "You should assume posted clearance signs are correct.",
            "The weight of a vehicle changes its height.",
            "If the road surface causes your vehicle to tilt toward objects at the edge of the road, you should drive close to the shoulder."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 259,
          "question": "Your vehicle's outside mirrors should be adjusted in a way that:",
          "answers": [
            "You do not have a blind spot.",
            "Some part of the vehicle is showing.",
            "You can see your entire vehicle."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 260,
          "question": "If you are stopped at a roadside rest area and found to have a BAC (Blood Alcohol Concentration) of 0.02 you will:",
          "answers": [
            "Be placed out of service for 72 hours.",
            "Be in deep trouble with your dispatcher.",
            "Be placed out of service for 24 hours."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 261,
          "question": "Why your vehicle's speed naturally increases on a downgrade?",
          "answers": [
            "Gravity.",
            "The engine runs smoother.",
            "Lack of traction."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 262,
          "question": "When driving on roads where truck speed limits are less than cars, you should:",
          "answers": [
            "Be extra careful when changing lanes.",
            "Adjust your speed to speed of other trucks and buses.",
            "Adjust your speed to the other cars."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 263,
          "question": "You wish to turn right from one two-lane, two-way street to another. Your vehicle is so long that you must swing wide to make the turn.",

          "answers": [
            "You should swing wide when you begin the turn.",
            "You should swing wide when you complete the turn.",
            "You should not make a turn. Drive straight to the appropriate intersection."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 264,
          "question": "To prevent brake \"fade\", you should:",
          "answers": [
            "Coast down hills that are not very steep inclines.",
            "Apply constant hard pressure on the brakes when driving down hills.",
            "Select a gear, which will keep your vehicle to a safe speed on the deep downgrade."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 265,
          "question": "It is unsafe to operate a vehicle with how many cracked, broken or missing spring leaves in any leaf spring:",
          "answers": [
            "One-third of the total number",
            "One-half of the total number",
            "One-fourth of the total number"
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 266,
          "question": "You should always turn on your 4-way emergency flashers when you:",
          "answers": [
            "Drive through the mountains.",
            "Park on the side of the road.",
            "Cross railroad tracks."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 267,
          "question": "The total weight of a powered unit, the trailer, and the cargo is called:",
          "answers": [
            "Gross combination weight.",
            "Gross vehicle weight.",
            "Gross axle weight."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 268,
          "question": "You can see a marking on a vehicle ahead of you. The marking is a red triangle with an orange center. What does the marking mean?",
          "answers": [
            "It may be a slow-moving vehicle.",
            "The vehicle is hauling hazardous materials.",
            "It is being driven by a student driver."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 269,
          "question": "Which of these statements about staying alert to drive is true?",
          "answers": [
            "A half-hour break for coffee will do more to keep you alert than a half-hour nap.",
            "If you must stop to take a nap, it should be at a truck stop or other rest area, never on the side of the road.",
            "Sleep is the only thing that can overcome fatigue."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 270,
          "question": "Which of these is NOT a brake check you normally do during your walk-around inspection?",
          "answers": [
            "Brake adjustment.",
            "Conditions of hoses.",
            "Hydraulic brake cylinders leaks."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 271,
          "question": "Which of these statements about inspection of the suspension components is true?",
          "answers": [
            "Distorted coil springs are safe as long as they are not broken.",
            "Axle mounts should be checked at each point where they are secured on the vehicle frame and axle.",
            "Suspension components should be checked at all axles, except for the power unit."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 272,
          "question": "Which of these is NOT a proper use of vehicle lights?",
          "answers": [
            "Turning on your headlights during the day when visibility is reduced due to rain or snow.",
            "Flashing your brake lights to warn someone behind you that are slowing down.",
            "Flashing your brake light to get someone off your tail."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 273,
          "question": "Which of these is a good thing to do when driving at night?",
          "answers": [
            "Keep your speed slow enough that you can stop within the range of your headlights.",
            "Look directly at oncoming headlights only briefly.",
            "Keep your instrument lights bright."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 274,
          "question": "You are approaching a traffic light that has been green for a long time. What is the best approach?",
          "answers": [
            "Continue at your current speed and see if the light changes.",
            "Accelerate to make sure you get through the light.",
            "Start slowing down so you will be ready to stop."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 275,
          "question": "After starting the engine:",
          "answers": [
            "The coolant temperature gauge should begin a gradual rise to normal.",
            "The oil pressure gauge should take 3 - 5 minutes to rise to normal.",
            "The engine temperature gauge will take 3 - 5 minutes to rise to normal."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 276,
          "question": "Can state inspectors inspect your truck or bus?",
          "answers": [
            "No.",
            "Yes, but they cannot put it out of service.",
            "Yes, and they can put it out of service if it is unsafe."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 277,
          "question": "If you are being tailgated, you should:",
          "answers": [
            "Increase your following distance.",
            "Flash your brake lights.",
            "Signal the tailgater when it is safe to pass you."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 278,
          "question": "Which of these statements about a pre-trip inspection is true?",
          "answers": [
            "If parked on a street, you should walk so that you face away from an oncoming traffic.",
            "Leave the key in the ignition so you do not loose it while you are under the truck.",
            "If you need to tilt the cab, secure loose things so they do not fall and break anything."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 279,
          "question": "Cargo inspection:",
          "answers": [
            "Is most often not the responsibility of the driver.",
            "Should be performed after every break you take while driving.",
            "Are needed only if hazardous materials are being hauled."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 280,
          "question": "If you are forced to return to the road before stopping on the shoulder, the best procedure is:",
          "answers": [
            "Using mirrors and turn signals, edge gradually back on the road.",
            "Using mirrors and turn signals, turn sharply to get back on the road.",
            "Drive on the shoulder to the next exit and then re-enter the road."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 281,
          "question": "Which of these is NOT part of the pre-trip inspection of the engine compartment?",
          "answers": [
            "Valve clearance.",
            "Engine oil level.",
            "Worn electrical wiring insulation."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 282,
          "question": "What should you do if a car coming toward you at night keeps its high beams on?",
          "answers": [
            "Flash your high beams quickly at the other driver.",
            "Look to the right lane or edge markings of the road.",
            "Slow down and look straight ahead in your lane."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 283,
          "question": "When you are parked at the side of the road at night, you must:",
          "answers": [
            "Turn on your 4-way emergency flashers to warn others.",
            "Put out your emergency warning lights within 30 minutes.",
            "Use your taillights to give warning to other drivers."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 284,
          "question": "You must drive on a slippery road. Which of these is a good thing to do in such a situation?",
          "answers": [
            "Use a smaller following distance.",
            "Apply the brakes while on curves.",
            "Slow down gradually."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 285,
          "question": "You are traveling down a long, steep hill. Your brakes get so hot that they fail. What should you do?",
          "answers": [
            "Downshift and pump the brake pedal.",
            "Look for an escape ramp or escape route.",
            "Both of the above."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 286,
          "question": "You are driving heavy vehicle and the road surface became slippery due to the rain. What you should do?",
          "answers": [
            "Decrease your speed even further for adverse weather.",
            "Adjust your speed to traffic.",
            "Turn off your 4-way flashers."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 287,
          "question": "Your vehicle is in a traffic emergency and may collide with another vehicle if you do not take action. Which of these is a good rule to remember at such a time?",
          "answers": [
            "You can almost always turn to miss an obstacle more quickly than you can stop.",
            "Stopping is always the safest action in a traffic emergency.",
            "Leaving the road is always more risky than hitting another vehicle."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 288,
          "question": "Most serious skid results from:",
          "answers": [
            "Driving too fast for conditions.",
            "Turning too sharply.",
            "An uneven load."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 289,
          "question": "One reason that dry bulk tanks require special care is:",
          "answers": [
            "The load can shift.",
            "They can easily catch fire.",
            "They can only be filled halfway."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 290,
          "question": "Which of these rigs have more chances to off-track while making turn?",
          "answers": [
            "Triple with 45-feet trailer.",
            "Tractor with two 27-feet trailers.",
            "53-feet straight truck."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 291,
          "question": "You are driving in a steady rain. A good indication that hydroplaning can occur is when:",
          "answers": [
            "The roadway surface is new.",
            "The vehicle in front of you creates water splashes.",
            "You cannot see raindrops on the roadway surfaces."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 292,
          "question": "Which of the following systems should receive extra attention during winter weather inspection?",
          "answers": [
            "Suspension.",
            "Exhaust.",
            "Steering."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 293,
          "question": "You are driving on a straight level highway at 50 mph. There are no vehicles in front of you. Suddenly, a tire blows out on your vehicle. What should you do first?",
          "answers": [
            "Stay off the brake until the vehicle has slowed down.",
            "Begin light braking.",
            "Begin emergency braking."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 294,
          "question": "Truck escape ramps:",
          "answers": [
            "Help avoid damage to vehicles.",
            "Cannot be used by certain types of heavy vehicles.",
            "Are not for buses."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 295,
          "question": "Merging onto a road is safest if you:",
          "answers": [
            "Wait for a large enough gap in traffic to enter the road.",
            "Bend over into the nearest lane so that other vehicles will give you room.",
            "Gain speed on the shoulder and then merge."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 296,
          "question": "You are driving a new truck with a manual transmission. What gear will you probably have to use to take a long steep downhill grade?",
          "answers": [
            "The same gear you would use to climb the hill.",
            "A lower gear than you would use to climb the hill.",
            "A higher gear than you would use to climb the hill."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 297,
          "question": "One can recognize hazardous materials by looking at the container _____.",

          "answers": [
            "label",
            "shape",
            "color"
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 298,
          "question": "Turn signals should be used:",
          "answers": [
            "At least 100 feet before turning or changing lane.",
            "At least 150 feet before turning or changing lane.",
            "At least 200 feet before turning or changing lane."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 299,
          "question": "You are driving in an area with few streetlights on a clear right. If you cannot see well with your headlights, which of the actions would help?",
          "answers": [
            "Find another route that is better lit, even if it is out of the way.",
            "Turn your interior lights on and adjust your instrument lights up.",
            "Use your high beams when legal and keep your interior lights off."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 300,
          "question": "When you are driving on grades, which of these is the best way to choose a safe speed?",
          "answers": [
            "Based on your vehicle and its cargo, select a safe speed that is within the posted speed.",
            "Follow the vehicle in front of you.",
            "If you have a light load, you can go faster than those with a heavy load."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 301,
          "question": "If you do not have a CB radio, what is the first thing you should do at an accident scene?",
          "answers": [
            "Protect the area.",
            "Notify the authority.",
            "Care for the injured person."
          ],
          "correctAnswerIndex": 0
        },
        {
          "no": 302,
          "question": "What kind of optional equipment (except tire wrench) could be in your vehicle?",
          "answers": [
            "Fully charged fire extinguisher.",
            "Set of warning device.",
            "Battery charger."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 303,
          "question": "Which of these statements about using turn signals is true?",
          "answers": [
            "You do not need to use your turn signal when changing lanes in traffic on a four-lane highway.",
            "When turning, you should signal early.",
            "You should use your turn signal to mark your vehicle when it is pulled off on the side of the road."
          ],
          "correctAnswerIndex": 1
        },
        {
          "no": 304,
          "question": "Convex (curved) mirrors:",
          "answers": [
            "Make objects appear closer than they really are.",
            "Make objects appear larger than they really are.",
            "Show a wider area than flat mirrors show."
          ],
          "correctAnswerIndex": 2
        },
        {
          "no": 305,
          "question": "Which of these do NOT provide extra gears on some trucks?",
          "answers": [
            "Automatic transmission.",
            "Auxiliary transmission.",
            "Multi-speed rear axles."
          ],
          "correctAnswerIndex": 0
        }]
    )
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("CDLGeneralKnowladgeTests")
  }
};