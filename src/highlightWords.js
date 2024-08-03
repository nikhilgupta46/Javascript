const highlight = (str, words) => {
  const uniqueWords = new Set(words);
  const splittedString = str.split(" ");
  const resultString = [];
  splittedString.forEach((word) => {
    let str;
    if (uniqueWords.has(word)) {
      str = `<strong>${word}</strong>`;
    } else {
      const adder = (word, uniqueWords) => {
        let str;
        for (let i = 0; i < word.length; i++) {
          const prefix = word.slice(0, i + 1);
          const suffix = word.slice(i + 1, word.length);
          if (uniqueWords.has(prefix) && uniqueWords.has(suffix)) {
            str = `<strong>${word}</strong>`;
            break;
          } else if (uniqueWords.has(prefix) && !uniqueWords.has(suffix)) {
            const suffixStr = adder(suffix, uniqueWords);
            str = `<strong>${prefix}</strong>${suffixStr}`;
            break;
          } else if (!uniqueWords.has(prefix) && uniqueWords.has(suffix)) {
            const prefixStr = adder(prefix, uniqueWords);
            str = `${prefixStr}<strong>${suffix}</strong>`;
            break;
          }
        }
        return str ?? word;
      };

      str = adder(word, uniqueWords);
    }

    resultString.push(str ?? word);
  });
  const result = resultString.join(" ");
  console.log(result);
  return result;
};

const str = "Ultimate JavaScript / FrontEnd Guide";
const words = ["Fron", "E", "d", "JavaScript"];

highlight(str, words);

// "Ultimate <strong>JavaScript</strong> / <strong>FrontEnd</strong> Guide"
