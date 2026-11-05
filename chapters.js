/* ==========================================================================
   AN UNWRITTEN STORY - chapter list
   This is the ONLY file you need to edit when you add new chapters/art.

   HOW IT WORKS
   1. Put your illustration files inside the "images" folder.
   2. Add them to the chapter they belong to, below.
   3. Re-upload the site (see the guide). Done.

   RULES (don't sweat it, just copy the pattern that's already here)
   - Every chapter is a { ... } block, and every block ends with a comma.
   - Every image name is in "quotes" and ends with a comma (except you can
     skip it on the last one, it works either way).
   - A chapter with no art? Just leave images empty: images: []
   - Want a caption under an image? Use the longer form:
         { file: "ch1-2.jpg", caption: "Mira finds the door" }
   - Spelling and capital letters in file names MATTER.
     "Ch1-1.JPG" and "ch1-1.jpg" are two different files to the internet.

   BONUS CHAPTERS (no number, unlock after a certain chapter)
   Use "label" instead of "number", and "unlockAfter" for the chapter
   the reader must be on (or past) to see it. Example further down.
   Bonuses don't appear in the dropdown. They just show up in the gallery,
   right above the chapter they unlock after. Two bonuses unlocking at
   the same spot show in the order you list them.

   SPOILER TIP
   Readers can technically peek at this file with "view source" if they
   are sneaky. So name your files boringly: "ch12-1.jpg" is fine,
   "ch12-dragon-kills-dad.jpg" is a self-own. Same goes for captions
   and chapter titles on chapters people might not have read yet.
   ========================================================================== */

window.SITE_SETTINGS = {
  // The folder your illustrations live in. Keep the slash at the end.
  imageFolder: "images/",

  // false = the dropdown only says "Chapter 7" (spoiler-safe).
  // true  = the dropdown says "Chapter 7: The Door That Wasn't".
  showTitlesInPicker: false
};

window.CHAPTERS = [
{
    label: "Bonus: Chibi Images",
    unlockAfter: 0,
    images: [
      "V-3.png",
      "V-2.png",
      "V-1.png",
    ]
  },
  {
    number: 1,
    title: "A New Story",
    images: [
      "cha1-4.jpg",
      "cha1-3.jpg",
      "cha1-2.jpg",
      "cha1-1.jpg",
    ]
  },
  {
    number: 2,
    title: "Broken Script (no illust)",
    images: []
  },
   {
    number: 3,
    title: "Strange Eyes (no illust)",
    images: []
  },
  {
    number: 4,
    title: "Freedom (no illust)",
    images: []
  },
  {
    number: 5,
    title: "Adversary of God",
    images: [
      "cha5-1.jpg",
    ]
  },
  {
    number: 6,
    title: "Escape (no illust)",
    images: []
  },
  {
    number: 7,
    title: "Hidden Beauty",
    images: [
      "cha7-3.jpg",
      "cha7-2.jpg",
      "cha7-1.jpg",
    ]
  },
  {
    number: 8,
    title: "Vionette Crimvane (no illust)",
    images: []
  },
  {
    number: 9,
    title: "A Seed (no illust)",
    images: []
  },
  {
    number: 10,
    title: "A New Pawn (no illust)",
    images: []
  },
  {
    number: 11,
    title: "White Snake (no illust)",
    images: []
  },
  {
    number: 12,
    title: "A Fallen Star and the Blazing Warmth (no illust)",
    images: []
  },
  {
    number: 13,
    title: "Descent of a God (no illust)",
    images: []
  },
  {
    number: 14,
    title: "Formless Sword (no illust)",
    images: []
  },
  {
    number: 15,
    title: "Options (no illust)",
    images: []
  },
  {
    number: 16,
    title: "Vionette's Biggest Fear",
    images: [
      "cha16-2.jpg",
      "cha16-1.jpg",
    ]
  },
  {
    number: 17,
    title: "Who are you? (no illust)",
    images: []
  },
  {
    number: 18,
    title: "Gift (no illust)",
    images: []
  },
  {
    number: 19,
    title: "Cursed Gift",
    images: [
      "cha19-1.jpg",
    ]
  },
  {
    number: 20,
    title: "Kind or Cruel (no illust)",
    images: []
  },
  {
    number: 21,
    title: "Royal Letter (no illust)",
    images: []
  },
  {
    number: 22,
    title: "Royal Flirting...? (no illust)",
    images: []
  },
  {
    number: 23,
    title: "Broken Past (no illust)",
    images: []
  },
  {
    number: 24,
    title: "Redirected Pride (no illust)",
    images: []
  },
  {
    number: 25,
    title: "Your Will is My Oath (no illust)",
    images: []
  },
  {
    number: 26,
    title: "Under the Amber Light (no illust)",
    images: []
  },
  {
    number: 27,
    title: "Hot Springs",
    images: [
      "cha27-2.jpg",
      "cha27-1.jpg",
    ]
  },
  {
    number: 28,
    title: "Constellations",
    images: [
      "cha28-1.jpg",
    ]
  },
  {
    number: 29,
    title: "Broken Past (no illust)",
    images: []
  },
  {
    number: 30,
    title: "Broken Past (no illust)",
    images: []
  },
  {
    number: 31,
    title: "Broken Past (no illust)",
    images: []
  },
  {
    number: 32,
    title: "Broken Past (no illust)",
    images: []
  },
  {
    number: 33,
    title: "Broken Past (no illust)",
    images: []
  },
  {
    number: 34,
    title: "Broken Past (no illust)",
    images: []
  },
  {
    number: 35,
    title: "Blazing Hearts",
    images: [
      "cha35-1.jpg",
    ]
  },
  {
    number: 36,
    title: "Broken Past (no illust)",
    images: []
  },
  {
    number: 37,
    title: "Broken Past (no illust)",
    images: []
  },
  {
    number: 38,
    title: "Broken Past (no illust)",
    images: []
  },
  {
    number: 39,
    title: "Broken Past (no illust)",
    images: []
  },
  {
    number: 40,
    title: "Forged in Agony",
    images: [
      "cha40-1.jpg",
    ]
  },
{
    label: "Bonus: 100k Celebration",
    unlockAfter: 40,
    images: [
      "100k-5.jpg",
      "100k-4.jpg",
      "100k-3.jpg",
      "100k-2.jpg",
      "100k-1.jpg",
    ]
  },
  {
    number: 41,
    title: "Broken Past (no illust)",
    images: []
  },
  {
    number: 42,
    title: "Acheron",
    images: [
      "cha42-6.jpg",
      "cha42-5.jpg",
      "cha42-4.jpg",
      "cha42-3.jpg",
      "cha42-2.jpg",
      "cha42-1.jpg",
    ]
  },
  {
    number: 43,
    title: "Broken Past (no illust)",
    images: []
  },
  {
    number: 44,
    title: "Broken Past (no illust)",
    images: []
  },
  {
    number: 45,
    title: "Broken Past (no illust)",
    images: []
  },
  {
    number: 46,
    title: "The Cursed Kingdom",
    images: [
      "cha46-1.jpg",
    ]
  },
  {
    number: 47,
    title: "Broken Past (no illust)",
    images: []
  },
  {
    number: 48,
    title: "Broken Past (no illust)",
    images: []
  },
  {
    number: 49,
    title: "Broken Past (no illust)",
    images: []
  },
  {
    number: 50,
    title: "Existence",
    images: [
      "cha50-1.jpg",
    ]
  },
  {
    number: 51,
    title: "Broken Past (no illust)",
    images: []
  },
  {
    number: 52,
    title: "Broken Past (no illust)",
    images: []
  },
  {
    number: 53,
    title: "Life or Loyalty",
    images: [
      "cha53-1.jpg",
    ]
  },
  {
    number: 54,
    title: "Broken Past (no illust)",
    images: []
  },
  {
    number: 55,
    title: "Vesperite",
    images: [
      "cha55-1.jpg",
    ]
  },
  {
    number: 56,
    title: "Broken Past (no illust)",
    images: []
  },
  {
    number: 57,
    title: "New Rulers",
    images: [
      "cha57-1.jpg",
    ]
  },
  {
    number: 58,
    title: "Forgotten Kingdoms",
    images: [
      "cha58-2.jpg",
      "cha58-1.jpg",
    ]
  },
  {
    number: 59,
    title: "Golden",
    images: [
      "cha59-4.jpg",
      "cha59-3.jpg",
      "cha59-2.jpg",
      "cha59-1.jpg",
    ]
  },
  {
    number: 60,
    title: "Food Hunts",
    images: [
      "cha60-2.jpg",
      "cha60-1.jpg",
    ]
  },
  {
    number: 61,
    title: "Broken Past (no illust)",
    images: []
  },
  {
    number: 62,
    title: "Crimson Gaze",
    images: [
      "cha62-2.jpg",
      "cha62-1.jpg",
    ]
  },
  {
    number: 63,
    title: "Broken Past (no illust)",
    images: []
  },
  {
    number: 64,
    title: "Divine Cushion",
    images: [
      "cha64-1.jpg",
    ]
  },
  {
    number: 65,
    title: "A Resurrected Soul",
    images: [
      "cha65-2.jpg",
      "cha65-1.jpg",
    ]
  },
  {
    number: 66,
    title: "Mysteries",
    images: [
      "cha66-2.jpg",
      "cha66-1.jpg",
    ]
  },
  {
    number: 67,
    title: "To Find a Self",
    images: [
      "cha67-1.jpg",
    ]
  },
  {
    number: 68,
    title: "Broken Past (no illust)",
    images: []
  },
  {
    number: 69,
    title: "Born Under the Golden Light",
    images: [
      "cha69-2.jpg",
      "cha69-1.jpg",
    ]
  },
  {
    number: 70,
    title: "Broken Past (no illust)",
    images: []
  },
  {
    number: 71,
    title: "Ghost of an Image",
    images: [
      "cha71-1.jpg",
    ]
  },
  {
    number: 72,
    title: "A Worthless Life",
    images: [
      "cha72-3.jpg",
      "cha72-2.jpg",
      "cha72-1.jpg",
    ]
  },
  {
    number: 73,
    title: "The Most Perfect Mimic",
    images: [
      "cha73-1.jpg",
    ]
  },
  {
    number: 74,
    title: "Broken Past (no illust)",
    images: []
  },
  {
    number: 75,
    title: "The Golden Light",
    images: [
      "cha75-1.jpg",
    ]
  },
  {
    number: 76,
    title: "Gods",
    images: [
      "cha76-2.jpg",
      "cha76-1.jpg",
    ]
  },
  {
    number: 77,
    title: "Colors of Existence",
    images: [
      "cha77-2.jpg",
      "cha77-1.jpg",
    ]
  },
  {
    number: 78,
    title: "Broken Past (no illust)",
    images: []
  },
  {
    number: 79,
    title: "The Divine Vs the Damned — Part 2",
    images: [
      "cha79-3.jpg",
      "cha79-2.jpg",
      "cha79-1.jpg",
    ]
  },
  {
    number: 80,
    title: "A Fool",
    images: [
      "cha80-1.jpg",
    ]
  },
  {
    number: 81,
    title: "Experiments",
    images: [
      "cha81-1.jpg",
    ]
  },
  {
    number: 82,
    title: "Idk — Part 2",
    images: [
      "cha82-1.jpg",
    ]
  },
  {
    number: 83,
    title: "Those Crimson Eyes",
    images: [
      "cha83-3.jpg",
      "cha83-2.jpg",
      "cha83-1.jpg",
    ]
  },
  {
    number: 84,
    title: "Broken Past (no illust)",
    images: []
  },
  {
    number: 85,
    title: "Gathering of Souls",
    images: [
      "cha85-1.jpg",
    ]
  },
  {
    number: 86,
    title: "Broken Past (no illust)",
    images: []
  },
  {
    number: 87,
    title: "An Invitation",
    images: [
      "cha87-1.jpg",
    ]
  },
  {
    number: 88,
    title: "Broken Past (no illust)",
    images: []
  },
  {
    number: 89,
    title: "Flames of Destruction",
    images: [
      "cha89-1.jpg",
    ]
  },
  {
    number: 90,
    title: "Trash",
    images: [
      "cha90-1.jpg",
    ]
  },
  {
    number: 91,
    title: "Broken Past (no illust)",
    images: []
  },
  {
    number: 92,
    title: "Unmasked Intentions",
    images: [
      "cha92-1.jpg",
    ]
  },
  {
    number: 93,
    title: "Misunderstandings",
    images: [
      "cha93-1.jpg",
    ]
  },
  {
    number: 94,
    title: "Altered Plot",
    images: [
      "cha94-2.jpg",
      "cha94-1.jpg",
    ]
  },
  {
    number: 95,
    title: "Broken Past (no illust)",
    images: []
  },
  {
    number: 96,
    title: "Heliosa",
    images: [
      "cha96-1.jpg",
    ]
  },
  {
    number: 97,
    title: "Broken Past (no illust)",
    images: []
  },
  {
    number: 98,
    title: "Broken Past (no illust)",
    images: []
  },
  {
    number: 99,
    title: "Boyfriend-Service",
    images: [
      "cha99-3.jpg",
      "cha99-2.jpg",
      "cha99-1.jpg",
    ]
  },
  {
    number: 100,
    title: "A Dragon's Touch",
    images: [
      "cha100-1.jpg",
    ]
  },
  {
    number: 101,
    title: "Something Cool and Secretive",
    images: [
      "cha101-2.jpg",
      "cha101-1.jpg",
    ]
  },
  {
    number: 102,
    title: "The Detectives Strike!",
    images: [
      "cha102-1.png",
    ]
  },
  {
    number: 103,
    title: "Larping!",
    images: [
      "cha103-1.png",
    ]
  },
  {
    number: 104,
    title: "The Detectives Strike!",
    images: []
  },
  {
    number: 105,
    title: "False Evidence",
    images: [
      "cha105-1.jpg",
    ]
  },
  {
    number: 106,
    title: "Flames of Annihilation",
    images: [
      "cha106-2.png",
      "cha106-1.png",
    ]
  },
  {
    number: 107,
    title: "The Detectives Strike!",
    images: []
  },
  {
    number: 108,
    title: "A Cherry Blossom",
    images: [
      "cha108-1.png",
    ]
  },
  {
    number: 109,
    title: "The Grind That Never Stops",
    images: [
      "cha-109-1.png",
    ]
  },
  {
    number: 110,
    title: "The Detectives Strike!",
    images: []
  },
  // To add Chapter 6: copy a block above, paste it at the end (after a comma),
  // and change the number, title, and image names.
];
