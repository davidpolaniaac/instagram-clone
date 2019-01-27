import CONSTANTES from './CONSTANTES';

export const actionRegistro = datos => ({ type: CONSTANTES.REGISTRO, datos });
export const actionLogin = datos => ({ type: CONSTANTES.LOGIN, datos });
export const actionEstablecerSesion = usuario => ({ type: CONSTANTES.ESTABLECER_SESION, usuario });
export const actionCerrarSesion = () => ({ type: CONSTANTES.CERRAR_SESION });
export const actionCargarImageSignUp = image => ({ type: CONSTANTES.CARGAR_IMAGEN_SIGNUP, image });
export const actionLimpiarImageSingUp = () => ({ type: CONSTANTES.LIMPIAR_IMAGEN_SIGNUP });
