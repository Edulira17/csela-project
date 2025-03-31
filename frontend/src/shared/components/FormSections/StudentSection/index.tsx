import { FormGroup, Label, Input, Select } from '../styles'

import { useForm } from 'react-hook-form'

const StudentSection = () => {
  const { register, formState: { errors } } = useForm();

  console.log(errors)
  return (
    <FormGroup>
      <Label>Nome Completo</Label>
      <Input
        className={errors?.name?.type && "input-error"}
        type="text"
        {...register("name")}
      />
      {errors.name && (
        <span className="error-message">{errors.name?.message as string}</span>
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
        type="date"
        {...register("dataNascimento")}
      />
      <Label>Nome da Escola</Label>
      <Input
        type="text"
        {...register("escola")}
      />
      <Label>Série</Label>
      <Input
        type="number"
        {...register("serie")}
      />
      <Label>Turno</Label>
      <Select >
        <option value="">Selecione um turno</option>
        <option value="matutino">Matutino</option>
        <option value="vespertino">Vespertino</option>
      </Select>
    </FormGroup>
  );
};

export default StudentSection;


