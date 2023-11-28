import * as Yup from 'yup';

const funcionarioValidators = Yup.object().shape({
    Nome: Yup.string()
        .min(3, 'Valor muito curto')
        .max(30, 'Valor muito grande')
        .required('Campo obrigatório'),
    CPF: Yup.string()
        .min(11, 'Valor muito curto')
        .max(12, 'Valor muito grande')
        .required('Campo obrigatório'),
    matricula: Yup.string()
        .min(5, 'Valor muito curto')
        .max(30, 'Valor muito grande')
        .required('Campo obrigatorio'),
    salario: Yup.number()
        .required('Campo obrigatorio'),
    telefone: Yup.string()
        .min(11, 'Valor muito curto')
        .max(12, 'Valor muito grande')
        .required('Campo obrigatorio'),
    CEP: Yup.string()
        .min(8, 'Valor muito curto')
        .max(8, 'Valor muito grande')
        .required('Campo obrigatorio'),
    logradouro: Yup.string()
        .min(5, 'Valor muito curto')
        .max(40, 'Valor muito grande')
        .required('Campo obrigatorio'),
    email: Yup.string()
        .min(5, 'Valor muito curto')
        .max(40, 'Valor muito grande')
        .required('Campo obrigatorio'),
    Complemento: Yup.string(),
    numero: Yup.number(),
    bairro: Yup.string(),
    



})
export default funcionarioValidators;     