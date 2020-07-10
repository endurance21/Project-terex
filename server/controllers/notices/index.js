import Notice from '../../../database/models/notices/index.js'

export function submitNotice(req, res, next){
    console.log(req.body)
    let noticeBody = {
        title:req.body.title,
        content:req.body.content,
        date:req.body.date,
        user:req.user
    }

    let newNotice = new Notice(noticeBody)

    newNotice.save((err, notice)=>{
        if(err){
            let errorMessage = err
            console.log(errorMessage)
            return res.status(400).json({
                errorMessage : errorMessage
            })
        }

         res.json(notice)   
    })
}

export function fetchNotice(req,res, next){
    Notice.find((err,result)=>{
        if(err){
            let errorMessage = err
            console.log(errorMessage)
            return res.status(400).json({
                errorMessage : errorMessage
            })
        }

        res.json(result)
    })

}