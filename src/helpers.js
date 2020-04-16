export const reviewBudget = (budget, restBudget) => {

    let clase;

    if ((budget / 4) > restBudget) {
        clase = 'alert alert-danger';
    } else if ((budget / 2) > restBudget) {
        clase = 'alert alert-warning'
    } else {
        clase = 'alert alert-success'
    }

    return clase;
}