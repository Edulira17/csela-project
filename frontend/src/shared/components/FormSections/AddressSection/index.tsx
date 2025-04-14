import { FormGroup, Label, Input } from '../styles'
import { useFormContext } from 'react-hook-form';
import { useHookFormMask } from 'use-mask-input';
import { FormData } from '../../../../validations/registration-student-schema';

const AddressSection = () => {
  const { register, setValue, formState: { errors }, clearErrors } = useFormContext<FormData>();
  const registerWithMask = useHookFormMask(register);



  async function getCepInfo(e: React.FocusEvent<HTMLInputElement, Element>) {
    const zipCode = e.target.value;

    if (zipCode.length < 8) return;

    try {
      const res = await fetch(`https://brasilapi.com.br/api/cep/v2/${zipCode}`);
      if (res.ok) {
        const data = await res.json();
        setValue("addressInfo.rua", data.street);
        setValue("addressInfo.bairro", data.neighborhood);
        setValue("addressInfo.cidade", data.city);
      }

      // limpando erros caso existam
      clearErrors(["addressInfo.rua", "addressInfo.bairro", "addressInfo.cidade"])
    } catch (error) {
      console.log("Erro ao buscar CEP:", error)
    }
  }

  return (
    <FormGroup>
      <Label>CEP</Label>
      <Input {...registerWithMask('addressInfo.cep', '99999-999')} onBlur={getCepInfo} className={errors?.addressInfo?.cep?.type && "input-error"}/>
      {errors.addressInfo?.cep && (
        <span className="error-message">{errors.addressInfo.cep.message as string}</span>
      )}
      <Label>Rua</Label>
      <Input  {...register('addressInfo.rua')} className={errors?.addressInfo?.rua?.type && "input-error"}/>
      {errors.addressInfo?.rua && (
        <span className="error-message">{errors.addressInfo.rua.message as string}</span>
      )}
      <Label>Bairro</Label>
      <Input  {...register('addressInfo.bairro')} className={errors?.addressInfo?.bairro?.type && "input-error"}/>
      {errors.addressInfo?.bairro && (
        <span className="error-message">{errors.addressInfo.bairro.message as string}</span>
      )}
      <Label>Cidade</Label>
      <Input  {...register('addressInfo.cidade')} className={errors?.addressInfo?.cidade?.type && "input-error"}/>
      {errors.addressInfo?.cidade && (
        <span className="error-message">{errors.addressInfo.cidade.message as string}</span>
      )}
    </FormGroup>
  )
}

export default AddressSection;