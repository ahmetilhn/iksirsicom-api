import IContentElement from "../types/IContentElement";

export const getReadingTime = (content: IContentElement[]) => {
  const wordsPerMinute: number = 175; // Global reading time
  let readingTime: number = 0;
  let allWords: string[] = [];
  content.forEach((element, key) => {
    if (element.text) {
      allWords.push(...element.text.split(" "));
    }
  });
  return (allWords.length / wordsPerMinute).toFixed();
};
