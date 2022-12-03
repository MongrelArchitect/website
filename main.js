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
    'author': ' - Ursula K. Le Guin',
  },

  3: {
    'quote': 'There is no magic. There is only knowledge, more or ' +
             'less hidden.',
    'author': ' - Gene Wolfe',
  },
};

let quoteIndex = 0;

const quote = document.querySelector('#quote-link');
quote.addEventListener('click', () => {
  const quoteText = document.querySelector('.quote');
  const quoteAuthor = document.querySelector('.author');
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
