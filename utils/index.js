import moment from "moment"

export default {
    iFequal(a, b, options) {
        if (a == b) {
            return options.fn(this)
        }
        return options.inverse(this)
    },
    getFullNameFirstCharacter(firsrName, lastName) {
        return firsrName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase()
    },
    formatDate(date) {
        return moment(date).format('DD MMMM YYYY')
    }
}