import { Button, MenuItem, TextField } from "@mui/material";
import { FormContainer, FormGroup, ResponsiveContainerForm, ActionsContainer } from "./style";
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
          <TextField label="Nome Completo" fullWidth margin="normal"
            {...register("student.name")}
            error={!!errors.student?.name}
            helperText={errors.student?.name?.message}
          />
          <TextField label="Naturalidade" fullWidth margin="normal"
            {...register("student.naturalidade")}
            error={!!errors.student?.naturalidade}
            helperText={errors.student?.naturalidade?.message}
          />
          <TextField type="date" label="Data de Nascimento" InputLabelProps={{ shrink: true }} fullWidth margin="normal"
            {...register("student.dataNascimento")}
            error={!!errors.student?.dataNascimento}
            helperText={errors.student?.dataNascimento?.message}
          />
          <TextField label="Idade" type="number" fullWidth margin="normal"
            {...register("student.idade")}
            error={!!errors.student?.idade}
            helperText={errors.student?.idade?.message}
          />
          <TextField label="Nome da Escola" fullWidth margin="normal"
            {...register("student.escola")}
            error={!!errors.student?.escola}
            helperText={errors.student?.escola?.message}
          />
          <TextField label="Série" type="text" fullWidth margin="normal"
            {...register("student.serie")}
            error={!!errors.student?.serie}
            helperText={errors.student?.serie?.message}
          />
          <Controller name="student.turno" control={control} render={({ field }) => (
            <TextField {...field} label="Turno" select fullWidth margin="normal"
              error={!!errors.student?.turno} helperText={errors.student?.turno?.message}>
              <MenuItem value="matutino">Matutino</MenuItem>
              <MenuItem value="vespertino">Vespertino</MenuItem>
            </TextField>
          )} />
        </FormGroup>

        <ActionsContainer>
          <Button size="medium" variant="contained" color="success" type="submit">Fazer Matrícula</Button>
          <Button size="medium" variant="outlined" color="error" onClick={() => reset()}>Limpar</Button>
        </ActionsContainer>
      </FormContainer>
    </ResponsiveContainerForm>
  );
};

export default Formulario;
