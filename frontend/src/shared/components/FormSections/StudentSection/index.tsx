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
      {errors.studentInfo?.escola && (
        <span className="error-message">{errors.studentInfo.escola.message as string}</span>
      )}
      <Label>Série</Label>
      <Input
        className={errors?.studentInfo?.serie?.type && "input-error"}
        type="number"
        {...register("studentInfo.serie")}
      />
      {errors.studentInfo?.serie && (
        <span className="error-message">{errors.studentInfo.serie.message as string}</span>
      )}
      <Label>Turno</Label>
      <Select {...register("studentInfo.turno")} className={errors?.studentInfo?.turno?.type && "input-error"}>
        <option value="">Selecione um turno</option>
        <option value="matutino">Matutino</option>
        <option value="vespertino">Vespertino</option>
      </Select>
      {errors.studentInfo?.turno && (
        <span className="error-message">{errors.studentInfo.turno.message as string}</span>
      )}
    </FormGroup>
  );
};

export default StudentSection;


