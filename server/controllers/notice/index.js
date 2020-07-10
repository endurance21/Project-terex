import Notice from '../../../database/models/notices/index.js'

export function submitNotice(req, res, next){

    let noticeBody = {
        title:req.title,
        content:req.content,
        date:date.now(),
        user:req.user
    }

    let newNotice = new Notice(noticeBody)

    newNotice.save((err, notice)=>{
        if(err){
            let errorMessage = noticeErrorHandler(err)
            console.log(errorMessage)
            return res.status(400).json({
                errorMessage : errorMessage
            })

         res.json(notice)   
        }
    })
}

export function fetchNotice(req,res, next){
    let notices = [] 
    Notice.find((err,result)=>{
        if(err){

        }

        console.log(result)
    })

}