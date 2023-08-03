import { type FC } from 'react';

import { useFormContext } from 'react-hook-form';

import { MenuItem } from '@mui/material';

import { useAddress } from '@hooks/index';

import { Field, Select } from '@components/elements';
import { TwoThirdContainer } from '@components/modules';

import { formatCEP } from '@utils/inputs/cep';
import { states } from '@utils/datas/states';

import { type GiverDefaultValues } from '../utils';

import * as DonateS from '../styles';

const DonationAddressDataFields: FC = () => {
  const { control, setValue, trigger, formState: { errors } } = useFormContext<GiverDefaultValues>();

  const { handleGetAdress, isLoadingAddress } = useAddress();

  const handleCEPAutoComplete = async (zipCode: string) => {
    if (zipCode.length < 9) return;

    const response = await handleGetAdress(zipCode);

    if (!response || response.erro) return;

    setValue('streetName', response.logradouro);
    setValue('district', response.bairro);
    setValue('city', response.localidade);
    setValue('state', response.uf);

    trigger();
  };

  return (
    <>
      <DonateS.StepDescription>
        <DonateS.StepHighlightedText>Estamos quase lá!</DonateS.StepHighlightedText> <br />
        Para concluírmos sua identificação preencha <br /> seus dados de endereço.
      </DonateS.StepDescription>
      <Field
        control={control}
        errors={errors}
        type='text'
        name='zipCode'
        label='CEP:'
        onChange={({ target: { value } }) => {
          setValue('zipCode', formatCEP(value));
          handleCEPAutoComplete(value);
        }}
        disabled={isLoadingAddress}
      />
      <Field
        control={control}
        errors={errors}
        type='text'
        name='streetName'
        label='Endereço:'
        disabled={isLoadingAddress}
      />
      <TwoThirdContainer>
        <Field
          control={control}
          errors={errors}
          type='text'
          name='district'
          label='Bairro:'
          disabled={isLoadingAddress}
        />
        <Field
          control={control}
          errors={errors}
          type='text'
          name='streetNumber'
          label='Número:'
          disabled={isLoadingAddress}
        />
      </TwoThirdContainer>
      <TwoThirdContainer>
        <Field
          control={control}
          errors={errors}
          type='text'
          name='city'
          label='Cidade:'
          disabled={isLoadingAddress}
        />
        <Select
          control={control}
          errors={errors}
          type='text'
          name='state'
          label='Estado:'
          disabled={isLoadingAddress}
        >
          {states.map((state, index) => (
            <MenuItem
              key={`state-${state}-${index}`}
              value={state}
            >
              {state}
            </MenuItem>
          ))}
        </Select>
      </TwoThirdContainer>
    </>
  );
};

export default DonationAddressDataFields;
