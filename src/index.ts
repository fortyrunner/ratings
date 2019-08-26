function nRating(rating: string, rateBand: string, n: number):[string, boolean] {
  const rn:string = rateBand.repeat(n);
  if (rating.indexOf(rn) >= 0){
    return [rn, true];
  }
  return [rating, false];
}


function adjustRating(rating: string, rateBand: string) : [string, string] {

  if (rating.indexOf(rateBand) >= 0){

    let [newRating, matched] = nRating(rating, rateBand, 3);

    if (matched){
      return [newRating, rating]
    }

    [newRating, matched] = nRating(rating, rateBand, 2);
    if (matched){
      return [newRating, rating]
    }

    [newRating, matched] = nRating(rating, rateBand, 1);
    if (matched){
      return [newRating, rating]
    }

  }

  console.info("No match");

  return [rating, rating];
}



console.info(adjustRating("BBB*", "B"));
console.info(adjustRating("BBB+", "B"));
console.info(adjustRating("BB+NR", "B"));

console.info(adjustRating("CCC+NR", "C"));

console.info(adjustRating("", "B"));
