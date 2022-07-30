import IContentElement from "../types/IContentElement";

export const getReadingTime = (content: IContentElement[]) => {
  const wordsPerMinute: number = 175; // Global reading time
  let allContent: string = "";
  content.forEach((element) => {
    allContent.concat(element.text);
  });
  return (allContent.split(" ").length / wordsPerMinute).toFixed();
};
