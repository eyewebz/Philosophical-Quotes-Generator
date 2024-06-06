const qoutes =[
  "If society was so sane, no one would have been insane." ,
  "All is Mind. The Universe is Mental." ,
  "I was ashamed of myself when I realized life was a costume party and I attended with my real face.",
  "Pain and suffering are always inevitable for a large intelligence and a deep heart.",
  "To go wrong in one's own way is better than to go right in someone else's.",
  "What is hell? I maintain that it is the suffering of being unable to love.",
  "But how could you live and have no story to tell?",
  "Man is sometimes extraordinarily, passionately, in love with suffering...",
  "I think the devil doesn't exist, but man has created him, he has created him in his own image and likeness.",
  "It is better to be unhappy and know the worst, than to be happy in a fool's paradise.",
  "Your worst sin is that you have destroyed and betrayed yourself for nothing."

]

const usedIndexes = new Set()
const quoteTag = document.getElementById('quote')

  function generateQuote () {
    if (usedIndexes.size >= qoutes.length) {
      usedIndexes.clear()
    }

    while (true) {
   const randomIdx = Math.floor(Math.random() * qoutes.length);

if (usedIndexes.has(randomIdx)) continue

   const quote = qoutes[randomIdx]
   quoteTag.innerHTML = quote;
   usedIndexes.add(randomIdx)
   break
   }
  }