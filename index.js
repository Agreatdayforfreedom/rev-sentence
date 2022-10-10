module.exports = reverse;

function reverse(sentence) {
  const wordsArray = sentence.split(" ");

  const reversedArray = wordsArray.reverse();

  const reverseSentence = reversedArray.join(" ");
  return reverseSentence;
}

reverse("hello");
