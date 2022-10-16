export default interface IContentElement {
  text?: string;
  type: string;
  href?: string;
  img_source?: string;
  lang?: string;
  childrens?: IContentElement[];
}
