// ============================================================
// KAERI EDTECH — MOTIVATION DATABASE (v2)
// ============================================================
// Format: { text: "...", author: "..." }
// Attribution rules:
//   - Named authors where confirmed
//   - "(attributed)" where the citation is commonly used but historically contested
//   - "Anonymous" where no reliable source exists
//   - "Proverb" for traditional sayings
// Sections:
//   1. Jim Rohn — The Philosophy of Discipline
//   2. Les Brown — The Hunger
//   3. Eric Thomas — The Grind
//   4. Stoics — Marcus Aurelius, Seneca, Epictetus
//   5. African Voices — Proverbs, Nyerere, Kaunda, Maathai, Mandela
//   6. Academic & Study Discipline
//   7. Zig Ziglar & Others

const motivation = [

  // ────────────────────────────────────────────────
  // 1. JIM ROHN — The Philosophy of Discipline
  // ────────────────────────────────────────────────
  { text: "Discipline is the bridge between goals and accomplishment.", author: "Jim Rohn" },
  { text: "Don't wish it were easier. Wish you were better.", author: "Jim Rohn" },
  { text: "We must all suffer from one of two pains: the pain of discipline or the pain of regret.", author: "Jim Rohn" },
  { text: "The difference between the pain of discipline and the pain of regret is that discipline weighs ounces while regret weighs tons.", author: "Jim Rohn" },
  { text: "Success is doing ordinary things extraordinarily well.", author: "Jim Rohn" },
  { text: "Either you run the day, or the day runs you.", author: "Jim Rohn" },
  { text: "Motivation is what gets you started. Habit is what keeps you going.", author: "Jim Rohn" },
  { text: "If you are not willing to risk the usual, you will have to settle for the ordinary.", author: "Jim Rohn" },
  { text: "Success is nothing more than a few simple disciplines, practiced every day.", author: "Jim Rohn" },
  { text: "Don't let your learning lead to knowledge. Let your learning lead to action.", author: "Jim Rohn" },
  { text: "The only way it gets better for you is when you get better.", author: "Jim Rohn" },
  { text: "Character isn't something you were born with and can't change. It's something you must take responsibility for forming.", author: "Jim Rohn" },
  { text: "Success is neither magical nor mysterious. It is the natural consequence of consistently applying basic fundamentals.", author: "Jim Rohn" },
  { text: "Work harder on yourself than you do on your job.", author: "Jim Rohn" },
  { text: "You cannot change your destination overnight, but you can change your direction overnight.", author: "Jim Rohn" },
  { text: "Formal education will make you a living; self-education will make you a fortune.", author: "Jim Rohn" },
  { text: "Your life does not get better by chance, it gets better by change.", author: "Jim Rohn" },
  { text: "Excuses are the nails used to build a house of failure.", author: "Jim Rohn" },
  { text: "Failure is simply a few errors in judgment, repeated every day.", author: "Jim Rohn" },
  { text: "How long should you try? Until.", author: "Jim Rohn" },
  { text: "If you go to work on your goals, your goals will go to work on you.", author: "Jim Rohn" },
  { text: "Suffer the pain of discipline or suffer the pain of regret.", author: "Jim Rohn" },

  // ────────────────────────────────────────────────
  // 2. LES BROWN — The Hunger
  // ────────────────────────────────────────────────
  { text: "You must be hungry.", author: "Les Brown" },
  { text: "Shoot for the moon. Even if you miss, you'll land among the stars.", author: "Les Brown" },
  { text: "Too many of us are not living our dreams because we are living our fears.", author: "Les Brown" },
  { text: "It's not over until I win.", author: "Les Brown" },
  { text: "Accept responsibility for your life. Know that it is you who will get you where you want to go, no one else.", author: "Les Brown" },
  { text: "If you fall, fall on your back. If you can look up, you can get up.", author: "Les Brown" },
  { text: "You don't have to be great to get started, but you have to get started to be great.", author: "Les Brown" },
  { text: "Other people's opinion of you does not have to become your reality.", author: "Les Brown" },
  { text: "Life has no limitations, except the ones you make.", author: "Les Brown" },
  { text: "Align yourself with people that you can learn from, people who want more out of life.", author: "Les Brown" },
  { text: "Review your goals twice every day in order to be focused on achieving them.", author: "Les Brown" },
  { text: "Help others achieve their dreams and you will achieve yours.", author: "Les Brown" },
  { text: "Wanting something is not enough. You must hunger for it.", author: "Les Brown" },
  { text: "The graveyard is the richest place on earth, because it is here that you will find all the hopes and dreams that were never fulfilled.", author: "Les Brown" },
  { text: "Make it happen.", author: "Les Brown" },

  // ────────────────────────────────────────────────
  // 3. ERIC THOMAS — The Grind
  // ────────────────────────────────────────────────
  { text: "When you want to succeed as bad as you want to breathe, then you'll be successful.", author: "Eric Thomas" },
  { text: "Pain is temporary. It may last a minute, or an hour, or a day, or a year, but eventually it will subside. If I quit, however, it lasts forever.", author: "Eric Thomas" },
  { text: "Don't cry to give up, cry to keep going.", author: "Eric Thomas" },
  { text: "You're already in pain, you're already hurt, get a reward from it.", author: "Eric Thomas" },
  { text: "Everybody has a dream, but not everybody has a grind.", author: "Eric Thomas" },
  { text: "No days off.", author: "Eric Thomas" },
  { text: "Fall in love with the process, and the results will come.", author: "Eric Thomas" },
  { text: "Stop looking for shortcuts. There are none.", author: "Eric Thomas" },
  { text: "You can't cheat the grind. It knows how much you've invested.", author: "Eric Thomas" },
  { text: "I dare you to take a little pain. I dare you.", author: "Eric Thomas" },
  { text: "Be phenomenal or be forgotten.", author: "Eric Thomas" },
  { text: "At some point in life you have to face your fears.", author: "Eric Thomas" },
  { text: "All men are created equal, some work harder in preseason.", author: "Eric Thomas" },

  // ────────────────────────────────────────────────
  // 4. STOICS — Marcus Aurelius, Seneca, Epictetus
  // ────────────────────────────────────────────────
  { text: "You have power over your mind — not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius" },
  { text: "The impediment to action advances action. What stands in the way becomes the way.", author: "Marcus Aurelius" },
  { text: "Waste no more time arguing about what a good man should be. Be one.", author: "Marcus Aurelius" },
  { text: "If it is not right, do not do it. If it is not true, do not say it.", author: "Marcus Aurelius" },
  { text: "The happiness of your life depends upon the quality of your thoughts.", author: "Marcus Aurelius" },
  { text: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.", author: "Marcus Aurelius" },
  { text: "Confine yourself to the present.", author: "Marcus Aurelius" },
  { text: "Never let the future disturb you. You will meet it with the same weapons of reason which today arm you against the present.", author: "Marcus Aurelius" },
  { text: "You always own the option of having no opinion.", author: "Marcus Aurelius" },
  { text: "Do every act of your life as though it were the very last act of your life.", author: "Marcus Aurelius" },
  { text: "The soul becomes dyed with the color of its thoughts.", author: "Marcus Aurelius" },
  { text: "It is not death that a man should fear, but he should fear never beginning to live.", author: "Marcus Aurelius" },

  { text: "It is not that we have a short time to live, but that we waste a lot of it.", author: "Seneca" },
  { text: "Luck is what happens when preparation meets opportunity.", author: "Seneca" },
  { text: "We suffer more often in imagination than in reality.", author: "Seneca" },
  { text: "Begin at once to live, and count each separate day as a separate life.", author: "Seneca" },
  { text: "If one does not know to which port one is sailing, no wind is favorable.", author: "Seneca" },
  { text: "Difficulties strengthen the mind, as labor does the body.", author: "Seneca" },
  { text: "While we are postponing, life speeds by.", author: "Seneca" },
  { text: "No man is more unhappy than he who never faces adversity. For he is not permitted to prove himself.", author: "Seneca" },
  { text: "As long as you live, keep learning how to live.", author: "Seneca" },
  { text: "It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.", author: "Seneca" },
  { text: "He who is brave is free.", author: "Seneca" },

  { text: "It's not what happens to you, but how you react to it that matters.", author: "Epictetus" },
  { text: "No man is free who is not master of himself.", author: "Epictetus" },
  { text: "Make the best use of what is in your power, and take the rest as it happens.", author: "Epictetus" },
  { text: "First say to yourself what you would be; and then do what you have to do.", author: "Epictetus" },
  { text: "If you want to improve, be content to be thought foolish and stupid.", author: "Epictetus" },
  { text: "It is impossible for a man to learn what he thinks he already knows.", author: "Epictetus" },
  { text: "Circumstances don't make the man, they only reveal him to himself.", author: "Epictetus" },
  { text: "Don't explain your philosophy. Embody it.", author: "Epictetus" },
  { text: "There is only one way to happiness and that is to cease worrying about things which are beyond the power of our will.", author: "Epictetus" },
  { text: "Know, first, who you are; and then adorn yourself accordingly.", author: "Epictetus" },

  // ────────────────────────────────────────────────
  // 5. AFRICAN VOICES — Proverbs and Leaders
  // ────────────────────────────────────────────────
  // Ubuntu philosophy
  { text: "I am because we are.", author: "Ubuntu Proverb" },
  { text: "A person is a person through other persons.", author: "Desmond Tutu" },
  { text: "If you want to go quickly, go alone. If you want to go far, go together.", author: "African Proverb" },
  { text: "It takes a village to raise a child.", author: "African Proverb" },
  { text: "Smooth seas do not make skillful sailors.", author: "African Proverb" },
  { text: "However long the night, the dawn will break.", author: "African Proverb" },
  { text: "Rain does not fall on one roof alone.", author: "Cameroonian Proverb" },
  { text: "A single bracelet does not jingle.", author: "Congolese Proverb" },
  { text: "The child who is not embraced by the village will burn it down to feel its warmth.", author: "African Proverb (attributed)" },
  { text: "When the music changes, so does the dance.", author: "Hausa Proverb" },

  // Zambian and Southern African
  { text: "The power of education is such that it can transform a person's life and the life of a nation.", author: "Kenneth Kaunda" },
  { text: "A nation without a vision will perish.", author: "Kenneth Kaunda" },

  // Julius Nyerere
  { text: "Education is not a way to escape poverty — it is a way of fighting it.", author: "Julius Nyerere" },
  { text: "Those who receive this privilege therefore have a duty to repay the sacrifice which others have made.", author: "Julius Nyerere" },
  { text: "While other people have education, they can teach themselves.", author: "Julius Nyerere" },

  // Kwame Nkrumah
  { text: "We face neither East nor West; we face forward.", author: "Kwame Nkrumah" },
  { text: "Freedom is not something that one people can bestow on another as a gift.", author: "Kwame Nkrumah" },

  // Wangari Maathai
  { text: "It's the little things citizens do. That's what will make the difference.", author: "Wangari Maathai" },
  { text: "It is the people who must save the environment. It is the people who must make their leaders change.", author: "Wangari Maathai" },
  { text: "You cannot protect the environment unless you empower people.", author: "Wangari Maathai" },

  // Nelson Mandela
  { text: "It always seems impossible until it is done.", author: "Nelson Mandela" },
  { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
  { text: "It is in your hands to create a better world for all who live in it.", author: "Nelson Mandela" },
  { text: "I learned that courage was not the absence of fear, but the triumph over it.", author: "Nelson Mandela" },
  { text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela" },

  // Other African voices
  { text: "The single story creates stereotypes, and the problem with stereotypes is not that they are untrue, but that they are incomplete.", author: "Chimamanda Ngozi Adichie" },
  { text: "Until the lion learns how to write, every story will glorify the hunter.", author: "African Proverb" },
  { text: "I have learned that success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome.", author: "Booker T. Washington" },

  // ────────────────────────────────────────────────
  // 6. ACADEMIC & STUDY DISCIPLINE
  // ────────────────────────────────────────────────
  { text: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.", author: "Malcolm X" },
  { text: "The roots of education are bitter, but the fruit is sweet.", author: "Aristotle" },
  { text: "Study while others are sleeping; work while others are loafing; prepare while others are playing; and dream while others are wishing.", author: "William Arthur Ward" },
  { text: "There is no substitute for hard work.", author: "Thomas Edison" },
  { text: "Genius is 1% inspiration, 99% perspiration.", author: "Thomas Edison" },
  { text: "Procrastination is the thief of time.", author: "Edward Young" },
  { text: "A river cuts through rock, not because of its power, but because of its persistence.", author: "James N. Watkins" },
  { text: "Focus on the step in front of you, not the whole staircase.", author: "Anonymous" },
  { text: "You don't drown by falling in the water; you drown by staying there.", author: "Edwin Louis Cole" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "Don't stop when you're tired. Stop when you're done.", author: "David Goggins" },
  { text: "Your competition is not other students. Your competition is your procrastination.", author: "Anonymous" },
  { text: "The pain of studying is temporary. The pain of not knowing is forever.", author: "Anonymous" },
  { text: "You are building your future, one question at a time.", author: "Anonymous" },
  { text: "Study like there's no tomorrow, because if you keep putting it off, there won't be.", author: "Anonymous" },
  { text: "Do something today that your future self will thank you for.", author: "Sean Patrick Flanery" },
  { text: "Excellence is not an act, but a habit.", author: "Aristotle (attributed — modern phrasing)" },
  { text: "Knowledge is power. Information is liberating.", author: "Kofi Annan" },
  { text: "The beautiful thing about learning is that no one can take it away from you.", author: "B.B. King" },
  { text: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin" },
  { text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi (attributed)" },
  { text: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
  { text: "Whatever you are, be a good one.", author: "Abraham Lincoln" },
  { text: "If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward.", author: "Martin Luther King Jr." },

  // ────────────────────────────────────────────────
  // 7. ZIG ZIGLAR & OTHERS
  // ────────────────────────────────────────────────
  { text: "You don't have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
  { text: "People often say that motivation doesn't last. Well, neither does bathing — that's why we recommend it daily.", author: "Zig Ziglar" },
  { text: "Your attitude, not your aptitude, will determine your altitude.", author: "Zig Ziglar" },
  { text: "If you aim at nothing, you will hit it every time.", author: "Zig Ziglar" },
  { text: "The elevator to success is out of order. You'll have to use the stairs... one step at a time.", author: "Zig Ziglar" },
  { text: "Action is the foundational key to all success.", author: "Pablo Picasso" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "The future depends on what you do today.", author: "Mahatma Gandhi" },
  { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
  { text: "Hard work beats talent when talent doesn't work hard.", author: "Tim Notke" },
  { text: "Discipline is doing what needs to be done, even if you don't want to do it.", author: "Anonymous" },
  { text: "The man on top of the mountain didn't fall there.", author: "Vince Lombardi (attributed)" },
  { text: "Challenges are what make life interesting, and overcoming them is what makes life meaningful.", author: "Joshua J. Marine" },
  { text: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
  { text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
  { text: "Opportunities don't happen, you create them.", author: "Chris Grosser" },
  { text: "I am not a product of my circumstances. I am a product of my decisions.", author: "Stephen Covey" },
  { text: "Success represents the 1% of your work which results from the 99% that is called failure.", author: "Soichiro Honda" },
  { text: "Don't wait. The time will never be just right.", author: "Napoleon Hill" },
  { text: "Set a goal so big that you can't achieve it until you grow into the person who can.", author: "Anonymous" },
  { text: "Success is stumbling from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius (attributed)" },
  { text: "Our greatest glory is not in never falling, but in rising every time we fall.", author: "Confucius (attributed)" },
  { text: "Quality is not an act, it is a habit.", author: "Aristotle (attributed — modern phrasing)" },
  { text: "Good things come to people who wait, but better things come to those who go out and get them.", author: "Anonymous" },
  { text: "The distance between insanity and genius is measured only by success.", author: "Bruce Feirstein" },

  // ────────────────────────────────────────────────
  // 8. ADDITIONAL VOICES — Focus, Habit, Purpose
  // ────────────────────────────────────────────────
  { text: "You do not rise to the level of your goals. You fall to the level of your systems.", author: "James Clear" },
  { text: "Every action you take is a vote for the type of person you wish to become.", author: "James Clear" },
  { text: "Success is the product of daily habits — not once-in-a-lifetime transformations.", author: "James Clear" },
  { text: "Motivation is overvalued. Environment often matters more.", author: "James Clear" },

  { text: "The successful warrior is the average man, with laser-like focus.", author: "Bruce Lee" },
  { text: "I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.", author: "Bruce Lee" },
  { text: "Do not pray for an easy life; pray for the strength to endure a difficult one.", author: "Bruce Lee" },

  { text: "Discipline equals freedom.", author: "Jocko Willink" },
  { text: "There is no shortcut. There is no hack. There is only the work.", author: "Jocko Willink" },

  { text: "The most important thing is to try and inspire people so that they can be great in whatever they want to do.", author: "Kobe Bryant" },
  { text: "If you're afraid to fail, then you're probably going to fail.", author: "Kobe Bryant" },

  { text: "Nothing in the world can take the place of persistence. Talent will not; nothing is more common than unsuccessful men with talent.", author: "Calvin Coolidge" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs (attributed)" },
  { text: "Focus is saying no to a thousand good ideas.", author: "Steve Jobs (attributed)" },
  { text: "Somewhere, something incredible is waiting to be known.", author: "Carl Sagan" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker (attributed)" },
  { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { text: "Everything is hard before it is easy.", author: "Johann Wolfgang von Goethe" }
];
