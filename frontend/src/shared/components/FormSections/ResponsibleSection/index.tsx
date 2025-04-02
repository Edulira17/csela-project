import { useFormContext } from 'react-hook-form';
import { FormGroup, Label, Input } from '../styles'
import { useHookFormMask } from 'use-mask-input';
import { FormData } from '../../../../schemas/registration-student-schema';

const ResponsibleSection = () => {
  const { register, formState: { errors } } = useFormContext<FormData>();
  const registerWithMask = useHookFormMask(register);
  return (
    <FormGroup>
      <Label>Nome do Responsável</Label>
      <Input type='text' {...register('responsibleInfo.nomeResponsavel')} />
      {errors.responsibleInfo?.nomeResponsavel && (
        <span className="error-message">{errors.responsibleInfo.nomeResponsavel.message as string}</span>
      )}
      <Label>Número para contato</Label>
      <Input type='text' {...registerWithMask('responsibleInfo.numeroContato', '(99) 99999-9999')} />
      {errors.responsibleInfo?.numeroContato && (
        <span className="error-message">{errors.responsibleInfo.numeroContato.message as string}</span>
      )}
      {/* customs inputs */}
      <Label>RG do Responsável</Label>
      <Input type='text' {...registerWithMask('responsibleInfo.rg', '9999999-9')} />
      {errors.responsibleInfo?.rg && (
        <span className="error-message">{errors.responsibleInfo.rg.message as string}</span>
      )}
      <Label>CPF do Responsável</Label>
      <Input type='text' {...registerWithMask('responsibleInfo.cpf', '999.999.999-99')} />
      {errors.responsibleInfo?.cpf && (
        <span className="error-message">{errors.responsibleInfo.cpf.message as string}</span>
      )}
    </FormGroup>
  )
};

export default ResponsibleSection;

// adicionar visualizção de erro para todos campos 