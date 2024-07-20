export default function phoneСorrector(phone) {
  const re = /^\+?(\d+)\D*(\d{3})\D*(\d{3})\D?(\d{4}|\d{2})\D?(\d{2})$/;
  let result = phone.replace(re, '+$1$2$3$4$5');
  if (result.length === 12) {
    result = result.replace(/^\+8/, '+7');
  }

  return result;
}
