import { Button } from "@mui/material";
import { FormContainer, FormGroup, ResponsiveContainerForm, ActionsContainer, Input, Select, Label } from "./style";

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationFormSchema } from "../../validations/schemas/registration-form-schema";
import { sendFormData } from "../../shared/utils/sendFormData";




const Formulario = () => {
  const { register, control, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(registrationFormSchema)
  });

  return (
    <ResponsiveContainerForm>
      <FormContainer onSubmit={handleSubmit(sendFormData)}>
        <h2>DADOS DOS ALUNOS</h2>
        <FormGroup>
          <Label>Nome Completo</Label>
          <Input 
            type="string" 
            {...register("student.name")}

          />
          <Label>Naturalidade</Label>
          <Input
            type="string"
            {...register("student.naturalidade")}
          />
          <Label>Idade</Label>
          <Input
            type="number"
            {...register("student.idade")}
          />
          <Label>Data de Nascimento</Label>
          <Input
            type="date"
            {...register("student.dataNascimento")}
          />
          <Label>Nome da Escola</Label>
          <Input
            type="string"
          />
          <Label>Série</Label>
          <Input
            type="number"
          />
          {/* <Controller name="student.turno" control={control} render={({ field }) => (
            <Input {...field} label="Turno" select fullWidth margin="normal"
              error={!!errors.student?.turno} helperText={errors.student?.turno?.message}>
              <Select value="matutino">Matutino</Select>
              <Select value="vespertino">Vespertino</Select>
            </Input>
          )}
          /> */}
        </FormGroup>

        <ActionsContainer>
          <Button size="medium" variant="contained" color="success" type="submit">Próximo</Button>
          <Button size="medium" variant="outlined" color="error" onClick={() => reset()}>Limpar</Button>
        </ActionsContainer>
      </FormContainer>
    </ResponsiveContainerForm>
  );
};

export default Formulario;
