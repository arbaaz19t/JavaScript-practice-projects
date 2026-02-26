const qoutes = ["Dream big. Start small. Act now.", "Discipline beats motivation.", "Consistency creates success.", "Your only limit is your mind.", "Progress, not perfection.", "Small steps every day.", "Focus on the process.", "Hard work never betrays.", "Make yourself proud.", "Stay hungry. Stay foolish.", "Build habits, not excuses.", "Action cures fear.", "Be stronger than your excuses.", "Success starts with self-belief.", "Done is better than perfect.", "Win the morning, win the day.", "Comfort kills growth.", "Learn. Build. Repeat.", "Doubt kills more dreams than failure ever will.", "Fall seven times, stand up eight.", "Work in silence, shine in public.", "The grind defines you.", "Time is your greatest asset.", "Skill over luck.", "Growth begins outside comfort.", "Results require patience.", "Push through the pain.", "Start before you're ready.", "Energy flows where focus goes.", "Stay consistent, stay unstoppable.", "Your future needs you.", "Success loves preparation.", "Make today count.", "Fear is temporary. Regret is forever.", "Keep showing up.", "Confidence comes from action.", "Discipline equals freedom.", "You become what you repeat.", "Create more than you consume.", "The best investment is yourself.", "Stay patient and trust the process.", "Great things take time.", "Turn pain into power.", "Chase progress, not applause.", "Execute, don’t just plan.", "Mindset is everything.", "Winners focus on winning.", "Pressure builds diamonds.", "Stay focused, stay sharp.", "Never stop improving.",
    "Success is built daily.",
    "Hustle beats talent.",
    "Start now, adjust later.",
    "Momentum creates magic.",
    "Believe, then achieve.",
    "Sacrifice today, celebrate tomorrow.",
    "Dreams demand discipline.",
    "Patience builds empires.",
    "Your grind, your glory.",
    "Think bigger than fear.",

    "Failure is feedback.",
    "Results follow effort.",
    "Stay humble, work hard.",
    "Turn ideas into action.",
    "Energy is contagious.",
    "Build your own path.",
    "Silence the doubts.",
    "Make excuses obsolete.",
    "Focus fuels success.",
    "Be addicted to growth.",

    "Greatness requires grit.",
    "Keep leveling up.",
    "Fear less, do more.",
    "Confidence is trained.",
    "Every day is a chance.",
    "Stay sharp.",
    "Move with purpose.",
    "Consistency compounds.",
    "Win your mind.",
    "Stay dangerous.",

    "Turn pressure into power.",
    "Earn your confidence.",
    "Execute relentlessly.",
    "Outwork yesterday.",
    "Choose growth daily.",
    "Stay disciplined.",
    "Commit fully.",
    "Chase excellence.",
    "Work smarter daily.",
    "Action over comfort.",

    "Success is rented daily.",
    "Dream. Plan. Do.",
    "Control the controllables.",
    "Build unstoppable habits.",
    "Trust your effort.",
    "Stay focused longer.",
    "Pain teaches power.",
    "Push your limits.",
    "Success loves speed.",
    "Keep improving daily.",

    "Make failure your teacher.",
    "Work until it works.",
    "Stay hungry for progress.",
    "Earn every result.",
    "Master your craft.",
    "Discipline builds destiny.",
    "Stay ahead of average.",
    "Small wins matter.",
    "Doubt your doubts.",
    "Your habits decide.",

    "Build, break, rebuild.",
    "Stay patient but aggressive.",
    "Grind quietly.",
    "Stay unstoppable.",
    "Be fearless daily.",
    "Create your momentum.",
    "Improve 1% daily.",
    "Win silently.",
    "Be the standard.",
    "Hustle in silence.",

    "Progress requires persistence.",
    "Action creates clarity.",
    "Stay obsessed with growth.",
    "Effort changes everything.",
    "Win with discipline.",
    "Start messy.",
    "Stay mentally strong.",
    "Control your focus.",
    "Choose courage daily.",
    "Build your legacy.",

    "Focus beats distraction.",
    "Stay calm and grind.",
    "Keep chasing progress.",
    "Refuse to quit.",
    "Work hard, stay kind.",
    "Turn struggle into strength.",
    "Stay hungry always.",
    "Grow through discomfort.",
    "Consistency is king.",
    "Keep your promises.",

    "Invest in yourself.",
    "Strength comes from struggle.",
    "Pressure reveals power.",
    "Level up daily.",
    "Earn your success.",
    "Focus creates freedom.",
    "Trust the grind.",
    "Stay disciplined daily.",
    "Push past limits.",
    "Success is a choice.",
]

const qoute = document.querySelector("h1")
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    const index = Math.floor(Math.random() * 149);
    qoute.innerHTML = qoutes[index];



      const randomColor = `rgb(
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)}
      )`;

      // 3️⃣ Apply Background Color
      document.body.style.backgroundColor = randomColor;
       
    

    
});
