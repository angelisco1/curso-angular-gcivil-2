import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const tieneMayusculas = (control: AbstractControl): null | ValidationErrors => {
  const valor = control.value
  if (valor === valor.toLowerCase()) {
    return {
      tieneMayusculas: valor
    }
  }

  return null
}

export const passwordMasSegura = (mayus: boolean, punto: boolean): ValidatorFn => {

  return (control: AbstractControl): null | ValidationErrors => {
    let errores = {}

    if (mayus) {
      const errorMayus = tieneMayusculas(control)

      if (errorMayus) {
        errores = { ...errores, ...errorMayus }
      }
    }

    if (punto && !control.value.includes('.')) {
      errores = {
        ...errores,
        punto: true
      }
    }

    return Object.keys(errores).length > 0 ? errores : null
  }

}