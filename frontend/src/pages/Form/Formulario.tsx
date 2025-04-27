import { Button } from "@mui/material";
import { FormContainer, ResponsiveContainerForm, ActionsContainer } from "./style";
import StudentSection from "../../shared/components/FormSections/StudentSection";
import ResponsibleSection from "../../shared/components/FormSections/ResponsibleSection";
import AddressSection from "../../shared/components/FormSections/AddressSection";
import AdditionalInfo from "../../shared/components/FormSections/AdditionalInfo";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { completeFormSchema, FormData } from "../../validations/registration-student-schema";
import axios from "axios";


const Formulario = () => {
  const methods = useForm<FormData>({
    resolver: zodResolver(completeFormSchema)
  })

  const sendFormData = async(data: FormData) => {
    try {
      await axios.post('http://localhost:3333/api/students', data);
      alert('Matricula realizada com sucesso')
    } catch (error) {
      console.error(error);
      alert('Erro ao tentar realizar a matrícula')
    }
  }

  return (
    <FormProvider {...methods}>
      <ResponsiveContainerForm>
        <FormContainer onSubmit={methods.handleSubmit(sendFormData)}>
          <h2>DADOS DOS ALUNOS</h2>
          <StudentSection />
          <h2>DADOS DO RESPONSÁVEL</h2>
          <ResponsibleSection />
          <h2>ENDEREÇO</h2>
          <AddressSection />
          <h2>INFORMAÇÕES ADICIONAIS</h2>
          <AdditionalInfo />
          <ActionsContainer>
            <Button size="medium" variant="contained" color="warning" type="button">
              Limpar
            </Button>
            <Button size="medium" variant="contained" color="success" type="submit">
              Registrar
            </Button>
          </ActionsContainer>
        </FormContainer>
      </ResponsiveContainerForm>
    </FormProvider>
  );
};

export default Formulario;
