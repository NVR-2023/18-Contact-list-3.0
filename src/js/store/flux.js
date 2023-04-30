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
					const response = await fetch("https://assets.breatheco.de/apis/fake/contact/agenda/" + getStore().agendaSlug);
					const data = await response.json();
					setStore({ contactList: data });
					return null;
				} catch (error) {
					return error;
				}
			},

			initializeAgenda: async () => {
				try {
					await getActions().fetchAgenda();
					getActions().alertUser("agenda fetched", "green");
				} catch (error) {
					const createAgendaResponse = await getActions().createAgenda();
					if (createAgendaResponse) {
						await getActions().fetchAgenda();
						getActions().alertUser("agenda created and fetched", "green");
					} else {
						getActions().alertUser("failed to initialize agenda", "red");
					}
				}
			},





		},
	};
};

export default getState;
