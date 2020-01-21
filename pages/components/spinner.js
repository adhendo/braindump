import {css} from "@emotion/core";
import {Component} from "react";
import DotLoader from "react-spinners/DotLoader";

const override = css`
	display: block;
	margin: 0 auto;
	border-color: red;
`;

class Spinner extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true
		};
	}

	render() {
		return (
			<div className="sweet-loading">
				<DotLoader
					css={override}
					size={50}
					//size={"150px"} this also works
					color={"#123abc"}
					loading={this.state.loading}
				/>
			</div>
		);
	}
}

export default Spinner;
