const quotes = [
  {
    id: 1,
    quote:
      "Language is not a genetic gift, it is a social gift. Learning a new language is becoming a member of the club - the community of speakers of that language."
  },
  {
    id: 2,
    quote: "The limits of my language mean the limits of my world."
  },
  {
    id: 3,
    quote:
      "If you talk to a man in a language he understands, that goes to his head. If you talk to him in his own language, that goes to his heart."
  },
  {
    id: 4,
    quote: "To have another language is to possess a second soul."
  },
  {
    id: 5,
    quote: "Sign language is the noblest gift God has given to deaf people."
  },
  {
    id: 6,
    quote: "Sign language is the noblest gift God has given to deaf people."
  },
  {
    id: 7,
    quote: "Sign language is not a barrier, it's a bridge."
  },
  {
    id: 8,
    quote: "To speak a language is to take on a world, a culture."
  },
];

const randomQuote = Math.floor(Math.random() * quotes.length);

export const quote = quotes[randomQuote];
