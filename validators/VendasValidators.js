import * as Yup from 'yup';

const VendasValidators = Yup.object().shape({
    produto: Yup.string()
        .min(2, 'Valor muito curto')
        .max(30, 'Valor muito grande')
        .required('Campo obrigatório'),
    vendedor: Yup.string()
        .min(2, 'Valor muito curto')
        .max(30, 'Valor muito grande')
        .required('Campo obrigatório'),
    quantidade: Yup.number()
        .required('Campo obrigatorio'),
    data: Yup.string()
        .required('Campo obrigatorio'),
    valor: Yup.string()
        .required('Campo obrigatorio'),
       
})
export default VendasValidators;     