import { Button } from "@mui/material";
import { FormContainer, FormGroup, ResponsiveContainerForm, ActionsContainer, Input, Select, Label } from "./style";
import { useForm } from 'react-hook-form'
import { sendFormData } from "../../shared/utils/sendFormData";



const Formulario = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({});

  console.log({ errors })

  return (
    <ResponsiveContainerForm>
      <FormContainer onSubmit={handleSubmit(sendFormData)}>
        <h2>DADOS DOS ALUNOS</h2>
        <FormGroup>
          <Label>Nome Completo</Label>
          <Input
            className={errors?.name?.type && "input-error"}
            type="text"
            {...register("name", {
              required: true,
              validate: (value) => /^[A-Za-zÀ-ÿ\s]+$/.test(value) || "Apenas letras são permitidas"
            })}
          />
          {errors?.name?.type && <span className="error-message">O nome é obrigatório</span>}
          <Label>Naturalidade</Label>
          <Input
            className={errors?.naturalidade?.type && "input-error"}
            type="text"
            {...register("naturalidade", {
              required: true
            })}
          />
          {errors?.naturalidade?.type === "required" && <span className="error-message">Naturalidade é obrigatória</span>}
          <Label>Idade</Label>
          <Input
            type="number"
            {...register("idade")}

          />
          <Label>Data de Nascimento</Label>
          <Input
            type="date"
            {...register("dataNascimento")}
          />
          <Label>Nome da Escola</Label>
          <Input
            type="text"
            {...register("escola")}
          />
          <Label>Série</Label>
          <Input
            type="number"
            {...register("serie")}
          />
          <Label>Turno</Label>
          <Select >
            <option value="">Selecione um turno</option>
            <option value="matutino">Matutino</option>
            <option value="vespertino">Vespertino</option>
          </Select>
        </FormGroup>

        <ActionsContainer>
          <Button size="medium" variant="contained" color="success" type="submit">Submit</Button>
        </ActionsContainer>

      </FormContainer>
    </ResponsiveContainerForm>
  );
};

export default Formulario;
