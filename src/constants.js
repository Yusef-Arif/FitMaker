import { email, location, telephone } from "./assets/icon";
import {
  serv1,
  serv2,
  serv3,
  serv4,
  feat1,
  // feat2,
  feat3,
  feat4,
  feat5,
  traner1,
  traner2,
  traner3,
  traner4,
  testi_image,
  testi_card,
  testi_card2,
  blog1,
  blog2,
  blog3,
  blog4,
  blog5,
} from "./assets/images";

export const statistics = [
  {
    value: "96%",
    label: "Client Satisfaction",
    pra: "Our members love their results and experience",
  },
  {
    value: "+5",
    label: "years of Experience",
    pra: "Trust in our proven track record of transforming",
  },
  {
    value: "+800",
    label: "Active Members",
    pra: "Join our thriving fitness community",
  },
  {
    value: "24/7",
    label: "Support Available",
    pra: "Expert assistance whenever you need it",
  },
];

export const services = [
  { service: serv1, path: "bulding muscle" },
  { service: serv2, path: "losing weight" },
  { service: serv3, path: "traning in home" },
  { service: serv4, path: "gym plane" },
];
export const plans = [
  {
    package: "Pro Plan",
    desc: "Our Pro Plan offers advanced workouts and personalized nutrition coaching to help you reach your goals faster. Sign Up Right Now!",
    feat: {
      1: "- Access to All Of Our Exercise Videos",
      2: "- Progress Tracking ",
      3: "- Supportive Online Community",
      4: "- Advanced, Personalized Workout Plans",
      5: "- Comprehensive Nutrition Coaching",
      6: "- Access to Advanced Workout Programs",
      7: "- Body Composition Analysis",
    },
    price: "99$",
  },

  {
    package: "CUSTOM PLAN",
    desc: "Experience a fully tailored fitness experience with our Custom Plan. Work one-on-one with a dedicated trainer to achieve your goals.",
    feat: {
      1: "- Access to All Of Our Exercise Videos",
      2: "- Progress Tracking ",
      3: "- Supportive Online Community",
      4: "- Advanced, Personalized Workout Plans",
      5: "- Comprehensive Nutrition Coaching",
      6: "- Access to Advanced Workout Programs",
      7: "- Body Composition Analysis",
    },
    price: "149$",
  },
  {
    package: "BEGGINER PLAN",
    desc: "Start your fitness journey with our Beginner Plan. Build a strong foundation with basic workouts and essential nutrition guidance.",
    feat: {
      1: "- Access to All Of Our Exercise Videos",
      2: "- Progress Tracking ",
      3: "- Supportive Online Community",
      4: "- Advanced, Personalized Workout Plans",
      5: "- Comprehensive Nutrition Coaching",
      6: "- Access to Advanced Workout Programs",
      7: "- Body Composition Analysis",
    },
    price: "49$",
  },
];

export const tools = [
  { tool: feat5, path: "calorie calculator" },
  { tool: feat4, path: "BMI calculator" },
  { tool: feat3, path: "water intake calculator" },
  { tool: feat1, path: "macronutrion calculator" },
];

export const testimonials = [
  {
    name: "Steven Haward",
    image: testi_image,
    card: testi_card,
  },
  {
    name: "Edward Hawley",
    image: testi_image,
    card: testi_card2,
  },
  {
    name: "josh oliver",
    image: testi_image,
    card: testi_card,
  },
];

export const trainers = [
  {
    trainer: traner1,
    name: "Steven Joshe",
  },
  {
    trainer: traner2,
    name: "Michael Harris",
  },
  {
    trainer: traner3,
    name: "John Andre",
  },
  {
    trainer: traner4,
    name: "Tom Blake",
  },
  {
    trainer: traner1,
    name: "Steven Joshe",
  },
  {
    trainer: traner2,
    name: "Michael Harris",
  },
  {
    trainer: traner3,
    name: "John Andre",
  },
  {
    trainer: traner4,
    name: "Tom Blake",
  },
];

export const blogs = [
  {
    image: blog1,
    title: "5 Essential Exercises for Building Muscle",
    task: "Strength Training",
    content: `
      <h2>Introduction :</h2>
      <p>Building muscle is not just about lifting heavy weights; it’s about performing the right exercises with proper form and consistency. These five exercises target multiple muscle groups, helping you gain strength and size effectively.</p>
      <h2>1. Bench Press</h2>
      <p>The bench press is a classic exercise for building upper body strength, focusing on the chest, shoulders, and triceps. Start with a weight you can manage and increase progressively.</p>
      <h2>2. Deadlift</h2>
      <p>The deadlift works almost every muscle in your body, especially your back, hamstrings, and glutes. It’s essential to maintain a straight back and proper posture to avoid injury.</p>
      <h2>3. Squats</h2>
      <p>Squats are the king of lower body exercises, targeting the quads, hamstrings, and glutes. They also engage your core for stability.</p>
      <h2>4. Pull-Ups</h2>
      <p>Pull-ups are excellent for developing upper body strength, particularly your lats and biceps. They’re a great bodyweight exercise that can be modified based on your fitness level.</p>
      <h2>5. Barbell Rows</h2>
      <p>This exercise focuses on your back and biceps, helping you build a thicker and stronger upper body.</p>
      <h2>Conclusion</h2>
      <p>Incorporate these exercises into your weekly routine for balanced muscle growth. Always prioritize proper form over heavy weights to prevent injuries.</p>
    `,
  },
  {
    image: blog2,
    title: "The Ultimate Guide to a Balanced Diet",
    task: "Nutrition",
    content: `
      <h2>Why Nutrition is Crucial</h2>
      <p>A balanced diet is the cornerstone of a healthy lifestyle. It provides the energy your body needs for daily activities and supports muscle recovery after workouts.</p>
      <h2>Key Components of a Balanced Diet</h2>
      <ul>
        <li><b>Proteins:</b> Essential for muscle repair and growth. Sources include chicken, fish, eggs, and legumes.</li>
        <li><b>Carbohydrates:</b> Your body's main source of energy. Choose whole grains, fruits, and vegetables.</li>
        <li><b>Fats:</b> Healthy fats like avocados, nuts, and olive oil are important for brain function and hormone production.</li>
        <li><b>Vitamins and Minerals:</b> Found in a variety of colorful fruits and vegetables.</li>
      </ul>
      <h2>Tips for a Balanced Diet</h2>
      <p>Plan your meals in advance, avoid processed foods, and stay hydrated by drinking plenty of water. Moderation is key to enjoying all food groups without overindulging.</p>
    `,
  },
  {
    image: blog3,
    title: "the Benefits of HIIT Training",
    task: "Cardio",
    content: `
      <h2>What is HIIT?</h2>
      <p>High-Intensity Interval Training (HIIT) alternates between short bursts of intense exercise and brief rest periods. It's a time-efficient workout that delivers impressive results.</p>
      <h2>Benefits of HIIT</h2>
      <ul>
        <li><b>Calorie Burn:</b> HIIT burns more calories in less time compared to traditional workouts.</li>
        <li><b>Increased Metabolism:</b> Your metabolism stays elevated even after the workout, promoting fat loss.</li>
        <li><b>Improved Endurance:</b> HIIT enhances your cardiovascular fitness and stamina.</li>
        <li><b>Convenience:</b> It can be done anywhere, with or without equipment.</li>
      </ul>
      <h2>Sample HIIT Workout</h2>
      <p>Try this beginner-friendly routine:</p>
      <ul>
        <li>30 seconds of jumping jacks</li>
        <li>30 seconds of rest</li>
        <li>30 seconds of burpees</li>
        <li>30 seconds of rest</li>
        <li>Repeat 4 times</li>
      </ul>
      <p>Remember to warm up before starting and cool down afterward to avoid injury.</p>
    `,
  },
  {
    image: blog4,
    title: "Home Workouts for Busy people",
    task: "Home Workouts",
    content: `
      <h2>Why Choose Home Workouts?</h2>
      <p>With a busy schedule, finding time to hit the gym can be challenging. Home workouts allow you to stay fit without sacrificing time.</p>
      <h2>Effective Home Exercises</h2>
      <ul>
        <li><b>Push-Ups:</b> Great for upper body strength, targeting the chest, shoulders, and triceps.</li>
        <li><b>Bodyweight Squats:</b> Strengthens your legs and glutes without needing any equipment.</li>
        <li><b>Planks:</b> Builds core strength and improves posture.</li>
        <li><b>Resistance Band Exercises:</b> Adds variety and resistance to your workouts.</li>
      </ul>
      <h2>Creating a Routine</h2>
      <p>Set aside 20-30 minutes daily for your workout. Combine strength and cardio exercises for a balanced routine.</p>
    `,
  },
  {
    image: blog5,
    title: "How to Always Stay Motivated ",
    task: "Motivation",
    content: `
      <h2>Understanding Motivation</h2>
      <p>Motivation is the driving force that pushes you towards your goals. However, it’s normal to feel unmotivated at times. The key is to develop habits that keep you consistent.</p>
      <h2>Strategies for Staying Motivated</h2>
      <ul>
        <li><b>Set Clear Goals:</b> Write down what you want to achieve and break it into smaller steps.</li>
        <li><b>Track Your Progress:</b> Use a journal or app to monitor your improvements.</li>
        <li><b>Find a Support System:</b> Surround yourself with people who encourage and inspire you.</li>
        <li><b>Celebrate Success:</b> Reward yourself for reaching milestones, no matter how small.</li>
      </ul>
      <h2>Final Thoughts</h2>
      <p>Motivation may come and go, but building a disciplined routine will ensure you stay on track even when motivation is low.</p>
    `,
  },
];

export const Benefits = [
  {
    title: "Personalized Workout Plans",
    desc: "Customized routines that match your fitness level and goals, ensuring you achieve the best results in the most efficient way.",
  },
  {
    title: "Expert Coaching",
    desc: "Work with certified trainers who will guide you every step of the way to ensure you're on the right track.",
  },
  {
    title: "Exclusive Resources",
    desc: "Access premium content, including video tutorials, nutrition guides, and member-only discounts on fitness gear.",
  },
  {
    title: "Community Support",
    desc: "Join a vibrant community of fitness enthusiasts where you can share experiences, get motivated, and stay inspired.",
  },
];

export const FAQs = [
  {
    q: "What is FitMaker and how can it help me reach my fitness goals?",
    a: "FitMaker is an online fitness platform that offers personalized workout plans, expert coaching, and comprehensive nutritional guidance. Whether you're looking to lose weight, build muscle, or simply stay fit, our tailored programs and community support will help you achieve your fitness goals.",
  },
  {
    q: "How do I get started with a workout plan on FitMaker?",
    a: "To get started, sign up on FitMaker, complete your fitness profile, and choose a plan that matches your goals. You'll receive a customized workout plan immediately, along with guidance to help you begin your fitness journey.",
  },
  {
    q: "What is included in the Custom Plan?",
    a: "The Custom Plan includes personalized workout routines, tailored nutrition guidance, and ongoing progress tracking, all designed to match your fitness goals and lifestyle.",
  },
  {
    q: "Can I change my plan after signing up?",
    a: "Yes, you can easily change your plan after signing up. FitMaker allows flexibility to adjust your workout or nutrition plan as your goals or needs evolve.",
  },
  {
    q: "What kind of support can I expect from my trainer?",
    a: "Your FitMaker trainer offers personalized guidance, progress check-ins, plan adjustments, and expert advice to keep you motivated and on track toward your fitness goals.",
  },
];

export const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About us", link: "/" },
      { name: "Our Services", link: "/" },
      { name: "Careers", link: "/" },
      { name: "Blog", link: "/" },
      { name: "Testimonial", link: "/" },
      { name: "Contact Us", link: "/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Fitness tools", link: "/" },
      { name: "Workout Videos", link: "/" },
      { name: "nutrition Guides", link: "/" },
      { name: "FAQ", link: "/" },
      { name: "Success Stories", link: "/" },
      { name: "Membership", link: "/" },
    ],
  },
  {
    title: "Programs",
    links: [
      { name: "Weight Loss", link: "/" },
      { name: "Building muscles", link: "/" },
      { name: "Home Workout", link: "/" },
      { name: "Gym Plan", link: "/" },
      { name: "Our Plans", link: "/" },
      { name: "Fitness group", link: "/" },
    ],
  },
];

export const Contact = [
  {
    icon: location,
    p: "usa - Washngton DC",
  },
  {
    icon: telephone,
    p: "1234-56789",
  },
  {
    icon: email,
    p: "yusefarif616@gmail.com",
  },
];

// content.js
export const content = {
  buildingMuscle: {
    title: "How to Build Your Muscles Properly",
    intro: "The importance of building muscles for overall health and increasing strength. Regular training can improve your quality of life.",
    steps: [
      "Set Goals: Define a clear objective (e.g., gain 5kg of muscle in 6 months).",
      "Choose the Right Exercises: Focus on squats, deadlifts, and bench presses.",
      "Nutrition: Highlight the importance of protein (e.g., chicken, eggs, legumes) along with carbs and healthy fats."
    ],
    additionalTips: [
      "Stick to a weekly workout schedule.",
      "Ensure proper sleep for muscle recovery and growth."
    ],
    cta: "Join our plans now!"
  },
  
  losingWeight: {
    title: "Your First Step Toward a Healthy and Fit Body",
    intro: "Losing weight is not just about appearance but also improving overall health.",
    steps: [
      "Healthy Nutrition: Reduce calorie intake and focus on proteins and vegetables.",
      "Physical Activity: Engage in aerobic exercises like running or walking.",
      "Track Your Progress: Use apps to monitor daily calories."
    ],
    additionalTips: [
      "Avoid sweets and sugary drinks.",
      "Stay hydrated by drinking plenty of water."
    ],
    cta: "Get your plan today!"
  },
  
  trainingAtHome: {
    title: "How to Train at Home Easily",
    intro: "Training at home saves time and offers convenience.",
    effectiveWorkouts: [
      "Push-ups, squats, and planks.",
      "Use resistance bands or water bottles as weights."
    ],
    trainingOrganization: [
      "Design a weekly plan with rest periods.",
      "Gradually increase intensity to build strength and fitness."
    ],
    cta: "Join our home training plans!"
  },
  
  gymPlan: {
    title: "Professional Plans for Your Gym Success",
    intro: "A customized plan helps you achieve your fitness goals effectively.",
    planComponents: [
      "A comprehensive workout schedule targeting all major muscle groups.",
      "Guidance on the right weights and repetition ranges.",
      "A tailored nutrition plan to support performance."
    ],
    successStories: "See how others achieved their goals with our professional plans.",
    cta: "Start your gym plan today!"
  }
};

export const CalorieCalculatorResult = (Cpd) => [
  {
    h1: "Maintain weight",
    p1: "",
    Calories: Cpd,
    percent: "100%",
    p2: "Calories/day",
  },
  {
    h1: "Mild weight loss",
    p1: "0.25 kg/week",
    Calories: Cpd * (92 / 100),
    percent: "92%",
    p2: "Calories/day",
  },
  {
    h1: "Weight loss",
    p1: "0.5 kg/week",
    Calories: Cpd * (83 / 100),
    percent: "83%",
    p2: "Calories/day",
  },
  {
    h1: "Extreme weight loss",
    p1: "1 kg/week",
    Calories: Cpd * (66 / 100),
    percent: "66%",
    p2: "Calories/day",
  },
];

export const macroCalculatorResult = (results) => [
  {
    h1: "Protine",
    span: results.protein.toFixed(2),
    p: "grams/day",
  },
  {
    h1: "Carbs",
    span: results.carb.toFixed(2),
    p: "grams/day",
  },
  {
    h1: "Fat",
    span: results.fat.toFixed(2),
    p: "grams/day",
  },
  {
    h1: "Sugar",
    span: "<" + results.sugar.toFixed(2),
    p: "grams/day",
  },
  {
    h1: "Saturated Fat",
    span: "<" + results.saturatedFat.toFixed(2),
    p: "grams/day",
  },
  {
    h1: "Food Energy",
    span: results.calories.toFixed(2),
    p: "Calories/day",
  },
];