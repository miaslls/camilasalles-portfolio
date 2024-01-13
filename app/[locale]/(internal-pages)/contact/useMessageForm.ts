import { ChangeEvent, useState } from 'react';

export type FormState = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

export type FormStateAndHandlers = [
  FormState,
  {
    clearForm: () => void;
    handleChange: (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      name: string
    ) => void;
  }
];

export function useMessageForm(): FormStateAndHandlers {
  const [formState, setFormState] = useState<FormState>({});

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: string
  ) {
    setFormState({ ...formState, [name]: e.target.value });
  }

  function clearForm() {
    setFormState({});
  }

  return [formState, { clearForm, handleChange }];
}
