import express from 'express'
import {submitNotice,fetchNotice}  from '../../controllers/notices/index.js'
import {isAuth } from '../../helpers/authorizers/index.js'
import authorizer from '../../helpers/authorizers/index.js'

const router  = express.Router()


router.get('/notice/fetch',fetchNotice)

router.post('/notice/submit',authorizer(),isAuth,submitNotice)


export default router