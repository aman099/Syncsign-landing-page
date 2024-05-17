import { TemplateEngine } from "./templateEngine.js";
import { JsonToHtml } from "./jsonToHtml.js";

let docpageData = {};

const docPageTemplate = {
	tag: "div",
	children: [
		{
			tag: "div",
			attributes: {
				class: "floating-btn",
			},
			children: [
				{
					tag: "button",
					attributes: {
						class: "fab-btn",
					},
					children: [
						{
							tag: "a",
							attributes: {
								href: "#home-sweet",
							},
							children: [
								{
									tag: "i",
									attributes: {
										class: "fa-solid fa-chevron-up",
									},
								},
							],
						},
					],
				},
			],
		},
		// {
		// 	tag: "div",
		// 	attributes: {
		// 		class: "navbar",
		// 	},
		// 	children: [
		// 		{
		// 			tag: "div",
		// 			attributes: {
		// 				class: "nav-container container is-fullhd",
		// 			},
		// 			children: [
		// 				{
		// 					tag: "nav",
		// 					attributes: {
		// 						id: "nav",
		// 					},
		// 					children: [
		// 						{
		// 							tag: "header",
		// 							children: [
		// 								{
		// 									tag: "h2",
		// 									content: "SyncSign",
		// 								},
		// 							],
		// 						},
		// 						{
		// 							tag: "input",
		// 							attributes: {
		// 								type: "checkbox",
		// 								id: "nav-check",
		// 							},
		// 						},
		// 						{
		// 							tag: "div",
		// 							attributes: {
		// 								class: "nav-btn",
		// 							},
		// 							children: [
		// 								{
		// 									tag: "label",
		// 									attributes: {
		// 										for: "nav-check",
		// 									},
		// 									children: [
		// 										{
		// 											tag: "span",
		// 										},
		// 										{
		// 											tag: "span",
		// 										},
		// 										{
		// 											tag: "span",
		// 										},
		// 									],
		// 								},
		// 							],
		// 						},
		// 						{
		// 							tag: "ul",
		// 							children: [
		// 								{
		// 									tag: "li",
		// 									children: [
		// 										{
		// 											tag: "a",
		// 											attributes: {
		// 												href: "#",
		// 											},
		// 											content: "Products",
		// 										},
		// 									],
		// 								},
		// 								{
		// 									tag: "li",
		// 									children: [
		// 										{
		// 											tag: "a",
		// 											attributes: {
		// 												href: "#",
		// 											},
		// 											content: "Solutions",
		// 										},
		// 									],
		// 								},
		// 								{
		// 									tag: "li",
		// 									children: [
		// 										{
		// 											tag: "a",
		// 											attributes: {
		// 												href: "#",
		// 											},
		// 											content: "How it works",
		// 										},
		// 									],
		// 								},
		// 								{
		// 									tag: "li",
		// 									children: [
		// 										{
		// 											tag: "a",
		// 											attributes: {
		// 												href: "#",
		// 											},
		// 											content: "Resources",
		// 										},
		// 									],
		// 								},
		// 								{
		// 									tag: "li",
		// 									children: [
		// 										{
		// 											tag: "a",
		// 											attributes: {
		// 												href: "#",
		// 											},
		// 											content: "Contact",
		// 										},
		// 									],
		// 								},
		// 								{
		// 									tag: "li",
		// 									children: [
		// 										{
		// 											tag: "a",
		// 											attributes: {
		// 												href: "#",
		// 											},
		// 											content: "Shop",
		// 										},
		// 									],
		// 								},
		// 							],
		// 						},
		// 					],
		// 				},
		// 			],
		// 		},
		// 	],
		// },
		{
			tag: "div",
			attributes: {
				class: "navbar",
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "nav-container container is-fullhd",
					},
					children: [
						{
							tag: "nav",
							attributes: {
								id: "nav",
							},
							children: [
								{
									tag: "header",
									children: [
										{
											tag: "h2",
											content: "SyncSign",
										},
									],
								},
								{
									tag: "input",
									attributes: {
										type: "checkbox",
										id: "nav-check",
									},
								},
								{
									tag: "div",
									attributes: {
										class: "nav-btn",
									},
									children: [
										{
											tag: "label",
											attributes: {
												for: "nav-check",
											},
											children: [
												{
													tag: "span",
												},
												{
													tag: "span",
												},
												{
													tag: "span",
												},
											],
										},
									],
								},
								{
									tag: "ul",
									children: [
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Products",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Solutions",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "How it works",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Resources",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Contact",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Shop",
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "hero",
				id: "home-sweet",
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "hero-container container is-fullhd",
					},
					children: [
						{
							tag: "div",
							attributes: {
								id: "hero",
								class: "hero-section stars",
							},
							children: [
								{
									tag: "h1",
									attributes: {
										class: "hero-title",
									},
									content: "ePaper Display",
								},
								{
									tag: "p",
									attributes: {
										class: "hero-subtitle",
									},
									content: "Effortless Installation Digital Signage",
								},
								{
									tag: "ul",
									attributes: {
										class: "hero-ul",
									},
									children: [
										{
											tag: "li",
											children: [
												{
													tag: "span",
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-solid fa-arrows-rotate",
															},
														},
													],
												},
												{
													content: " Sync with Calendars or Web Services",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "span",
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-solid fa-battery-full",
															},
														},
													],
												},
												{
													content: " 365-Day Battery Life",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "span",
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-solid fa-screwdriver-wrench",
															},
														},
													],
												},
												{
													content: " Self-Install in Minutes",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "span",
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-solid fa-tv",
															},
														},
													],
												},
												{
													content: " Flexible Templates & Open API/SDK",
												},
											],
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "btn-container",
									},
									children: [
										{
											tag: "button",
											attributes: {
												class: "primary-btn",
											},
											content: "Learn More ",
											children: [
												{
													tag: "span",
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-solid fa-arrow-right",
															},
														},
													],
												},
											],
										},
									],
								},
							],
						},
						{
							tag: "div",
							attributes: {
								class: "hero-right",
							},
							children: [
								{
									tag: "img",
									attributes: {
										src: "./assets/computers.png",
										alt: "Computers",
									},
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "synchronised",
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "synchronised-section container is-fullhd",
					},
					children: [
						{
							tag: "section",
							attributes: {
								id: "sync",
							},
							children: [
								{
									tag: "h2",
									content: "Synchronises with Calendars",
								},
								{
									tag: "div",
									attributes: {
										class: "calendar-container",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "calender-subcontainer-1",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "calender calender-1",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/calendar-1.png",
																alt: "",
															},
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "calender calender-1",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/calendar-2.png",
																alt: "",
															},
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "calender calender-1",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/calendar-3.png",
																alt: "",
															},
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "calender-subcontainer-2",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "calender calender-1",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/calendar-4.png",
																alt: "",
															},
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "calender calender-1",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/calendar-5.png",
																alt: "",
															},
														},
													],
												},
											],
										},
									],
								},
								{
									tag: "p",
									attributes: {
										class: "padd-lr",
									},
									content:
										"SyncSign has integrations for Google & Outlook calendars, or NextCloud calendars. Employees can make reservations right from the familiar desktop software, web browser or mobile apps, making it easy to schedule a room on the fly while encouraging team collaboration.",
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "clarity",
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "clarity-container container is-fullhd",
					},
					children: [
						{
							tag: "section",
							attributes: {
								id: "clari",
								class: "padd-lr",
							},
							children: [
								{
									tag: "div",
									attributes: {
										class: "clari-left",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "clari-heading",
											},
											children: [
												{
													tag: "h2",
													content: "Bring Clarity to Your Workplace",
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "clari-para",
											},
											children: [
												{
													tag: "p",
													content:
														"SyncSign e-paper display brings a whole new way to <strong>visualize daily schedule</strong> of your workplaces.",
												},
												{
													tag: "p",
													content:
														"It blends enterprise-grade hardware with proprietary, cloud-based software. It delivers work-space insights at your fingertips — all to help <strong>optimize employee productivity and work-space efficiency</strong>.",
												},
											],
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "clari-right",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "clari-img",
											},
											children: [
												{
													tag: "img",
													attributes: {
														src: "./assets/clarity-workspace.jpg",
														alt: "Workspace",
													},
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "highly-customizable",
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "highly-customizable-container container is-fullhd",
					},
					children: [
						{
							tag: "section",
							attributes: {
								id: "highly-cust",
							},
							children: [
								{
									tag: "h2",
									content: "Highly Customizable",
								},
								{
									tag: "ul",
									children: [
										{
											tag: "li",
											content: "Select the layout templates we offered.",
										},
										{
											tag: "li",
											content:
												"Replace our regular content with custom information on display.",
										},
										{
											tag: "li",
											content:
												"Customize your corporate branding or logo across all the devices.",
										},
										{
											tag: "li",
											content: "The open API/SDK brings more possibilities.",
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "highly-images",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "img",
											},
											children: [
												{
													tag: "img",
													attributes: {
														src: "./assets/highly-1.png",
														alt: "",
													},
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "img",
											},
											children: [
												{
													tag: "img",
													attributes: {
														src: "./assets/highly-2.png",
														alt: "",
													},
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "img",
											},
											children: [
												{
													tag: "img",
													attributes: {
														src: "./assets/highly-3.png",
														alt: "",
													},
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "img",
											},
											children: [
												{
													tag: "img",
													attributes: {
														src: "./assets/highly-4.png",
														alt: "",
													},
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "eco-friendly",
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "eco-friendly-container container is-fullhd",
					},
					children: [
						{
							tag: "section",
							attributes: {
								id: "eco",
								class: "padd-lr",
							},
							children: [
								{
									tag: "h2",
									content: "Eco-friendly & Sustainable",
								},
								{
									tag: "div",
									attributes: {
										class: "eco-features",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "feature feature-1",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "icon",
													},
													children: [
														{
															tag: "span",
															children: [
																{
																	tag: "i",
																	attributes: {
																		class: "fa-solid fa-ethernet",
																	},
																},
															],
														},
													],
												},
												{
													tag: "p",
													attributes: {
														class: "icon-title",
													},
													content: "True Wireless",
												},
												{
													tag: "p",
													attributes: {
														class: "icon-desc",
													},
													content: "2.4GHz two-way communication, no cables required.",
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "feature feature-2",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "icon",
													},
													children: [
														{
															tag: "span",
															children: [
																{
																	tag: "i",
																	attributes: {
																		class: "fa-solid fa-battery-half",
																	},
																},
															],
														},
													],
												},
												{
													tag: "p",
													attributes: {
														class: "icon-title",
													},
													content: "Battery Powered",
												},
												{
													tag: "p",
													attributes: {
														class: "icon-desc",
													},
													content:
														"At least 1-year battery life, benefits from the e-ink screen and new connectivity technology.",
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "feature feature-3",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "icon",
													},
													children: [
														{
															tag: "span",
															children: [
																{
																	tag: "i",
																	attributes: {
																		class: "fa-solid fa-leaf",
																	},
																},
															],
														},
													],
												},
												{
													tag: "p",
													attributes: {
														class: "icon-title",
													},
													content: "Green Technology",
												},
												{
													tag: "p",
													attributes: {
														class: "icon-desc",
													},
													content:
														"Eco-friendly and sustainable. Get rid of any paper or printing.",
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "feature feature-4",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "icon",
													},
													children: [
														{
															tag: "span",
															children: [
																{
																	tag: "i",
																	attributes: {
																		class: "fa-solid fa-coins",
																	},
																},
															],
														},
													],
												},
												{
													tag: "p",
													attributes: {
														class: "icon-title",
													},
													content: "Lowest TCO",
												},
												{
													tag: "p",
													attributes: {
														class: "icon-desc",
													},
													content:
														"Reduce total cost of ownership by eliminating installation and maintenance fee.​",
												},
											],
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "battery-life",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "battery-life-left",
											},
											children: [
												{
													tag: "h4",
													content: "Battery Life Comparision",
												},
												{
													tag: "div",
													attributes: {
														class: "battery-compare",
													},
													children: [
														{
															tag: "p",
															content: "SyncSign",
														},
														{
															tag: "div",
															attributes: {
																class: "progress-bar progress-bar-primary",
															},
															children: [
																{
																	tag: "div",
																	attributes: {
																		class: "progress-bar-fill progress-bar-fill-1",
																	},
																	content: "> 365 days",
																},
															],
														},
														{
															tag: "p",
															content: "Other (iPad, Tablet)",
														},
														{
															tag: "div",
															attributes: {
																class: "progress-bar progress-bar-primary",
															},
															children: [
																{
																	tag: "div",
																	attributes: {
																		class: "progress-bar-fill progress-bar-fill-2",
																	},
																	content: "0.5 day",
																},
															],
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "battery-life-right",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "battery-display",
													},
													children: [
														{
															tag: "h4",
															content: "Sync Display",
														},
														{
															tag: "div",
															attributes: {
																class: "contents",
															},
															children: [
																{
																	tag: "div",
																	attributes: {
																		class: "content",
																	},
																	children: [
																		{
																			tag: "div",
																			attributes: {
																				class: "content-right",
																			},
																			children: [
																				{
																					tag: "h5",
																					content: "E-Paper Screen",
																				},
																				{
																					tag: "p",
																					content: "0.0001 Watt",
																				},
																			],
																		},
																		{
																			tag: "div",
																			attributes: {
																				class: "content-left",
																			},
																			children: [
																				{
																					tag: "span",
																					children: [
																						{
																							tag: "i",
																							attributes: {
																								class: "fa-solid fa-leaf",
																							},
																						},
																					],
																				},
																			],
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "content",
																	},
																	children: [
																		{
																			tag: "div",
																			attributes: {
																				class: "content-right",
																			},
																			children: [
																				{
																					tag: "h5",
																					content: "802.15.4 Mesh",
																				},
																				{
																					tag: "p",
																					content: "0.0005 Watt",
																				},
																			],
																		},
																		{
																			tag: "div",
																			attributes: {
																				class: "content-left",
																			},
																			children: [
																				{
																					tag: "span",
																					children: [
																						{
																							tag: "i",
																							attributes: {
																								class: "fa-solid fa-braille",
																							},
																						},
																					],
																				},
																			],
																		},
																	],
																},
															],
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "battery-other",
													},
													children: [
														{
															tag: "h4",
															content: "Other (iPad, Tablet)",
														},
														{
															tag: "div",
															attributes: {
																class: "contents",
															},
															children: [
																{
																	tag: "div",
																	attributes: {
																		class: "content content-2",
																	},
																	children: [
																		{
																			tag: "div",
																			attributes: {
																				class: "content-right",
																			},
																			children: [
																				{
																					tag: "h5",
																					content: "LCD/LED Screen",
																				},
																				{
																					tag: "p",
																					content: "2 Watt",
																				},
																			],
																		},
																		{
																			tag: "div",
																			attributes: {
																				class: "content-left",
																			},
																			children: [
																				{
																					tag: "span",
																					children: [
																						{
																							tag: "i",
																							attributes: {
																								class: "fa-solid fa-plug",
																							},
																						},
																					],
																				},
																			],
																		},
																	],
																},
																{
																	tag: "div",
																	attributes: {
																		class: "content content-2",
																	},
																	children: [
																		{
																			tag: "div",
																			attributes: {
																				class: "content-right",
																			},
																			children: [
																				{
																					tag: "h5",
																					content: "802.11 Wi-Fi",
																				},
																				{
																					tag: "p",
																					content: "0.5 Watt",
																				},
																			],
																		},
																		{
																			tag: "div",
																			attributes: {
																				class: "content-left",
																			},
																			children: [
																				{
																					tag: "span",
																					children: [
																						{
																							tag: "i",
																							attributes: {
																								class: "fa-solid fa-wifi",
																							},
																						},
																					],
																				},
																			],
																		},
																	],
																},
															],
														},
													],
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "built-with",
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "built-with-container container is-fullhd",
					},
					children: [
						{
							tag: "section",
							attributes: {
								id: "built-with",
								class: "padd-lr",
							},
							children: [
								{
									tag: "div",
									attributes: {
										class: "built-with-heading",
									},
									children: [
										{
											tag: "h2",
											content: "Built with Latest IoT Technology",
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "built-with-content",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "grid-container",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "grid grid-1",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "icon-cont",
															},
															children: [
																{
																	tag: "span",
																	children: [
																		{
																			tag: "i",
																			attributes: {
																				class: "fa-solid fa-braille",
																			},
																		},
																	],
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "title-cont",
															},
															content: "Low Power Mesh Network",
														},
														{
															tag: "ul",
															children: [
																{
																	tag: "li",
																	content:
																		"SyncSign doesn't use the traditional Wi-Fi connection in order to save power.",
																},
																{
																	tag: "li",
																	content:
																		"Incorporate power saving mechanisms. Each display keeps polling Hub for new information every 10 seconds and goes to deep sleep in between.",
																},
															],
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "grid grid-2",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "icon-cont",
															},
															children: [
																{
																	tag: "span",
																	children: [
																		{
																			tag: "i",
																			attributes: {
																				class: "fa-solid fa-building",
																			},
																		},
																	],
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "title-cont",
															},
															content: "Better Coverage",
														},
														{
															tag: "ul",
															children: [
																{
																	tag: "li",
																	content:
																		"SyncSign can cover 20,000 Sq. Ft. space (Concrete, masonry or brick wall may reduce its radio coverage).",
																},
																{
																	tag: "li",
																	content:
																		"Expand the coverage with more Hubs or Range Extenders.",
																},
																{
																	tag: "li",
																	content:
																		"2.4GHz ISM band usage ensures license free product deployment worldwide.",
																},
															],
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "grid grid-3",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "icon-cont",
															},
															children: [
																{
																	tag: "span",
																	children: [
																		{
																			tag: "i",
																			attributes: {
																				class: "fa-solid fa-lock",
																			},
																		},
																	],
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "title-cont",
															},
															content: "Secure System",
														},
														{
															tag: "ul",
															children: [
																{
																	tag: "li",
																	content:
																		"Only authorized nodes are allowed to join the mesh network.",
																},
																{
																	tag: "li",
																	content:
																		"All transmissions between display and hub are encrypted with AES-128.",
																},
																{
																	tag: "li",
																	content:
																		"The connection between hub and cloud server are TLSv1.3 protected.",
																},
															],
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "grid grid-4",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "icon-cont",
															},
															children: [
																{
																	tag: "span",
																	children: [
																		{
																			tag: "i",
																			attributes: {
																				class: "fa-solid fa-sitemap",
																			},
																		},
																	],
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "title-cont",
															},
															content: "Managed with Hub",
														},
														{
															tag: "ul",
															children: [
																{
																	tag: "li",
																	content: "Uplink with Ethernet or Wi-Fi.",
																},
																{
																	tag: "li",
																	content:
																		"Ultra low cost bridge between local mesh network and Internet.",
																},
																{
																	tag: "li",
																	content:
																		"Manage up to 16 individual displays in a single mesh network.",
																},
															],
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "grid grid-5",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "icon-cont",
															},
															children: [
																{
																	tag: "span",
																	children: [
																		{
																			tag: "i",
																			attributes: {
																				class: "fa-solid fa-server",
																			},
																		},
																	],
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "title-cont",
															},
															content: "On-Premise Deployment",
														},
														{
															tag: "ul",
															children: [
																{
																	tag: "li",
																	content:
																		"Mini server available for on-premises deployment(required for MS Exchange integration).",
																},
																{
																	tag: "li",
																	content:
																		"All your data is located within your in-house server provides more peace of mind.",
																},
															],
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "grid grid-6",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "icon-cont",
															},
															children: [
																{
																	tag: "span",
																	children: [
																		{
																			tag: "i",
																			attributes: {
																				class: "fa-solid fa-link",
																			},
																		},
																	],
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "title-cont",
															},
															content: "Open API / SDK",
														},
														{
															tag: "ul",
															children: [
																{
																	tag: "li",
																	content:
																		"With Hub SDK, developers can easily write Python code and deploy the application to the hub.",
																},
																{
																	tag: "li",
																	content:
																		"Integrate with IFTTT or other web services with open API.",
																},
															],
														},
													],
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "setup",
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "setup-container container is-fullhd",
					},
					children: [
						{
							tag: "section",
							attributes: {
								id: "setup",
								class: "padd-lr",
							},
							children: [
								{
									tag: "div",
									attributes: {
										class: "setup-heading",
									},
									children: [
										{
											tag: "h2",
											content: "- Setup in Minutes -",
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "setup-para",
									},
									children: [
										{
											tag: "p",
											content:
												"SyncSign is battery-powered and truly wire-free, so it’s simple to place, position, and move within indoor environment.",
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "setup-img-cont",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "setup-img-content",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "setup-img",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/setup-1.jpg",
																alt: "",
															},
														},
													],
												},
												{
													tag: "p",
													content:
														"Step 1. Paste (or put) the SyncSign display on the sticker (or bracket), then the display will stick firm on the surface.",
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "setup-img-content",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "setup-img",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/setup-2.jpg",
																alt: "",
															},
														},
													],
												},
												{
													tag: "p",
													content:
														"Step 2. Install the mobile App, create an account, and setup the SyncSign IoT Hub",
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "setup-img-content",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "setup-img",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/setup-3.jpg",
																alt: "",
															},
														},
													],
												},
												{
													tag: "p",
													content:
														"Step 3. Sign in your calendar administrator account and bind each display to the calendar. Everything is ready after binding.",
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "specifications",
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "specifications-container container is-fullhd",
					},
					children: [
						{
							tag: "section",
							attributes: {
								id: "specs",
								class: "padd-lr",
							},
							children: [
								{
									tag: "div",
									attributes: {
										class: "specs-heading",
									},
									children: [
										{
											tag: "h2",
											content: "- Specifications -",
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "specs-main-hidden",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "table table-1-cont",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "table-image",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/specs-1.jpg",
																alt: "",
															},
														},
													],
												},
												{
													tag: "table",
													children: [
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Frame Colors",
																},
																{
																	tag: "td",
																	children: [
																		{
																			tag: "span",
																		},
																	],
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Screen Colors",
																},
																{
																	tag: "td",
																	children: [
																		{
																			tag: "span",
																		},
																		{
																			tag: "span",
																		},
																		{
																			tag: "span",
																		},
																	],
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Viewing Angle",
																},
																{
																	tag: "td",
																	content: "Close to 180",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Resolution",
																},
																{
																	tag: "td",
																	content: "800 * 480",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Active Area",
																},
																{
																	tag: "td",
																	content: "163.24 * 97.94 (mm)",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Pixel Pitch",
																},
																{
																	tag: "td",
																	content: "0.19 * 0.19 (mm)",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "DPI",
																},
																{
																	tag: "td",
																	content: "137",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Operating Temp.",
																},
																{
																	tag: "td",
																	content: "0 ~ 40 °C",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Touch Screen",
																},
																{
																	tag: "td",
																	content: "N/A",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Battery",
																},
																{
																	tag: "td",
																	content: "4000mAh built-in rechargeable polymer",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Autonomy",
																},
																{
																	tag: "td",
																	content: "1~2 years (Depending on the usage)",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Refresh Count",
																},
																{
																	tag: "td",
																	content: "> 8,000 times per charge",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Signal Booster",
																},
																{
																	tag: "td",
																	content: "Built-in, up to 20dBm",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Max. Distance",
																},
																{
																	tag: "td",
																	content: "~ 50m / 160ft",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Charging Power",
																},
																{
																	tag: "td",
																	content: "DC 5V / 1.5A, USB Type C",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Connectivity",
																},
																{
																	tag: "td",
																	content: "2.4GHz Wi-Fi + 802.15.4 ( Dual mode )",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "SKU",
																},
																{
																	tag: "td",
																	content:
																		"D75C-LEWI-RED (Red+Black+White) \n D75C-LEWI-YELLOW (Yellow+Black+White)",
																},
															],
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "table-cont table-2-cont",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "table-image",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/specs-2.jpg",
																alt: "",
															},
														},
													],
												},
												{
													tag: "table",
													children: [
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Shell Colors",
																},
																{
																	tag: "td",
																	children: [
																		{
																			tag: "span",
																		},
																	],
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Screen Colors",
																},
																{
																	tag: "td",
																	children: [
																		{
																			tag: "span",
																		},
																		{
																			tag: "span",
																		},
																		{
																			tag: "span",
																		},
																	],
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Viewing Angle",
																},
																{
																	tag: "td",
																	content: "Close to 180",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Resolution",
																},
																{
																	tag: "td",
																	content: "400 * 300",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Active Area",
																},
																{
																	tag: "td",
																	content: "84.80 * 63.60 (mm)",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Pixel Pitch",
																},
																{
																	tag: "td",
																	content: "0.21 * 0.21 (mm)",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "DPI",
																},
																{
																	tag: "td",
																	content: "119",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Working Temp.",
																},
																{
																	tag: "td",
																	content: "0 ~ 50 °C",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Touch Screen",
																},
																{
																	tag: "td",
																	content: "N/A",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Battery",
																},
																{
																	tag: "td",
																	content: "850mAh Li-Polymer Battery; Rechargeable",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Battery Life",
																},
																{
																	tag: "td",
																	content: "1 year (Depending on the usage)",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Autonomy",
																},
																{
																	tag: "td",
																	content: "1~2 years (Depending on the usage)",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Refresh Count",
																},
																{
																	tag: "td",
																	content: "> 8,000 times per charge",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Signal Booster",
																},
																{
																	tag: "td",
																	content: "Built-in, up to 20dBm",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Max. Distance",
																},
																{
																	tag: "td",
																	content: "~ 20m / 65ft",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Charging Power",
																},
																{
																	tag: "td",
																	content: "Magnetic charging DC 5V 1A",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Connectivity",
																},
																{
																	tag: "td",
																	content: "Bluetooth Low Energy",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "SKU",
																},
																{
																	tag: "td",
																	content: "D42C-LE-RED (Red+Black+White)",
																},
															],
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "table-cont table-3-cont",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "table-image",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/specs-3.jpg",
																alt: "",
															},
														},
													],
												},
												{
													tag: "table",
													children: [
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Shell Colors",
																},
																{
																	tag: "td",
																	children: [
																		{
																			tag: "span",
																		},
																	],
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Screen Colors",
																},
																{
																	tag: "td",
																	children: [
																		{
																			tag: "span",
																		},
																		{
																			tag: "span",
																		},
																		{
																			tag: "span",
																		},
																	],
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Viewing Angle",
																},
																{
																	tag: "td",
																	content: "Close to 180",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Resolution",
																},
																{
																	tag: "td",
																	content: "296 * 128",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Active Area",
																},
																{
																	tag: "td",
																	content: "66.85 * 29.10 (mm)",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Pixel Pitch",
																},
																{
																	tag: "td",
																	content: "0.23 * 0.23 (mm)",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "DPI",
																},
																{
																	tag: "td",
																	content: "112",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Working Temp.",
																},
																{
																	tag: "td",
																	content: "0 ~ 50 °C",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Touch Screen",
																},
																{
																	tag: "td",
																	content: "N/A",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Battery",
																},
																{
																	tag: "td",
																	content: "2 x AA battery, replaceable",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Battery Life",
																},
																{
																	tag: "td",
																	content: "1.5-2 years (Depending on the usage)",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Refresh Count",
																},
																{
																	tag: "td",
																	content: "> 60,000 times",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Signal Booster",
																},
																{
																	tag: "td",
																	content: "N/A",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Max. Distance",
																},
																{
																	tag: "td",
																	content: "~ 20m / 65ft",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Charging Power",
																},
																{
																	tag: "td",
																	content: "DC 5V / 0.5A, Micro USB ",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "Connectivity",
																},
																{
																	tag: "td",
																	content: "802.15.4 only",
																},
															],
														},
														{
															tag: "tr",
															children: [
																{
																	tag: "td",
																	content: "SKU",
																},
																{
																	tag: "td",
																	content: "D29C-LE-RED (Red+Black+White)",
																},
															],
														},
													],
												},
											],
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "specs-main",
									},
									children: [
										{
											tag: "ul",
											attributes: {
												class: "column column-1",
											},
											children: [
												{
													tag: "li",
													attributes: {
														class: "hidden-li",
													},
													content: "Enna Poda",
												},
												{
													tag: "li",
													attributes: {
														class: "hidden-li",
													},
													content: "Kemon aachhe",
												},
												{
													tag: "li",
													attributes: {
														class: "hidden-li",
													},
													content: "How are you",
												},
												{
													tag: "li",
													attributes: {
														class: "hidden-li",
													},
													content: "kaise ho aap",
												},
												{
													tag: "li",
													attributes: {
														class: "hidden-li",
													},
													content: "udhar ja",
												},
												{
													tag: "li",
													attributes: {
														class: "heightInc",
													},
													content: "Frame Color",
												},
												{
													tag: "li",
													attributes: {
														class: "heightInc2",
													},
													content: "Screen Colors",
												},
												{
													tag: "li",
													content: "Viewing Angle",
												},
												{
													tag: "li",
													content: "Resolution",
												},
												{
													tag: "li",
													content: "Active Area",
												},
												{
													tag: "li",
													content: "Pixel Pitch",
												},
												{
													tag: "li",
													content: "DPI",
												},
												{
													tag: "li",
													content: "Operating Temp.",
												},
												{
													tag: "li",
													content: "Touch Screen",
												},
												{
													tag: "li",
													attributes: {
														class: "heightInc3",
													},
													content: "Battery",
												},
												{
													tag: "li",
													attributes: {
														class: "heightInc3",
													},
													content: "Autonomy",
												},
												{
													tag: "li",
													content: "Refresh Count",
												},
												{
													tag: "li",
													content: "Signal Booster",
												},
												{
													tag: "li",
													content: "Max. Distance",
												},
												{
													tag: "li",
													content: "Charging Power",
												},
												{
													tag: "li",
													attributes: {
														class: "heightInc3",
													},
													content: "Connectivity",
												},
												{
													tag: "li",
													attributes: {
														class: "heightInc4",
													},
													content: "SKU",
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "column column-2",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "img",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/specs-1.jpg",
																alt: "",
															},
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "title",
													},
													children: [
														{
															tag: "h4",
															content: "7.5inch",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-1 row-7inch",
													},
													children: [
														{
															tag: "span",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-2 row-7inch-2",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "subrow subrow-2_1",
															},
															children: [
																{
																	tag: "span",
																},
																{
																	tag: "span",
																},
																{
																	tag: "span",
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "subrow subrow-2_2",
															},
															children: [
																{
																	tag: "span",
																},
																{
																	tag: "span",
																},
																{
																	tag: "span",
																},
															],
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-3",
													},
													children: [
														{
															tag: "span",
															content: "Close to 180°",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-4",
													},
													children: [
														{
															tag: "span",
															content: "800 * 480",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-5",
													},
													children: [
														{
															tag: "span",
															content: "163.24 * 97.94 (mm)",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-6",
													},
													children: [
														{
															tag: "span",
															content: "0.19 * 0.19 (mm)",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-7",
													},
													children: [
														{
															tag: "span",
															content: "137",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-8",
													},
													children: [
														{
															tag: "span",
															content: "0 ~ 40 °C",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-9",
													},
													children: [
														{
															tag: "span",
															content: "N/A",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-10",
													},
													children: [
														{
															tag: "span",
															content: "4000mAh built-in rechargeable polymer",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-11",
													},
													children: [
														{
															tag: "span",
															content: "1~2 years (Depending on the usage)",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-12",
													},
													children: [
														{
															tag: "span",
															content: "> 8,000 times per charge",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-13",
													},
													children: [
														{
															tag: "span",
															content: "Built-in, up to 20dBm",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-14",
													},
													children: [
														{
															tag: "span",
															content: "~ 50m / 160ft",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-14",
													},
													children: [
														{
															tag: "span",
															content: "DC 5V / 1.5A, USB Type C",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-14",
													},
													children: [
														{
															tag: "span",
															content:
																"2.4GHz Wi-Fi + 802.15.4\n                                    ( Dual mode )",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-15",
													},
													children: [
														{
															tag: "span",
															content:
																"D75C-LEWI-RED (Red+Black+White) <br>                                D75C-LEWI-YELLOW (Yellow+Black+White)",
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "column column-3",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "img",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/specs-2.jpg",
																alt: "",
															},
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "title",
													},
													children: [
														{
															tag: "h4",
															content: "4.2 Inch",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-1 row-4inch",
													},
													children: [
														{
															tag: "span",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-2",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "subrow subrow-2_1 subrow-4inch",
															},
															children: [
																{
																	tag: "span",
																},
																{
																	tag: "span",
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "subrow subrow-2_2 subrow-4inch-2",
															},
															children: [
																{
																	tag: "span",
																},
															],
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-3",
													},
													children: [
														{
															tag: "span",
															content: "Close to 180°",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-4",
													},
													children: [
														{
															tag: "span",
															content: "400 * 300",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-5",
													},
													children: [
														{
															tag: "span",
															content: "84.80 * 63.60 (mm)",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-6",
													},
													children: [
														{
															tag: "span",
															content: "0.21 * 0.21 (mm)",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-7",
													},
													children: [
														{
															tag: "span",
															content: "119",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-8",
													},
													children: [
														{
															tag: "span",
															content: "0 ~ 50 °C",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-9",
													},
													children: [
														{
															tag: "span",
															content: "N/A",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-10",
													},
													children: [
														{
															tag: "span",
															content: "850mAh Li-Polymer Battery; Rechargeable",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-11",
													},
													children: [
														{
															tag: "span",
															content: "1 year (Depending on <br> the usage)",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-12",
													},
													children: [
														{
															tag: "span",
															content: "> 8,000 times per charge",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-13",
													},
													children: [
														{
															tag: "span",
															content: "N/A",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-14",
													},
													children: [
														{
															tag: "span",
															content: "~ 20m / 65ft",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-14",
													},
													children: [
														{
															tag: "span",
															content: "Magnetic charging DC 5V 1A",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-14",
													},
													children: [
														{
															tag: "span",
															content: "Bluetooth <br> Low Energy",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-15 heightInc4",
													},
													children: [
														{
															tag: "span",
															content: "D42C-LE-RED (Red <br>+ Black <br>+ White)",
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "column column-4",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "img",
													},
													children: [
														{
															tag: "img",
															attributes: {
																src: "./assets/specs-3.jpg",
																alt: "",
															},
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "title",
													},
													children: [
														{
															tag: "h4",
															content: "2.9inch",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-1",
													},
													children: [
														{
															tag: "span",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-2",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "subrow subrow-2_1",
															},
															children: [
																{
																	tag: "span",
																},
																{
																	tag: "span",
																},
																{
																	tag: "span",
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "subrow subrow-2_2",
															},
															children: [
																{
																	tag: "span",
																},
																{
																	tag: "span",
																},
																{
																	tag: "span",
																},
															],
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-3",
													},
													children: [
														{
															tag: "span",
															content: "Close to 180°",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-4",
													},
													children: [
														{
															tag: "span",
															content: "296 * 128",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-5",
													},
													children: [
														{
															tag: "span",
															content: "66.85 * 29.10 (mm)",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-6",
													},
													children: [
														{
															tag: "span",
															content: "0.23 * 0.23 (mm)",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-7",
													},
													children: [
														{
															tag: "span",
															content: "112",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-8",
													},
													children: [
														{
															tag: "span",
															content: "0 ~ 50 °C",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-9",
													},
													children: [
														{
															tag: "span",
															content: "N/A",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-10",
													},
													children: [
														{
															tag: "span",
															content: "2 x AA battery, <br>replaceable",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-11",
													},
													children: [
														{
															tag: "span",
															content: "1.5-2 years (Depending on the usage)",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-12",
													},
													children: [
														{
															tag: "span",
															content: "> 60,000 times",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-13",
													},
													children: [
														{
															tag: "span",
															content: "N/A",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-14",
													},
													children: [
														{
															tag: "span",
															content: "20m / 65ft",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-14",
													},
													children: [
														{
															tag: "span",
															content: "DC 5V / 0.5A, Micro USB ",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-15",
													},
													children: [
														{
															tag: "span",
															content: "802.15.4 <br> only",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "row row-15 heightInc4",
													},
													children: [
														{
															tag: "span",
															content: "D29C-LE-RED (Red <br>+ Black<br>+ White)",
														},
													],
												},
											],
										},
									],
								},
								{
									tag: "div",
									attributes: {
										class: "specs-footer",
									},
									children: [
										{
											tag: "h2",
											content: "Build for Efficiency & Certainty",
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "footer",
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "footer-container container is-fullhd",
					},
					children: [
						{
							tag: "div",
							attributes: {
								id: "foot",
								class: "padd-lr",
							},
							children: [
								{
									tag: "div",
									attributes: {
										class: "footer-grid-container",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "grid grid-1",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "foot-title",
													},
													children: [
														{
															tag: "h4",
															content: "STAY TUNED",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "input-cont",
													},
													children: [
														{
															tag: "input",
															attributes: {
																type: "text",
																placeholder: "Your Email Address",
															},
														},
														{
															tag: "button",
															attributes: {
																class: "primary-btn",
															},
															content: "SIGN UP",
														},
													],
												},
												{
													tag: "div",
													attributes: {
														class: "get-in-touch",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "get-in-title",
															},
															children: [
																{
																	tag: "h4",
																	content: "GET IN TOUCH",
																},
															],
														},
														{
															tag: "div",
															attributes: {
																class: "address",
															},
															children: [
																{
																	tag: "div",
																	attributes: {
																		class: "add add-1",
																	},
																	content:
																		"\u00a0 10 ANSON ROAD #33-17 INTERNATIONAL PLAZA SINGAPORE (079903)",
																},
																{
																	tag: "div",
																	attributes: {
																		class: "add add-2",
																	},
																	content: "\u00a0 +1 (626) 269-9019",
																},
																{
																	tag: "div",
																	attributes: {
																		class: "add add-3",
																	},
																	content: "\u00a0 info@sync-sign.com",
																},
															],
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "grid grid-2",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "foot-title",
													},
													children: [
														{
															tag: "h4",
															content: "ABOUT SYNCSIGN",
														},
														{
															tag: "p",
															content:
																"SyncSign is a smart office solution supplier that helps the organization transform the way it manages meeting rooms, desks, and workspaces. We bring plenty of customization possibilities with IoT technology to simplify facility management, empower employees and increase workplace productivity.",
														},
													],
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "grid grid-3",
											},
											children: [
												{
													tag: "div",
													attributes: {
														class: "foot-title",
													},
													children: [
														{
															tag: "h4",
															content: "SHOP",
														},
													],
												},
												{
													tag: "ul",
													children: [
														{
															tag: "li",
															content: "My Account",
														},
														{
															tag: "li",
															content: "My Orders",
														},
														{
															tag: "li",
															content: "Get Help",
														},
													],
												},
												{
													tag: "ul",
													children: [
														{
															tag: "li",
															content: "Web Portal",
														},
														{
															tag: "li",
															content: "Terms of Service | Privacy Policy",
														},
													],
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
		},
	],
};

let temp = TemplateEngine.populate(docPageTemplate, docpageData);
console.log(temp);

let html = JsonToHtml.convert(temp);
console.log(html);
document.getElementById("app").innerHTML = html;

////////////////////////////////////////////////////////////////////////

// const inputContainer = document.querySelector(
//   "#nav .nav-container .middle-nav .input-container"
// );
// const inputEl = document.querySelector(
//   "#nav .nav-container .middle-nav .input-container input"
// );
// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");

// inputContainer.addEventListener("click", () => {
//   modal.classList.add("active");
//   overlay.classList.add("active");
//   inputEl.blur();
// });

// document.addEventListener(
//   "click",
//   (e) => {
//     if (e.target.matches(".modal")) return;
//   },
//   { once: true }
// );

// overlay.addEventListener("click", (e) => {
//   modal.classList.remove("active");
//   overlay.classList.remove("active");
// });

// // Active toggle
// const firstToggleBtnEls = document.querySelectorAll(
//   ".toggle-btn-container .first-toggle .toggle-first"
// );
// const firstToggleContasiner = document.querySelector(
//   ".toggle-btn-container .first-toggle"
// );

// const secondToggleBtnEls = document.querySelectorAll(
//   ".toggle-btn-container .second-toggle .toggle-first"
// );
// const secondToggleContasiner = document.querySelector(
//   ".toggle-btn-container .second-toggle"
// );

// firstToggleBtnEls.forEach((firstToggleBtnEl) => {
//   firstToggleBtnEl.addEventListener("click", () => {
//     document
//       .querySelector(".toggle-btn-container .first-toggle .toggle-first.active")
//       ?.classList.remove("active");
//     firstToggleBtnEl.classList.add("active");
//   });
// });

// secondToggleBtnEls.forEach((secondToggleBtnEl) => {
//   secondToggleBtnEl.addEventListener("click", () => {
//     document
//       .querySelector(
//         ".toggle-btn-container .second-toggle .toggle-first.active"
//       )
//       ?.classList.remove("active");
//     secondToggleBtnEl.classList.add("active");
//   });
// });

// // Dropdown popup
// const dropdownBtn = document.querySelector(".dropdown-attribute");
// const dropdownContainer = document.querySelector(".toggle-dropdown-container");

// dropdownBtn.addEventListener("click", (e) => {
//   dropdownContainer.classList.toggle("active");
// });

// const dropDown1 = document.querySelector(".dropd-1");
// const dropDown2 = document.querySelector(".dropd-2");
// const darkModeDropDown = document.querySelector(".darkmode-droppdown-popup");
// const versionModeDropDown = document.querySelector(".version-droppdown-popup");

// dropDown1.addEventListener("click", () => {
//   versionModeDropDown.classList.toggle("active");
// });

// dropDown2.addEventListener("click", () => {
//   darkModeDropDown.classList.toggle("active");
// });
