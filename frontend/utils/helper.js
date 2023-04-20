export const getDiscountedPricePercentage = (
  originalPrice,
  discountedPrice
) => {
  const discount = originalPrice - discountedPrice;

  const discountPercentage = (discount / originalPrice) * 100;

  return discountPercentage.toFixed(2);
};

//formating stirng for search results

export const formatString = ({ paramText }) => {
  let names = paramText;

  if (!names === "") {
    let name = names.split(" ");

    let result = "";
    for (let i = 0; i < name.length; i++) {
      let letter = name[i];

      if (letter != "") {
        let firstLetter = letter[0].toUpperCase();
        let secondLetter = letter.slice(1, letter.length).toLowerCase();
        let fullName = firstLetter + secondLetter;
        result += fullName + " ";
      }
    }
    return result;
  }
};
