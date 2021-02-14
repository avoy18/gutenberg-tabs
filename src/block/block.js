/* eslint-disable no-alert, no-console */

/**
 * BLOCK: anton-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import "./editor.scss";
import "./style.scss";
import { TextareaControl } from '@wordpress/components';
import { Button } from "@wordpress/components";
import { PanelBody } from "@wordpress/components";
import { Card, CardBody, CardDivider } from "@wordpress/components";

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType("cgb/block-anton-blocks", {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __("anton-blocks - CGB Block"), // Block title.
	icon: "shield", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: "common", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__("anton-blocks — CGB Block"),
		__("CGB Example"),
		__("create-guten-block"),
	],
	attributes: {
		tabs: {
			type: "array",
			default: [
				{
					title: "",
					text: ""
				}
			],
		},
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: (props) => {
		// Creates a <p class='wp-block-cgb-block-anton-blocks'></p>.
		// console.log("this runs");

		// const renderTabs = function () {
		// 	console.log("********************redner poshel");
		// 	let allTabsHTML = [];
			
		// 		props.attributes.tabs.map((tab, i) => {
		// 			const titleID = i + "_title";
		// 			const textID = i + "_text";
		// 			allTabsHTML[i] = (
		// 				<div key={i}>
		// 					<CardBody>
		// 						<div className="form-group">
		// 							<label htmlFor={titleID}>Title</label>
		// 							<br />
		// 							<input
		// 								id={titleID}
		// 								name={titleID}
		// 								type="text"
		// 								// value={tab.title}
		// 							/>
		// 						</div>
		// 						<div className="form-group">
		// 							<label htmlFor={textID}>Text</label>
		// 							<br />
		// 							<textarea name={textID} id={textID} cols="30" rows="10">
		// 								{tab.text}
		// 							</textarea>
		// 						</div>
		// 						<Button 
		// 							onClick={() => removeNewTab(i)} isTertiary>
		// 							Remove
		// 						</Button>
		// 					</CardBody>
		// 					<CardDivider />
		// 				</div>
		// 			);
		// 		});

		// 	props.setAttributes({
		// 		tabHTML: allTabsHTML,
		// 	});
		// 	console.log('=======')
		// 	console.log(props.attributes.tabs);
		// 	console.log(props.tabHTML);
		// };
		

		const addNewTab = function () {
			console.log('Add')
			if (props.attributes.tabs) {

				let newTabs = [...props.attributes.tabs];

				newTabs.push({
					title: "",
					text: ""
				});

				props.setAttributes({
					tabs: newTabs,
				});
				console.log(props.attributes.tabs)
				// renderTabs();
				
			}
		};

		const removeNewTab = function (index) {

			if (props.attributes.tabs) {
				let newTabs = [...props.attributes.tabs];

				newTabs = props.attributes.tabs.splice(index, 1);

				console.log('===New Tabs v=====')
				console.log(newTabs)

				props.setAttributes({
					tabs: newTabs,
				});
			}
			
			// renderTabs();
	
		};

		const updateField = function(index, field, value) {
			console.log(index, field, value)
		}

		return (
			<div>
				<PanelBody title={__("Tabs")}>
					<Card>
						{ 
						
						props.attributes.tabs.map((tab, i) => {
							const titleID = i + "_title";
							const textID = i + "_text";
							return (
								<div key={i}>
									<CardBody>
										<div className="form-group">
											<label htmlFor={titleID}>Title</label>
											<br />
											<input
												id={titleID}
												name={titleID}
												type="text"
												// value={tab.title}
											/>
										</div>
										<div className="form-group">
											<label htmlFor={textID}>Text</label>
											<br />
											<textarea 
											name={textID} 
											id={textID} 
											onblur={ (e) => { updateField(i, 'text', ) } }
											cols="30" 
											rows="10">
												{tab.text}
											</textarea>
										</div>
										<Button 
											onClick={() => removeNewTab(i)} isTertiary>
											Remove
										</Button>
									</CardBody>
									<CardDivider />
								</div>
							);
						})
						
						}
					</Card>
					<Button isPrimary onClick={  addNewTab }>
						{__("Add New")}
					</Button>
				</PanelBody>
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: (props) => {
		return null;
	},
});
