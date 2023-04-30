const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			agendaSlug: "Agenda2023Q2",
			contactList: [],
		},
		actions: {

			// Displays Alerts, available to every other method 
			alertUser: (message, color) => {
				const alertElement = document.createElement("div");
				alertElement.classList.add("alertToUser");
				alertElement.textContent = message;
				alertElement.style.backgroundColor = color;
				document.body.appendChild(alertElement);
				setTimeout(() => {
					alertElement.remove();
				}, 2100);
			},

			// Data management functions
			createAgenda: async () => {
				const initializationObject = {
					"full_name": "Initialization",
					"email": "none@none.com",
					"agenda_slug": getStore().agendaSlug,
					"address": "none",
					"phone": "999999999"
				}

				try {
					const response = await fetch("https://assets.breatheco.de/apis/fake/contact/", {
						method: "POST",
						headers: { "Content-type": "application/json" },
						body: JSON.stringify(initializationObject)
					});
					if (response.ok) {
						getActions().alertUser("agenda created", "green");
						return null;
					} else {
						throw new Error("Failed to create agenda");
					}
				} catch (error) {
					return error;
				}
			},

			fetchAgenda: async () => {
				try {
					const response = await fetch("https://assets.breatheco.de/apis/fake/contact/" + getStore().agendaSlug);
					const data = await response.json();
					setStore({ contactList: data });
					return null;
				} catch (error) {
					return error;
				}
			},

			initializeAgenda: async () => {
				try {
					let response = await getActions().fetchAgenda();

					if (response && response.length > 0) {
						getActions().alertUser("agenda initialized", "green");
						return null;
					}

					response = await getActions().createAgenda();
					if (response) {
						getActions().alertUser("agenda initialized", "green");
						return null;
					}

					throw new Error("Failed to initialize agenda");
				} catch (error) {
					getActions().alertUser("failed to initialize agenda", "red");
					return error;
				}
			}




		},
	};
};

export default getState;
