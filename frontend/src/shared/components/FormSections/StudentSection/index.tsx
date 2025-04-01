import { FormGroup, Label, Input, Select } from '../styles'
import { useFormContext } from 'react-hook-form'
import { FormData } from '../../../../schemas/registration-student-schema';
const StudentSection = () => {
  const { register, formState: { errors } } = useFormContext<FormData>();

  return (
    <FormGroup>
      <Label>Nome Completo</Label>
      <Input
        className={errors?.studentInfo?.nomeCompleto?.type && "input-error"}
        type="text"
        {...register("studentInfo.nomeCompleto")}
      />
      {errors.studentInfo?.nomeCompleto && (
        <span className="error-message">{errors.studentInfo.nomeCompleto.message as string}</span>
      )}
      <Label>Naturalidade</Label>
      <Input
        className={errors?.studentInfo?.naturalidade?.type && "input-error"}
        type="text"
        {...register("studentInfo.naturalidade")}
      />
      {errors.studentInfo?.naturalidade && (
        <span className="error-message">{errors.studentInfo.naturalidade.message as string}</span>
      )}
      <Label>Idade</Label>
      <Input
        className={errors?.studentInfo?.idade?.type && "input-error"}
        type="number"
        {...register("studentInfo.idade")}
      />
      {errors.studentInfo?.idade && (
        <span className="error-message">{errors.studentInfo.idade.message as string}</span>
      )}
      <Label>Data de Nascimento</Label>
      <Input
        className={errors?.studentInfo?.dataNascimento?.type && "input-error"}
        type="date"
        {...register("studentInfo.dataNascimento")}
      />
      {errors.studentInfo?.dataNascimento && (
        <span className="error-message">{errors.studentInfo.dataNascimento.message as string}</span>
      )}
      <Label>Nome da Escola</Label>
      <Input
        className={errors?.studentInfo?.escola?.type && "input-error"}
        type="text"
        {...register("studentInfo.escola")}
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


