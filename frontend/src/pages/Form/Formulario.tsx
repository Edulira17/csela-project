import { Button } from "@mui/material";
import {
  FormContainer,
  ResponsiveContainerForm,
  ActionsContainer,
} from "./style";
import StudentSection from "../../shared/components/FormSections/StudentSection";
import ResponsibleSection from "../../shared/components/FormSections/ResponsibleSection";
import AddressSection from "../../shared/components/FormSections/AddressSection";
import AdditionalInfo from "../../shared/components/FormSections/AdditionalInfo";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  completeFormSchema,
  FormData,
} from "../../validations/registration-student-schema";
import axios from "axios";
import { toast } from "react-toastify";

const Formulario = () => {
  const methods = useForm<FormData>({
    resolver: zodResolver(completeFormSchema),
  });

  const sendFormData = async (data: FormData) => {
    try {
      await axios.post("http://localhost:3333/api/students", data);
      toast.success("Sua Pré-Matricula foi realizada com sucesso! Você receberá um e-mail de confirmação em instantes.")
      methods.reset();
    } catch (error) {
      console.error(error);
      toast.error("Houve um erro ao enviar os dados. Verifique os dados e tente novamente.");
    }

    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <ResponsiveContainerForm>
        <FormContainer onSubmit={methods.handleSubmit(sendFormData)}>
          <h2>DADOS DO ESTUDANTE</h2>
          <StudentSection />
          <h2>DADOS DO RESPONSÁVEL</h2>
          <ResponsibleSection />
          <h2>ENDEREÇO</h2>
          <AddressSection />
          <h2>INFORMAÇÕES ADICIONAIS</h2>
          <AdditionalInfo />
          <ActionsContainer>
            <Button
              size="medium"
              variant="contained"
              color="warning"
              type="button"
              onClick={() => methods.reset()}
            >
              Limpar
            </Button>
            <Button
              size="medium"
              variant="contained"
              color="success"
              type="submit"
            >
              Enviar
            </Button>
          </ActionsContainer>
        </FormContainer>
      </ResponsiveContainerForm>
    </FormProvider>
  );
};

export default Formulario;
