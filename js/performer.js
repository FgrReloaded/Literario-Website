const performers = [
  {
    name: "Shashank S Pandey",
    course: "BTech",
    branch: "CSE",
    year: "3rd",
    linkedin: "https://www.linkedin.com/in/shashank-shekhar-pandey-ss8a/",
    role: "General Secretary",
    team: "",
    bio: "With exceptional public relations skills and outstanding organizational capabilities, Shashank Literario's General Secretary orchestrates events flawlessly, ensuring seamless execution and remarkable engagement.",
    image: "/images/performers/shashank.jpeg",
    isElite: true
  },
  {
    name: "Priyal Garg",
    course: "BTech",
    branch: "AIML",
    year: "1st",
    linkedin: "https://www.linkedin.com/in/priyal-g-597367305",
    role: "Associate",
    team: "Public Relations",
    bio: "Priyal Garg is a vibrant and ambitious individual with a passion for growth, driven by curiosity and a keen desire to learn.",
    image: "/images/performers/priyal.jpeg",
    isElite: true
  },
  {
    name: "Samridhi Singh",
    course: "BTech CS",
    branch: "AIML",
    year: "1st",
    linkedin: "https://www.linkedin.com/in/samridhi-singh-471a23324",
    role: "Member",
    team: "Public Relations",
    bio: "Samridhi Singh is a hardworking and talented individual who is always on the lookout for new opportunities. As an active PR member of Club Literario, her unwavering determination and resilient spirit empower her to overcome every challenge she encounters.",
    image: "/images/performers/samridhi.jpeg",
    isElite: true
  },
  {
    name: "Unnati Gupta",
    course: "BTech",
    branch: "AIML",
    year: "1st",
    linkedin: "https://www.linkedin.com/in/unnati-gupta-60a996320",
    role: "Member",
    team: "",
    bio: "She is a first-year AIML student who brings fresh perspectives and innovative ideas to the team. Your enthusiasm for learning and dedication to growth make you a valuable addition to Club Literario.",
    image: "/images/performers/unnati.jpeg",
    isElite: true
  },
  {
    name: "Muskan Singh",
    course: "BTech ECSE",
    branch: "AIML",
    year: "1st",
    linkedin: "https://www.linkedin.com/in/muskan-singh-454405314",
    role: "Member",
    team: "Editorial",
    bio: "A tech enthusiast with a passion for writing and creativity. Dedicated to bridging the gap between technology and storytelling through impactful content and innovation.",
    image: "/images/performers/muskan.jpg",
  },
  {
    name: "Daksh Gupta",
    course: "BTech",
    branch: "CSE",
    year: "2nd",
    linkedin: "https://www.linkedin.com/in/daksh-gupta-a550252a8",
    role: "Member",
    team: "Event Management",
    bio: 'Both event management and literature help people connect, and he love being part of both. "Literario has given me the chance to contribute to creative and impactful events."',
    image: "/images/performers/daksh.jpg",
  },
  {
    name: "Manjari Pachauri",
    course: "BA English Honours",
    branch: "",
    year: "1st",
    linkedin: "https://www.linkedin.com/in/manjari-pachauri-487340339",
    role: "Member",
    team: "Public Relations",
    bio: "She is an optimist and an inquisitive person who always looks forward to learning something from everyone.",
    image: "/images/performers/manjari.jpeg",
  },
  {
    name: "Sameera Khan",
    course: "BTech CS",
    branch: "Core",
    year: "1st",
    linkedin: "https://www.linkedin.com/in/sameera-khan-908a82313",
    role: "Member",
    team: "Editorial",
    bio: "An 18 year old, highly enthusiastic towards learning and exploring new things and writing.",
    image: "/images/performers/sameera.jpeg",
  },
  {
    name: "Kanishka Gautam",
    course: "BTech",
    branch: "CSE-AIML",
    year: "1st",
    linkedin: "https://www.linkedin.com/in/kanishka-gautam-708bbb341",
    role: "Member",
    team: "Data Team",
    bio: "He is a passionate, hardworking, strong willed  gentleman. Any task given even if it's hard to achieve he performs it with utmost effort and sincerity. Not only is he disciplined but also a team player who adapts well with his teammates.",
    image: "/images/performers/kanishka.jpeg",
  },
  {
    name: "Shubhigya Sharma",
    course: "BTech CSE",
    branch: "Core",
    year: "2nd",
    linkedin: "https://www.linkedin.com/in/shubhigya-sharma-1591bb2b1",
    role: "Head",
    team: "Design and Media",
    bio: "A creative visionary leading design and media with passion, innovation, and strategic impact, inspiring teams to excel.",
    image: "/images/performers/shubhigya.jpeg",
  }
];

const generateCard = (data) => {
  return `
<div class="team-card group lg:w-[22vw] md:w-[28vw] sm:w-[40vw]">
          <div class="relative overflow-hidden h-[400px]">
              <div class="corner-effect top-left"></div>
              <div class="corner-effect top-right"></div>
              <div class="corner-effect bottom-left"></div>
              <div class="corner-effect bottom-right"></div>
              <img src="${data.image}" alt="${data.name}"
                  class="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500">
              <div class="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
                  <span class="subtitle-tag">${data.course} ${data.branch}</span>
                  <h3 class="text-white text-2xl font-bold medium-font mt-2 line-clamp-1">${data.name}</h3>
                  <p class="text-gray-300 small-font line-clamp-1">${data.role} ${data.team ? `- ${data.team}` : ''}</p>
              </div>
          </div>
          <div class="py-4 h-[100px] opacity-0 group-hover:opacity-100 transition-all duration-500 relative">
              <p class="text-white text-sm medium-font px-4 line-clamp-4 overflow-hidden">${data.bio}</p>
              <div class="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-black to-transparent"></div>
          </div>
           <a href="${data.linkedin}" target="_blank" class="absolute top-2 right-4 text-gray-900 group-hover:text-blue-500 z-50 transition-colors cursor-pointer">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
          </a>
      </div>
  `
}


document.addEventListener("DOMContentLoaded", function () {
  const performersContainer = document.querySelector(".performers");
  performers.innerHTML = "";

  performers.forEach((performer) => {
    const card = generateCard(performer);
    performersContainer.innerHTML += card;
  });

});