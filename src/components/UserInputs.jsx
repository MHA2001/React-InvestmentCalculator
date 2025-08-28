import { useState } from 'react';

export default function UserInput() {
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
	return (
		<section id='user-input'>
			<div className='input-group'>
				<p>
					<label htmlFor='initialInvestment'>Initial Investment</label>
					<input
						type='number'
						required
						name='initialInvestment'
						id='initialInvestment'
						value={inputs.initialInvestment}
						onChange={handleInputChange}
					/>
				</p>
				<p>
					<label htmlFor='annualInvestment'>Annual Investment</label>
					<input
						type='number'
						required
						name='annualInvestment'
						id='annualInvestment'
						value={inputs.annualInvestment}
						onChange={handleInputChange}
					/>
				</p>
				<p>
					<label htmlFor='expectedReturn'>Expected Return</label>
					<input
						type='number'
						required
						name='expectedReturn'
						id='expectedReturn'
						value={inputs.expectedReturn}
						onChange={handleInputChange}
					/>
				</p>
				<p>
					<label htmlFor='duration'>Duration</label>
					<input
						type='number'
						required
						name='duration'
						id='duration'
						value={inputs.duration}
						onChange={handleInputChange}
					/>
				</p>
			</div>
		</section>
	);
}
