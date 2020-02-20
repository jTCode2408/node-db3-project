//helpers for db
const db = require('../data/seeds/db-config');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
};

//find ALL
function find() {
    return db('schemes');
}
//find BYID
function findById(id) {
    return db('schemes')
        .where({ id })
        .first();
}
//FINDSTEPS(find steps for specific scheme)
function findSteps(id) {
    return db('steps')
        .join('steps', 'steps.id', 'scheme.scheme_name', 'steps.scheme_id')
        .select('steps.step_number', 'steps.instructions', 'scheme.id', 'scheme.scheme_name' )
    .where('steps.scheme_id', id)
}
//ADD
function add(scheme) {
    return db('schemes').insert(scheme)
        .then(id => {
            return findById(id[0]);
        })
}
//UPDATE
function update(id, changes) {
    return db('schemes')
        .where({ id })
        .update({ changes })
}
//REMOVE
function remove(id) {
    return db('schemes')
        .where({ id })
        .del();
}