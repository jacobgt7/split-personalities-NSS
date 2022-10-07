const originalDisorderFormat = "Depression|$|Bipolar|$|Manic|$|Anxiety|$|Anorexia|$|Posttraumtic Stress|$|Seasonal Affective|$|Bulimia"

let disordersArray = originalDisorderFormat.split("|$|") 

let listDisorders = disordersArray.join(`</div>\n<div>`)

console.log(`<div>${listDisorders}</div>`)