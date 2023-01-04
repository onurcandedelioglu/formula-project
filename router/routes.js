const express = require('express');
const router = express.Router();
const appController = require('../controller/app-controller')


router.get('/home', appController.homePage);

router.get('/teams', appController.teams);

router.get('/pilot-detail', appController.pilotDetail);

router.get('/grandprix', appController.grandPrix);

router.get('/contact', appController.contact);

router.get('/send', appController.send);

router.get('/success', appController.success);

router.get('/error', appController.error);

router.get('/404', appController.pageNotFound);


module.exports = router;