/*
 * @Copyright ParanoiA
 * @Created: 10/10/20, 1:28 PM
 * @Date : 2020.
 * @author : M.ALi Kheiry
 *
 *     /\_/\
 *   =( °w° )=       Meow
 *     )   (  //
 *    (__ __)//
 */

import React from "react";
import {firebase} from "../firebase";

export const Checkbox = ({id}) => {
	const archiveTasks = () => {
		firebase
			.firestore()
			.collection('tasks')
			.doc(id)
			.update({
				archived: true,
			});
	};
	return (
		<div className="checkbox-holder"
		     data-testid="checkbox-action"
		     onClick={() => archiveTasks()}>
			<span className="checkbox"/>
		</div>
	)
}
