import './App.css';
import { ThemeProvider } from './topics/hooks/UseContext/Context';
import ThemeBox from './topics/hooks/UseContext/ThemeBox';
import UserBox from './topics/hooks/UseContext/UserBox';
import { UserProvider } from './topics/hooks/UseContext/UserContext';
import UseState from './topics/hooks/UseState';
import BasicProps from './topics/props/BasicProps';
import { ChildrenStringProps, ChildrenComponentProps } from './topics/props/ChildrenProps';
import { ArgEventProps, InputEventProps, VoidEventProps } from './topics/props/EventProps';
import { StyleProps } from './topics/props/StyleProps';

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
			<ArgEventProps handleClick={(event, id) =>console.log(event, id)} />
			<br />
			<InputEventProps value='' handleChange={(event) => console.log(event)} />

			<StyleProps styles={{border: '1px solid', color: 'red'}} />

			{/* hooks */}
			<UseState />

			<ThemeProvider>
				<ThemeBox />
			</ThemeProvider>

			<UserProvider>
				<UserBox />
			</UserProvider>
		</>
	);
}

export default App;
