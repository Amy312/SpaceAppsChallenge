export interface GeneralButton{
  text:string;
  action:()=>void;
  type:"button" | "submit" | "reset" | undefined;
  padding:string;
  colorButton:string;
  size:string;
}
