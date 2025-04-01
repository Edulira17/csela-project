import { useFormContext } from 'react-hook-form';
import { FormGroup, Label, Input } from '../styles'
import { useHookFormMask } from 'use-mask-input';

const ResponsibleSection = () => {
  const { register, formState: { errors } } = useFormContext();
  const registerWithMask = useHookFormMask(register);
  return (
    <FormGroup>
      <Label>Nome do Responsável</Label>
      <Input type='text' {...register('nomeResponsavel')} />
      <Label>Número para contato</Label>
      <Input type='text' {...registerWithMask('numeroContato', '(99) 99999-9999')} />
      {/* customs inputs */}
      <Label>RG do Responsável</Label>
      <Input type='text' {...registerWithMask('rg', '9999999-9')} />
      <Label>CPF do Responsável</Label>
      <Input type='text' {...registerWithMask('cpf', '999.999.999-99')} />
    </FormGroup>
  )
};

export default ResponsibleSection;

// adicionar visualizção de erro para todos campos 