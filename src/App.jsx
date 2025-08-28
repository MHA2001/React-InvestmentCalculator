import UserInputs from './components/UserInputs';
import { useState } from 'react';
export default function App() {
	const [inputs, setInputs] = useState({
		initialInvestment: 0,
		annualInvestment: 0,
		expectedReturn: 0,
		duration: 0,
	});

	function handleInputChange(e) {
		const inputIdentifier = e.target.name;
		const newValue = e.target.value > 0 ? e.target.value : 0;

		setInputs((prevInput) => {
			return {
				...prevInput,
				[inputIdentifier]: newValue,
			};
		});
	}

	return <UserInputs onChangeInput={handleInputChange} userInputs={inputs} />;
}
