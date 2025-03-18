import { Button } from "@mui/material";
import { FormContainer, Input, Label, FormGroup, CustomInput, ResponsiveContainerForm, Select, ActionsContainer } from "./style";





const Formulario = () => {
  return (
    <ResponsiveContainerForm>
      <FormContainer>
        <h2>DADOS DOS ALUNOS</h2>
        <FormGroup>
          <Label>NOME DO ALUNO(A)</Label>
          <Input type="text" placeholder="Nome completo do aluno" />

          <Label>NATURALIDADE</Label>
          <Input type="text" placeholder="Cidade onde nasceu" />

          <Label>NOME DO PAI</Label>
          <Input type="text" placeholder="Nome completo do pai" />

          <Label>NOME DA MÃE</Label>
          <Input type="text" placeholder="Nome completo da mãe" />

          <Label>DATA DE NASCIMENTO</Label>
          <Input type="date" placeholder="Data de nascimento" />

          <Label>IDADE</Label>
          <Input type="number" placeholder="Digite a sua idade" />
          <div>
            <div className="school-row">
              <div>
                <Label>Nome da Escola</Label>
                <Input type="text" placeholder="Nome da escola" />
              </div>
              <div>
                <Label>Série</Label>
                <Input type="number" placeholder="Digite a série" />
              </div>
              <div>
                <Label>Ano</Label>
                <Input type="number" placeholder="Digite o ano" />
              </div>
            </div>
          </div>
        </FormGroup>

        <h2>DADOS DO RESPONSÁVEL</h2>
        <FormGroup>

          <Label>NOME DO RESPONSÁVEL</Label>
          <Input type="text" placeholder="Digite o nome do seu Responsável" />

          <Label>NÚMERO PARA CONTATO</Label>
          <CustomInput type="tel" placeholder="Digite o Número para Contato" mask="(99) 99999-9999" />

          <Label>RG DO RESPONSÁVEL</Label>
          <CustomInput type="rg" mask="99.999.999-9" placeholder="Digite o seu RG" />

          <Label>CPF DO RESPONSÁVEL</Label>
          <CustomInput type="cpf" mask="999.999.999-99" placeholder="Digite o seu CPF" />

        </FormGroup>

        <h2>ENDEREÇO</h2>
        <FormGroup>
          <Label>RUA</Label>
          <Input type="text" placeholder="Digite o nome da Rua" />

          <Label>BAIRRO</Label>
          <Input type="text" placeholder="Digite o nome do Bairro" />

          <Label>CIDADE</Label>
          <Input type="text" placeholder="Digite o nome da Cidade" />

          <Label>CEP</Label>
          <CustomInput type="cep" mask="99999-999" placeholder="Digite seu CEP" />

          <Label>UF</Label>
          <Input type="text" />

        </FormGroup>

        <h2>INFORMAÇÕES ADICIONAIS</h2>
        <FormGroup>
          <Label>OFICINA</Label>
          <Select>
            <option value="artes-plasticas">Artes Plásticas</option>
            <option value="violao">Violão</option>
            <option value="jiu-jitsu">Jiu-Jitsu</option>
            <option value="nivel1">Nível 1</option>
            <option value="nivel2">Nível 2</option>
            <option value="nivel3">Nível 3</option>
          </Select>
          <Label>TURNO</Label>
          <Select>
            <option value="matutino">Matutino</option>
            <option value="vespertino">Vespertino</option>
          </Select>
          <Label>MORADIA</Label>
          <Select>
            <option value="propria">Própria</option>
            <option value="alugada">Alugada</option>
            <option value="cedida">Cedida</option>
          </Select>
          <Label>UTILIZA ÔNIBUS COMO MEIO DE TRANSPORTE ?</Label>
          <Select>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </Select>
          <Label>RECEBE AUXÍLIO DO GOVERNO ?</Label>
          <Select>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </Select>
          <Label>QUANTAS PESSOAS MORAM NA CASA ?</Label>
          <Select>
            <option value="1">1 pessoa</option>
            <option value="2-4">2 a 4 pessoas</option>
            <option value="5-6">5 a 6 pessoas</option>
            <option value="7-8">7 a 8 pessoas</option>
            <option value="mais-de-8">Mais de 8 pessoas</option>
          </Select>
          <Label>PODEMOS DIVULGAR FOTOS E ATIVIDADES DE SEU FILHO NO PROJETO ?</Label>
          <Select>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </Select>
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