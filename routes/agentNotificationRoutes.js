const express = require('express');
const router = express.Router();
const {
  getNotifications,
  addNotification,
  updateNotification,
  deleteNotification,
  changeStatus
} = require('../controllers/agentNotificationController');

router.get('/', getNotifications);
router.post('/', addNotification);
router.put('/:id', updateNotification);
router.delete('/:id', deleteNotification);
router.put('/status', changeStatus);

module.exports = router;
