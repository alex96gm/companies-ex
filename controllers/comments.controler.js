const mongoose = require('mongoose');
const createError = require('http-errors');

const Company = require('../models/company.model');
const Comment = require('../models/coments.model');

module.exports.doCreate = (req, res, next) => {x
    const id = req.body.company;

    Company.find(id)
        .then(company => {
            if (company) {
                let comment = new Comment({
                    title: req.body.title,
                    text: req.body.text,
                    company: company._id
                })

                comment.save()
                    .then(() => {
                        company.comments.push(comment);
                        return company.save();
                    })
                    .then(() => {
                        res.redirect(`/companies/${id}`)
                    })
                    .catch((err) => {
                        if (err instanceof mongoose.Error.ValidationError) {
                            res.render('companies/detail', {
                                company: celebrity,
                                errors: err.errors
                            });
                        } else {
                            next(err);
                        }
                    })
            } else {
                next(createError(404, `Company with id ${id} not found`));
            }
        })
        .catch(err => {
            if (err instanceof mongoose.Error.CastError) {
                next(createError(404, `Company with id ${id} not found`));
            } else {
                next(err);
            }
        }
        )
}