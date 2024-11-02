import React, { useContext } from 'react';
import { FormStyles, InputStyles, FormButtonStyles, TextAreaStyles } from './styles';
import { Context } from '../utils/context';

const MyForm: React.FC = () => {
  const context = useContext(Context);

  if (!context) {
    return null;
  }

  const { name, setName, email, setEmail, message, setMessage, setResponseMessage } = context;

  const handleSubmit = async ({name, email, message} : any) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      const data = await response.json();
      setResponseMessage(data.message);
    } else {
      setResponseMessage('Ошибка при отправке данных.');
    }
  };

  return (
    <FormStyles
      name="myForm"
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={handleSubmit}
    >
      <FormStyles.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please, enter your name!' }]}>
        <InputStyles value={name} onChange={(e) => setName(e.target.value)} />
      </FormStyles.Item>

      <FormStyles.Item
        label="Email"
        name="email"
        rules={[
          {
            type: 'email',
            message: 'Invalid email address!',
          },
          {
            required: true,
            message: 'Please enter your email address!',
          },
        ]}>
        <InputStyles value={email} onChange={(e) => setEmail(e.target.value)} />
      </FormStyles.Item>

      <FormStyles.Item
        label="Message"
        name="message"
        rules={[{ message: 'Please enter your message!' }]}>
        <TextAreaStyles required={true} value={message} onChange={(e) => setMessage(e.target.value)} rows={4} />
      </FormStyles.Item>

      <FormStyles.Item>
        <FormButtonStyles type="primary" htmlType="submit">
          Submit
        </FormButtonStyles>
      </FormStyles.Item>
    </FormStyles>
  );
};

export default MyForm;
