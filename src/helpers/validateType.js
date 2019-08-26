
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

