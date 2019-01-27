import CONSTANTS from './Constants';

export const actionRegistry = data => ({ type: CONSTANTS.REGISTRY, data });
export const actionLogin = data => ({ type: CONSTANTS.LOGIN, data });
export const actionEstablishSession = user => ({ type: CONSTANTS.ESTABLISH_SESSION, user });
export const actionSignOff = () => ({ type: CONSTANTS.SIGN_OFF });
export const actionLoadImageSignUp = image => ({ type: CONSTANTS.LOAD_IMAGE_SIGNUP, image });
export const actionCleanImageSignUp = () => ({ type: CONSTANTS.CLEAN_IMAGE_SIGNUP });
export const actionLoadImagePublication = image => ({ type: CONSTANTS.LOAD_IMAGE_PUBLICATION, image });
export const actionCleanImagePublication = () => ({ type: CONSTANTS.CLEAN_IMAGE_PUBLICATION });
export const actionUpImage = data => ({ type: CONSTANTS.UP_PUBLICATION, data });
export const actionDownloadPublications = () => ({ type: CONSTANTS.DOWNLOAD_PUBLICATION });
export const actionAddPublicationsStore = publications => ({ type: CONSTANTS.ADD_PUBLICATIONS_STORE, publications });
export const actionAddAuthorsStore = autores => ({ type: CONSTANTS.ADD_AUTHORS_STORE, autores });
export const actionSuccessUploadPublication = () => ({ type: CONSTANTS.SUCCESS_UP_PUBLICATION });
export const actionErrorUploadPublication = () => ({ type: CONSTANTS.ERROR_UP_PUBLICACION });
export const actionCleanUploadPublication = () => ({ type: CONSTANTS.CLEAN_UP_PUBLICACION });
