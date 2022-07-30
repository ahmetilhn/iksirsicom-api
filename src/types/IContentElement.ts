export default interface IContentElement {
  text?: string;
  type: string;
  link?: string;
  imgSource?: string;
  childrens?: IContentElement[];
}
