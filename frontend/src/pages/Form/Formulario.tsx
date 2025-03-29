import { Button } from "@mui/material";
import { FormContainer,  ResponsiveContainerForm, ActionsContainer } from "./style";
import StudentSection from "../../shared/components/FormSections/StudentSection";

// add use-masked-input

const Formulario = () => {
  return (
    <ResponsiveContainerForm>
      <FormContainer>
        <h2>DADOS DOS ALUNOS</h2>
        <StudentSection />
        <h2>DADOS DO RESPONSÁVEL</h2>

        <ActionsContainer>
          <Button size="medium" variant="contained" color="success" type="submit">Submit</Button>
        </ActionsContainer>
      </FormContainer>
    </ResponsiveContainerForm>
  );
};

export default Formulario;
