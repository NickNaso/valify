const be = require('bejs');
const Model = require('..');

describe('validate', function () {

    before('reset locale', function () {
        Model.setLocale(require('../src/locale'));
    });

    it('should be return failed email', function (done) {

        const userModel = new Model({
            email: {
                type: 'string',
                validate: {
                    email: true
                }
            }
        });

        try {
            userModel({
                email: 'red0'
            })
        } catch (e) {
            console.log(e.message);
            if (e.message === 'email must be a valid email')
                done();
        }
    });

    it('should be return ok email', function (done) {

        const userModel = new Model({
            lastName: {
                type: 'string',
                validate: {
                    email: true
                }
            }
        });

        try {
            userModel({
                lastName: 'test@test.com'
            });
            done();
        } catch (e) {
            done(e.message);
        }
    });


});