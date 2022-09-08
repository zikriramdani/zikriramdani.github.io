export function formatCurrency(val) {
  val = val || 0;
  const format = val.toString().split('').reverse().join('');
  const convert = format.match(/\d{1,3}/g);
  return convert.join('.').split('').reverse().join('')
}

export function formatNumber(n) {
  const number = n.toString()
  const len = number.length
  const place = len % 3 || 3
  let abb, r
  switch(true) {
    case len > 9:
      abb = 'B'
      break
    case len > 6:
      abb = 'M'
      break
    case len > 3:
      abb = 'K'
      break
    default:
      return number
  }
  
  return `${number.slice(0, place)}.${number.slice(place, place + 0)}${abb}`
}

export function formatLink(text) {
  if(!text) return
  return text?.replace(/\s/g, "-").toLowerCase();
}

export function encodeLink(text) {
  if(!text) return
  return text?.replace(/[-!$%^*()_+|~=`{}[:;<>?,.@#\]]/g, " ");
}

export function formatRound(val) {
  if(!val) return
  return Math.round(val);
}

// const hitungPersen = item.price_diskon / 100;
// const jumlahDiskon = hitungPersen * item.price_normal 
// const jumlahProduct = item.price_normal - jumlahDiskon;