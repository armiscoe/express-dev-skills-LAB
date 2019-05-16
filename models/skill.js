const skills = [
    {skill: 'cry', done: true},
    {skill: 'pout', done: true},
    {skill: 'yell', done: true},
    {skill: 'hack', done: false}
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function deleteOne(id) {
    skills.splice(id, 1);
}

function create(skill) {
    skills.push(skill);
}

function getAll() {
    return skills;
}

function getOne(id) {
    return skills[id];
}