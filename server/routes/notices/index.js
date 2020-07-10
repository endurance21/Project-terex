import express from 'express'
import {submitNotice,fetchNotice}  from '../../controllers/notices/index.js'
const router  = express.Router()


router.get('/notice/fetch',fetchNotice)

router.post('/notice/submit',submitNotice)


export default router