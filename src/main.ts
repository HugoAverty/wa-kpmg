/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

// The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    let helloWorldPopup;
// Open the popup when we enter a given zone
WA.room.onEnterLayer("myZone").subscribe(() => {
    helloWorldPopup = WA.ui.openPopup("popupRectangle", "Bienvenue sur les bureaux virtuels de Digital Audit Leaders, vous pouvez les utiliser durant toute la durée du programme pour vous retrouver en équipes, partager des moments conviviaux ou encore avancer sur vos projets en mode collaboratifs ! N'hésitez pas à explorer l'espace", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

// Close the popup when we leave the zone.
WA.room.onLeaveLayer("myZone").subscribe(() => {
    helloWorldPopup.close();
})

// Waiting for the API to be ready
WA.onInit().then(() => {
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));
}).catch(e => console.error(e));

export {};