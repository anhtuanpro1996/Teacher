export const validateFileType = (filetype) =>{
  console.log('type', filetype);
  let typefile = '';
  if (filetype.includes('image')) {
    typefile = 'image';
  } else if (filetype.includes('video')) {
    typefile = 'video';
  } else if (filetype.includes('audio')) {
    typefile = 'audio';
  } else {
    typefile = 'other';
  }
  return typefile;
};

export const checkEmptyString = (string) =>{
  if ((string) && (string.trim() != '')) {
    return false;
  } else {
    return true;
  }
};

export const checkArrEmptyString = (myArr) =>{
  for (let i = 0; i < myArr.length; i++) {
    if (!checkEmptyString(myArr[i])) return false;
  }
  return true;
};

export const checkNull = (n) => {
  if ( n === null || n === undefined) {
    return true;
  } else return false;
};
