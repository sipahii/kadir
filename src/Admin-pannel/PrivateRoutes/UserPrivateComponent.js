import React from "react";
import getPermissions from "../../Admin-pannel/utils/checkTokenExp";

const UserPrivateComponent = ({ permission, children }) => {
	const permissions = getPermissions();

	if (permissions?.includes(permission)) {
		return <>{children}</>;
	} else {
		return <>{children}</>;

	}
};

export default UserPrivateComponent