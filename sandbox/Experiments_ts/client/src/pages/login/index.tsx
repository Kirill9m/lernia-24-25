import { Layout } from '../../components/layout';
import { Row, Card, Form, Space, Typography } from 'antd';
import { CustomInput } from '../../components/custom-input';
import { Paths } from '../../paths';
import { CustomPasswordInput } from '../../components/custom-password-input/input';
import { CustomButton } from '../../components/custom-button';
import { Link } from 'react-router-dom';

export const Login = () => {
	const [form] = Form.useForm();
	return (
		<Layout>
			<Row align="middle" justify="center">
				<Card title="Logga in" style={{ width: '30rem' }}>
					<Form onFinish={() => null}>
						<CustomInput
							type='email'
							name='e-post'
							placeholder='E-post'
						/>
						<CustomPasswordInput
							form={form}
							name='lösenord'
							placeholder='Lösenord'
						/>
						<CustomButton
						type = 'submit'
						variant="logIn">
							Logga in
						</CustomButton>
						</Form>
						<Space direction='vertical' size='large'>
							<Typography.Text>
								Har du inget konto? <Link to={ Paths.register }>Skapa konto</Link>
							</Typography.Text>
						</Space>
				</Card>
			</Row>
		</Layout>
	)
}