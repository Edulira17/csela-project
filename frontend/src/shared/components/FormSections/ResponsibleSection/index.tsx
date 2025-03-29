import { useForm } from 'react-hook-form';
import { FormGroup, Label, Input} from '../styles'

const ResponsibleSection = () => {
   const { register, formState: { errors } } = useForm();
  return (
    <FormGroup>
      <Label>Nome do Responsável</Label>
      <Input type='text' {...register('name')} />
      <Label>Número para contato</Label>
      <Input type='text' {...register('phone')}/>
      <Label>RG do Responsável</Label>
      <Input type='text' {...register('rg')}/>
      <Label>CPF do Responsável</Label>
      <Input type='text' {...register('cpf')}/>
    </FormGroup>
  )
};

export default ResponsibleSection;