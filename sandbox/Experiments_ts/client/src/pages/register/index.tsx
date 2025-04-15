import { Layout } from '../../components/layout';
import { Row, Card, Form, Space, Typography } from 'antd';
import { CustomInput } from '../../components/custom-input';
import { Paths } from '../../paths';
import { CustomPasswordInput } from '../../components/custom-password-input/input';
import { CustomButton } from '../../components/custom-button';
import { Link } from 'react-router-dom';

export const Register = () => {
	const [form] = Form.useForm();
	const onFinish = (values: any) => {
		console.log('Form values:', values);
		// Add your registration logic here
	};

	return (
		<Layout>
			<Row align="middle" justify="center">
				<Card title="Skapa konto" style={{ width: '30rem' }}>
					<Form form={form} onFinish={onFinish}>
						<CustomInput
							name='e-post'
							placeholder='E-post' />
						<CustomPasswordInput
							form={form} // Pass form instance
							name='lösenord'
							placeholder='Lösenord' />
						<CustomPasswordInput
							form={form} // Pass form instance
							name='confirmLösenord'
							placeholder='Bekräfta lösenordet'
							dependencies={['lösenord']} />
						<CustomButton
							type='submit'
							variant="logIn">
							Skapa konto
						</CustomButton>
					</Form>
					<Space direction='vertical' size='large'>
					<Typography.Text>
						Har du redan ett konto? <Link to={Paths.login}>Logga in</Link>
					</Typography.Text>
				</Space>
				</Card>
			</Row>
		</Layout>
	);
};