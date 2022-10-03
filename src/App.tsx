import './App.css';
import { Basic } from './topics/class/Basic';
import { ThemeProvider } from './topics/hooks/UseContext/Context';
import ThemeBox from './topics/hooks/UseContext/ThemeBox';
import UserBox from './topics/hooks/UseContext/UserBox';
import { UserProvider } from './topics/hooks/UseContext/UserContext';
import UseState from './topics/hooks/UseState';
import { Text } from './topics/polymorphic/Text';
import BasicProps from './topics/props/BasicProps';
import { ChildrenStringProps, ChildrenComponentProps } from './topics/props/ChildrenProps';
import { ArgEventProps, InputEventProps, VoidEventProps } from './topics/props/EventProps';
import { List } from './topics/props/GenericProps';
import { RandomNumber } from './topics/props/RestricitingProps';
import { StyleProps } from './topics/props/StyleProps';
import { AuthMiddleware } from './topics/senario/auth/AuthMiddleware';
import Profile from './topics/senario/auth/Profile';
import { Button } from './topics/senario/custom/Button';

function App() {
	const clickHandler = () => {
		console.log('clicked');
	}
	return (
		<>
			{/* props */}
			<BasicProps
				name="XYZ"
				age={25}
				isCompleteGraduation={true}
				address={{ area: "New Model Town", city: "LA" }}
				hobby={["Reading", "Writing", "Coding"]}
				favoriteSuperHero={[{ name: "Iron-man" }, { name: "Thor" }]}
				religion="Islam"
			/>

			<ChildrenStringProps>hello. I am children props as a string. </ChildrenStringProps>
			<ChildrenComponentProps>
				<ChildrenStringProps>hello. I am children props as a React Component.</ChildrenStringProps>
			</ChildrenComponentProps>

			<br />
			<VoidEventProps handleClick={clickHandler} />
			<br />
			<ArgEventProps handleClick={(event, id) => console.log(event, id)} />
			<br />
			<InputEventProps value='' handleChange={(event) => console.log(event)} />

			<StyleProps styles={{ border: '1px solid', color: 'red' }} />

			{/* generic props */}
			<List items={[{ id: 1, name: "aaa" }, { id: 2, name: "bbb" }]} onClick={(value) => console.log(value)} />

			{/* restrict props */}
			{/* only isPositive or isNegative or isZero can use  */}
			<RandomNumber value={10} isPositive />

			{/* hooks */}
			<UseState />

			<ThemeProvider>
				<ThemeBox />
			</ThemeProvider>

			<UserProvider>
				<UserBox />
			</UserProvider>

			{/* class */}
			<Basic message='hello' />

			{/* senario auth */}
			<AuthMiddleware isLoggedIn={true} component={Profile} />

			{/* custom component */}
			<Button
				variant='primary'
				name="login"
				onClick={() => console.log('clicked')}
			>click me</Button>

			{/* polymorphic */}
			<Text size='lg' as='h1'>
				Heading
			</Text>
			<Text size='md' as='p'>
				Paragraph
			</Text>
			<Text size='sm' color='secondary' as='label' htmlFor='someId'>
				Label
			</Text>
		</>
	);
}

export default App;
