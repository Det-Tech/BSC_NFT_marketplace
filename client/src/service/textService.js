const isUpperCase = char => char.charCodeAt(0) >= 65 && char.charCodeAt(0)<= 90
const isLowerCase = char => char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122
export const toTitlecase = (string) => {
  return string.toLowerCase().split(' ').map((word) => {
    return (word.charAt(0).toUpperCase() + word.slice(1))
  }).join(' ')
}

export const toAlternate = (string) => {
  let res = '';
  [...string].forEach((item, index) => {
    if(index%2 === 1) {
      res += item.toUpperCase()
    }
    else
      res += item.toLowerCase()
  })
  return res
}

export const toInversecase = (string) => {
  let res = ''
  const margin = 32;
  [...string].forEach((item) => {
    if(isLowerCase(item)){
        res += String.fromCharCode(item.charCodeAt(0) - margin);
    }else if(isUpperCase(item)){
        res += String.fromCharCode(item.charCodeAt(0) + margin);
    }else{
        res += item;
    }
  })
  return res;
}

export const copyText = (string) => {
  navigator.clipboard.writeText(string)
    .then(function() {
      console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
}

export const downloadText = (filename, text) => {
  var blob = new Blob([text], {type: 'text/csv'});
    if(window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, filename);
    }
    else{
        var elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob);
        elem.download = filename;        
        document.body.appendChild(elem);
        elem.click();        
        document.body.removeChild(elem);
    }
}

export const stringToRegex = (str) => {
  try {
    // Main regex
    const main = str.match(/\/(.+)\/.*/)[1]
    
    // Regex options
    const options = str.match(/\/.+\/(.*)/)[1]
    
    // Compiled regex
    return new RegExp(main, options)
  } catch(e) {
    return null
  }
}

export const isJsonString = (str) => {
  try {
      JSON.parse(str);
  } catch (e) {
      return false;
  }
  return true;
}
