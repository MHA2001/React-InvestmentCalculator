import { useState } from 'react';

export default function UserInputs({ onChangeInput, userInputs }) {
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
						value={userInputs.initialInvestment}
						onChange={onChangeInput}
					/>
				</p>
				<p>
					<label htmlFor='annualInvestment'>Annual Investment</label>
					<input
						type='number'
						required
						name='annualInvestment'
						id='annualInvestment'
						value={userInputs.annualInvestment}
						onChange={onChangeInput}
					/>
				</p>
				<p>
					<label htmlFor='expectedReturn'>Expected Return</label>
					<input
						type='number'
						required
						name='expectedReturn'
						id='expectedReturn'
						value={userInputs.expectedReturn}
						onChange={onChangeInput}
					/>
				</p>
				<p>
					<label htmlFor='duration'>Duration</label>
					<input
						type='number'
						required
						name='duration'
						id='duration'
						value={userInputs.duration}
						onChange={onChangeInput}
					/>
				</p>
			</div>
		</section>
	);
}
