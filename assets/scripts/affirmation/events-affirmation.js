'use strict'
// require
const api = require('./api-affirmation')
const ui = require('./ui-affirmation')
const getFormFields = require('./../../../lib/get-form-fields.js')

const onCreateAffirmation = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.createAffirmation(data)
    .then(ui.affirmationSuccess)
    .catch(ui.createFailure)
}
const onShowAllAffirmation = function (event) {
  event.preventDefault()
  console.log('onShowAllRecipes')
  api.fullArrayOfAffirmations()
    .then(ui.showAllAffirmationSuccess)
    .catch(ui.showAllAffirmationFailure)
}
const onUpdateAffirmation = function (event) {
  event.preventDefault()
  console.log('passed upgraded affirmation')
  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  // const travelId = $(event.target).data('id')
  api.improveAffirmation(data)
    .then(ui.updateAffirmationSuccess)
    .catch(ui.updateAffirmationFailure)
}
const onFoldingList = () => {
  $('.content').empty()
}

const onLettingGo = function (event) {
  event.preventDefault()
  const affirmationId = $(event.target).data('id')
  console.log(event)
  api.deleteAffirmation(affirmationId)
    .then(() => ui.releaseSuccess(affirmationId))
    .catch(ui.releasefailure)
}
module.exports = {
  onCreateAffirmation,
  onShowAllAffirmation,
  onUpdateAffirmation,
  onLettingGo,
  onFoldingList
}
