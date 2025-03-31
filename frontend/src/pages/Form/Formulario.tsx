import { Button } from "@mui/material";
import { FormContainer,  ResponsiveContainerForm, ActionsContainer } from "./style";
import StudentSection from "../../shared/components/FormSections/StudentSection";
import ResponsibleSection from "../../shared/components/FormSections/ResponsibleSection";
import AddressSection from "../../shared/components/FormSections/AddressSection";
import AdditionalInfo from "../../shared/components/FormSections/AdditionalInfo";

// add use-masked-input

const Formulario = () => {
  return (
    <ResponsiveContainerForm>
      <FormContainer>

        <h2>DADOS DOS ALUNOS</h2>
        <StudentSection />
        <h2>DADOS DO RESPONSÁVEL</h2>
        <ResponsibleSection />
        <h2>ENDEREÇO</h2>
        <AddressSection />
        <h2>INFORMAÇÕES ADICIONAIS</h2>
        <AdditionalInfo />
        <ActionsContainer>

          <Button size="medium" variant="contained" color="warning" type="submit">Limpar</Button>
          <Button size="medium" variant="contained" color="success" type="submit">Registrar</Button>
        </ActionsContainer>
      </FormContainer>
    </ResponsiveContainerForm>
  );
};

export default Formulario;
