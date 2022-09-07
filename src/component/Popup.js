import '../Style/popup.css';

const Popup = ({ content, handleClose }) => {
	return (
		<div className="box">
			<div className="box-child">
				<div onClick={handleClose} className="close">
					x
				</div>
				<div>{content}</div>
			</div>
		</div>
	);
};

export default Popup;
