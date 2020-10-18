/*
 * @Copyright ParanoiA
 * @Created: 10/18/20, 4:45 PM
 * @Date : 2020.
 * @author : M.ALi Kheiry
 *
 *     /\_/\
 *   =( °w° )=       Meow
 *     )   (  //
 *    (__ __)//
 */

import React, {useState} from 'react';
import {FaTrashAlt} from 'react-icons/fa';
import {useProjectsValue, useSelectedProjectValue} from "../context";
import {firebase} from "../firebase";

export const IndividualProject = ({project}) => {
	const [showConfirm, setShowConfirm] = useState(false);
	const {projects, setProjects} = useProjectsValue();
	const {serSelectedProjects} = useSelectedProjectValue();
	
	const deleteProject = docId => {
		firebase
			.firestore()
			.collection('projects')
			.doc(docId)
			.delete()
			.then(() => {
				setProjects([...projects]);
				serSelectedProjects('INBOX');
			});
	};
	return (
		<>
			<span className="sidebar__dot">•</span>
			<span className="sidebar__project-name">{project.name}</span>
			<span className="sidebar__project-delete"
			      data-testid="delete-project"
			      onKeyDown={() => setShowConfirm(!showConfirm)}
			      onClick={() => setShowConfirm(!showConfirm)}>
			<FaTrashAlt/>
				{showConfirm && (
					<div className="project-delete-modal">
						<div className="project-delete-modal__inner">
							<p>Are you sure you want to delete this project?</p>
							<button
								type="button"
								onClick={() => deleteProject(project.docId)}>
								Delete
								<span onClick={() => setShowConfirm(!showConfirm)}>
								Cancel
								</span>
							</button>
						</div>
					</div>
				)}
			</span>
		</>
	);
};