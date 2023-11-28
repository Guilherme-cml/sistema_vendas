import * as Yup from 'yup';

const AvaliacaoValidators = Yup.object().shape({
    nome: Yup.string()
        .min(2, 'Valor muito curto')
        .max(200, 'Valor muito grande')
        .required('Campo obrigatório'),
    vendedor:Yup.string()
    .min(2, 'Valor muito curto')
    .max(200, 'Valor muito grande'),
    texto:Yup.string()
    .min(2, 'Valor muito curto')
    .max(500, 'Valor muito grande'),
    nota:Yup.string()
    .required('Campo obrigatório')
    
    


})
export default AvaliacaoValidators;     