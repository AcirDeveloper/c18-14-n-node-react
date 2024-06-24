const Validation = (data) => {
    console.log(data.description);
    const errors = {}
    if (!/^[0-9]+$/.test(data.monto)) {
        errors.monto = "tiene que ser solo numeros"
    }


    if (data.description.length <= 0) {
        errors.description = "tenes que completar los datos"
    }

    if (data.proyecto.length <= 0) {
        errors.proyecto = "tenes que completar los datos"
    }
    return errors;
}
export default Validation;