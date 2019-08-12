import React from 'react';
import { withTranslation } from 'react-i18next';
//style css
const wrapper = {
	height: '100vh'
}
const icon = {
	width: '150px',
	height: '150px',
	backgroundColor: '#eef1f2',
	margin: '32px auto',
	borderRadius: '50%',
	padding: '39px'
}

const txtNoDoc={
	fontSize: '16px',
	fontWeight: '500',
	fontStyle: 'normal',
	fontStretch: 'normal',
	lineHeight: '1.5',
	letterSpacing: '0.15px',
	textAlign: 'center',
	color: '#232731'
}

const NoDocument = ({t}) => (
	<div style={wrapper}>
		<div style={icon}>
			<div className="imgNoDocument"></div>
		</div>
		<p style={txtNoDoc}>{t("txtNoDoc")}</p>
	</div>
)

export default withTranslation() (NoDocument);