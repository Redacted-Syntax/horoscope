const horoscopeData = {
  horoscopes: {
    date: "2023-11-30",
    astroSigns: [
      {
        sign: "Aries",
        dateRange: "March 21 - April 19",
        dailyHoroscope:
          "Today is a day for bold actions. Trust your instincts and take the leap you've been considering.",
        luckyNumbers: [3, 17, 21],
        key: 0,
        icon: "https://openmoji.org/data/color/svg/2648.svg"
      },
      {
        sign: "Taurus",
        dateRange: "April 20 - May 20",
        dailyHoroscope:
          "Patience will be your ally today. Good things come to those who wait, so don't rush into decisions.",
        luckyNumbers: [5, 14, 29],
        key: 1,
        icon: "https://openmoji.org/data/color/svg/2649.svg"
      },
      {
        sign: "Gemini",
        dateRange: "May 21 - June 20",
        dailyHoroscope:
          "Communication is key today. Reach out to an old friend or a family member you haven't spoken to in a while.",
        luckyNumbers: [2, 16, 23],
        key: 2,
        icon: "https://openmoji.org/data/color/svg/264A.svg"
      },
      {
        sign: "Cancer",
        dateRange: "June 21 - July 22",
        dailyHoroscope:
          "Embrace your creative side. Today is a perfect day for starting a new artistic project.",
        luckyNumbers: [7, 19, 25],
        key: 3,
        icon: "https://openmoji.org/data/color/svg/264B.svg"
      },
      {
        sign: "Leo",
        dateRange: "July 23 - August 22",
        dailyHoroscope:
          "Your leadership skills will be in demand today. Take charge in a group situation and guide others to success.",
        luckyNumbers: [1, 8, 22],
        key: 4,
        icon: "https://openmoji.org/data/color/svg/264C.svg"
      },
      {
        sign: "Virgo",
        dateRange: "August 23 - September 22",
        dailyHoroscope:
          "Pay attention to the small details today. Your meticulousness will lead to a significant breakthrough.",
        luckyNumbers: [4, 11, 26],
        key: 5,
        icon: "https://openmoji.org/data/color/svg/264D.svg"
      },
      {
        sign: "Libra",
        dateRange: "September 23 - October 22",
        dailyHoroscope:
          "Seek balance in your life. Take time for yourself and focus on your personal well-being.",
        luckyNumbers: [6, 15, 24],
        key: 6,
        icon: "https://openmoji.org/data/color/svg/264E.svg"
      },
      {
        sign: "Scorpio",
        dateRange: "October 23 - November 21",
        dailyHoroscope:
          "A mystery may unfold today. Trust your intuition and follow where it leads.",
        luckyNumbers: [9, 18, 27],
        key: 7,
        icon: "https://openmoji.org/data/color/svg/264F.svg"
      },
      {
        sign: "Sagittarius",
        dateRange: "November 22 - December 21",
        dailyHoroscope:
          "Adventure calls to you. Embrace new experiences and open yourself to learning.",
        luckyNumbers: [3, 12, 21],
        key: 8,
        icon: "https://openmoji.org/data/color/svg/2650.svg"
      },
      {
        sign: "Capricorn",
        dateRange: "December 22 - January 19",
        dailyHoroscope:
          "Discipline and hard work will be fruitful. Focus on your goals and you'll achieve great things.",
        luckyNumbers: [8, 16, 23],
        key: 9,
        icon: "https://openmoji.org/data/color/svg/2651.svg"
      },
      {
        sign: "Aquarius",
        dateRange: "January 20 - February 18",
        dailyHoroscope:
          "Innovation is your theme today. Think outside the box and explore new ideas.",
        luckyNumbers: [5, 13, 20],
        key: 10,
        icon: "https://openmoji.org/data/color/svg/2652.svg"
      },
      {
        sign: "Pisces",
        dateRange: "February 19 - March 20",
        dailyHoroscope:
          "Your empathy will be a blessing to someone in need. Listen and offer your support.",
        luckyNumbers: [2, 10, 22],
        key: 11,
        icon: "https://openmoji.org/data/color/svg/2653.svg"
      }
    ]
  }
};

const selectElement = document.querySelector("#sign-selector");
const signsArray = horoscopeData.horoscopes.astroSigns;
for (let signObject of signsArray) {
  const option = document.createElement("option");
  option.value = signObject.sign;       // what we read back on submit
  option.textContent = signObject.sign; // what the user sees
  selectElement.appendChild(option);
}
// ===== HANDLE THE SUBMIT CLICK =====
const submitBtn = document.querySelector("button");
const resultsContainer = document.querySelector("#results-container");
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const chosenSign = selectElement.value;
  // find the matching sign object
  let matchedSign;
  for (let signObject of signsArray) {
    if (signObject.sign === chosenSign) {
      matchedSign = signObject;
    }
  } // <-- the loop CLOSES here
  renderResults(matchedSign); // runs ONCE, after the loop finishes
}); // <-- event listener closes here
// ===== RENDER RESULTS =====
function renderResults(foundObject) {
  const imageEl = document.querySelector("#zodiac-image");
  const signEl = document.querySelector("#zodiac-sign");
  const dateEl = document.querySelector("#zodiac-date");
  const messageEl = document.querySelector("#zodiac-message");
  imageEl.src = foundObject.icon;
  imageEl.alt = foundObject.sign;
imageEl.classList.remove("gone");
  signEl.textContent = "Your sign is " + foundObject.sign + ".";
  dateEl.textContent = "The date range for " + foundObject.sign + " is " + foundObject.dateRange + ".";
  messageEl.textContent = "Your horoscope today is " + foundObject.dailyHoroscope;
  resultsContainer.classList.remove("gone");
}