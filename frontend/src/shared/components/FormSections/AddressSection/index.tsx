import { useState } from 'react';
import { FormGroup, Label, Input } from '../styles'
import { useForm } from 'react-hook-form';
import { useHookFormMask } from 'use-mask-input';

const AddressSection = () => {
  const { register } = useForm();
  const registerWithMask = useHookFormMask(register);
  const [address, setAddress] = useState({ neighborhood: '', street: '', city: '' })


  async function getCepInfo(e: React.FocusEvent<HTMLInputElement, Element>) {
    const cep = e.target.value;
    const res = await fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`);
    if (res.ok) {
      const data = await res.json();
      setAddress({
        neighborhood: data.neighborhood,
        street: data.street,
        city: data.city
      })
    }
  }

  return (
    <FormGroup>
      <Label>CEP</Label>
      <Input {...registerWithMask('cep', '99999-999')} onBlur={getCepInfo} />
      <Label>Rua</Label>
      <Input value={address.street} {...register('rua')} />
      <Label>Bairro</Label>
      <Input value={address.neighborhood} {...register('bairro')} />
      <Label>Cidade</Label>
      <Input value={address.city} {...register('cidade')} />
    </FormGroup>
  )
}

export default AddressSection;