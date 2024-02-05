import styles from './MessageForm.module.css';

import { ChangeEvent } from 'react';
import { Tooltip } from 'react-tooltip';
import { useScopedI18n } from '@/locales/client';
import { handleSubmitMessage } from './handleSubmitMessage';
import type { FormState } from './useMessageForm';

import ClearIcon from '@/app/_components/icons/CloseIcon';
import SendIcon from '@/app/_components/icons/CheckboxCircleIcon';

type MessageFormProps = {
  formState: FormState;
  clearForm: () => void;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: string
  ) => void;
};

export default function MessageForm({
  formState,
  clearForm,
  handleChange,
}: MessageFormProps) {
  const t = useScopedI18n('contact.aside.form');
  const toolT = useScopedI18n('tooltip.form');

  return (
    <form
      className={styles.form_container}
      onSubmit={(e) => handleSubmitMessage(e, formState, clearForm, t)}
    >
      <input
        className={styles.form_field}
        type="text"
        name="name"
        placeholder={t('name')}
        value={formState.name || ''}
        onChange={(e) => handleChange(e, 'name')}
      />

      <input
        className={styles.form_field}
        type="email"
        name="email"
        placeholder={t('email')}
        value={formState.email || ''}
        onChange={(e) => handleChange(e, 'email')}
      />

      <input
        className={styles.form_field}
        type="text"
        name="phone"
        placeholder={t('phone')}
        value={formState.phone || ''}
        onChange={(e) => handleChange(e, 'phone')}
      />

      <textarea
        className={`${styles.form_field} ${styles.message_field}`}
        name="message"
        placeholder={`${t('message')} *`}
        value={formState.message || ''}
        onChange={(e) => handleChange(e, 'message')}
      ></textarea>

      <div className={styles.btn_container}>
        <button
          className={styles.form_btn}
          type="button"
          onClick={clearForm}
          data-tooltip-id="form"
          data-tooltip-content={toolT('clear')}
        >
          <div className={styles.btn_icon}>
            <ClearIcon />
          </div>
        </button>

        <button
          className={styles.form_btn}
          type="submit"
          data-tooltip-id="form"
          data-tooltip-content={toolT('submit')}
        >
          <div className={styles.btn_icon}>
            <SendIcon />
          </div>
        </button>
      </div>

      <Tooltip
        id="form"
        className="custom tooltip"
        place="top"
        opacity={1}
        offset={8}
      />
    </form>
  );
}
