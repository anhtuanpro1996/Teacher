import * as types from '../constants/getUploadFileTypes';

export function getDataUpload(data) {
  console.log('kkk', data);
  return {
    type: types.UPLOADING,
    data,
  };
}
