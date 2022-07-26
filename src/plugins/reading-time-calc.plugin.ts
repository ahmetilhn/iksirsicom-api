export const getReadingTime = (description: string, content: string) => {
  const wordsPerMinute: number = 175; // Global reading time
  const bufferContent: Buffer = new Buffer(content, "base64");
  const htmlContent: string = Buffer.from(bufferContent).toString();
  const allWords: number =
    description.split(" ").length + htmlContent.split(" ").length;
  return (allWords / wordsPerMinute).toFixed();
};
