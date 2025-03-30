import { FormGroup, Label, Input, Select } from '../styles'
import { useForm } from 'react-hook-form';



const AdditionalInfo = () => {
  const { register } = useForm()

  return (
    <FormGroup>
      <Label>Oficina</Label>
      <Select>
        <option value="" disabled selected>Selecione uma opção</option>
        <option value="artes">Artes Plásticas</option>
        <option value="violao">Violão</option>
        <option value="jiu-jitsu">Jiu-Jitsu</option>
        <option value="n1">Nível 1</option>
        <option value="n2">Nível 2</option>
        <option value="n3">Nível 3</option>
      </Select>
      <Label>Horário</Label>
      <Select>
        <option value="" disabled selected>Selecione uma opção</option>
        <option value="matutino">Matutino</option>
        <option value="vespertino">Vespertino</option>
      </Select>
      <Label>Moradia</Label>
      <Select>
        <option value="" disabled selected>Selecione uma opção</option>
        <option value="propria">Casa Própria</option>
        <option value="alugada">Casa Alugada</option>
        <option value="cedida">Casa Cedida</option>
      </Select>
      <Label>Recebe Auxílio do Governo ?</Label>
      <Select>
        <option value="" disabled selected>Selecione uma opção</option>
        <option value="sim">Sim</option>
        <option value="nao">Não</option>
      </Select>
      <Label>Utiliza Transporte Público ?</Label>
      <Select>
        <option value="" disabled selected>Selecione uma opção</option>
        <option value="sim">Sim</option>
        <option value="nao">Não</option>
      </Select>
      <Label>Quantas pessoas moram na casa ?</Label>
      <Select>
        <option value="" disabled selected>Selecione uma opção</option>
        <option value="2-3">Entre 2 e 3 pessoas</option>
        <option value="4-5">Entre 4 e 5 pessoas </option>
        <option value="6">6 ou mais pessoas</option>

      </Select>
      <Label>Podemos divulgar fotos e atividades de seu filho ?</Label>
      <Select>
        <option value="" disabled selected>Selecione uma opção</option>
        <option value="sim">Estou de acordo !</option>
        <option value="nao">Não permito</option>
      </Select>
    </FormGroup>
  )

}


export default AdditionalInfo