import { Button, MenuItem, TextField } from "@mui/material";
import { FormContainer, FormGroup, ResponsiveContainerForm, ActionsContainer } from "./style";





const Formulario = () => {
  return (
    <ResponsiveContainerForm>
      <FormContainer>
        <h2>DADOS DOS ALUNOS</h2>
        <FormGroup>
          <TextField label="Nome do Aluno(a)" fullWidth margin="normal" />
          <TextField label="Naturalidade" fullWidth margin="normal" />
          <TextField
            type="date"
            fullWidth
            margin="normal"
          />
          <TextField label="Idade" type="number" fullWidth margin="normal" />
          <TextField label="Nome da escola que estuda" type="text" fullWidth margin="normal" />
          <TextField label="Série" type="text" fullWidth margin="normal" />
          <TextField label="Turno" select fullWidth margin="normal">
            <MenuItem value="manha">Manhã</MenuItem>
            <MenuItem value="tarde">Tarde</MenuItem>
            <MenuItem value="noite">Noite</MenuItem>
          </TextField>
        </FormGroup>

        <h2>DADOS DO RESPONSÁVEL</h2>
        <FormGroup>
          <TextField label="Nome do Responsável" fullWidth margin="normal" />
          <TextField label="CPF" fullWidth margin="normal" />
          <TextField label="RG" fullWidth margin="normal" />
          <TextField label="Telefone" fullWidth margin="normal" />
          <TextField label="E-mail" fullWidth margin="normal" />
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
            <MenuItem value="propria">Própria</MenuItem>
            <MenuItem value="alugada">Alugada</MenuItem>
            <MenuItem value="cedida">Cedida</MenuItem>
          </TextField>
        </FormGroup>


        <ActionsContainer>
          <Button size="small" variant="contained" color="success">Fazer Matrícula</Button>
          <Button size="small" variant="outlined" color="error">limpar</Button>
        </ActionsContainer>
      </FormContainer>
    </ResponsiveContainerForm>

  );
};

export default Formulario;