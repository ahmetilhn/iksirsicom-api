export default interface IContentElement {
  text?: string;
  type: string;
  link?: string;
  img_source?: string;
  childrens?: IContentElement[];
}
