function nRating(rating: string, rateBand: string, n: number):[string, boolean] {
  const rn:string = rateBand.repeat(n);
  if (rating.indexOf(rn) >= 0){
    return [rn, true];
  }
  return [rating, false];
}


function adjustRating(rating: string, rateBand: string) : [string, string] {

  if (rating.indexOf(rateBand) >= 0){

    const list = [3, 2, 1];

    for (let i of list){
      const [newRating, matched] = nRating(rating, rateBand, i);

      if (matched){
        return [newRating, rating]
      }

    }

  }

  return [rating, rating];
}


console.info(adjustRating("BB", "B"));
console.info(adjustRating("BBB*", "B"));
console.info(adjustRating("BBB+", "B"));
console.info(adjustRating("BB+NR", "B"));

console.info(adjustRating("CCC+NR", "C"));

console.info(adjustRating("", "B"));
