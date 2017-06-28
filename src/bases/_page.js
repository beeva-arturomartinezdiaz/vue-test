module.exports = page =>
{
    return {
        components  : {AppMenu},
        name        : 'about',
        data ()
        {
            return {
                message : 'About'
            };
        }
    };
};
