import React, { Component } from 'react';
import './ModalBase.scss';

class ModalBase extends Component {

	render() {
		const {
			header,
			text,
			textConfirm,
			bgColorHeader,
			bgColorBody,
			bgColorFooter,
			closeButton,
			action,
			onClose
		} = this.props;

		return (
			<div
				className="wrapper"
				onClick={onClose}
			>
				<div
					className="modal"
					onClick={(e) => e.stopPropagation()}
				>
					<div
						className="modal-header"
						style={{ backgroundColor: bgColorHeader }}
					>
						<h5 className="modal-title">
							{header}
						</h5>
						{closeButton &&
							<span
								className="close"
								onClick={onClose}
							>
								&times;
                     </span>
						}
					</div>
					<div
						className="modal-body"
						style={{ backgroundColor: bgColorBody }}
					>
						<p
							className="text-modal">
							{text}
						</p>
						<p>
							{textConfirm}
						</p>
					</div>
					<div
						className="modal-footer"
						style={{ backgroundColor: bgColorFooter }}
					>
						{action[0]}
						{action[1]}
					</div>
				</div>
			</div>
		)
	}
}

export default ModalBase;