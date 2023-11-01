import { Group, Input, FormInputLabel } from "./form-input.styles.jsx";

const FormInput = ({ label, ...otherProps }) => {
   // console.log(otherProps);
   return (
      <Group>
         <Input {...otherProps} />
         {label && <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>}
      </Group>
   );
};
export default FormInput;
