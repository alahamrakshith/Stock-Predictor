module.exports = {
    index: (req, res) => {
        res.render('dashboard/index', {layout: 'layout/dashboard', username:"Random"})
    }
}