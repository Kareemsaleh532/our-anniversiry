export type Memory = {
  image: string;
  title: string;
  description: string;
  alt: string;
  date: string;
};
export type BirthdayData = {
  girlfriendName: string;
  senderName: string;
  birthdayDate: string;
  title: string;
  openingMessage: string;
  introMessage: string;
  reasonsILoveYou: string[];
  memories: Memory[];
  letter: string;
  finalMessage: string;
  copy: {
    dedication: string;
    introCaption: string;
    enter: string;
    birthdayGreeting: string;
    continue: string;
    scroll: string;
    storyHeading: string;
    storyQuote: string;
    storyNote: string;
    reasonsHeading: string;
    reasonsNote: string;
    reasonsFooter: string;
    memoriesHeading: string;
    memoriesNote: string;
    memoryFallback: string;
    giftHeading: string;
    giftNote: string;
    giftAction: string;
    giftOpened: string;
    giftMessage: string;
    letterHeading: string;
    letterNote: string;
    salutation: string;
    signature: string;
    finalPrelude: string;
    finalAction: string;
    finalWish: string;
    footer: string;
    chapters: [string, string, string, string, string, string, string];
  };
};

// Everything personal lives here. Sample names and memories are fictional.
// Photo paths must start with /memories/ and refer to files in public/memories.
export const birthdayData: BirthdayData = {
  girlfriendName: "khaizaran",
  senderName: "Yours, always",
  birthdayDate: "2026-09-21",
  title: "Our Little Universe",
  openingMessage: "I made a little universe just for you...",
  introMessage:
    "Today isn't just another day. It's the day my favorite person was born.",
  reasonsILoveYou: [
    "Your smile. The one that makes the rest of the world go quiet.",
    "The way you make ordinary days feel like something worth remembering.",
    "Your kindness, even in the little moments nobody else notices.",
    "How being understood by you feels a little like coming home.",
    "Every version of you. Even the ones you're still learning to love.",
  ],
  memories: [
    {
      image: "/memories/memory1.jpg",
      title: "Where it all began",
      date: "The beginning",
      alt: "Illustrated dusk sky above quiet mountains",
      description:
        "That first evening. The conversation I didn't want to end. I didn't know it then, but a little part of my life was finding its way to you.",
    },
    {
      image: "/memories/memory2.jpg",
      title: "Our kind of golden hour",
      date: "A little adventure",
      alt: "Illustrated golden sun setting over the sea",
      description:
        "No grand plans. Just you, me, and a sky that seemed to stay beautiful a little longer for us. I'd live this ordinary afternoon a thousand times.",
    },
    {
      image: "/memories/memory3.jpg",
      title: "Under the same sky",
      date: "A favorite moment",
      alt: "Illustrated crescent moon reflected in a dark lake",
      description:
        "Some memories don't need a photograph to stay. I remember how it felt to be next to you. That is the part I want to keep forever.",
    },
  ],
  letter:
    "There are so many things I could wish for you today. Beautiful places. New adventures. Dreams coming true in ways you never saw coming. And I do wish you all of those things.\n\nBut more than anything, I hope this next year is gentle with you. I hope you find a thousand small reasons to smile. I hope you feel proud of the person you are becoming, because I already am.\n\nThank you for letting me be a part of your world. For the laughter, the late conversations, and the quiet moments that somehow mean the most. Life with you in it has a warmth I didn't know I was missing.\n\nYou don't have to be anything more than yourself to be my favorite person. Not today. Not ever.\n\nHappy birthday, my love. Here's to all the little moments we haven't lived yet.",
  finalMessage: "Happy Birthday, my favorite person.",
  copy: {
    dedication: "A small corner of forever, made for you",
    introCaption: "For {name}. With all my heart.",
    enter: "Enter",
    birthdayGreeting: "Happy Birthday,",
    continue: "Let our story unfold",
    scroll: "Take your time. This is just for you.",
    storyHeading: "The day you became part of my story.",
    storyQuote:
      "Some people enter your life quietly and somehow change everything.",
    storyNote:
      "And just like that, the world felt a little warmer. The days felt a little brighter. And my story became our story.",
    reasonsHeading: "A few things I love about you.",
    reasonsNote: "Not an entire list. There could never be an entire list.",
    reasonsFooter:
      "And a thousand little things I haven't found the words for yet.",
    memoriesHeading: "Pieces of us.",
    memoriesNote: "Little moments. A whole universe of meaning.",
    memoryFallback: "A moment held in my heart.",
    giftHeading: "I wish I could wrap this into a real gift.",
    giftNote: "Some things are too big for a little box.",
    giftAction: "Tap to open",
    giftOpened: "A little truth, just for you",
    giftMessage:
      "If I could give you one thing in life, I'd give you the ability to see yourself through my eyes.",
    letterHeading: "A letter for you.",
    letterNote: "A few words. All of my heart.",
    salutation: "My dearest",
    signature: "With love,",
    finalPrelude: "One more thing...",
    finalAction: "Open the last surprise",
    finalWish:
      "May this year bring you everything your heart has been quietly wishing for.",
    footer: "Made only for you.",
    chapters: [
      "The beginning",
      "Our story",
      "The little things",
      "Our memories",
      "A little gift",
      "The letter",
      "Always you",
    ],
  },
};

export function formatBirthday(date: string) {
  const parsed = new Date(date + "T12:00:00Z");
  return Number.isNaN(parsed.getTime())
    ? date
    : new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(parsed);
}
