import { FormGroup, Label, Input, Select } from '../styles'

import { useForm } from 'react-hook-form'

const StudentSection = () => {
  const { register, formState: { errors } } = useForm();


  return (
    <FormGroup>
      <Label>Nome Completo</Label>
      <Input
        className={errors?.name?.type && "input-error"}
        type="text"
        {...register("name", {
          required: "O nome é obrigatório",
          validate: (value) => /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(value) || "O nome deve conter apenas letras e espaços"
        })}

      />
      {errors.name && (
        <span className="error-message">{errors.name?.message as string}</span>
      )}
      <Label>Naturalidade</Label>
      <Input
        className={errors?.naturalidade?.type && "input-error"}
        type="text"
        {...register("naturalidade", {
          required: "A naturalidade é obrigatória",
          validate: (value) => /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(value) || "A naturalidade deve conter apenas letras e espaços"
        })}
      />
      {errors.naturalidade && (
        <span className="error-message">{errors.naturalidade?.message as string}</span>
      )}
      <Label>Idade</Label>
      <Input
        className={errors?.idade?.type && "input-error"}
        type="number"
        {...register("idade", {
          required: "A idade é obrigatória",
          min: {
            value: 7,
            message: "A idade miníma é 7 anos"
          },
          max: {
            value: 17,
            message: "A idade máxima é 17 anos"
          }
        })}
      />
      {errors.idade && (
        <span className="error-message">{errors.idade?.message as string}</span>
      )}
      <Label>Data de Nascimento</Label>
      <Input
        type="date"
        {...register("dataNascimento", {
          required: "A data de nascimento é obrigatória",
          validate: (value) => {
            const dataNascimento = new Date(value);
            const dataAtual = new Date();
            const idade = dataAtual.getFullYear() - dataNascimento.getFullYear();
            return idade >= 7 && idade <= 17 || "A idade deve estar entre 7 e 17 anos";
          }
        })}
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


