import * as yup from "yup";

export const BasicFormSchema = yup.object().shape({
  nombre: yup.string().required("REQUERIDO").min(3,"el nombre no puede tener menos de 3 caracteres"),
  apellido: yup.string().min(3).required("REQUERIDO"),
  email: yup
    .string()
    .email("Por favor introduzca Email valido")
    .required("REQUERIDO"),
  direccion: yup.string().required("REQUERIDO"),
  direccion2: yup.string(),
  pais: yup
    .string()
    .oneOf(["España", "Portugal", "Francia"], "Pais no valido")
    .required("REQUERIDO"),
  cp: yup.number().max(5).required("REQUERIDO"),
  nombreTarjeta: yup.string().required("REQUERIDO").min(3),
  numeroTarjeta: yup.number().required("REQUERIDO"),
  CVV: yup.number().max(3).required("REQUERIDO"),
});
