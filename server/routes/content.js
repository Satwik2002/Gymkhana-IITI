const express = require('express')
const router = express.Router()

const {addSection, updateSection, getAllSections, getSectionChild,
    addSectionChild, getSection,updateSectionChild , deleteSectionChild , deleteSection} = require('../controllers/content')

router.route('/sections/:userName').get(getAllSections).post(addSection);
router.route('/sections/:userName/:sectionID').get(getSection).patch(updateSection).post(addSectionChild).delete(deleteSection);
router.route('/sections/:userName/:sectionID/:sectionChildID').get(getSectionChild).patch(updateSectionChild).delete(deleteSectionChild);

module.exports = router

