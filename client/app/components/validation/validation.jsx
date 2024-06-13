const Validation = (data) => {
    const errors = {}
    if (!/^[0-9]+$/.test(data.monto)) {
        errors.monto = "tiene que ser solo numeros"
    }
    return errors;
}
export default Validation;