import { Form, Input } from 'antd';
import { NamePath } from 'antd/es/form/interface';

type Props = {
  name: string;
  placeholder: string;
  dependencies?: NamePath[];
  form: any;
}

export const CustomPasswordInput = ({
  name,
  placeholder,
  dependencies,
  form
}: Props) => {
  const password = Form.useWatch('lösenord', form);
  const isPasswordValid = password && password.length >= 6;

  return (
    <Form.Item
      name={name}
      dependencies={dependencies}
      hasFeedback
      rules={[{
        required: true,
        message: name === 'confirmLösenord' 
          ? 'Vänligen bekräfta lösenordet'
          : 'Vänligen ange lösenord',
      }, ({ getFieldValue }) => ({
        validator(_, value) {
          if (!value) {
            return Promise.resolve();
          }

          if (name === 'confirmLösenord') {
            if (!value || getFieldValue('lösenord') === value) {
              return Promise.resolve();
            }
            return Promise.reject(new Error('Lösenorden matchar inte'));
          } else {
            if (value.length < 6) {
              return Promise.reject(new Error('Lösenordet måste innehålla minst 6 tecken'));
            }
            return Promise.resolve();
          }
        }
      })]}
    >
      <Input.Password
        placeholder={placeholder}
        size="large"
        disabled={name === 'confirmLösenord' && !isPasswordValid}
      />
    </Form.Item>
  );
}