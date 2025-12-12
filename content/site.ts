export const siteConfig = {
  couple: {
    bride: "Kate",
    brideNickname: "Kate",
    groom: "Christian",
    groomNickname: "Christian",
  },
  wedding: {
    date: "January 10, 2026",
    time: "2:00 PM",
    venue: "St. Joseph the Patriarch Parish, Mabolo, Cebu City",
    tagline: "are getting married!",
    theme: "Blue Gray & Gold Motif",
    motif: "#BFCDD8, #8498B0, #D2AC6E, #E0CFB5, #F1F1EF",
  },
  details: {
    rsvp: {
      deadline: "December 20, 2025",
    },
  },
  ceremony: {
    location: "St. Joseph the Patriarch Parish, Mabolo, Cebu City",
    venue: "St. Joseph the Patriarch Parish",
    date: "January 10, 2026",
    day: "Saturday",
    time: "2:00 PM",
    entourageTime: "1:30 PM",
    guestsTime: "1:30 PM",
  },
  reception: {
    location: "Golden Peak Hotel & Suites, Escario Cebu",
    venue: "Golden Peak Hotel & Suites",
    date: "January 10, 2026",
    time: "Following the ceremony",
  },
  dressCode: {
    theme: "Blue Gray & Gold Motif",
    colors: ["#BFCDD8", "#8498B0", "#D2AC6E", "#E0CFB5", "#F1F1EF"],
    sponsors: {
      male: "Black Suit",
      female: "Sage Green Dress/Gown"
    },
    guests: {
      gents: "Polo & Pants (Strictly no Tshirt) - Nude, Beige or Gold",
      ladies: "Formal Dress/Gown/Suit - Nude, Beige or Gold"
    },
    note: "We kindly request our guests to dress in formal attire with a color of our motif."
  },
  narratives: {
    groom: `They met back in their architecture college days — just batchmates then, each living a separate life. She was the maarte one, the selective type who chose carefully the people she let in. He, on the other hand, was the friendly guy — kind, approachable, and someone everyone could easily talk to. They couldn't have been more different.

Three years after graduation, fate decided to draw their lines together. It started simply — a few replies to her social media stories, a borrowed book, small conversations that didn't mean much at first. Then one day, they met again at a construction site. This time, they talked — really talked. And something was different.

From then on, messages turned into conversations, and conversations turned into something deeper. It was during Sinulog when he invited her to visit Sto. Niño Church. They shared prayers & laughter — spending the whole day simply enjoying each other's company. From then on, they have learned, grown, and become better together in all aspects of life.`,
    bride: `She found him interesting, warm, and genuine. Days after their time at Sto. Niño Church, she realized that maybe, just maybe, this was the man she had been praying for — someone who would bring her closer to God.

Months later, they made it official. Their love is not the kind you see in movies — not perfect, not always grand. But it is real, quiet, and steadfast. Two people, choosing each other every single day.

And now, as they begin a new chapter of their lives, they invite you to witness and celebrate the love that God has written for them.`,
  },
  colors: {
    primary: "#BFCDD8",
    secondary: "#8498B0",
  },
  snapShare: {
    googleDriveLink: "https://drive.google.com/drive/folders/1LSMV4MFdOMFPaAJQ_w5nulW_ICnem8qv?usp=sharing",
    instructions: "Please scan this QR Code, create a folder with your name and upload the photos and videos you have taken during our wedding reception. We are delighted to see your snaps too!",
  },
}

export const entourage = [
  // Best Man & Maid/Matron of Honor
  { role: "Best Man", name: "Red Casallo" },
  { role: "Matron of Honor", name: "Imeeliza Timpug" },

  // Parents of the Bride
  { role: "Father", name: "Jaime Balajadia (Uncle)", group: "kate-family" },
  { role: "Mother", name: "Eloida Ricohermoso", group: "kate-family" },

  // Parents of the Groom
  { role: "Brother", name: "Perry Ticbaen (Brother)", group: "christian-family" },
  { role: "Mother", name: "Felicitas Ticbaen", group: "christian-family" },

  // Bridesmaids
  { role: "Bridesmaid", name: "Thea Lynn Dela Cruz" },
  { role: "Bridesmaid", name: "Keara Zane A Cariño" },
  { role: "Bridesmaid", name: "Fidnah Gracia Padallan" },
  { role: "Bridesmaid", name: "Lorna Ladisla" },
  { role: "Bridesmaid", name: "Carla Vanessa Tabilin" },
  { role: "Bridesmaid", name: "Romela Tolentino" },
  { role: "Bridesmaid", name: "Emmalyn Lipio" },
  { role: "Bridesmaid", name: "Carmen Pascual" },
  { role: "Bridesmaid", name: "Ciddie Manota" },

  // Groomsmen
  { role: "Groomsman", name: "Noah Alcaria" },
  { role: "Groomsman", name: "Jervin Garcia" },
  { role: "Groomsman", name: "Myric Mateo" },
  { role: "Groomsman", name: "Caughvan Faustino" },
  { role: "Groomsman", name: "Jayson Torquiano" },
  { role: "Groomsman", name: "Jendah Egino" },
  { role: "Groomsman", name: "Vincent Saguinsin" },
  { role: "Groomsman", name: "Frederick Manota" },
  { role: "Groomsman", name: "Emerson Sulit" },

  // Secondary Sponsors
  // Candle Sponsors
  { role: "Bridesmaid", name: "Romela Tolentino", group: "candle" },
  // Cord Sponsors
  { role: "Bridesmaid", name: "Emmalyn Lipio", group: "cord" },

  // Flower Girls and Little Bride
  { role: "Flower Girl", name: "Kirsten Elija Leyson" },
  { role: "Flower Girl", name: "Blake Juan" },
  { role: "Flower Girl", name: "Reign Arastel Rivera" },
  { role: "Little Bride", name: "Paige Yael Ticbaen" },

  // Ring / Coin Bearers
  { role: "Ring Bearer", name: "Khaleb Dwayne M. Beltran" },
  { role: "Coin Bearer", name: "Lucas Rhaiden Beltran" },
  { role: "Ring Bearer", name: "Dean James Ticbaen" },
]

export const principalSponsors = [
  // Paired from provided Male and Female Sponsors (order-based)
  { name: "Mr. Jony Balao", spouse: "Mrs. Conception Balao" },
  { name: "Mr. Cresencio Francisco", spouse: "Dr. Editha Francisco" },
  { name: "Mr. Aurelio Sab-it", spouse: "Mrs. Ester Sab-it" },
  { name: "Mr. Pio McLiing", spouse: "Mrs. Edna Boloma" },
  { name: "Mr. Fabian Dupiano", spouse: "Mrs. Mary Christine Dupiano" },
  { name: "Mr. Roberto Dosdos", spouse: "Mrs. Angelica Dosdos" },
  { name: "Mr. George Sacla", spouse: "Mrs. Minda De Bolt Sacla" },
  { name: "Mr. Elmo Casallo", spouse: "Mrs. Nora Casallo" },
  { name: "Engr. Jimmy Atayoc Sr", spouse: "Mrs. Mercedes Atayoc" },
  { name: "Mr. Tomas Moyongan", spouse: "Mrs. Betty Moyongan" },
  { name: "Mr. Roger Balantin", spouse: "Mrs. Delia Balantin" },
  { name: "Honorable Mayor Roderick Awingan", spouse: "Mrs. ____ Awingan" },
  { name: "Engr Roy Kepes", spouse: "Vice Gove MaryRose Kepes Fongwan" },
  { name: "Mr. Bobos Nestor Fongwan", spouse: "Mrs. Marga Sison" },
  { name: "Mr. Junvic Suguinsin", spouse: "Mrs. Lavenia Inson" },
  { name: "Mr. Salino Dosdos Jr", spouse: "Mrs. Gina Guiang" },
  { name: "Mr. Pampilo Balajadia", spouse: "Mrs. Angelica Balajadia" },
  { name: "Mr. Alan M. Serduar", spouse: "Mrs. Oliva Serduar" },
  { name: "Mr. Miguel Franco", spouse: "Mrs. Angela Balajadia" },
  // Remaining Female Sponsors without paired male
  { name: "Mrs. Carina C. Watanabe", spouse: "" },
  { name: "Mrs. Cecile Palilio", spouse: "" },
  { name: "Mrs. Nida Saguinsin", spouse: "" },
  { name: "Mrs. Araceli Pitogo", spouse: "" },
  { name: "Mrs. Alda Unidad", spouse: "" },
  { name: "Mrs. Reine Bernadeth Bolanos", spouse: "" },
]
