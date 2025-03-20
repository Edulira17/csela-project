import { Button, MenuItem, TextField } from "@mui/material";
import { FormContainer, FormGroup, ResponsiveContainerForm, ActionsContainer } from "./style";
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationFormSchema } from "../../validations/schemas/registration-form-schema";
import { sendFormData } from "../../shared/utils/sendFormData";




const Formulario = () => {
  const { register, control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(registrationFormSchema),

  })


  return (
    <ResponsiveContainerForm>
      <FormContainer onSubmit={handleSubmit(sendFormData)}>
        <h2>DADOS DOS ALUNOS</h2>
        <FormGroup>
          <TextField
            label="Nome Completo do Aluno(a)"
            fullWidth margin="normal"
            {...register("student.name")}
            error={!!errors.student?.name}
            helperText={errors.student?.name?.message}
          />
          <TextField
            label="Naturalidade"
            fullWidth margin="normal"
            {...register("student.naturalidade")}
            error={!!errors.student?.naturalidade}
            helperText={errors.student?.naturalidade?.message}
          />

          <TextField
            type="date"
            label="Data de Nascimento"
            InputLabelProps={{ shrink: true }}
            fullWidth
            margin="normal"
            {...register("student.dataNascimento")}
            error={!!errors.student?.dataNascimento}
            helperText={errors.student?.dataNascimento?.message}
          />
          <TextField
            label="Idade"
            type="number"
            fullWidth
            margin="normal"
            {...register("student.idade")}
            error={!!errors.student?.idade}
            helperText={errors.student?.idade?.message}
          />
          <TextField
            label="Nome da escola que estuda"
            type="text"
            fullWidth margin="normal"
            {...register("student.escola")}
            error={!!errors.student?.escola}
            helperText={errors.student?.escola?.message}
          />
          <TextField
            label="Série"
            type="text"
            fullWidth
            margin="normal"
            {...register("student.serie")}
            error={!!errors.student?.serie}
            helperText={errors.student?.serie?.message}
          />

          <Controller
            name="student.turno"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Turno"
                select
                fullWidth
                margin="normal"
                error={!!errors.student?.turno}
                helperText={errors.student?.turno?.message}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value="manha">Matutino</MenuItem>
                <MenuItem value="tarde">Vespertino</MenuItem>
              </TextField>
            )}
          />
        </FormGroup>

        <h2>DADOS DO RESPONSÁVEL</h2>
        <FormGroup>
          <TextField 
            label="Nome do Responsável" 
            fullWidth 
            margin="normal" 
            {...register("guardian.name")}
            error={!!errors.guardian?.name}
            helperText={errors.guardian?.name?.message}
          />
          <TextField label="CPF" fullWidth margin="normal" />
          <TextField label="RG" fullWidth margin="normal" />
          <TextField label="Telefone" fullWidth margin="normal" />
          <TextField label="E-mail" fullWidth margin="normal" />
        </FormGroup>

        <h2>ENDEREÇO</h2>
        <FormGroup>
          <TextField label="Rua" fullWidth margin="normal" />
          <TextField label="Bairro" fullWidth margin="normal" />
          <TextField label="Cidade" fullWidth margin="normal" />
          <TextField label="UF" fullWidth margin="normal" />
          <TextField label="CEP" fullWidth margin="normal" />
        </FormGroup>

        <h2>INFORMAÇÕES ADICIONAIS</h2>
        <FormGroup>
          <TextField label="Oficina" select fullWidth margin="normal">
            <MenuItem value="artes">Manhã</MenuItem>
            <MenuItem value="violao">Violão</MenuItem>
            <MenuItem value="jiu-jitsu">Jiu-Jitsu</MenuItem>
            <MenuItem value="nivel 1">Nível 1</MenuItem>
            <MenuItem value="nivel 2">Nível 2</MenuItem>
            <MenuItem value="nivel 3">Nível 3</MenuItem>
          </TextField>

          <TextField label="Turno" select fullWidth margin="normal">
            <MenuItem value="matutino">Matutino</MenuItem>
            <MenuItem value="vespertino">Vespertino</MenuItem>
          </TextField>

          <TextField label="Moradia" select fullWidth margin="normal">
            <MenuItem value="propria">Própria</MenuItem>
            <MenuItem value="alugada">Alugada</MenuItem>
            <MenuItem value="cedida">Cedida</MenuItem>
          </TextField>


          <TextField label="Quantas pessoas moram na casa ?" select fullWidth margin="normal">
            <MenuItem value="1">1 Pessoa</MenuItem>
            <MenuItem value="2-3">2 a 3 Pessoas</MenuItem>
            <MenuItem value="6-7">6 a 7 Pessoas</MenuItem>
            <MenuItem value="8+">Mais de 8 Pessoas</MenuItem>
          </TextField>

          <TextField label="Recebe Auxilio do Governo ?" select fullWidth margin="normal">
            <MenuItem value="sim">Sim</MenuItem>
            <MenuItem value="nao">Não</MenuItem>
          </TextField>
          <TextField label="Podemos divulgar fotos e atividades do seu filho ?" select fullWidth margin="normal">
            <MenuItem value="sim">Sim</MenuItem>
            <MenuItem value="nao">Não</MenuItem>
          </TextField>
          <TextField label="Utiliza tranporte público ?" select fullWidth margin="normal">
            <MenuItem value="sim">Sim</MenuItem>
            <MenuItem value="nao">Não</MenuItem>
          </TextField>
        </FormGroup>

        <ActionsContainer>
          <Button size="medium" variant="contained" color="success" type="submit">Fazer Matrícula</Button>
          <Button size="medium" variant="outlined" color="error">limpar</Button>
        </ActionsContainer>

      </FormContainer>
    </ResponsiveContainerForm>

  );
};

export default Formulario;