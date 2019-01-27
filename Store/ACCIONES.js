import CONSTANTES from './CONSTANTES';

export const actionRegistro = datos => ({ type: CONSTANTES.REGISTRO, datos });
export const actionLogin = datos => ({ type: CONSTANTES.LOGIN, datos });
export const actionEstablecerSesion = usuario => ({ type: CONSTANTES.ESTABLECER_SESION, usuario });
export const actionCerrarSesion = () => ({ type: CONSTANTES.CERRAR_SESION });
export const actionCargarImageSignUp = image => ({ type: CONSTANTES.CARGAR_IMAGEN_SIGNUP, image });
export const actionLimpiarImageSingUp = () => ({ type: CONSTANTES.LIMPIAR_IMAGEN_SIGNUP });
export const actionCargarImagePublicacion = image => ({ type: CONSTANTES.CARGAR_IMAGEN_PUBLICACION, image });
export const actionLimpiarImagePublicacion = () => ({ type: CONSTANTES.LIMPIAR_IMAGEN_PUBLICACION });
export const actionSubirImage = datos => ({ type: CONSTANTES.SUBIR_PUBLICACION, datos });
export const actionDescargarPublicaciones = () => ({ type: CONSTANTES.DESCARGAR_PUBLICACIONES });
export const actionAgregarPublicacionesStore = publicaciones => ({ type: CONSTANTES.AGREGAR_PUBLICACIONES_STORE, publicaciones });
export const actionAgregarAutoresStore = autores => ({ type: CONSTANTES.AGREGAR_AUTORES_STORE, autores });
export const actionExitoSubirPublicacion = () => ({ type: CONSTANTES.EXITO_SUBIR_PUBLICACION });
export const actionErrorSubirPublicacion = () => ({ type: CONSTANTES.ERROR_SUBIR_PUBLICACION });
export const actionLimpiarSubirPublicacion = () => ({ type: CONSTANTES.LIMPIAR_SUBIR_PUBLICACION });
