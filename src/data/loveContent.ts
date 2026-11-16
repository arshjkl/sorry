export interface LoveContent {
  nickname: string;
  welcomeMessage: string;
  openingTitle: string;
  openingSubtitle: string;
  openButton: string;
  apology: ApologyContent;
  memories: MemoriesContent;
  loveReasons: LoveReason[];
  mistakes: Mistake[];
  surprises: SurpriseContent;
  promises: Promise[];
  finalLetter: FinalLetterContent;
  video: VideoConfig;
}

export interface ApologyContent {
  title: string;
  intro: string;
  sections: ApologySection[];
}

export interface ApologySection {
  id: string;
  title: string;
  content: string;
}

export interface MemoriesContent {
  title: string;
  subtitle: string;
  categories: MemoryCategory[];
}

export interface MemoryCategory {
  id: string;
  name: string;
  images: MemoryImage[];
}

export interface MemoryImage {
  id: string;
  src: string;
  caption: string;
  category: string;
}

export interface LoveReason {
  id: number;
  front: string;
  back: string;
  icon: string;
}

export interface Mistake {
  id: number;
  title: string;
  front: string;
  back: string;
}

export interface SurpriseContent {
  title: string;
  subtitle: string;
  messages: string[];
  buttonText: string;
}

export interface Promise {
  id: number;
  title: string;
  content: string;
  icon: string;
}

export interface FinalLetterContent {
  title: string;
  message: string;
  question: string;
  button1: string;
  button2: string;
  response1: string;
  response2: string;
}

export interface VideoConfig {
  src: string;
  title: string;
  subtitle: string;
  loop: boolean;
  showControls: boolean;
}

export const loveContent: LoveContent = {
  nickname: "Baby",
  welcomeMessage: "A little world that always reminds me of you, Baby ❤️",
  openingTitle: "Hey Baby... ❤️",
  openingSubtitle: "A few favourite moments, a little video, and a whole lot of love. ❤️",
  openButton: "Open My Heart 💌",
  apology: {
    title: "I'm Really Sorry, Baby ❤️",
    intro: "I want you to know how truly sorry I am.",
    sections: [
      {
        id: "sorry-for",
        title: "What I'm sorry for",
        content: "I'm sorry for the times I've hurt you, for my mistakes, and for not always being the partner you deserve.",
      },
      {
        id: "should-have-done",
        title: "What I should have done differently",
        content: "I should have listened more, communicated better, and put you first in every moment.",
      },
      {
        id: "understanding",
        title: "How my actions may have affected you",
        content: "I understand that my actions may have made you feel unimportant or unloved, and that was never my intention.",
      },
      {
        id: "want-to-change",
        title: "What I want to change",
        content: "I want to change the habits that hurt you and become someone you can always rely on.",
      },
      {
        id: "do-better",
        title: "What I want to do better",
        content: "I want to do better every single day — loving you fully, honestly, and without reservation.",
      },
    ],
  },
  memories: {
    title: "Our Little World ❤️",
    subtitle: "A few favourite faces, little moments, and pieces of our story — all in one place. ❤️",
    categories: [
      {
        id: "her",
        name: "You",
        images: [],
      },
      {
        id: "us",
        name: "Us",
        images: [],
      },
      {
        id: "memories",
        name: "Memories",
        images: [],
      },
      {
        id: "special",
        name: "Special Moments",
        images: [],
      },
    ],
  },
  loveReasons: [
    { id: 1, front: "Your smile", back: "Your smile lights up my entire world, Baby.", icon: "Smile" },
    { id: 2, front: "Your laugh", back: "Your laugh is my favorite sound in the whole universe.", icon: "Heart" },
    { id: 3, front: "Your little habits", back: "All your cute little habits make me love you even more.", icon: "Sparkles" },
    { id: 4, front: "Your beautiful personality", back: "Your kindness, warmth, and spirit take my breath away.", icon: "Star" },
    { id: 5, front: "The way you make ordinary moments special", back: "With you, even the simplest moments feel magical.", icon: "Sparkles" },
    { id: 6, front: "Your eyes", back: "Looking into your eyes feels like coming home.", icon: "Eye" },
    { id: 7, front: "Your kindness", back: "Your heart is so pure and kind, and it inspires me every day.", icon: "Sparkle" },
    { id: 8, front: "How you understand me", back: "You know me better than anyone and still love me anyway.", icon: "Link" },
    { id: 9, front: "Your strength", back: "Your strength and resilience amaze me, Baby.", icon: "Shield" },
    { id: 10, front: "Everything about you", back: "There isn't a single thing about you I don't love.", icon: "Heart" },
  ],
  mistakes: [
    {
      id: 1,
      title: "Times I wasn't there enough",
      front: "I regret not always being there when you needed me.",
      back: "I understand now how important it is to show up, and I want to be there for you always.",
    },
    {
      id: 2,
      title: "Not listening enough",
      front: "I wish I had listened more and assumed less.",
      back: "Your thoughts and feelings matter to me, and I want to hear them all.",
    },
    {
      id: 3,
      title: "Taking you for granted",
      front: "I'm sorry for moments I didn't show enough appreciation.",
      back: "You are everything to me, and I will never stop showing you how much you mean.",
    },
  ],
  surprises: {
    title: "Just For You, Baby 🎀",
    subtitle: "Little surprises hidden just for you.",
    messages: [
      "You're my favourite notification. ❤️",
      "You're my favourite person. 💕",
      "Sending you a million kisses. 💋",
      "Baby, you're ridiculously special. ✨",
      "Every day with you is my favorite day. 🌸",
      "You make my heart skip a beat. 💓",
    ],
    buttonText: "Surprise Me! 🎁",
  },
  promises: [
    {
      id: 1,
      title: "Listen better",
      content: "I promise to truly listen to you, hear your heart, and understand your needs.",
      icon: "Ear",
    },
    {
      id: 2,
      title: "Communicate honestly",
      content: "I promise to always speak my truth with kindness and honesty.",
      icon: "MessageCircle",
    },
    {
      id: 3,
      title: "Respect your feelings",
      content: "I promise to honor your feelings, even when I don't fully understand them.",
      icon: "Heart",
    },
    {
      id: 4,
      title: "Be more thoughtful",
      content: "I promise to be more thoughtful in the little things, every single day.",
      icon: "Gift",
    },
    {
      id: 5,
      title: "Put in consistent effort",
      content: "I promise to keep choosing you, showing up, and putting in the work.",
      icon: "Zap",
    },
    {
      id: 6,
      title: "Show love through actions",
      content: "I promise to show you my love not just in words, but in everything I do.",
      icon: "Check",
    },
  ],
  finalLetter: {
    title: "My Love, My Baby ❤️",
    message: "Baby, I know I can't change everything that has happened. But I want you to know that I'm genuinely sorry. You mean so much to me, and I want to keep showing you that through my actions. I love you, Baby.",
    question: "Can we make some more beautiful memories together?",
    button1: "Come Here, I Owe You A Hug 🥺",
    button2: "Sending You A Million Kisses 💋",
    response1: "Sending you the biggest hug, Baby. ❤️",
    response2: "Mwah! A million kisses coming your way. 💋",
  },
  video: {
    src: "/media/videos/our-special-video.mp4",
    title: "A Little Something For You, Baby ❤️",
    subtitle: "A little surprise, with all my love. ❤️",
    loop: false,
    showControls: true,
  },
};

export default loveContent;