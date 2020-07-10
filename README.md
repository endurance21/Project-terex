# project-terex

Backend powering STC@IITR main website ! 

* PUBLIC-IP 162.243.168.224
* PORT 3000


## PUBLIC - APIS

* ## Auth

  * /signIn  eg - >  http://162.243.168.224:30000/signIn  {POST}
    * email
    * password
  
  * /signOut    eg - >  http://162.243.168.224:30000/signOut {GET}

* ## Notices

  * /notice/submit  eg - >  http://162.243.168.224:30000/notice/submit {POST} { auth required} 
    * title
    * content 
    * date 
    * user 

  * /notice/fetch eg ->    http://162.243.168.224:30000/notice/fetch { GET }

    @returns array of all current notices in db 