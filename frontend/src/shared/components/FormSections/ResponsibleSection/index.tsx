import { useFormContext } from 'react-hook-form';
import { FormGroup, Label, Input } from '../styles'
import { useHookFormMask } from 'use-mask-input';
import { FormData } from '../../../../validations/registration-student-schema';

const ResponsibleSection = () => {
  const { register, formState: { errors } } = useFormContext<FormData>();
  const registerWithMask = useHookFormMask(register);
  return (
    <FormGroup>
      <Label>Nome do Responsável</Label>
      <Input
        className={errors?.responsibleInfo?.nomeResponsavel?.type && "input-error"}
        type='text'
        {...register('responsibleInfo.nomeResponsavel')}
      />
      {errors.responsibleInfo?.nomeResponsavel && (
        <span className="error-message">{errors.responsibleInfo.nomeResponsavel.message as string}</span>
      )}
      <Label>E-mail do Responsável</Label>
      <Input
        className={errors?.responsibleInfo?.nomeResponsavel?.type && "input-error"}
        type='text'
        {...register('responsibleInfo.nomeResponsavel')}
      />
      {errors.responsibleInfo?.nomeResponsavel && (
        <span className="error-message">{errors.responsibleInfo.nomeResponsavel.message as string}</span>
      )}
      <Label>Número para contato</Label>
      <Input type='text' {...registerWithMask('responsibleInfo.numeroContato', '(99) 99999-9999')} className={errors?.responsibleInfo?.numeroContato?.type && "input-error"} />
      {errors.responsibleInfo?.numeroContato && (
        <span className="error-message">{errors.responsibleInfo.numeroContato.message as string}</span>
      )}
      {/* customs inputs */}
      <Label>RG do Responsável</Label>
      <Input type='text' {...registerWithMask('responsibleInfo.rg', '9999999-9')} className={errors?.responsibleInfo?.rg?.type && "input-error"} />
      {errors.responsibleInfo?.rg && (
        <span className="error-message">{errors.responsibleInfo.rg.message as string}</span>
      )}
      <Label>CPF do Responsável</Label>
      <Input type='text' {...registerWithMask('responsibleInfo.cpf', '999.999.999-99')} className={errors?.responsibleInfo?.cpf?.type && "input-error"} />
      {errors.responsibleInfo?.cpf && (
        <span className="error-message">{errors.responsibleInfo.cpf.message as string}</span>
      )}
    </FormGroup>
  )
};

export default ResponsibleSection;

