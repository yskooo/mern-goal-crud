// @desc Get goals
// @route GET api/goals
// @access Private
const getGoals = (req, res) => {
    res.status(200).json({ message: 'Get goals' })
}

// @desc Set goal
// @route POST api/goal
// @access Private
const setGoal = (req, res) => {
    res.status(200).json({ message: 'Set goal' })
}

// @desc Update goals
// @route PUT api/goals/:id
// @access Private
const updateGoal = (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` })
}

// @desc Delete goals
// @route DELETE api/goal/:id
// @access Private
const deleteGoal = (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` })
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}