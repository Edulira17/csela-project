import { FormData } from '../../../../validations/registration-student-schema';
import { FormGroup, Label, Select } from '../styles'
import { useFormContext } from 'react-hook-form';



const AdditionalInfo = () => {
  const { register, formState: { errors } } = useFormContext<FormData>()

  return (
    <FormGroup>
      <Label>Oficina</Label>
      <Select {...register("additionalInfo.oficina")} className={errors?.additionalInfo?.oficina?.type && "input-error"}>
        <option value="">Selecione uma opção</option>
        <option value="artes">Artes Plásticas</option>
        <option value="violao">Violão</option>
        <option value="jiu-jitsu">Jiu-Jitsu</option>
        <option value="n1">Nível 1</option>
        <option value="n2">Nível 2</option>
        <option value="n3">Nível 3</option>
      </Select>
      {errors.additionalInfo?.oficina && (
        <span className="error-message">{errors.additionalInfo.oficina.message as string}</span>
      )}
      <Label>Horário</Label>
      <Select {...register("additionalInfo.horario")} className={errors?.additionalInfo?.horario?.type && "input-error"}>
        <option value="">Selecione uma opção</option>
        <option value="matutino">Matutino</option>
        <option value="vespertino">Vespertino</option>
      </Select>
      {errors.additionalInfo?.horario && (
        <span className="error-message">{errors.additionalInfo.horario.message as string}</span>
      )}
      <Label>Moradia</Label>
      <Select {...register("additionalInfo.moradia")} className={errors?.additionalInfo?.moradia?.type && "input-error"}>
        <option value="">Selecione uma opção</option>
        <option value="propria">Casa Própria</option>
        <option value="alugada">Casa Alugada</option>
        <option value="cedida">Casa Cedida</option>
      </Select>
      {errors.additionalInfo?.moradia && (
        <span className="error-message">{errors.additionalInfo.moradia.message as string}</span>
      )}
      <Label>Recebe Auxílio do Governo ?</Label>
      <Select {...register("additionalInfo.auxilio")} className={errors?.additionalInfo?.auxilio?.type && "input-error"}>
        <option value="">Selecione uma opção</option>
        <option value="sim">Sim</option>
        <option value="nao">Não</option>
      </Select>
      {errors.additionalInfo?.auxilio && (
        <span className="error-message">{errors.additionalInfo.auxilio.message as string}</span>
      )}
      <Label>Utiliza Transporte Público ?</Label>
      <Select {...register("additionalInfo.transporte")} className={errors?.additionalInfo?.transporte?.type && "input-error"}>
        <option value="" >Selecione uma opção</option>
        <option value="sim">Sim</option>
        <option value="nao">Não</option>
      </Select>
      {errors.additionalInfo?.transporte && (
        <span className="error-message">{errors.additionalInfo.transporte.message as string}</span>
      )}
      <Label>Quantas pessoas moram na casa ?</Label>
      <Select {...register("additionalInfo.moradores")} className={errors?.additionalInfo?.moradores?.type && "input-error"}>
        <option value="" >Selecione uma opção</option>
        <option value="2-3">Entre 2 e 3 pessoas</option>
        <option value="4-5">Entre 4 e 5 pessoas </option>
        <option value="6">6 ou mais pessoas</option>
      </Select>
      {errors.additionalInfo?.moradores && (
        <span className="error-message">{errors.additionalInfo.moradores.message as string}</span>
      )}
      <Label>Podemos divulgar fotos e atividades de seu filho ?</Label>
      <Select {...register("additionalInfo.divulgacao")} className={errors?.additionalInfo?.divulgacao?.type && "input-error"}>
        <option value="">Selecione uma opção</option>
        <option value="sim">Estou de acordo !</option>
        <option value="nao">Não permito</option>
      </Select>
      {errors.additionalInfo?.divulgacao && (
        <span className="error-message">{errors.additionalInfo.divulgacao.message as string}</span>
      )}
    </FormGroup>
  )

}


export default AdditionalInfo