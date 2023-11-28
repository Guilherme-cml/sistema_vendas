import * as Yup from 'yup';

const LojaValidators = Yup.object().shape({
    nome: Yup.string()
        .min(5, 'Valor muito curto')
        .max(28, 'Valor muito grande')
        .required('Campo obrigatório'),
    cidade: Yup.string()
        .min(5, 'Valor muito curto')
        .max(28, 'Valor muito grande')
        .required('Campo obrigatório'),
    quantidade: Yup.number()
        .required('Campo obrigatório'),
    descricao:Yup.string()
    

})
export default LojaValidators;     