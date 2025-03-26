import { Button } from "@mui/material";
import { FormContainer, FormGroup, ResponsiveContainerForm, ActionsContainer, Input, Select, Label } from "./style";

import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationFormSchema } from "../../validations/schemas/registration-form-schema";
import { sendFormData } from "../../shared/utils/sendFormData";




const Formulario = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      student: {
        turno: undefined
      }
    },
    resolver: yupResolver(registrationFormSchema)
  });

  // console.log(errors)

  return (
    <ResponsiveContainerForm>
      <FormContainer onSubmit={handleSubmit(sendFormData)}>
        <h2>DADOS DOS ALUNOS</h2>
        <FormGroup>
          <Label>Nome Completo</Label>
          <Input
            type="text"
            {...register("student.name")}
          />
          {errors.student?.name && <p>{errors.student.name.message}</p>}
          <Label>Naturalidade</Label>
          <Input
            type="text"
            {...register("student.naturalidade")}
          />
          {errors.student?.naturalidade && <p>{errors.student.naturalidade.message}</p>}
          <Label>Idade</Label>
          <Input
            type="number"
            {...register("student.idade")}
          />
          {errors.student?.idade && <p>{errors.student.idade.message}</p>}
          <Label>Data de Nascimento</Label>
          <Input
            type="date"
            {...register("student.dataNascimento")}
          />
          {errors.student?.dataNascimento && <p>{errors.student.dataNascimento.message}</p>}
          <Label>Nome da Escola</Label>
          <Input
            type="text"
            {...register("student.escola")}
          />
          {errors.student?.escola && <p>{errors.student.escola.message}</p>}
          <Label>Série</Label>
          <Input
            type="number"
            {...register("student.serie")}
          />
          {errors.student?.serie && <p>{errors.student.serie.message}</p>}
          {/* ADD CONTROLLER */}
          <Label>Turno</Label>
          <Controller
            name="student.turno"
            control={control}
            rules={{ required: "O turno é obrigatório" }}
            render={({ field }) => (
              <Select {...field}>
                <option value="" disabled>Selecione um turno</option>
                <option value="matutino">Matutino</option>
                <option value="vespertino">Vespertino</option>
              </Select>
            )}
          />
        </FormGroup>

        <ActionsContainer>
          <Button size="medium" variant="contained" color="success" type="submit">Submit</Button>
        </ActionsContainer>

      </FormContainer>
    </ResponsiveContainerForm>
  );
};

export default Formulario;
