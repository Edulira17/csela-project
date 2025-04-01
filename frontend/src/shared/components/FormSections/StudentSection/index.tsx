import { zodResolver } from '@hookform/resolvers/zod';
import { FormGroup, Label, Input, Select } from '../styles'
import { studentInfo } from '../../../../schemas/registration-student-schema';
import { useForm } from 'react-hook-form'

const StudentSection = () => {
  const { register, formState: { errors } } = useForm({
    resolver: zodResolver(studentInfo)
  });

  return (
    <FormGroup>
      <Label>Nome Completo</Label>
      <Input
        className={errors?.nomeCompleto?.type && "input-error"}
        type="text"
        {...register("nomeCompleto")}
      />
      {errors.nomeCompleto && (
        <span className="error-message">{errors.nomeCompleto?.message as string}</span>
      )}
      <Label>Naturalidade</Label>
      <Input
        className={errors?.naturalidade?.type && "input-error"}
        type="text"
        {...register("naturalidade")}
      />
      {errors.naturalidade && (
        <span className="error-message">{errors.naturalidade?.message as string}</span>
      )}
      <Label>Idade</Label>
      <Input
        className={errors?.idade?.type && "input-error"}
        type="number"
        {...register("idade")}
      />
      {errors.idade && (
        <span className="error-message">{errors.idade?.message as string}</span>
      )}
      <Label>Data de Nascimento</Label>
      <Input
        className={errors?.dataNascimento?.type && "input-error"}
        type="date"
        {...register("dataNascimento")}
      />
      <Label>Nome da Escola</Label>
      <Input
        className={errors?.escola?.type && "input-error"}
        type="text"
        {...register("escola")}
      />
      <Label>Série</Label>
      <Input
        type="number"
        {...register("serie")}
      />
      <Label>Turno</Label>
      <Select {...register("turno")} className={errors?.turno?.type && "input-error"}>
        <option value="">Selecione um turno</option>
        <option value="matutino">Matutino</option>
        <option value="vespertino">Vespertino</option>
      </Select>
    </FormGroup>
  );
};

export default StudentSection;


