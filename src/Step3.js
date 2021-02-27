import React from 'react';
import { MainContainer } from './components/MainContainer';
import { Typography } from '@material-ui/core';
import { Form } from './components/Form';
import { FileInput } from './components/FileInput';
import { useForm } from 'react-hook-form';
import { PrimaryButton } from './components/PrimaryButton';
import { useHistory } from 'react-router-dom';

export const Step3 = () => {
  const history = useHistory();
  const { control, handleSubmit } = useForm();

  const onSubmit = () => {
    history.push('./result');
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        ✈️ Step 3
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput name="files" control={control} />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
