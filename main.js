// Keys are used to cycle through quotes on page
const quotes = {
  0: {
    'quote': 'Those who are capable of tyranny are capable of perjury ' +
             'to sustain it.',
    'author': ' - Lysander Spooner',
  },

  1: {
    'quote': 'How can anyone read history and still trust politicians?',
    'author': ' - Thomas Sowell',
  },

  2: {
    'quote': 'The only thing that makes life possible is permanent, ' +
             'intolerable uncertainty.',
    'author': ' - Ursula Le Guin',
  },

  3: {
    'quote': 'There is no magic. There is only knowledge, more or ' +
             'less hidden.',
    'author': ' - Gene Wolfe',
  },

  4: {
    'quote': 'There can be no truly moral choice unless that choice ' +
             'is made in freedom',
    'author': ' - Murray Rothbard',
  },

  5: {
    'quote': 'There are two principles between which there can be no ' +
             'compromise\: liberty and coercion.',
    'author': ' - Frédéric Bastiat',
  },

  6: {
    'quote': 'Anarchy is no guarantee that some people won\'t kill, ' +
             'injure, kidnap, defraud, or steal from others. Government ' +
             'is a guarantee that some will.',
    'author': ' - Gustave de Molinari',
  },

  7: {
    'quote': 'He who is unfit to serve his fellow citizens wants to rule them',
    'author': ' - Ludwig von Mises',
  },

  8: {
    'quote': 'Part of freedom is the right of each of us to go to hell ' +
              'in his own fashion.',
    'author': ' - David D. Friedman',
  },

  9: {
    'quote': 'Poverty can be brought about by law; it cannot be ' +
             'forbidden by law.',
    'author': ' - Isabel Paterson',
  },

  10: {
    'quote': 'Freedom is not a permission granted by any authority. ' +
             'Freedom is a fact. Whether or not this fact is known, ' +
             'freedom is in the nature of every living person, ' +
             'as gravitation is in the nature of this planet.',
    'author': ' - Rose Wilder Lane',
  },
};

let quoteIndex = Math.floor(Math.random() * Object.keys(quotes).length);
if (quoteIndex < 0) {
  quoteIndex = 0;
}

const quote = document.querySelector('#quote-link');
const quoteText = document.querySelector('.quote');
const quoteAuthor = document.querySelector('.author');

quoteText.textContent = quotes[quoteIndex].quote;
quoteAuthor.textContent = quotes[quoteIndex].author;

quote.addEventListener('click', () => {
  // Cycle through the quotes
  if (quoteIndex < Object.keys(quotes).length - 1) {
    quoteIndex += 1;
    quoteText.textContent = quotes[quoteIndex].quote;
    quoteAuthor.textContent = quotes[quoteIndex].author;
  } else {
    quoteIndex = 0;
    quoteText.textContent = quotes[quoteIndex].quote;
    quoteAuthor.textContent = quotes[quoteIndex].author;
  }
});
