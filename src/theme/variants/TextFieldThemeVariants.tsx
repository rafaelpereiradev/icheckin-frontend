import { TextFieldProps, Interpolation, Theme } from '@mui/material'
import icheckinColors from '../icheckinColors.json'

type TextFieldVariantsType = {
    props: TextFieldProps;
    style: Interpolation<{ theme: Theme }>;
}[]

const {palette} = icheckinColors;
 const TextFieldThemeVariants: TextFieldVariantsType = [
{
    props: {className:'inputReadOnly'},
    style: {
        backgroundColor:'#fff',
        borderBottom:`none`,
        WebkitTextFillColor:palette.primary.value,
        color:'#000',
        '& .MuiInputBase-input.Mui-disabled' :{
            borderBottom:`solid 1px #000`,
            color:'#000',
            WebkitTextFillColor:'#000',
        }
    }
}
]

export default TextFieldThemeVariants