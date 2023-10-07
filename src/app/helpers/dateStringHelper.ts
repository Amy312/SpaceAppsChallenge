import moment from "moment";

export const dateToString = (date:Date):string => {
  const newDateCorrectFormat: string = moment(date).format("DD/MM/YYYY");
  return newDateCorrectFormat;
};