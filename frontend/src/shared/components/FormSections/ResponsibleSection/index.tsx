import { useForm } from 'react-hook-form';
import { FormGroup, Label, Input } from '../styles'
import { useHookFormMask } from 'use-mask-input';

const ResponsibleSection = () => {
  const { register } = useForm();
  const registerWithMask = useHookFormMask(register);
  return (
    <FormGroup>
      <Label>Nome do Responsável</Label>
      <Input type='text' {...register('name')} />
      <Label>Número para contato</Label>
      <Input type='text' {...registerWithMask('phone', '(99) 99999-9999')} />
      {/* customs inputs */}
      <Label>RG do Responsável</Label>
      <Input type='text' {...registerWithMask('rg', '9999999-9')} />
      <Label>CPF do Responsável</Label>
      <Input type='text' {...registerWithMask('cpf', '999.999.999-99')} />
    </FormGroup>
  )
};

export default ResponsibleSection;