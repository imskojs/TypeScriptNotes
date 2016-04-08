"use strict";
// CONTACT_DATA is declared in typings/custom/global.d.ts
//it is referenced from this global.d.ts however global.d.ts does
//not know or enforce anything about actual CONTACT_DATA array
//javascript snippet embedded in index.html. This means if the
//global.d.ts is wrongly specified about the format for this
//CONTACT_DATA it will still be parsed as though it is correct
// This is the limitation of defining types for already existing
//non-typescript libraries.
var ContactLogger = (function () {
    function ContactLogger() {
    }
    ContactLogger.logContactData = function () {
        for (var i = 0; i < CONTACT_DATA.length; ++i) {
            var contactDataItem = CONTACT_DATA[i];
            console.log("contactDataItem :::\n", contactDataItem);
        }
    };
    return ContactLogger;
}());
window.onload = function () {
    ContactLogger.logContactData();
};
