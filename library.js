
// Create a new class and assign to variable
var dateUtils = class DateUtils {
    constructor(){}
    getDateNow() {
        return new Date().toISOString().slice(0,19);
    }
    getCurrentDay() {
        return this.getDateNow().substr(0, this.getDateNow().length - 8) + '00:00:00';
    }
}
