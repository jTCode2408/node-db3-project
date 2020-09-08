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
function findSteps(schemeId) {
    return db('schemes')
        .join('steps', 'schemes.id', 'steps.scheme_id')
        .select([{ Id:'schemes.Id',schemeName:'schemes.scheme_name', stepNumber:'steps.step_number', stepInstructions:'steps.instructions'}] )
    .where('scheme_id', schemeId)
}
//ADD
function add(scheme) {
    return db('schemes').insert(scheme)
        .then(id => {
            return findById(id[0]);
        })
}
//UPDATE
function update(changes, id) {
    return db('schemes')
        .update(changes)
        .where({ id })
    
}
//REMOVE
function remove(id) {
    return db('schemes')
        .where({ id })
        .del();
}